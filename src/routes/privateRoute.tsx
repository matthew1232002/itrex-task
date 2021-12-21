import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import useActions from '../hooks/useActions';

interface IPublicRoute {
  isAuthenticated?: boolean;
  redirectTo: string;
  children?: React.ReactNode;
  restricted?: boolean,
  path: string,
  component: any
}

export default function PrivateRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}: IPublicRoute) {
  const { isLogged } = useActions();

  return (
    <Route {...routeProps}>
      {isLogged ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

PrivateRoute.defaultProps = {
  isAuthenticated: false,
  children: null,
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  redirectTo: PropTypes.string.isRequired,
  // @ts-ignore
  children: PropTypes.shape(),
};
