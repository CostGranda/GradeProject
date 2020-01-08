import React from "react";

function UploadFile({ cedula, setCv }) {
  const handleFile = async e => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("file", file);
    const response = await fetch(
      `https://happy-test2.herokuapp.com/api/upload/${cedula}`,
      {
        method: "PUT",
        body: formData,
        mode: "cors"
      }
    );
    if (response.ok) {
      const dataResponse = await response.json();
      setCv(dataResponse.cv);
    }
  };

  return (
    <div className="form-group col-md-6">
      <label htmlFor="inputFile">Choose file</label>
      <br></br>
      <div className="custom-file col-md-6">
        <input
          type="file"
          className="custom-file-input"
          id="validatedCustomFile"
          onChange={handleFile}
        />
        <label className="custom-file-label" htmlFor="validatedCustomFile">
          Choose file...
        </label>
      </div>
    </div>
  );
}

UploadFile.propTypes = {};

export default UploadFile;
