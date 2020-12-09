import React from "react";
import {getValues, saveValues} from "../../core/Memory";

import StatedBalanceForm from "../StatedBalanceForm";
import BalanceService from "../BalanceService";

let NameForm = () => {
  return (
    <>
      <h1>MainPage</h1>
      <StatedBalanceForm balanceService={BalanceService.instance}/>
    </>
  );
}

export default NameForm;