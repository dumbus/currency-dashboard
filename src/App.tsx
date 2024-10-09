import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

import Dashboard from './components/Dashboard';

import './index.css';

function App() {
  return (
    <Theme preset={presetGpnDefault}>
      <Dashboard />
    </Theme>
  );
}

export default App;
