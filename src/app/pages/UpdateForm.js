import React, { Component } from "react";
import "./UpdateForm.scss";
import axios from "axios";
import { BASE_ENDPOINT } from "../../constanst";

export default class componentName extends Component {
  state = {
    cedula: "",
    nombres: "",
    apellidos: "",
    ciudad: "",
    email: "",
    telefonos: "",
    especialidades: "",
    disponibilidad2: "2019-05-12",
    comentarios: "",
    state: "",
    calificacion: "",
    origen: ""
  };

  handleInput = (e, keyText) => {
    const value = e.target.value;
    this.setState({
      [keyText]: value
    });
  };

  componentDidMount() {
    let locationActual = window.location.pathname;
    const path = locationActual.split("/");
    const id = path[2];
    this.getAplicant(id);
  }

  getAplicant = async id => {
    const URL = `https://happy-test2.herokuapp.com/api/applicants/cedula/${id}`;
    const response = await fetch(`${URL}`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbiIsImlhdCI6MTU3NjA2NTAwOSwiZXhwIjoxNTc3Mjc0NjA5fQ.HI24Ypq1mvX4-sV3T0o5_1ybgcAypcCIvopAkHXQvO8"
      },
      mode: "cors"
    });
    let data = await response.json();
    this.setState(data[0]);
  };

  updateRow = async e => {
    e.preventDefault(); //Detener la funcion por defecto
    // const {
    //   cedula,
    //   telefonos,
    //   nombres,
    //   apellidos,
    //   especialidades,
    //   email,
    //   origen,
    //   state,
    //   calificacion,
    //   comentarios,
    //   disponibilidad2,
    //   ciudad
    // } = this.state;
        try {
      const response = await fetch(
        "https://happy-test2.herokuapp.com/api/alerts",
        {
          method: "PUT",
          body:JSON.stringify(this.state)
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbiIsImlhdCI6MTU3NjA2NTAwOSwiZXhwIjoxNTc3Mjc0NjA5fQ.HI24Ypq1mvX4-sV3T0o5_1ybgcAypcCIvopAkHXQvO8"
          },
          mode: "cors"
        }
      );
      console.log(response);
    } catch {
      console.log("err");
    }
  };

  render() {
    return (
      <div className="update">
        <h3 className="update-title">Update Applicant</h3>
        <form className="update-form" onSubmit={this.updateRow}>
          <div className="form-row col-md-6">
            <label htmlFor="inputId4">Identification number</label>
            <input
              value={this.state.cedula}
              type="number"
              className="form-control"
              disabled
              onChange={e => this.handleInput(e, "identification")}
            />
          </div>
          <div className="form-row col-md-6">
            <div className="form-group col-md-6">
              <label htmlFor="inputName4">Names</label>
              <input
                value={this.state.nombres}
                type="text"
                className="form-control"
                onChange={e => this.handleInput(e, "nombres")}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputSurname4">Surnames</label>
              <input
                value={this.state.apellidos}
                type="text"
                className="form-control"
                onChange={e => this.handleInput(e, "apellidos")}
              />
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="city4">City</label>
            <input
              value={this.state.ciudad}
              type="text"
              className="form-control"
              placeholder="City"
              onChange={e => this.handleInput(e, "ciudad")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              value={this.state.email}
              type="email"
              className="form-control"
              onChange={e => this.handleInput(e, "email")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputContactNumber">Contact number</label>
            <input
              value={this.state.telefonos}
              type="number"
              className="form-control"
              onChange={e => this.handleInput(e, "telefonos")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputContactNumber">Specialties</label>
            <select
              value={this.state.especialidades}
              className="custom-select"
              onChange={e => this.handleInput(e, "especialidades")}
            >
              <option value="">Choose options...</option>
              <option value="ABAP">ABAP</option>
              <option value="SD">SD</option>
              <option value="FI">FI</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputDate4">Date</label>
            <input
              value={this.state.disponibilidad2}
              type="date"
              className="form-control"
              placeholder="Date"
              onChange={e => this.handleInput(e, "disponibilidad")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputcomments4">Comments</label>
            <input
              value={this.state.comentarios}
              type="text"
              className="form-control"
              placeholder="Comments"
              onChange={e => this.handleInput(e, "comentarios")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCalification">Calification</label>
            <select
              value={this.state.calificacion}
              className="custom-select"
              required
              onChange={e => this.handleInput(e, "calification")}
            >
              <option value="">Choose options...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputState">State</label>
            <select
              value={this.state.state}
              className="custom-select"
              onChange={e => this.handleInput(e, "state")}
            >
              <option value="">Choose options...</option>
              <option value="Contratado">Hired</option>
              <option value="En proceso">In process</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputOrigin">Origin</label>
            <select
              value={this.state.origen}
              className="custom-select"
              onChange={e => this.handleInput(e, "origen")}
            >
              <option value="">Choose options...</option>
              <option value="Manual">Manual</option>
              <option value="Auto">Automatic</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputFile">Choose file</label>
            <br></br>
            <div className="custom-file col-md-6">
              <input
                type="file"
                className="custom-file-input"
                id="validatedCustomFile"
              />
              <label
                className="custom-file-label"
                htmlFor="validatedCustomFile"
              >
                Choose file...
              </label>
            </div>
          </div>
          <div className=" col-md-6">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
