interface IData {
  id: string;
  isWarning: boolean;
  warning_2020?: string;
  warning: string;
  isTableNew: boolean;
  data: string;
}

interface IWinnerTable {
  type: string;
  first: string[];
  second: string[];
  third: string[];
}

export { IData, IWinnerTable };
