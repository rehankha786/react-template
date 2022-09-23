import React from "react";
import "./Input.css";
const Input = () => {
  return (
    <>
      <div className='col-lg-4'>
        <h1 style={{ color: "white" }}>request a call back.</h1>
        <p style={{ color: "white" }}>
          Would you like to speak to one of our experts over the phone? Just
          submit your details and we’ll be in touch shortly. You can also email
          us if you would prefer.
        </p>
      </div>
      <div className='col-lg-4 col-md-12'>
        <form className='input-form'>
          <label style={{ color: "white" }}>I would like to discuss:</label>
          <select className='input-select'>
            <option>Android App Development service</option>
            <option>iOS App Development service</option>
            <option>Mobile App Design service</option>
            <option>Web Development service</option>
            <option>Search Engine Optimization service</option>
          </select>
          <input type='text' className='phone-input' placeholder='Phone' />
        </form>
      </div>
      <div className='col-lg-4 col-md-12'>
        <div>
          <input type='text' className='Name-input' placeholder='Name' />
          <br />
          <button className='input-btn'>
            submit
            <i
              class='fa fa-solid fa-chevron-right'
              style={{ paddingLeft: "25px" }}
            ></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
