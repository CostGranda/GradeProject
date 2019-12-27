import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./CSS/styles.css";
import Routes from "./components/Routes/Routes";
import ApplicantForm from "./pages/UpdateForm";
import localServices from "./services/LocalStorageService";

export default class App extends Component {
  state = {
    authed: false
  };

  handleChangeState = authed => {
    this.setState({ authed: authed });
  };

  logOut = () => {
    localServices.removeCurrentAccountId("token")
    localServices.removeCurrentAccountId("user")
    this.setState({ authed: false })
  }

  componentDidMount() {
    const isAuted = localServices.getCurrentAccountId("user");
    if (isAuted.usuario) {
      this.setState({ authed: true });
    }
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Menu logOut={()=>  this.logOut()}/>
          <Routes
            authed={this.state.authed}
            handleChangeState={this.handleChangeState}
          />
          {/* <ApplicantForm /> */}
          <Footer />
        </Router>
      </Fragment>
    );
  }
}
