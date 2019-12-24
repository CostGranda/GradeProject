import React, { Component } from "react";
import "./UpdateForm.scss";
import Mensaje from "../components/Message";
import localServices from "../services/LocalStorageService";

export default class componentName extends Component {
  state = {
    identification: "",
    Date: "",
    description: "",
    names: "",
    surnames: "",
    applicant: ""
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

  updateRow = async event => {
    event.preventDefault(); //Detener la funcion por defecto
    const token = localServices.getCurrentAccountId("token");
    const response = await fetch(
      "https://happy-test2.herokuapp.com/api/alerts",
      {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          Authorization: `Bearer ${token.token}`,
          "content-type": "application/json"
        },
        mode: "cors"
      }
    );
    if (response.status === 200) {
      this.setState({
        errorStatus: false,
        sucefullStatus: true,
        message: "Alerta registrada con exito",
        identification: "",
        date: "",
        description: "",
        names: "",
        surnames: "",
        applicant: ""
      });
    } else if (response.status === 409) {
      this.setState({
        errorStatus: true,
        sucefullStatus: false,
        message: "El aspirante ya posee una alerta"
      });
    } else if (response.status === 406) {
      this.setState({
        errorStatus: true,
        sucefullStatus: false,
        message: "La fecha no es valida, por favor verifique"
      });
    } else {
      this.setState({
        errorStatus: true,
        sucefullStatus: false,
        message: "Error al realizar el registro, intente de nuevo"
      });
    }
  };

  render() {
    return (
      <div className="update">
        <h3 className="update-title">Create Alarm</h3>
        <form className="update-form" onSubmit={this.updateRow}>
          <div className="form-row col-md-6">
            <div className="form-group col-md-6">
              <label htmlFor="inputId4">Identification number</label>
              <input
                value={this.state.identification}
                type="number"
                className="form-control"
                id="inputId4"
                placeholder="Identification number"
                onChange={e => this.handleInput(e, "identification")}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputName4">Date</label>
              <input
                value={this.state.Date}
                type="date"
                className="form-control"
                id="inputName4"
                onChange={e => this.handleInput(e, "Date")}
              />
            </div>
          </div>
          <div className="form-row col-md-6">
            <div className="form-group col-md-12">
              <label htmlFor="inputSurname4">Description</label>
              <textarea
                value={this.state.description}
                class="form-control rounded-0"
                id="exampleFormControlTextarea2"
                rows="3"
                onChange={e => this.handleInput(e, "description")}
              ></textarea>
            </div>
          </div>
          <div className=" col-md-6">
            {this.state.errorStatus && (
              <Mensaje message={this.state.message} property="error" />
            )}
            {this.state.sucefullStatus && (
              <Mensaje message={this.state.message} property="succesfull" />
            )}
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
