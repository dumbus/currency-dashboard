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
    return this.getResource(`${this._apiBaseUrl}/data`);
  };
}

export default ChartService;
