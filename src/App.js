import React from "react";
import Chart from "./components/Chart";
import StatedBalanceForm from "./components/StatedBalanceForm";
import {getValues, saveValues} from "./core/Memory";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import GraphPage from "./Pages/GraphPage";
import Navigation from "./Pages/Navigation";
import mainpage from "./Pages/MainPage";
import graph from "./Pages/GraphPage";

const App = () => (
    <div className="App">
        
      <BrowserRouter>
        <div>
        <Navigation />
          <Switch>
            <Route path="/" component={mainpage} exact/>
            <Route path="/graph" component={graph}/>
          </Switch>
        </div>
      </BrowserRouter>

      

    </div>
);

export default App;