// TODO: Move types/interfaces to special file

export interface IDataItem {
  date: string;
  month: string;
  indicator: string;
  value: number;
}

export interface ITransformedData {
  usd: IDataItem[];
  eur: IDataItem[];
  cny: IDataItem[];
}

export type ChartType = 'usd' | 'eur' | 'cny';

class ChartService {
  _apiBaseUrl = 'https://670449afab8a8f8927338157.mockapi.io/';

  _fetchOptions = {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  };

  getResource = async (url: string) => {
    const response = await fetch(url, this._fetchOptions);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    return await response.json();
  };

  getChartData = async () => {
    const raw = await this.getResource(`${this._apiBaseUrl}/data`);

    return this._transformChartData(raw);
  };

  _transformChartData = (data: IDataItem[]) => {
    const transformedData: ITransformedData = {
      usd: [],
      eur: [],
      cny: [],
    };

    data.forEach((dataItem) => {
      switch (dataItem.indicator) {
        case 'Курс доллара':
          transformedData.usd.push(dataItem);
          break;

        case 'Курс евро':
          transformedData.eur.push(dataItem);
          break;

        case 'Курс юаня':
          transformedData.cny.push(dataItem);
          break;
      }
    });

    return transformedData;
  };
}

export default ChartService;
