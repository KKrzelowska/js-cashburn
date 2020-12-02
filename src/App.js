import React from "react";
import Chart from "./components/Chart";
import StatedBalanceForm from "./components/StatedBalanceForm";
import {getValues, saveValues} from "./core/Memory";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Pages/Navigation";
import NameForm from "./Pages/StatedNameForm";
import GraphForm from "./Pages/StatedGraphForm";

const App = () => (
    <div className="App">
        
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
);

export default App;