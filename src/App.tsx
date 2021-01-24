import React from 'react';
import { observer } from 'mobx-react-lite';

import BalanceService from './components/BalanceService';
import Navigation from './components/pages/Navigation';
import './styled/index.css';

const App = observer(
  ({ balanceService }: { balanceService: BalanceService }) => {
    return (
      <div className="App">
        <Navigation></Navigation>
      </div>
    );
  }
);

export default App;
