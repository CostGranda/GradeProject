import React, { Component } from "react";
import UploadFile from "../components/UploadFile";
import "./ApplicantForm.scss";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { BASE_ENDPOINT } from "../../constanst";

export default class componentName extends Component {
  state = {
    cedula: "",
    nombres: "",
    apellidos: "",
    ciudad: "",
    telefonos: "",
    email: "",
    especialidades: "",
    disponibilidad: "",
    comentarios: "",
    state: "",
    calificacion: "1",
    origen: "Auto",
    cv: ""
  };

  handleInput = (e, keyText) => {
    const value = e.target.value;
    this.setState({
      [keyText]: value
    });
  };

  modalShow = (title, message) => {
    confirmAlert({
      title: title,
      message: message,
      buttons: [
        {
          label: "Okey"
        }
      ]
    });
  };

  actualizar = async () => {
    try {
      const response = await fetch(`${BASE_ENDPOINT}applicants/applicant`, {
        method: "PUT",
        body: JSON.stringify(this.state),
        headers: {
          "content-type": "application/json"
        },
        mode: "cors"
      });
      if (response.status === 200) {
        this.setState({
          cedula: "",
          nombres: "",
          apellidos: "",
          ciudad: "",
          email: "",
          telefonos: "",
          especialidades: "",
          disponibilidad: "",
          comentarios: "",
          state: "",
          calificacion: "",
          origen: "",
          cv: ""
        });
        this.modalShow("Success", "Information updated successfully");
      } else if (response.status === 400) {
        this.modalShow("Error", "The applicant don't exist");
      }
    } catch {
      this.modalShow("Error", "Can't make change, try again");
    }
  };

  modalShowPut = () => {
    confirmAlert({
      title: "User already exist",
      message: "Do you want update your information in the database?",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.actualizar()
        },
        {
          label: "No"
        }
      ]
    });
  };

  registre = async e => {
    e.preventDefault();
    const response = await fetch(`${BASE_ENDPOINT}applicants`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "content-type": "application/json"
      },
      mode: "cors"
    });
    if (response.status === 201) {
      this.setState({
        cedula: "",
        nombres: "",
        apellidos: "",
        ciudad: "",
        telefonos: "",
        email: "",
        especialidades: "",
        disponibilidad: "",
        comentarios: "",
        state: "",
        calificacion: "",
        origen: ""
      });
      this.modalShow("Success", "User registered successfully");
    } else if (response.status === 200) {
      this.modalShowPut();
    } else if (response.status === 400) {
      this.modalShowPut();
    } else if (response.status === 406) {
      this.modalShow("Error", "Please enter a valid date");
    } else {
      this.modalShow("Error", "Registration failed, try again");
    }
  };

  render() {
    return (
      <div className="applicant">
        <h3 className="update-title">Register Applicant</h3>
        <form onSubmit={this.registre}>
          <div className="form-row col-md-6">
            <div className="form-group col-md-6">
              <label> Identification number </label>{" "}
              <input
                type="number"
                className="form-control"
                placeholder="Identification number"
                onChange={e => this.handleInput(e, "cedula")}
                required
                value={this.state.cedula}
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="form-row col-md-6">
            <div className="form-group col-md-6">
              <label> Names </label>{" "}
              <input
                type="text"
                className="form-control"
                placeholder="Names"
                onChange={e => this.handleInput(e, "nombres")}
                required
                value={this.state.nombres}
              />{" "}
            </div>{" "}
            <div className="form-group col-md-6">
              <label> Surnames </label>{" "}
              <input
                type="text"
                className="form-control"
                placeholder="Surnames"
                onChange={e => this.handleInput(e, "apellidos")}
                required
                value={this.state.apellidos}
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="form-group col-md-6">
            <label> Email </label>{" "}
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={e => this.handleInput(e, "email")}
              required
              value={this.state.email}
            />{" "}
          </div>{" "}
          <div className="form-group col-md-6">
            <label> Contact number </label>{" "}
            <input
              type="number"
              className="form-control"
              placeholder="Contact number"
              onChange={e => this.handleInput(e, "telefonos")}
              required
              value={this.state.telefonos}
            />{" "}
          </div>{" "}
          <div className="form-group col-md-6">
            <label> Specialties </label>{" "}
            <select
              onChange={e => this.handleInput(e, "especialidades")}
              className="custom-select"
              required
              value={this.state.especialidades}
            >
              <option value=""> Choose options... </option>{" "}
              <option value="ABAP"> ABAP </option>{" "}
              <option value="BC"> BC </option>{" "}
              <option value="BC-STMS"> BC - STMS </option>{" "}
              <option value="CO"> CO </option>{" "}
              <option value="CO-CCA"> CO - CCA </option>{" "}
              <option value="CO-CEL"> CO - CEL </option>{" "}
              <option value="CO-PC"> CO - PC </option>{" "}
              <option value="CO-PA"> CO - PA </option>{" "}
              <option value="CO-OPA"> CO - OPA </option>{" "}
              <option value="CO-ABC"> CO - ABC </option>{" "}
              <option value="FI"> FI </option>{" "}
              <option value="FI-GL"> FI - GL </option>{" "}
              <option value="FI-AP"> FI - AP </option>{" "}
              <option value="FI-AR"> FI - AR </option>{" "}
              <option value="FI-BL"> FI - BL </option>{" "}
              <option value="FI-FM"> FI - FM </option>{" "}
              <option value="FI-AA"> FI - AA </option>{" "}
              <option value="FI-LA"> FI - LA </option>{" "}
              <option value="FI-TM"> FI - TM </option>{" "}
              <option value="FI-SL"> FI - SL </option>{" "}
              <option value="HCM"> HCM </option>{" "}
              <option value="HR"> HR </option>{" "}
              <option value="HR-PA"> HR - PA </option>{" "}
              <option value="HR-EMP"> HR - EMP </option>{" "}
              <option value="HR-PD"> HR - PD </option>{" "}
              <option value="HR-PAY"> HR - PAY </option>{" "}
              <option value="HR-ECM"> HR - ECM </option>{" "}
              <option value="HR-PCP"> HR - PCP </option>{" "}
              <option value="HR-EDD"> HR - EDD </option>{" "}
              <option value="HR-TEM"> HR - TEM </option>{" "}
              <option value="HR-E-R"> HR - E - R </option>{" "}
              <option value="HR-ESS"> HR - ESS </option>{" "}
              <option value="HR-MSS"> HR - MSS </option>{" "}
              <option value="HR-TRV"> HR - TRV </option>{" "}
              <option value="HR-OM"> HR - OM </option>{" "}
              <option value="HR-BN"> HR - BN </option>{" "}
              <option value="HR-EHS"> HR - EHS </option>{" "}
              <option value="HR-TIM"> HR - TIM </option>{" "}
              <option value="HR-IS"> HR - IS </option>{" "}
              <option value="IM"> IM </option> <option value="LE"> LE </option>{" "}
              <option value="LE-SHP"> LE - SHP </option>{" "}
              <option value="LE-TRA"> LE - TRA </option>{" "}
              <option value="LE-WMS"> LE - WMS </option>{" "}
              <option value="LE-TRM"> LE - TRM </option>{" "}
              <option value="LE-IDW"> LE - IDW </option>{" "}
              <option value="LO"> LO </option>{" "}
              <option value="LO-BM"> LO - BM </option>{" "}
              <option value="LO-HU"> LO - HU </option>{" "}
              <option value="LO-VC"> LO - VC </option>{" "}
              <option value="LO-ECM"> LO - ECM </option>{" "}
              <option value="LO-CM"> LO - CM </option>{" "}
              <option value="LO-LIS"> LO - LIS </option>{" "}
              <option value="LO-MD"> LO - MD </option>{" "}
              <option value="LO-PR"> LO - PR </option>{" "}
              <option value="MM"> MM </option>{" "}
              <option value="MM-CBP"> MM - CBP </option>{" "}
              <option value="MM-PUR"> MM - PUR </option>{" "}
              <option value="MM-IM"> MM - IM </option>{" "}
              <option value="MM-IV"> MM - IV </option>{" "}
              <option value="MM-SRV"> MM - SRV </option>{" "}
              <option value="MM-EDI"> MM - EDI </option>{" "}
              <option value="MM-MRP"> MM - MRP </option>{" "}
              <option value="MM-IS"> MM - IS </option>{" "}
              <option value="PLM"> PLM </option>{" "}
              <option value="PM"> PM </option> <option value="PP"> PP </option>{" "}
              <option value="PP-PM"> PP - PM </option>{" "}
              <option value="PP-PI"> PP - PI </option>{" "}
              <option value="PP-E-HS"> PP - E - HS </option>{" "}
              <option value="PP-BD"> PP - BD </option>{" "}
              <option value="PP-SOP"> PP - SOP </option>{" "}
              <option value="PP-MP"> PP - MP </option>{" "}
              <option value="PP-CRP"> PP - CRP </option>{" "}
              <option value="PP-MRP"> PP - MRP </option>{" "}
              <option value="PP-SFC"> PP - SFC </option>{" "}
              <option value="PP-IS"> PP - IS </option>{" "}
              <option value="PS"> PS </option>{" "}
              <option value="SCM"> SCM </option>{" "}
              <option value="SD"> SD </option>{" "}
              <option value="SD-BF"> SD - BF </option>{" "}
              <option value="SD-MD"> SD - MD </option>{" "}
              <option value="SD-SLS"> SD - SLS </option>{" "}
              <option value="SD-LE-SHP"> SD - LE - SHP </option>{" "}
              <option value="SD-TRA"> SD - TRA </option>{" "}
              <option value="SD-FTT"> SD - FTT </option>{" "}
              <option value="SD-BILL"> SD - BILL </option>{" "}
              <option value="SD-CAS"> SD - CAS </option>{" "}
              <option value="SD-FT"> SD - FT </option>{" "}
              <option value="SD-EDI"> SD - EDI </option>{" "}
              <option value="SD-IS"> SD - IS </option>{" "}
              <option value="SEM"> SEM </option>{" "}
              <option value="QM"> QM </option>{" "}
            </select>{" "}
          </div>{" "}
          <UploadFile
            cedula={this.state.cedula}
            setCv={cv => this.setState({ cv })}
          />{" "}
          <div className="form-group col-md-6">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" required />
              <label className="form-check-label">
                I have read and accept the{" "}
                <a
                  target="_blank"
                  href="http://192.168.1.122/api/terms"
                >
                  {" "}
                  Terms and conditions{" "}
                </a>
                and the use of my data in accordance with the Habeas Data Law.{" "}
              </label>{" "}
            </div>{" "}
          </div>{" "}
          <button type="submit" className="btn btn-primary ">
            Submit{" "}
          </button>{" "}
        </form>{" "}
      </div>
    );
  }
}
