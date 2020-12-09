import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import StoreProvider from './storeContext';
import Navigation from "./components/pages/Navigation";
import NameForm from "./components/pages/StatedNameForm";
import GraphForm from "./components/pages/StatedGraphForm";

const App = () => (
    <StoreProvider>
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
    </StoreProvider>
);

export default App;