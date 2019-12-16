import React, { Component } from "react";

export default class componentName extends Component {
  state = {
    identification: "",
    date: "",
    description: ""
  };

  handleInput = (e, keyText) => {
    const value = e.target.value;
    this.setState({
      [keyText]: value
    });
  };

  updateRow = event => {
    event.preventDefault(); //Detener la funcion por defecto
  };

  render() {
    return (
      <div>
        <form onSubmit={this.updateRow}>
          <div className="form-row col-md-6">
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
            <label htmlFor="inputDate">Date</label>
            <input
              value={this.state.date}
              type="date"
              className="form-control"
              id="inputSurname4"
              placeholder="Surnames"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlTextarea2">Description</label>
            <textarea
              value={this.state.description}
              class="form-control rounded-0"
              id="exampleFormControlTextarea2"
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
