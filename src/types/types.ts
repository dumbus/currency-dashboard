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

export type ChartType = 'usd' | 'eur' | 'cny';
