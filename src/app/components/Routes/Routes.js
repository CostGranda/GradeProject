import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./../../pages/Login";
import ApplicantForm from "./../../pages/ApplicantForm";
import UpdateForm from "./../../pages/UpdateForm";
import EmptyPage from './../../pages/EmptyPage'
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
<<<<<<< HEAD
    <PublicRoute
      path="/"
      authed={authed}
      handleChangeState={handleChangeState}
      exact
      component={Login}
    />
=======
    <PrivateRoute
      authed={authed}
      exact
      path='/UpdateForm'
      component={UpdateForm}
    />
    <PublicRoute path='/Empty' authed={authed} exact component={EmptyPage} />
    <PublicRoute path='/' authed={authed} exact component={Login} />
>>>>>>> 2ec643801badf30e5e73d24fa63310b8ed311a0b
  </Switch>
);

export default Routes;
