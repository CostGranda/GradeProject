import React, { Component } from "react";
import { BASE_ENDPOINT } from "../../constanst";
import "./UpdateForm.scss";
import localServices from "../services/LocalStorageService";
import UploadFile from "../components/UploadFile";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default class componentName extends Component {
  state = {
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
    origen: "Manual",
    cv: ""
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
          label: "Okey"
        }
      ]
    });

    const overlay = document.querySelector(".react-confirm-alert-overlay");
    overlay.classList.add("react-confirm-alert-overlay--error");
  };

  redirict = () => {
    this.props.history.push("/Empty");
  };

  modalShow = () => {
    confirmAlert({
      title: "Registro exitoso",
      message: "Desea crear un nuevo regitro?",
      buttons: [
        {
          label: "Yes"
        },
        {
          label: "No",
          onClick: () => this.redirict()
        }
      ]
    });

    const overlay = document.querySelector(".react-confirm-alert-overlay");
    overlay.classList.add("react-confirm-alert-overlay--success");
  };

  updateRow = async event => {
    event.preventDefault(); //Detener la funcion por defecto
    const token = localServices.getCurrentAccountId("token");
    const response = await fetch(`${BASE_ENDPOINT}applicants`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Authorization: `Bearer ${token.token}`,
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
        origen: "",
        cv: ""
      });
      this.modalShow();
    } else if (response.status === 200) {
      this.modalShowError("Error", "Usuario ya esta registrado en nuestra DB");
    } else if (response.status === 400) {
      this.modalShowError("Error", "Usuario ya registrado en la base de datos");
    } else if (response.status === 406) {
      this.modalShowError("Error", "Por favor ingrese una fecha valida");
    } else {
      this.modalShowError(
        "Error",
        "Error al realizar el registro, intente de nuevo"
      );
    }
  };

  render() {
    return (
      <div className="update">
        <h3 className="update-title"> Create Applicant </h3>{" "}
        <form className="update-form" onSubmit={this.updateRow}>
          <div className="form-row col-md-6">
            <label htmlFor="inputId4"> Identification number </label>{" "}
            <input
              value={this.state.cedula}
              type="number"
              className="form-control"
              id="inputId4"
              placeholder="Identification number"
              onChange={e => this.handleInput(e, "cedula")}
            />{" "}
          </div>{" "}
          <div className="form-row col-md-6">
            <div className="form-group col-md-6">
              <label htmlFor="inputName4"> Names </label>{" "}
              <input
                value={this.state.nombres}
                type="text"
                className="form-control"
                id="inputName4"
                placeholder="Names"
                onChange={e => this.handleInput(e, "nombres")}
              />{" "}
            </div>{" "}
            <div className="form-group col-md-6">
              <label htmlFor="inputSurname4"> Surnames </label>{" "}
              <input
                value={this.state.apellidos}
                type="text"
                className="form-control"
                id="inputSurname4"
                placeholder="Surnames"
                onChange={e => this.handleInput(e, "apellidos")}
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="form-group col-md-6">
            <label htmlFor="city4"> City </label>{" "}
            <input
              value={this.state.ciudad}
              type="text"
              className="form-control"
              id="inputCity4"
              placeholder="City"
              onChange={e => this.handleInput(e, "ciudad")}
            />{" "}
          </div>{" "}
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4"> Email </label>{" "}
            <input
              value={this.state.email}
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              onChange={e => this.handleInput(e, "email")}
            />{" "}
          </div>{" "}
          <div className="form-group col-md-6">
            <label htmlFor="inputContactNumber"> Contact number </label>{" "}
            <input
              value={this.state.telefonos}
              type="number"
              className="form-control"
              id="inputContactNumber"
              placeholder="Contact number"
              onChange={e => this.handleInput(e, "telefonos")}
            />{" "}
          </div>{" "}
          <div className="form-group col-md-6">
            <label htmlFor="inputContactNumber"> Specialties </label>{" "}
            <select
              value={this.state.especialidades}
              className="custom-select"
              required
              onChange={e => this.handleInput(e, "especialidades")}
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
          <div className="form-group col-md-6">
            <label htmlFor="inputDate4"> Availability </label>{" "}
            <input
              value={this.state.disponibilidad}
              type="date"
              className="form-control"
              id="inputDate4"
              placeholder="Date"
              onChange={e => this.handleInput(e, "disponibilidad")}
            />{" "}
          </div>{" "}
          <div className="form-group col-md-6">
            <label htmlFor="inputcomments4"> Comments </label>{" "}
            <input
              value={this.state.comentarios}
              type="text"
              className="form-control"
              id="inputComments4"
              placeholder="Comments"
              onChange={e => this.handleInput(e, "comentarios")}
            />{" "}
          </div>{" "}
          <div className="form-group col-md-6">
            <label htmlFor="inputCalification"> Calification </label>{" "}
            <select
              value={this.state.calificacion}
              className="custom-select"
              required
              onChange={e => this.handleInput(e, "calificacion")}
            >
              <option value=""> Choose options... </option>{" "}
              <option value="1"> 1 </option> <option value="2"> 2 </option>{" "}
              <option value="3"> 3 </option> <option value="4"> 4 </option>{" "}
              <option value="5"> 5 </option> <option value="6"> 6 </option>{" "}
              <option value="7"> 7 </option> <option value="8"> 8 </option>{" "}
              <option value="9"> 9 </option> <option value="10"> 10 </option>{" "}
            </select>{" "}
          </div>{" "}
          <div className="form-group col-md-6">
            <label htmlFor="inputState"> State </label>{" "}
            <select
              value={this.state.state}
              className="custom-select"
              required
              onChange={e => this.handleInput(e, "state")}
            >
              <option value=""> Choose options... </option>{" "}
              <option value="contratado"> Hired </option>{" "}
              <option value="En proceso"> In process </option>{" "}
            </select>{" "}
          </div>{" "}
          <UploadFile
            cedula={this.state.cedula}
            setCv={cv => this.setState({ cv })}
          />{" "}
          <div className=" col-md-6">
            <button type="submit" className="btn btn-primary ">
              Submit{" "}
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>
    );
  }
}
