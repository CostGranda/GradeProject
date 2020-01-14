import React, { Component } from 'react';
import './UpdateForm.scss';
import { BASE_ENDPOINT } from '../../constanst';
import localServices from '../services/LocalStorageService';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default class componentName extends Component {
  state = {
    identification: '',
    Date: '',
    description: '',
    names: '',
    surnames: '',
    applicant: ''
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
          label: 'Okey'
        }
      ]
    });

    const overlay = document.querySelector('.react-confirm-alert-overlay');
    overlay.classList.add('react-confirm-alert-overlay--error');
  };

  redirict = () => {
    this.props.history.push('/ApplicantTable');
  };

  modalShow = () => {
    confirmAlert({
      title: 'Successful registration',
      message: 'Do you want to create a new record?',
      buttons: [
        {
          label: 'Yes'
        },
        {
          label: 'No',
          onClick: () => this.redirict()
        }
      ]
    });

    const overlay = document.querySelector('.react-confirm-alert-overlay');
    overlay.classList.add('react-confirm-alert-overlay--success');
  };

  updateRow = async event => {
    event.preventDefault(); //Detener la funcion por defecto
    const token = localServices.getCurrentAccountId('token');
    const response = await fetch(`${BASE_ENDPOINT}alerts`, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        Authorization: `Bearer ${token.token}`,
        'content-type': 'application/json'
      },
      mode: 'cors'
    });
    if (response.status === 200) {
      this.setState({
        identification: '',
        Date: '',
        description: '',
        names: '',
        surnames: '',
        applicant: ''
      });
      this.modalShow();
    } else if (response.status === 304) {
      this.modalShowError('Error', 'The applicant already has an associated alert');
    } else if (response.status === 406) {
      this.modalShowError(
        'Error',
        "The date isn't valid, please verify"
      );
    } else if (response.status === 204) {
      this.modalShowError(
        'Error',
        "The ID isn't related to any applicant"
      );
    } else {
      this.modalShowError(
        'Error',
        'Registration failed, try again'
      );
    }
  };

  render() {
    return (
      <div className='update'>
        <h3 className='update-title'> Create Alarm </h3>{' '}
        <form className='update-form' onSubmit={this.updateRow}>
          <div className='form-row col-md-6'>
            <div className='form-group col-md-6'>
              <label htmlFor='inputId4'> Identification number </label>{' '}
              <input
                value={this.state.identification}
                type='number'
                className='form-control'
                id='inputId4'
                placeholder='Identification number'
                onChange={e => this.handleInput(e, 'identification')}
              />{' '}
            </div>{' '}
            <div className='form-group col-md-6'>
              <label htmlFor='inputName4'> Date </label>{' '}
              <input
                value={this.state.Date}
                type='date'
                className='form-control'
                id='inputName4'
                onChange={e => this.handleInput(e, 'Date')}
              />{' '}
            </div>{' '}
          </div>{' '}
          <div className='form-row col-md-6'>
            <div className='form-group col-md-12'>
              <label htmlFor='inputSurname4'> Description </label>{' '}
              <textarea
                value={this.state.description}
                class='form-control rounded-0'
                id='exampleFormControlTextarea2'
                rows='3'
                onChange={e => this.handleInput(e, 'description')}
              ></textarea>{' '}
            </div>{' '}
          </div>{' '}
          <div className=' col-md-6'>
            <button type='submit' className='btn btn-primary '>
              Submit{' '}
            </button>{' '}
          </div>{' '}
        </form>{' '}
      </div>
    );
  }
}
