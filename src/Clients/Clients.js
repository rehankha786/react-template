import React from "react";
import "./Clients.css";

const Clients = ({ clientitem }) => {
  return (
    <div className='col'>
      <img src={clientitem} className='client-img' />
    </div>
  );
};

export default Clients;
