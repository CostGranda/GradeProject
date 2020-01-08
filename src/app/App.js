import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import MenuGeneral from "./components/MenuGeneral";
import MenuLogin from "./components/MenuLogin";
import Footer from "./components/Footer";
import "./CSS/styles.css";
import Routes from "./components/Routes/Routes";
import localServices from "./services/LocalStorageService";

export default class App extends Component {
  state = {
    authed: false,
    role: false
  };

  handleChangeState = authed => {
    const role = localServices.getCurrentAccountId("role");
    if (role.role === "Admin") {
      this.setState({ role: true });
    } else {
      this.setState({ role: false });
    }
    this.setState({ authed: authed });
  };

  logOut = () => {
    localServices.removeCurrentAccountId("token");
    localServices.removeCurrentAccountId("role");
    localServices.removeCurrentAccountId("user");
    this.setState({ authed: false });
    this.setState({ role: false });
  };

  componentDidMount() {
    const isAuted = localServices.getCurrentAccountId("user");
    if (isAuted && isAuted.usuario) {
      this.setState({ authed: true });
    }
    const role = localServices.getCurrentAccountId("role");
    if (role !== null) {
      if (role.role === "Admin") {
        this.setState({ role: true });
      } else {
        this.setState({ role: false });
      }
    }
  }

  render() {
    return (
      <Fragment>
        <Router>
          {this.state.role ? (
            <Menu
              logOut={() => {
                this.logOut();
              }}
            />
          ) : this.state.authed ? (
            <MenuGeneral
              logOut={() => {
                this.logOut();
              }}
            />
          ) : (
            <MenuLogin />
          )}
          <Routes
            role={this.state.role}
            authed={this.state.authed}
            handleChangeState={this.handleChangeState}
          />
          <Footer />
        </Router>
      </Fragment>
    );
  }
}
