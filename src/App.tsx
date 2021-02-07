import React from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BalanceService from './components/BalanceService';
import Navigation from './components/pages/Navigation';
import NameForm from './components/pages/StatedNameForm';
import GraphForm from './components/pages/StatedGraphForm';
import './styled/index.css';


const App = observer(
  ({ balanceService }: { balanceService: BalanceService }) => {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" exact>
                <NameForm />
              </Route>
              <Route path="/graph" >
                <GraphForm balance={balanceService.getBalances()}/>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
);

export default App;
