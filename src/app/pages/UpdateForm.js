import React, { Component } from "react";
import "./UpdateForm.scss";

export default class componentName extends Component {
  state = {
    identification: "",
    names: "",
    surNames: "",
    city: "",
    email: "",
    number: "",
    specialites: "",
    date: "",
    comments: "",
    state: "",
    calification: "",
    origin: ""
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

  updateRow = event => {
    event.preventDefault(); //Detener la funcion por defecto
  };

  render() {
    return (
      <div className="update">
        <h3 className="update-title">Update Applicant</h3>
        <form className="update-form" onSubmit={this.updateRow}>
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
          <div className="form-row col-md-6">
            <div className="form-group col-md-6">
              <label htmlFor="inputName4">Names</label>
              <input
                value={this.state.names}
                type="text"
                className="form-control"
                id="inputName4"
                placeholder="Names"
                onChange={e => this.handleInput(e, "names")}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputSurname4">Surnames</label>
              <input
                value={this.state.surNames}
                type="text"
                className="form-control"
                id="inputSurname4"
                placeholder="Surnames"
                onChange={e => this.handleInput(e, "surNames")}
              />
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="city4">City</label>
            <input
              value={this.state.city}
              type="text"
              className="form-control"
              id="inputCity4"
              placeholder="City"
              onChange={e => this.handleInput(e, "city")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              value={this.state.email}
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              onChange={e => this.handleInput(e, "email")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputContactNumber">Contact number</label>
            <input
              value={this.state.number}
              type="number"
              className="form-control"
              id="inputContactNumber"
              placeholder="Contact number"
              onChange={e => this.handleInput(e, "number")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputContactNumber">Specialties</label>
            <select
              value={this.state.specialites}
              className="custom-select"
              required
              onChange={e => this.handleInput(e, "specialites")}
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
              value={this.state.date}
              type="date"
              className="form-control"
              id="inputDate4"
              placeholder="Date"
              onChange={e => this.handleInput(e, "date")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputcomments4">Comments</label>
            <input
              value={this.state.comments}
              type="text"
              className="form-control"
              id="inputComments4"
              placeholder="Comments"
              onChange={e => this.handleInput(e, "comments")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCalification">Calification</label>
            <select
              value={this.state.calification}
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
              required
              onChange={e => this.handleInput(e, "state")}
            >
              <option value="">Choose options...</option>
              <option value="Hired">Hired</option>
              <option value="In process">In process</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputOrigin">Origin</label>
            <select
              value={this.state.origin}
              className="custom-select"
              required
              onChange={e => this.handleInput(e, "origin")}
            >
              <option value="">Choose options...</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
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
