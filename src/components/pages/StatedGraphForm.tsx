import React from 'react';
import StatedGraph from '../StatedGraph';
import BalanceService from '../BalanceService';

const GraphForm = () => {
  return (
    <>
      <h1>GraphPage</h1>
      <StatedGraph balanceService={BalanceService.instance} />
    </>
  );
};

export default GraphForm;
