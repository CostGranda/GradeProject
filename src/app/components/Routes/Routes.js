import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from "./../../pages/Login";
import ApplicantForm from "./../../pages/ApplicantForm";
import UpdateForm from "./../../pages/UpdateForm";
import EmptyPage from './../../pages/EmptyPage'
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
      authed === false ? <Component {...props} /> : <Redirect to='/prueba' />
    }
  />
)

const Routes = ({ authed }) => (
  <Switch>
    <PrivateRoute
      authed={authed}
      exact
      path='/prueba'
      component={ApplicantForm}
    />
    <PrivateRoute
      authed={authed}
      exact
      path='/UpdateForm'
      component={UpdateForm}
    />
    <PublicRoute path='/Empty' authed={authed} exact component={EmptyPage} />
    <PublicRoute path='/' authed={authed} exact component={Login} />
  </Switch>
)

export default Routes

