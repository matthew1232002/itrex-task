import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import useActions from '../hooks/useActions';

interface IPublicRoute {
  isAuthenticated?: boolean;
  redirectTo: string;
  children?: React.ReactNode;
  restricted?: boolean,
  path: string,
  component: any
}

export default function PublicRoute({
  isAuthenticated,
  redirectTo,
  children,
  path,
  ...routeProps
}: IPublicRoute) {
  const { isLogged } = useActions();

  return (
    <Route {...routeProps}>
      {isLogged && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}

PublicRoute.defaultProps = {
  isAuthenticated: false,
  children: null,
  redirectTo: '',
};

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  redirectTo: PropTypes.string,
  // @ts-ignore
  children: PropTypes.shape(),
};
