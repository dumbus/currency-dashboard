import React from 'react';

import ChartService from './services/ChartService';

const chartService = new ChartService();

chartService.getChartData().then((result) => console.log(result));

function App() {
  return <div>Тут будет приложение.</div>;
}

export default App;
