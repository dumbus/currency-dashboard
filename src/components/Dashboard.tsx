import React, { useEffect, useState } from 'react';

import { Card } from '@consta/uikit/Card';

import { ITransformedData, ChartType } from '../types/types';

import ReactECharts from './ReactECharts';
import CurrencyChooser from './CurrencyChooser';
import DashboardService from '../services/DashboardService';

import { generateChartOption } from '../utils/ChartsOptionHelpers';

function Dashboard() {
  const [chartData, setChartData] = useState<ITransformedData>({
    usd: [],
    eur: [],
    cny: [],
  });
  const [currentChartType, setCurrentChartType] = useState<ChartType>(
    ChartType.CNY
  );
  // TODO: remove <any> type
  const [currentOption, setCurrentOption] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const dashboardService = new DashboardService();

  useEffect(() => {
    onRequest();
  }, []);

  useEffect(() => {
    if (chartData) {
      setCurrentOption(generateChartOption(currentChartType, chartData));
    }
  }, [currentChartType, chartData]);

  const onRequest = () => {
    dashboardService.getChartData().then(onChartDataLoaded).catch(onError);
  };

  const onChartDataLoaded = (loadedData: ITransformedData) => {
    setChartData(loadedData);
    setIsLoading(false);
  };

  const onError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div className="container">
      <Card
        className="dashboard"
        verticalSpace="xs"
        horizontalSpace="xs"
        shadow={true}
      >
        <ReactECharts
          option={currentOption}
          style={{ width: '985px', height: '330px' }}
        />
        <div className="aside">
          <CurrencyChooser setCurrentChartType={setCurrentChartType} />
        </div>
      </Card>
    </div>
  );
}

export default Dashboard;
