import React from 'react';
import StatedBalanceForm from '../StatedBalanceForm';
import BalanceService from '../BalanceService';

let NameForm = () => {
  return (
    <div>
      <StatedBalanceForm balanceService={BalanceService.instance} />
    </div>
  );
};

export default NameForm;
