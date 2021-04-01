import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import NameForm from './components/pages/StatedNameForm';
import DashboardPage from './components/pages/StatedGraphForm';
import './styled/index.css';
import RoutingService from './components/pages/Routing';
import GlobalStyle from './styled/globalStyle';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
      <GlobalStyle />
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
              <Route path="/graph" exact>
                <DashboardPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      </>
    );
  }
}

export default App;
