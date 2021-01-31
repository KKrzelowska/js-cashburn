import React from 'react';
import StatedBalanceForm from '../StatedBalanceForm';
import BalanceService from '../BalanceService';

const NameForm = () => {
  return (
    <div>
      <h1>MainPage</h1>
      <StatedBalanceForm balanceService={BalanceService.instance} />
    </div>
  );
};

export default NameForm;
