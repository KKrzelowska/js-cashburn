import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import NameForm from './StatedNameForm';
import GraphForm from './StatedGraphForm';

const Navigation = () => {
  return (
    <div>
      <h2>
        <BrowserRouter>
          <h2>Welcome to cashburn, app for budget management</h2>
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
