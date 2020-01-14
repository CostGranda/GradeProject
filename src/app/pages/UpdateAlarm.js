import React, { Component } from 'react';
import { BASE_ENDPOINT } from '../../constanst';
import localServices from '../services/LocalStorageService';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './UpdateAlarm.scss';

export default class componentName extends Component {
  state = {
    identification: '',
    description: '',
    Date: ''
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
      title: 'Updated successfully',
      message: '',
      buttons: [
        {
          label: 'Exit',
          onClick: () => this.redirict()
        }
      ]
    });

    const overlay = document.querySelector('.react-confirm-alert-overlay');
    overlay.classList.add('react-confirm-alert-overlay--success');
  };

  updateRow = e => {
    e.preventDefault(); //Detener la funcion por defecto
  };

  componentDidMount() {
    let locationActual = window.location.pathname;
    const path = locationActual.split('/');
    const id = path[2];
    this.getAlarms(id);
  }

  getAlarms = async id => {
    const token = localServices.getCurrentAccountId('token');
    const URL = `${BASE_ENDPOINT}alerts/${id}`;
    const response = await fetch(`${URL}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.token}`
      },
      mode: 'cors'
    });

    let data = await response.json();
    this.setState(data);
    if (this.state.Date != null) {
      let date = this.state.Date.split('T');
      date = date[0];
      this.setState({
        Date: date
      });
    }
  };

  updateAlert = async e => {
    e.preventDefault(); //Detener la funcion por defecto
    const token = localServices.getCurrentAccountId('token');
    try {
      const response = await fetch(`${BASE_ENDPOINT}alerts`, {
        method: 'PUT',
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
          description: '',
          Date: ''
        });
        this.modalShow();
      } else if (response.status === 406) {
        this.modalShowError(
          'Error',
          "The applicant doesn't have an availability date"
        );
      } else if (response.status === 202) {
        this.modalShowError('Error', 'Enter other date');
      } else {
        this.modalShowError(
          'Error',
          'Cannot make change, try again'
        );
      }
    } catch {
      this.modalShowError(
        'Error',
        'Cannot make change, try again'
      );
    }
  };

  render() {
    return (
      <div className='alarm'>
        <h3 className='update-title'> Update Alarm </h3>{' '}
        <form onSubmit={this.updateAlert}>
          <div className='form-row col-md-6'>
            <label htmlFor='inputId4'> Identification number </label>{' '}
            <input
              value={this.state.identification}
              onChange={e => this.handleInput(e, 'identification')}
              type='number'
              disabled
              className='form-control'
            />
          </div>{' '}
          <div className='form-group col-md-6'>
            <label htmlFor='inputDate'> Date </label>{' '}
            <input
              type='date'
              className='form-control'
              value={this.state.Date}
              onChange={e => this.handleInput(e, 'Date')}
            />{' '}
          </div>{' '}
          <div className='form-group col-md-6'>
            <label htmlFor='exampleFormControlTextarea2'> Description </label>{' '}
            <textarea
              value={this.state.description}
              onChange={e => this.handleInput(e, 'description')}
              class='form-control rounded-0'
              rows='3'
            ></textarea>{' '}
          </div>{' '}
          <div className='content-center'>
            <button type='submit' className='btn btn-primary '>
              Submit{' '}
            </button>{' '}
          </div>{' '}
        </form>{' '}
      </div>
    );
  }
}
