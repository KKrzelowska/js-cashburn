import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (): ReactElement => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/graph">graph</NavLink>
    </div>
  );
};

export default Navigation;
