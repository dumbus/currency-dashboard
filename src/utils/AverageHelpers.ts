import { ChartType, ITransformedData } from '../types/types';

// Function to count average value to pass it to Average component
export function countAverageValue(
  currencyType: ChartType,
  data: ITransformedData
) {
  const currentValues: number[] = [];

  data[currencyType].forEach((dataItem) => {
    const { value } = dataItem;

    currentValues.push(value);
  });

  const averageValue = (
    currentValues.reduce((acc, val) => (acc += val), 0) / currentValues.length
  ).toFixed(1);

  return averageValue;
}
