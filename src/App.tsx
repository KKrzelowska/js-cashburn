import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/pages/Navigation';
import NameForm from './components/pages/StatedNameForm';
import DashboardPage from './components/pages/StatedGraphForm';
import './styled/index.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <NameForm />
            </Route>
            <Route path="/graph">
              <DashboardPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
