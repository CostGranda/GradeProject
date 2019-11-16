import React from "react";
import "../CSS/mesagge.css";

export default function Message({ message, property }) {
  return (
    <div className={`container-mensaje-${property}`}>
      <h2> {message} </h2>{" "}
    </div>
  );
}
