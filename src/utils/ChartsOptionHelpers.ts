import { ChartType, CurrencySymbol, ITransformedData } from '../types/types';

import { fontFamily, colors } from './echartsVariables';

// Function to create options for EChart render
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
      text: generateChartTitle(currencyType),
      textStyle: {
        fontSize: 20,
        fontFamily: fontFamily,
        fontWeight: 'bold',
        color: colors.darkColor,
      },
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
      axisLabel: {
        fontSize: 10,
        fontFamily: fontFamily,
        color: colors.lightColor,
      },
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
          color: 'rgba(0, 65, 102, 0.2)',
        },
      },
      axisLabel: {
        showMinLabel: false,
        margin: 20,
        fontSize: 10,
        fontFamily: fontFamily,
        color: colors.lightColor,
      },
    },
    tooltip: {
      trigger: 'axis',
      formatter: tooltipFormatter,
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

function generateChartTitle(currencyType: ChartType) {
  switch (currencyType) {
    case ChartType.USD:
      return `КУРС ДОЛЛАРА, ${CurrencySymbol.USD}/₽`;
    case ChartType.EUR:
      return `КУРС ЕВРО, ${CurrencySymbol.EUR}/₽`;
    case ChartType.CNY:
      return `КУРС ЮАНЯ, ${CurrencySymbol.CNY}/₽`;
  }
}

// Function to render custom Tooltip to match Figma layout
// Decided to leave any type because it comes from third party library
function tooltipFormatter(params: any) {
  const axisValue = params[0].axisValue;
  const seriesName = params[0].seriesName;
  const dataValue = params[0].data;

  // If we compare Figma layout and video with showcase, we will see difference in Tooltip part that corresponds to axisValue
  // In showcase it also contains word "год" after axisValue
  // I've decided to use Figma layout version (without "год" word)
  return `
    <div style="text-align: left;">
      <div style="font-size: 12px; font-weight: bold; font-family: ${fontFamily}; color: ${colors.darkColor};">
        ${axisValue}
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; gap:10px">
        <div style="display: flex; align-items: center;">
          <span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${colors.mainColor};"></span>
          <span style="font-size: 12px; font-family: ${fontFamily}; color: ${colors.lightColor};">
            ${seriesName}
          </span>
        </div>
        <span style="font-size: 12px; font-weight: bold; font-family: ${fontFamily}; color: ${colors.darkColor};">
          ${dataValue} ₽
        </span>
      </div>
    </div>
  `;
}
