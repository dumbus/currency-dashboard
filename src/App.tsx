import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

import Chart from './Chart/Chart';

function App() {
  return (
    <Theme preset={presetGpnDefault}>
      <Chart />
    </Theme>
  );
}

export default App;
