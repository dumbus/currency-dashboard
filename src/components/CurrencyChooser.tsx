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

// Use Consta UI Kit ChoiceGroup component to render buttons for currency change functional
function CurrencyChooser({ setCurrentChartType }: CurrencyChooserProps) {
  const [label, setLabel] = useState<CurrencySymbol | null>(CurrencySymbol.USD);

  return (
    <ChoiceGroup
      value={label}
      onChange={(event) => {
        const newCurrencyIdx = choiceLabels.indexOf(event.value);

        setLabel(event.value);
        setCurrentChartType(choiceValues[newCurrencyIdx]); // change of chart type will force chart component to re-render with new data
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
