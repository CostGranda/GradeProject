import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./../../pages/Login";
import ApplicantForm from "./../../pages/ApplicantForm";

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === true ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const PublicRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === false ? <Component {...rest} /> : <Redirect to="/ingreso" />
    }
  />
);

const Routes = ({ authed, handleChangeState }) => (
  <Switch>
    <PrivateRoute
      authed={authed}
      exact
      path="/ingreso"
      component={ApplicantForm}
    />
    <PublicRoute
      path="/"
      authed={authed}
      handleChangeState={handleChangeState}
      exact
      component={Login}
    />
  </Switch>
);

export default Routes;
