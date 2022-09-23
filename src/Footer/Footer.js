import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer id='mian-footer'>
        <div className='container'>
          <section className='justify-content-lg-between p-4 border-bottom footer row'>
            <div className='content col-sm-12 col-md-6 col-lg-4'>
              <h5> recent blog</h5>
              <div style={{ border: "1px solid darkgray" }}></div>
              <p className='intro'>
                Best iOS Apps Development Services In Town!
              </p>
              <i className='fa fa-clock-o' style={{ color: "#f2a91e" }}>
                <span> June 22, 2017</span>
              </i>
              <p className='intro'>
                Enter Into An Era Of Mobile App Design Services!
              </p>
              <i className='fa fa-clock-o' style={{ color: "#f2a91e" }}>
                <span> June 22, 2017</span>
              </i>
            </div>
            <div className='content col-sm-12 col-md-6 col-lg-4'>
              <h5>extra links</h5>
              <div style={{ border: "1px solid darkgray" }}></div>
              <ul style={{ padding: "4px" }}>
                <li>About us</li>
                <li>Contact</li>
                <li>service</li>
              </ul>
            </div>
            <div className='content col'>
              <h5>like us on facebook</h5>
              <div style={{ border: "1px solid darkgray" }}></div>
              <p>Following on facebook</p>
            </div>
          </section>
          <div className='footer-text row'>
            <div className='col-lg-6 col-md-12'>
              <p style={{ color: "darkgray" }}>
                Copyright © 2020 AppsGenii Technologies (Pvt) Ltd.
              </p>
            </div>
            <div className='col-lg-6 iconfooter'>
              <i className='fa fa-facebook' style={{ marginRight: "20px" }}></i>
              <i
                className='fa fa-linkedin-square'
                style={{ marginRight: "20px" }}
              ></i>
              <i className='fa fa-twitter' style={{ marginRight: "20px" }}></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
