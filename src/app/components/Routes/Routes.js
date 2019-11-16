import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from "./../../pages/Login";
import ApplicantForm from "./../../pages/ApplicantForm";

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === true ? <Component {...props} /> : <Redirect to='/' />
    }
  />
)

const PublicRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === false ? <Component {...props} /> : <Redirect to='/happiechupon' />
    }
  />
)

const Routes = ({ authed }) => (
  <Switch>
    <PrivateRoute
      authed={authed}
      exact
      path='/happiechupon'
      component={ApplicantForm}
    />
    <PublicRoute path='/' authed={authed} exact component={Login} />
  </Switch>
)

export default Routes

