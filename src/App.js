import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/pages/Navigation';
import NameForm from './components/pages/StatedNameForm';
import GraphForm from './components/pages/StatedGraphForm';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={NameForm} exact />
          <Route path="/graph" component={GraphForm} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
