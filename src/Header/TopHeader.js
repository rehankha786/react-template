import "./TopHeader.css";
import React from "react";
import { Nav } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
const TopHeader = () => {
  return (
    <Nav className='NavBar d-lg-flex d-none '>
      <div className='paraIcon'>
        <i
          className='fa fa-map-marker'
          style={{ fontSize: "20px" }}
          id='map-icon'
        ></i>
        <p>
          22-S, Imperial Commercial Block, Paragon City, Barki Road Lahore,
          Pakistan
        </p>
      </div>
      <div className='paraIcon'>
        <i
          className='fa fa-clock-o'
          style={{ fontSize: "20px" }}
          id='map-icon'
        ></i>
        <p>Mon - Sat 9.00 - 6.00</p>
      </div>
      <div className='paraIcon'>
        <i
          className='fa fa-phone'
          style={{ fontSize: "20px" }}
          id='map-icon'
        ></i>
        <p>+92 (332) 2777436</p>
      </div>
    </Nav>
  );
};

export default TopHeader;
