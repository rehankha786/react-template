import React from "react";
import "./Contaxt.css";
const Contaxt = () => {
  return (
    <div className='row'>
      <div className='col-md-8'>
        <h3 style={{ color: "black" }}>
          Looking for top rated Tech Agency?
          <br />
          <span style={{ color: "white" }}>
            Let us help you drill down your exact IT needs.
          </span>
        </h3>
      </div>
      <div className='col-md-4'>
        <button className='btn btn-dark' id='btn'>
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default Contaxt;
