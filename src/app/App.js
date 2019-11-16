import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
<<<<<<< HEAD
import Login from "./pages/Login";
import ApplicantForm from "./pages/ApplicantForm";
import UpdateForm from "./pages/UpdateForm";
=======
>>>>>>> b6ea2c1ff59ecf8d2250981f7a7a87615ac82ebb
import "./CSS/styles.css";
import Routes from "./components/Routes/Routes";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Menu />
<<<<<<< HEAD
          <Switch>
            <Route exact path="/" component={UpdateForm} />
          </Switch>
=======
            <Routes authed={true} />
>>>>>>> b6ea2c1ff59ecf8d2250981f7a7a87615ac82ebb
          <Footer />
        </Router>
      </Fragment>
    );
  }
}
