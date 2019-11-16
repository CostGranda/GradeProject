import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import ApplicantForm from "./pages/ApplicantForm";
import UpdateForm from "./pages/UpdateForm";
import "./CSS/styles.css";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/" component={UpdateForm} />
          </Switch>
          <Footer />
        </Router>
      </Fragment>
    );
  }
}
