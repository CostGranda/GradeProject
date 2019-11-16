import React, { Component } from "react";
import axios from "axios";
import Mensaje from "../components/Message";
import { BASE_ENDPOINT } from "../../constanst";

export default class Login extends Component {
  state = {
    user: "",
    pass: "",
    erroStatus: false,
    error: "  "
  };

  handleInput = (e, keyText) => {
    const value = e.target.value;
    this.setState({
      [keyText]: value,
      errorStatus: false
    });
  };

  verifyCredentials = async e => {
    e.preventDefault();
    const { user: usuario, pass } = this.state;
    try {
      const response = await axios.post(`${BASE_ENDPOINT}users/signin`, {
        email: usuario,
        password: pass
      });
      if (response) {
        console.log(response);
        this.setState({
          errorStatus: false
        });
      }
    } catch (error) {
      this.setState({
        error: "Usuario y/o Contraseña no válidos",
        errorStatus: true
      });
    }
  };

  render() {
    return (
      <div className="container text-center login  ">
        <form className="form-signin" onSubmit={this.verifyCredentials}>
          <h1 className="h3 tittle-login">SIGN IN</h1>
          <label className="sr-only">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email address"
            required
            onChange={e => this.handleInput(e, "user")}
          />
          <label className="sr-only">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={e => this.handleInput(e, "pass")}
          />
          {this.state.errorStatus && (
            <Mensaje message={this.state.error} property="error" />
          )}
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
