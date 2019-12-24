import React, { Component } from "react";
import Mensaje from "../components/Message";

export default class componentName extends Component {
  state = {
    identification: "",
    description: "",
    Date: ""
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
    const URL = `https://happy-test2.herokuapp.com/api/alerts/${id}`;
    const response = await fetch(`${URL}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbiIsImlhdCI6MTU3NjA2NTAwOSwiZXhwIjoxNTc3Mjc0NjA5fQ.HI24Ypq1mvX4-sV3T0o5_1ybgcAypcCIvopAkHXQvO8"
      },
      mode: "cors"
    });

    let data = await response.json();
    this.setState(data);
  };

  updateAlert = async e => {
    e.preventDefault(); //Detener la funcion por defecto
    try {
      const response = await fetch(
        "https://happy-test2.herokuapp.com/api/alerts", {
          method: "PUT",
          body: JSON.stringify(this.state),
          headers: {
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbiIsImlhdCI6MTU3NjA2NTAwOSwiZXhwIjoxNTc3Mjc0NjA5fQ.HI24Ypq1mvX4-sV3T0o5_1ybgcAypcCIvopAkHXQvO8",
            "content-type": "application/json"
          },
          mode: "cors"
        }
      );
      if (response.status === 200) {
        this.setState({
          sucefullStatus: true,
          errorStatus: false,
          message: "Se ha realizado el cambio con exito",
          identification: "",
          description: "",
          Date: ""
        });
      } else if (response.status === 406) {
        this.setState({
          errorStatus: true,
          sucefullStatus: false,
          message: "El aspirante no tiene una fecha de disponibilidad"
        });
      } else if (response.status === 202) {
        this.setState({
          errorStatus: true,
          sucefullStatus: false,
          message: "Ingrese una fecha diferente"
        });
      } else {
        this.setState({
          errorStatus: true,
          sucefullStatus: false,
          message: "No se puede realizar el cambio, intente de nuevo"
        });
      }
    } catch {
      this.setState({
        errorStatus: true,
        sucefullStatus: false,
        message: "No se puede realizar el cambio, intente de nuevo"
      });
    }
  };

  render() {
    return ( <
      div >
      <
      form onSubmit = { this.updateAlert } >
      <
      div className = "form-row col-md-6" >
      <
      label htmlFor = "inputId4" > Identification number < /label> <
      input value = { this.state.identification }
      onChange = { e => this.handleInput(e, "identification") }
      type = "number"
      disabled className = "form-control" /
      >
      <
      /div> <
      div className = "form-group col-md-6" >
      <
      label htmlFor = "inputDate" > Date < /label> <
      input type = "date"
      className = "form-control"
      value = { this.state.Date }
      onChange = { e => this.handleInput(e, "Date") }
      /> <
      /div> <
      div className = "form-group col-md-6" >
      <
      label htmlFor = "exampleFormControlTextarea2" > Description < /label> <
      textarea value = { this.state.description }
      onChange = { e => this.handleInput(e, "description") }
      class = "form-control rounded-0"
      rows = "3" >
      < /textarea> <
      /div> <
      div className = "content-center" > {
        this.state.errorStatus && ( <
          Mensaje message = { this.state.message }
          property = "error" / >
        )
      } {
        this.state.sucefullStatus && ( <
          Mensaje message = { this.state.message }
          property = "succesfull" / >
        )
      } <
      button type = "submit"
      className = "btn btn-primary " >
      Submit <
      /button> <
      /div> <
      /form> <
      /div>
    );
  }
}