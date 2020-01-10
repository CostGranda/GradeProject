import React, { Component } from "react";
import localServices from "../services/LocalStorageService";
import moment from "moment";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default class componentName extends Component {
  state = {
    identification: "",
    description: "",
    Date: ""
  };

  handleInput = (e, keyText) => {
    const value = e.target.value;
    this.setState({
      [keyText]: value
    });
  };

  modalShowError = (title, message) => {
    confirmAlert({
      title: title,
      message: message,
      buttons: [
        {
          label: "Okey"
        }
      ]
    });
  };

  redirict = () => {
    this.props.history.push("/ApplicantTable");
  };

  modalShow = () => {
    confirmAlert({
      title: "Modificacion exitosa",
      message: "",
      buttons: [
        {
          label: "Okey",
          onClick: () => this.redirict()
        }
      ]
    });
  };

  updateRow = e => {
    e.preventDefault(); //Detener la funcion por defecto
  };

  componentDidMount() {
    let locationActual = window.location.pathname;
    const path = locationActual.split("/");
    const id = path[2];
    this.getAlarms(id);
  }

  getAlarms = async id => {
    const token = localServices.getCurrentAccountId("token");
    const URL = `https://happy-test2.herokuapp.com/api/alerts/${id}`;
    const response = await fetch(`${URL}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.token}`
      },
      mode: "cors"
    });

    let data = await response.json();
    this.setState(data);
    if (this.state.Date != null) {
      let date = this.state.Date.split("T");
      date = date[0];
      this.setState({
        Date: date
      });
    }
  };

  updateAlert = async e => {
    e.preventDefault(); //Detener la funcion por defecto
    const token = localServices.getCurrentAccountId("token");
    try {
      const response = await fetch(
        "https://happy-test2.herokuapp.com/api/alerts",
        {
          method: "PUT",
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
          identification: "",
          description: "",
          Date: ""
        });
        this.modalShow();
      } else if (response.status === 406) {
        this.modalShowError(
          "Error",
          "El aspirante no tiene una fecha de disponibilidad"
        );
      } else if (response.status === 202) {
        this.modalShowError("Error", "Ingrese una fecha diferente");
      } else {
        this.modalShowError(
          "Error",
          "No se puede realizar el cambio, intente de nuevo"
        );
      }
    } catch {
      this.modalShowError(
        "Error",
        "No se puede realizar el cambio, intente de nuevo"
      );
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.updateAlert}>
          <div className="form-row col-md-6">
            <label htmlFor="inputId4"> Identification number </label>{" "}
            <input
              value={this.state.identification}
              onChange={e => this.handleInput(e, "identification")}
              type="number"
              disabled
              className="form-control"
            />
          </div>{" "}
          <div className="form-group col-md-6">
            <label htmlFor="inputDate"> Date </label>{" "}
            <input
              type="date"
              className="form-control"
              value={this.state.Date}
              onChange={e => this.handleInput(e, "Date")}
            />{" "}
          </div>{" "}
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlTextarea2"> Description </label>{" "}
            <textarea
              value={this.state.description}
              onChange={e => this.handleInput(e, "description")}
              class="form-control rounded-0"
              rows="3"
            ></textarea>{" "}
          </div>{" "}
          <div className="content-center">
            <button type="submit" className="btn btn-primary ">
              Submit{" "}
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>
    );
  }
}
