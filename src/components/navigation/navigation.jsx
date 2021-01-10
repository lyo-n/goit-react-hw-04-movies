import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <div>
      <NavLink
        exact
        to={routes.home}>
        Home
      </NavLink>
      <br />
      <NavLink
        to={routes.moviesPage}>
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;