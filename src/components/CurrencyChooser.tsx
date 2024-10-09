import React, { useState } from 'react';

import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';

import { ChartType, CurrencySymbol } from '../types/types';

const choiceLabels = [
  CurrencySymbol.USD,
  CurrencySymbol.EUR,
  CurrencySymbol.CNY,
];
const choiceValues = [ChartType.USD, ChartType.EUR, ChartType.CNY];

interface CurrencyChooserProps {
  setCurrentChartType: React.Dispatch<React.SetStateAction<ChartType>>;
}

function CurrencyChooser({ setCurrentChartType }: CurrencyChooserProps) {
  const [label, setLabel] = useState<CurrencySymbol | null>(CurrencySymbol.USD);

  return (
    <ChoiceGroup
      value={label}
      onChange={(event) => {
        const newCurrencyIdx = choiceLabels.indexOf(event.value);

        setLabel(event.value);
        setCurrentChartType(choiceValues[newCurrencyIdx]);
      }}
      items={choiceLabels}
      getItemLabel={(item: CurrencySymbol) => item}
      multiple={false}
      size="xs"
      name="CurrencyChooser"
      className="currency"
    />
  );
}

export default CurrencyChooser;
