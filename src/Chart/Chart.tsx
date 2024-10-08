import React, { useEffect, useState } from 'react';

import { Card } from '@consta/uikit/Card';

import { ITransformedData, ChartType } from '../services/ChartService';
import { ReactECharts } from '../Echarts/ReactECharts';

import ChartService from '../services/ChartService';

import './Chart.css';

// TODO: move generateOption function to utils
function generateOption(currencyType: ChartType, data: ITransformedData) {
  let seriesName = '';
  const xAxisData: string[] = [];
  const seriesData: number[] = [];

  data[currencyType].forEach((dataItem) => {
    const { month, value, indicator } = dataItem;

    xAxisData.push(month);
    seriesData.push(value);
    seriesName = indicator;
  });

  return {
    title: {
      text: 'Заголовок',
    },
    grid: {
      left: '30px',
      // top: '20px',
      right: '30px',
      bottom: '20px',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      boundaryGap: false,
    },
    yAxis: {
      type: 'value',
      scale: true,
      splitNumber: 3,
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
      axisLabel: {
        showMinLabel: false,
        margin: 20,
      },
    },
    // TODO: change tooltip circle color
    tooltip: {
      trigger: 'axis',
      valueFormatter: (value: number) => value + ' ₽',
    },
    animation: false,
    series: [
      {
        name: seriesName,
        data: seriesData,
        type: 'line',
        symbol: 'none',
        lineStyle: {
          color: '#ff8c00',
        },
      },
    ],
  };
}

function Chart() {
  const [chartData, setChartData] = useState<ITransformedData | []>([]);
  const [currentChartType, setCurrentChartType] = useState<ChartType>('cny');
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
      <Card
        className="card"
        verticalSpace="xs"
        horizontalSpace="xs"
        shadow={true}
      >
        <ReactECharts
          option={currentOption}
          style={{ width: '985px', height: '330px' }}
        />
      </Card>
    </>
  );
}

export default Chart;
