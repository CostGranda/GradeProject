import React, { Component } from 'react';

export default class componentName extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-row col-md-6">
                        <div className="form-group col-md-6">
                            <label for="inputId4">Identification number</label>
                            <input type="identification_number" className="form-control" id="inputId4" placeholder="Identification number" />
                        </div>
                    </div>
                    <div className="form-row col-md-6">
                        <div className="form-group col-md-6">
                            <label for="inputName4">Names</label>
                            <input type="names" className="form-control" id="inputName4" placeholder="Names" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputSurname4">Surnames</label>
                            <input type="surnames" className="form-control" id="inputSurname4" placeholder="Surnames" />
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputContactNumber">Contact number</label>
                        <input type="number" className="form-control" id="inputContactNumber" placeholder="Contact number" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputContactNumber">Contact number</label>
                        <select class="custom-select" required>
                            <option value="">Choose options...</option>
                            <option value="1">ABAP</option>
                            <option value="2">ABAP chimba</option>
                            <option value="3">ABAP chimba x2</option>
                        </select>
                    </div>
                    <div class="custom-file col-md-6">
                        <label for="inputContactNumber">Contact number</label>
                        <input type="file" class="custom-file-input" id="validatedCustomFile" required />
                        <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">I have read and accept the <a href="#">Terms and conditions</a> and the use of my data in accordance with the Habeas Data Law.</label>
                        </div>
                    </div>
                    <div className="content-center">
                        <button type="submit" className="btn btn-primary ">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
