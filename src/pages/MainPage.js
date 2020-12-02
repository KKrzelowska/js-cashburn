import React from "react";
import StatedBalanceForm from "./../components/StatedBalanceForm";
import {getValues, saveValues} from "./../core/Memory";

let mainpage = () => {
  return (
    <div>
      
      <h1>MainPage</h1>
      <StatedBalanceForm getValues={getValues} saveValues={saveValues}/>
    </div>
  );
}

export default mainpage;