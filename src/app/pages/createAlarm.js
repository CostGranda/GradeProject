import React, { Component } from 'react';
import "./UpdateForm.scss";

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
                                value={this.state.names}
                                type="date"
                                className="form-control"
                                id="inputName4"
                                placeholder="Date"
                                onChange={e => this.handleInput(e, "date")}
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
                                onChange={e => this.handleInput(e, "identification")}
                            ></textarea>
                        </div>
                    </div>
                    <div className=" col-md-6">
                        <button type="submit" className="btn btn-primary ">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
