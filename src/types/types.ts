export interface IDataItem {
  date: string;
  month: string;
  indicator: string;
  value: number;
}

export interface ITransformedData {
  usd: IDataItem[];
  eur: IDataItem[];
  cny: IDataItem[];
}

export enum ChartType {
  USD = 'usd',
  EUR = 'eur',
  CNY = 'cny',
}

export enum CurrencySymbol {
  USD = '$',
  EUR = '€',
  CNY = '¥',
}
