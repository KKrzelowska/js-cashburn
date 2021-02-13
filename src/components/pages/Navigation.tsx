import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import NameForm from './StatedNameForm';
import GraphForm from './StatedGraphForm';

const Navigation = () => {
  return (
    <div>
      <h2>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/graph" className="nav-link">
                Graph
              </Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" component={NameForm} exact />
            <Route path="/graph" component={GraphForm} />
          </Switch>
        </BrowserRouter>
      </h2>
    </div>
  );
};

export default Navigation;
