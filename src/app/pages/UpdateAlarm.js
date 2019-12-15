import React, { Component } from "react";

export default class componentName extends Component {
  identificationRef = React.createRef();
  descriptionRef = React.createRef();
  dateRef = React.createRef();

  updateRow = event => {
    event.preventDefault(); //Detener la funcion por defecto
    const identification = this.identificationRef.current.value,
      description = this.descriptionRef.current.value,
      date = this.dateRef.current.value;
  };

  //   componentDidMount() {
  //     console.log("Component did moutn");
  //   }

  render() {
    return (
      <div>
        <form onSubmit={this.updateRow}>
          <div className="form-row col-md-6">
            <label htmlFor="inputId4">Identification number</label>
            <input
              ref={this.identificationRef}
              type="number"
              className="form-control"
              id="inputId4"
              placeholder="Identification number"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputDate">Date</label>
            <input
              ref={this.dateRef}
              type="date"
              className="form-control"
              id="inputSurname4"
              placeholder="Surnames"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlTextarea2">Description</label>
            <textarea
              ref={this.descriptionRef}
              class="form-control rounded-0"
              id="exampleFormControlTextarea2"
              rows="3"
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
