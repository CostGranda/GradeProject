import React, { Component } from "react";

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

  updateRow = e => {
    e.preventDefault(); //Detener la funcion por defecto
  };

  componentDidMount() {
    let locationActual = window.location.pathname;
    const path = locationActual.split("/");
    const id = path[2];
    // this.getAlarms(id);
  }

  // getAlarms = async id => {
  //   const URL = `https://happy-test2.herokuapp.com/api/applicants/cedula/${id}`;
  //   const response = await fetch(`${URL}`, {
  //     method: "GET",
  //     headers: {
  //       Authorization:
  //         "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbiIsImlhdCI6MTU3NjA2NTAwOSwiZXhwIjoxNTc3Mjc0NjA5fQ.HI24Ypq1mvX4-sV3T0o5_1ybgcAypcCIvopAkHXQvO8"
  //     },
  //     mode: "cors"
  //   });
  //   let data = await response.json();
  //   this.setState(data[0]);
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.updateRow}>
          <div className="form-row col-md-6">
            <label htmlFor="inputId4">Identification number</label>
            <input
              value={this.state.identification}
              onChange={e => this.handleInput(e, "identification")}
              type="number"
              className="form-control"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputDate">Date</label>
            <input
              type="date"
              className="form-control"
              value={this.state.Date}
              onChange={e => this.handleInput(e, "Date")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlTextarea2">Description</label>
            <textarea
              value={this.state.description}
              onChange={e => this.handleInput(e, "description")}
              class="form-control rounded-0"
              rows="3"
              onChange={e => this.handleInput(e, "identification")}
            ></textarea>
          </div>
          <div className="content-center">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
