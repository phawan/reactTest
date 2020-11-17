import React from 'react';
import {  Route, Redirect } from 'react-router-dom';
// import fakeAuth from '../fakeAuth'

const fakeAuth = {
    isAuthenticated : false
}

function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}

export default PrivateRoute;