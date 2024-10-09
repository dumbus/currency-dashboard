import React, { useState } from 'react';

import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';

import { ChartType } from '../types/types';

const choiceLabels = ['$', '€', '¥'];
const choiceValues = [ChartType.USD, ChartType.EUR, ChartType.CNY];

interface CurrencyChooserProps {
  setCurrentChartType: React.Dispatch<React.SetStateAction<ChartType>>;
}

function CurrencyChooser({ setCurrentChartType }: CurrencyChooserProps) {
  const [label, setLabel] = useState<string | null>(choiceLabels[0]);

  return (
    <ChoiceGroup
      value={label}
      onChange={(event) => {
        const newCurrencyIdx = choiceLabels.indexOf(event.value);

        setLabel(event.value);
        setCurrentChartType(choiceValues[newCurrencyIdx]);
      }}
      items={choiceLabels}
      getItemLabel={(item) => item}
      multiple={false}
      size="xs"
      name="CurrencyChooser"
      className="currency"
    />
  );
}

export default CurrencyChooser;
