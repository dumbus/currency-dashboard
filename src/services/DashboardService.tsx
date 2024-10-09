import { IDataItem, ITransformedData } from '../types/types';

// Service to fetch data from API
class DashboardService {
  // Hide Project secret from code
  _apiSecret = process.env.REACT_APP_API_SECRET;
  _apiBaseUrl = `https://${this._apiSecret}.mockapi.io/`;

  _fetchOptions = {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  };

  // Method to get raw data from API
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

  // Function-helper to transform raw API data to more convenient from
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

export default DashboardService;
