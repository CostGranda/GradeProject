import React, { useState } from "react";
import { BASE_ENDPOINT } from "../../../constanst";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { green } from "@material-ui/core/colors";

function UploadFile({ cedula, setCv }) {
  const [nameFile, setNameFile] = useState("");

  const handleFile = async e => {
    const file = e.target.files[0];
    setNameFile(file.name);
    let formData = new FormData();
    formData.append("file", file);
    const response = await fetch(`${BASE_ENDPOINT}upload/${cedula}`, {
      method: "PUT",
      body: formData,
      mode: "cors"
    });
    if (response.ok) {
      const dataResponse = await response.json();
      setCv(dataResponse.cv);
    }
  };

  return (
    <div className="form-row col-md-6">
      <div className="custom-group col-md-12">
        <label htmlFor="inputFile">Subir archivo</label>
        <br></br>
      </div>
      <div className="custom-file col-md-6">
        <input
          type="file"
          className="custom-file-input"
          id="validatedCustomFile"
          onChange={handleFile}
          accept=".pdf"
        />
        {nameFile === "" ? (
          <label className="custom-file-label" htmlFor="validatedCustomFile">
            Subir archivo...
          </label>
        ) : (
          <label className="custom-file-label" htmlFor="validatedCustomFile">
            {nameFile}
          </label>
        )}
      </div>
      {nameFile === "" ? null : (
        <div className="custom-group col-md-6">
          <CheckCircleIcon style={{ color: green[500] }} />
        </div>
      )}
    </div>
  );
}

UploadFile.propTypes = {};

export default UploadFile;
