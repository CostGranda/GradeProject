import React, { Component } from "react";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./CSS/styles.css";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <Footer />
      </div>
    );
  }
}
