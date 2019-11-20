import React, { Component } from 'react';
import './UpdateForm.scss';

export default class componentName extends Component {
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
      calification = this.calificationRef.current.value,
      state = this.stateRef.current.value,
      origin = this.originRef.current.value;

    console.log(identification);
    console.log(names);
    console.log(surnames);
    console.log(city);
    console.log(email);
    console.log(number);
    console.log(specialties);
    console.log(date);
    console.log(comments);
    console.log(calification);
    console.log(state);
    console.log(origin);
  };

  render() {
    return (
      <div className='update'>
        <h3 className='update-title'>Update Applicant</h3>
        <form className='update-form' onSubmit={this.updateRow}>
          <div className='form-row col-md-6'>
            <label htmlFor='inputId4'>Identification number</label>
            <input
              ref={this.identificationRef}
              type='number'
              className='form-control'
              id='inputId4'
              placeholder='Identification number'
            />
          </div>
          <div className='form-row col-md-6'>
            <div className='form-group col-md-6'>
              <label htmlFor='inputName4'>Names</label>
              <input
                ref={this.namesRef}
                type='text'
                className='form-control'
                id='inputName4'
                placeholder='Names'
              />
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='inputSurname4'>Surnames</label>
              <input
                ref={this.surnamesRef}
                type='text'
                className='form-control'
                id='inputSurname4'
                placeholder='Surnames'
              />
            </div>
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='city4'>City</label>
            <input
              ref={this.cityRef}
              type='text'
              className='form-control'
              id='inputCity4'
              placeholder='City'
            />
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='inputEmail4'>Email</label>
            <input
              ref={this.emailRef}
              type='email'
              className='form-control'
              id='inputEmail4'
              placeholder='Email'
            />
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='inputContactNumber'>Contact number</label>
            <input
              ref={this.numberRef}
              type='number'
              className='form-control'
              id='inputContactNumber'
              placeholder='Contact number'
            />
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='inputContactNumber'>Specialties</label>
            <select
              ref={this.specialtiesRef}
              className='custom-select'
              required
            >
              <option value=''>Choose options...</option>
              <option value='ABAP'>ABAP</option>
              <option value='SD'>SD</option>
              <option value='FI'>FI</option>
            </select>
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='inputDate4'>Date</label>
            <input
              ref={this.dateRef}
              type='date'
              className='form-control'
              id='inputDate4'
              placeholder='Date'
            />
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='inputcomments4'>Comments</label>
            <input
              ref={this.commentsRef}
              type='text'
              className='form-control'
              id='inputComments4'
              placeholder='Comments'
            />
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='inputCalification'>Calification</label>
            <select
              ref={this.calificationRef}
              className='custom-select'
              required
            >
              <option value=''>Choose options...</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='inputState'>State</label>
            <select ref={this.stateRef} className='custom-select' required>
              <option value=''>Choose options...</option>
              <option value='Hired'>Hired</option>
              <option value='In process'>In process</option>
            </select>
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='inputOrigin'>Origin</label>
            <select ref={this.originRef} className='custom-select' required>
              <option value=''>Choose options...</option>
              <option value='Manual'>Manual</option>
              <option value='Automatic'>Automatic</option>
            </select>
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='inputFile'>Choose file</label>
            <br></br>
            <div className='custom-file col-md-6'>
              <input
                type='file'
                className='custom-file-input'
                id='validatedCustomFile'
              />
              <label
                className='custom-file-label'
                htmlFor='validatedCustomFile'
              >
                Choose file...
              </label>
            </div>
          </div>
          <div className=' col-md-6'>
            <button type='submit' className='btn btn-primary '>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
