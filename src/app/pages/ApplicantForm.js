import React, { Component } from "react";
import axios from "axios";
import Mensaje from "../components/Message";
import { BASE_ENDPOINT } from "../../constanst";

export default class componentName extends Component {
  state = {
    sucefullStatus: false,
    errorStatus: false,
    message: "",
    identification: "",
    number: "",
    names: "",
    surNames: "",
    specialites: "",
    email: ""
  };

  handleInput = (e, keyText) => {
    const value = e.target.value;
    this.setState({
      [keyText]: value,
      errorStatus: false,
      sucefullStatus: false,
      message: ""
    });
  };

  registre = async e => {
    e.preventDefault();
    const {
      identification,
      number,
      names,
      surNames,
      specialites,
      email
    } = this.state;

    try {
      const response = await axios.post(`${BASE_ENDPOINT}applicants`, {
        cedula: identification,
        nombres: names,
        apellidos: surNames,
        especialidades: [specialites],
        email: email,
        telefonos: [number],
        origen: "Completado"
      });
      if (response.status === 201) {
        this.setState({
          sucefullStatus: true,
          errorStatus: false,
          message: "Usuario registrado con exito",
          identification: "",
          number: "",
          names: "",
          surNames: "",
          specialites: "",
          email: ""
        });
      } else if (response.status === 200) {
        this.setState({
          errorStatus: true,
          sucefullStatus: false,
          message: "Usuario ya esta registrado en nuestra DB"
        });
      }
    } catch (err) {
      this.setState({
        errorStatus: true,
        sucefullStatus: false,
        message: "Error al realizar el registro, intente de nuevo"
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.registre}>
          <div className="form-row col-md-6">
            <div className="form-group col-md-6">
              <label>Identification number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Identification number"
                onChange={e => this.handleInput(e, "identification")}
                required
                value={this.state.identification}
              />
            </div>
          </div>
          <div className="form-row col-md-6">
            <div className="form-group col-md-6">
              <label>Names</label>
              <input
                type="text"
                className="form-control"
                placeholder="Names"
                onChange={e => this.handleInput(e, "names")}
                required
                value={this.state.names}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Surnames</label>
              <input
                type="text"
                className="form-control"
                placeholder="Surnames"
                onChange={e => this.handleInput(e, "surNames")}
                required
                value={this.state.surNames}
              />
            </div>
          </div>
          <div className="form-group col-md-6">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={e => this.handleInput(e, "email")}
              required
              value={this.state.email}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Contact number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Contact number"
              onChange={e => this.handleInput(e, "number")}
              required
              value={this.state.number}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Specialties</label>
            <select
              onChange={e => this.handleInput(e, "specialites")}
              className="custom-select"
              required
              value={this.state.specialites}
            >
              <option value="">Choose options...</option>
              <option value="ABAP">ABAP</option>
              <option value="ABAP2">ABAP chimba</option>
              <option value="ABAP3">ABAP chimba x2</option>
            </select>
          </div>
          <div className="custom-file col-md-6">
            <input type="file" className="custom-file-input" />
            <label className="custom-file-label">curriculum vitae</label>
          </div>
          <div className="form-group col-md-6">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" required />
              <label className="form-check-label">
                I have read and accept the <a href="#">Terms and conditions</a>{" "}
                and the use of my data in accordance with the Habeas Data Law.
              </label>
            </div>
          </div>
          {this.state.errorStatus && (
            <Mensaje message={this.state.message} property="error" />
          )}
          {this.state.sucefullStatus && (
            <Mensaje message={this.state.message} property="sucefull" />
          )}
          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
