import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./CSS/styles.css";
import Routes from "./components/Routes/Routes";

export default class App extends Component {
  state = {
    authed: false
  };

  handleChangeState = authed => {
    this.setState({ authed: authed });
  };

  render() {
    return (
      <Fragment>
        <Router>
          <Menu />
          <Routes
            authed={this.state.authed}
            handleChangeState={this.handleChangeState}
          />
          <Footer />
        </Router>
      </Fragment>
    );
  }
}
