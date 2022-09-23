import React from "react";
import "./Industries.css";
const Industries = ({ title, disc }) => {
  return (
    <>
      <div className='col-lg-4 col-md-6' id='industrie-card'>
        <h1>{title}</h1>
        <p>{disc}</p>
      </div>
    </>
  );
};

export default Industries;
