import React, { Component } from "react";
import axios from "axios";
import { BASE_ENDPOINT } from "../../constanst";

export default class componentName extends Component {
  identificationRef = React.createRef();
  namesRef = React.createRef();
  surnamesRef = React.createRef();
  emailRef = React.createRef();
  numberRef = React.createRef();
  specialtesRef = React.createRef();

  registre = async e => {
    e.preventDefault();
    const identification = this.identificationRef.current.value,
      names = this.namesRef.current.value,
      surnames = this.surnamesRef.current.value,
      email = this.emailRef.current.value,
      number = this.numberRef.current.value,
      specialites = this.specialtesRef.current.value;

    try {
      const response = await axios.post(`${BASE_ENDPOINT}applicants`, {
        cedula: identification,
        nombres: names,
        apellidos: surnames,
        especialidades: [specialites],
        email: email,
        telefonos: [number],
        cv: "Pruebas",
        origen: "Completado"
      });
      if (response) {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
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
                ref={this.identificationRef}
                type="number"
                className="form-control"
                placeholder="Identification number"
              />
            </div>
          </div>
          <div className="form-row col-md-6">
            <div className="form-group col-md-6">
              <label>Names</label>
              <input
                ref={this.namesRef}
                type="text"
                className="form-control"
                placeholder="Names"
              />
            </div>
            <div className="form-group col-md-6">
              <label>Surnames</label>
              <input
                ref={this.surnamesRef}
                type="text"
                className="form-control"
                placeholder="Surnames"
              />
            </div>
          </div>
          <div className="form-group col-md-6">
            <label>Email</label>
            <input
              ref={this.emailRef}
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Contact number</label>
            <input
              ref={this.numberRef}
              type="number"
              className="form-control"
              placeholder="Contact number"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Specialties</label>
            <select ref={this.specialtesRef} className="custom-select" required>
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
          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
