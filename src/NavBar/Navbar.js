import React from "react";
import logo from "../image/appsgenii-logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className='navbar-navbar'>
      <nav class='navbar navbar-expand-lg container-fluid d-flex'>
        <div className='brand'>
          <a className='navbar-brand' href='#'>
            <img src={logo} style={{ height: "50px" }} />
          </a>
        </div>
        <div>
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <ul className='navbar-nav '>
              <li className='nav-item'>
                <b>Home</b>
              </li>
              <li className='nav-item'>
                <b>About</b>
              </li>
              <li className='nav-item '>
                <b>Blogs</b>
              </li>
              <li className='nav-item'>
                <b> Contact</b>
              </li>

              <li className='nav-item'>
                <i className='fa fa-twitter'></i>
              </li>
              <li className='nav-item'>
                <i className='fa fa-facebook'></i>
              </li>
              <li className='nav-item'>
                <i className='fa fa-linkedin-square'></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
