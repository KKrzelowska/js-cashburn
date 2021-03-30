import React from 'react';
import { observer } from 'mobx-react-lite';
import ComplexGraph from '../components/ComplexGraph';
import BalanceService from './BalanceService';

const StatedGraph = observer(
  ({ balanceService }: { balanceService: BalanceService }) => {
    return (
      <>
        <ComplexGraph balances={balanceService.getBalances()} />
      </>
    );
  }
);

export default StatedGraph;
