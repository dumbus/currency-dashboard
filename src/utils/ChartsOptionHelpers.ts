import { ChartType, ITransformedData } from '../types/types';

export function generateChartOption(
  currencyType: ChartType,
  data: ITransformedData
) {
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
    color: ['#ff8c00'],
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
    tooltip: {
      trigger: 'axis',
      valueFormatter: (value: number) => value + ' ₽',
    },
    series: [
      {
        name: seriesName,
        data: seriesData,
        type: 'line',
        symbol: 'none',
        animationDuration: 500,
        animationEasing: 'cubicOut',
      },
    ],
  };
}
