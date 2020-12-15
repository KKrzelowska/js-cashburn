import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import { myBalance } from './components/BalanceService';

ReactDOM.render(<App balances={myBalance}/>, document.getElementById("app"));
