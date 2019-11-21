import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import UpdateForm from "./pages/UpdateAlarm";
import Footer from "./components/Footer";
import "./CSS/styles.css";
import Routes from "./components/Routes/Routes";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Menu />
            {/* <Routes authed={true} /> */}
            <UpdateForm />
          <Footer />
        </Router>
      </Fragment>
    );
  }
}
