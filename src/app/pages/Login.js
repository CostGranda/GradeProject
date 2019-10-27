import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="container text-center login  ">
        <form className="form-signin">
          <h1 className="h3 tittle-login">SIGN IN</h1>
          <label className="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
          />
          <label className="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
