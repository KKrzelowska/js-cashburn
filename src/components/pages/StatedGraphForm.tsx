import React from 'react';
import StatedGraph from '../StatedGraph';
import BalanceService from '../BalanceService';

import ChartFunctional from '../ChartFunctional';
const GraphForm = () => {
  return (
    <>
      <h1>GraphPage</h1>
      <StatedGraph balanceService={BalanceService.instance} />
    </>
  );
}

export default DashboardPage;
