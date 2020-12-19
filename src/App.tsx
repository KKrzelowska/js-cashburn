import React from "react";
import Chart from "./components/Chart";
import StatedBalanceForm from "./components/StatedBalanceForm";
import BalanceService from "./components/BalanceService";

import { observer } from "mobx-react-lite"
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/pages/Navigation";
import NameForm from "./components/pages/StatedNameForm";
import GraphForm from "./components/pages/StatedGraphForm";
import ChartFunction from "./components/ChartFunctional";



const App = observer(({ balanceService }: {balanceService: BalanceService}) => {

  return (
    <div className="App">
          <StatedBalanceForm balanceService={BalanceService.instance}/>
          <ChartFunction values={balanceService.getBalances()} />
        <BrowserRouter>
          <div>
          <Navigation />
            <Switch>
              <Route path="/" component={NameForm} exact/>
              <Route path="/graph" component={GraphForm}/>
            </Switch>
          </div>
        </BrowserRouter>

      </div>
)})

export default App;
