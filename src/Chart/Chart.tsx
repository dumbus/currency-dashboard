import React, { useEffect, useState } from 'react';

import { Card } from '@consta/uikit/Card';

import { ITransformedData, ChartType } from '../services/ChartService';
import { ReactECharts } from '../Echarts/ReactECharts';

import ChartService from '../services/ChartService';

// TODO: move generateOption function to utils
function generateOption(currencyType: ChartType, data: ITransformedData) {
  const xAxisData: string[] = [];
  const seriesData: number[] = [];

  data[currencyType].forEach((dataItem) => {
    const { month, value } = dataItem;

    xAxisData.push(month);
    seriesData.push(value);
  });

  return {
    xAxis: {
      type: 'category',
      data: xAxisData,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: seriesData,
        type: 'line',
      },
    ],
  };
}

function Chart() {
  const [chartData, setChartData] = useState<ITransformedData | []>([]);
  const [currentChartType, setCurrentChartType] = useState<ChartType>('usd');
  // TODO: remove <any> type
  const [currentOption, setCurrentOption] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const chartService = new ChartService();

  useEffect(() => {
    onRequest();
  });

  const onRequest = () => {
    chartService.getChartData().then(onChartDataLoaded).catch(onError);
  };

  const onChartDataLoaded = (loadedData: ITransformedData) => {
    setChartData(loadedData);
    setIsLoading(false);
    setCurrentOption(generateOption(currentChartType, loadedData));
  };

  const onError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <>
      <Card verticalSpace="xs" horizontalSpace="xs" shadow={false}>
        <ReactECharts option={currentOption} />
      </Card>
    </>
  );
}

export default Chart;
