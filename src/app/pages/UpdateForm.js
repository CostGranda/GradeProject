import React, { Component } from 'react';

export default class componentName extends Component {

    state = {
        validado: false
    };

    identificationRef = React.createRef();
    namesRef = React.createRef();
    surnamesRef = React.createRef();
    cityRef = React.createRef();
    emailRef = React.createRef();
    numberRef = React.createRef();
    specialtiesRef = React.createRef();
    dateRef = React.createRef();
    commentsRef = React.createRef();
    calificationsRef = React.createRef();
    stateRef = React.createRef();
    originRef = React.createRef();

    updateRow = event => {
        event.preventDefault(); //Detener la funcion por defecto
        const identification = this.identificationRef.current.value,
            names = this.namesRef.current.value,
            surnames = this.surnamesRef.current.value,
            city = this.cityRef.current.value,
            email = this.emailRef.current.value,
            number = this.numberRef.current.value,
            specialties = this.specialtiesRef.current.value,
            date = this.dateRef.current.value,
            comments = this.commentsRef.current.value,
            califications = this.calificationsRef.current.value,
            state = this.stateRef.current.value,
            origin = this.originRef.current.value;

            console.log(identification)
            console.log(names)
            console.log(surnames)
            console.log(city)
            console.log(email)
            console.log(number)
            console.log(specialties)
            console.log(date)
            console.log(comments)
            console.log(califications)
            console.log(state)
            console.log(origin)
    };

    render() {
        return (
            <div>
                <form onSubmit={this.updateRow}>
                    <div className="form-row col-md-6">
                        <label htmlFor="inputId4">Identification number</label>
                        <input ref={this.identificationRef} type="identification_number" className="form-control" id="inputId4" placeholder="Identification number" />
                    </div>
                    <div className="form-row col-md-6">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputName4">Names</label>
                            <input ref={this.namesRef} type="text" className="form-control" id="inputName4" placeholder="Names" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputSurname4">Surnames</label>
                            <input ref={this.surnamesRef} type="text" className="form-control" id="inputSurname4" placeholder="Surnames" />
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="city4">City</label>
                        <input ref={this.cityRef} type="text" className="form-control" id="inputCity4" placeholder="City" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input ref={this.emailRef} type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputContactNumber">Contact number</label>
                        <input ref={this.numberRef} type="number" className="form-control" id="inputContactNumber" placeholder="Contact number" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputContactNumber">Specialties</label>
                        <select ref={this.specialtiesRef} className="custom-select" required>
                            <option value="">Choose options...</option>
                            <option value="1">ABAP</option>
                            <option value="2">ABAP chimba</option>
                            <option value="3">ABAP chimba x2</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputDate4">Date</label>
                        <input ref={this.dateRef} type="date" className="form-control" id="inputDate4" placeholder="Date" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputcomments4">Comments</label>
                        <input ref={this.commentsRef} type="comments" className="form-control" id="inputComments4" placeholder="Comments" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCalifications4">Califications</label>
                        <input ref={this.calificationsRef} type="califications" className="form-control" id="inputCalifications4" placeholder="Califications" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputState4">State</label>
                        <input ref={this.stateRef} type="state" className="form-control" id="inputState4" placeholder="State" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputOrigin4">Origin</label>
                        <input ref={this.originRef} type="origin" className="form-control" id="inputOrigin4" placeholder="Origin" />
                    </div>
                    <label htmlFor="inputFile">Choose file</label><br></br>
                    <div className="custom-file col-md-6">
                        <input type="file" className="custom-file-input" id="validatedCustomFile"/>
                        <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                    </div>
                    <div className="content-center">
                        <button type="submit" className="btn btn-primary ">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

