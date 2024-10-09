import React, { useEffect, useState } from 'react';

import { Card } from '@consta/uikit/Card';
import { Loader } from '@consta/uikit/Loader';

import { ITransformedData, ChartType } from '../types/types';

import ReactECharts from './ReactECharts';
import CurrencyChooser from './CurrencyChooser';
import Average from './Average';
import Error from './Error';
import DashboardService from '../services/DashboardService';

import { generateChartOption } from '../utils/chartsOptionHelpers';
import { countAverageValue } from '../utils/averageHelpers';

function Dashboard() {
  const [chartData, setChartData] = useState<ITransformedData>({
    usd: [],
    eur: [],
    cny: [],
  });
  const [currentChartType, setCurrentChartType] = useState<ChartType>(
    ChartType.USD
  );
  const [currentOption, setCurrentOption] = useState<any>({}); // Any type because not all typed echarts options are needed to work
  const [averageValue, setAverageValue] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const dashboardService = new DashboardService();

  // Fetch data from API on first render of Component
  useEffect(() => {
    onRequest();
  }, []);

  // Update Chart if currency type was changed
  useEffect(() => {
    // Check if chartData for current currency contains data
    if (chartData[currentChartType].length) {
      const currentOption = generateChartOption(currentChartType, chartData);
      const currentAverageValue = countAverageValue(
        currentChartType,
        chartData
      );

      setCurrentOption(currentOption);
      setAverageValue(currentAverageValue);
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

  // Use conditional rendering to show current state of application
  const loader = isLoading ? <Loader size="m" /> : null;
  const error = hasError ? <Error /> : null;
  const content = !(isLoading || hasError) ? (
    <>
      <ReactECharts
        option={currentOption}
        style={{ width: '985px', height: '330px' }}
      />
      <div className="aside">
        <CurrencyChooser setCurrentChartType={setCurrentChartType} />
        {averageValue && <Average averageValue={averageValue} />}
      </div>
    </>
  ) : null;

  return (
    <div className="container">
      <Card
        className="dashboard"
        verticalSpace="xs"
        horizontalSpace="xs"
        shadow={true}
      >
        {loader}
        {error}
        {content}
      </Card>
    </div>
  );
}

export default Dashboard;
