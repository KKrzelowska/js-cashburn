import React from 'react';
import { observer } from 'mobx-react-lite';
import ComplexGraph from '../components/ComplexGraph';

const StatedGraph = observer(({ balanceService }) => {
  return (
    <>
      <ComplexGraph balances={balanceService.getBalances()} />
    </>
  );
});

export default StatedGraph;
