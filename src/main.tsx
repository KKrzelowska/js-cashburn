import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import BalanceService from './components/BalanceService';

ReactDOM.render(<App balanceService={BalanceService.instance}/>, document.getElementById("app"));
