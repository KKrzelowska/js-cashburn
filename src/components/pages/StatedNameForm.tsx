import React, { ReactElement } from 'react';
import StatedBalanceForm from '../StatedBalanceForm';
import BalanceService from '../BalanceService';

const NameForm = (): ReactElement => {
  return (
    <div>
      <StatedBalanceForm balanceService={BalanceService.instance} />
    </div>
  );
};

export default NameForm;
