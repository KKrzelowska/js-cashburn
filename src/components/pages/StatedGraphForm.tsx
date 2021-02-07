import React from 'react';
import Chart from '../Chart';
import { observer } from 'mobx-react-lite';
import BalanceService from '../BalanceService';

const GraphForm = (balance) => {
  return (
    <div>
      <h1>GraphPage</h1>
      <Chart
        values={
          balance.balance
        }
      />
    </div>
  );
};

export default GraphForm;
