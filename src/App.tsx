import React, { Component } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import './styled/index.css';
import NameForm from './components/pages/StatedNameForm';
import GraphForm from './components/pages/StatedGraphForm';
import RoutingService from './components/pages/Routing';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={RoutingService.instance.getHistory()}>
          <div>
            <Switch>
              <Route path="/" exact>
                <Redirect to={'/home'} />
              </Route>
              <Route path="/home" exact>
                <NameForm />
              </Route>
              <Route path="/graph">
                <GraphForm />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
