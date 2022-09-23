import React from "react";
import "./AboutBtn.css";
const AboutBtn = () => {
  return (
    <div>
      <a href='https://www.appsgenii.com/wp-content/uploads/2018/10/AppsGenii-Portfolio.pdf'>
        <button className='pdf-btn'>
          <i className='fa fa-file-pdf-o' style={{ fontSize: "20px" }}>
            <span>compeny portfolio </span>
          </i>
        </button>
      </a>
      <div>
        <a href='https://www.appsgenii.com/wp-content/uploads/2018/10/AppsGenii-Portfolio.pdf'>
          <button className='pdf-btn2'>
            <i className='fa fa-file-pdf-o' style={{ fontSize: "20px" }}>
              <span>compeny portfolio </span>
            </i>
          </button>
        </a>
      </div>
      <div>
        <a href='https://www.appsgenii.com/wp-content/uploads/2018/10/AppsGenii-Portfolio.pdf'>
          <button className='pdf-btn' style={{ marginTop: "30px" }}>
            <i className='fa fa-file-pdf-o' style={{ fontSize: "20px" }}>
              <span>compeny portfolio </span>
            </i>
          </button>
        </a>
        <div className='card' id='card'>
          <div className='card-body'>
            <h5 className='card-title'>how can we help you</h5>
            <p className='card-text'>
              Is there anything that we can help you with, please dont hesitate
              to reach out? Were always ready for you!
            </p>
            <a href='#' className='btn btn-light' id='card-btn'>
              <i className='	fa fa-phone-square' style={{ fontSize: "20px" }}>
                contact
              </i>
            </a>
          </div>
        </div>
        <div className='card' id='cardBtn'>
          <div className='card-body'>
            <p>
              The thing I like best is their Service. Whenever I have a
              question, or need help, they have come through for me. Ill not
              ever consider moving to another service
            </p>
            <h6>
              “Satisfied Clients”
              <br />
              <span>Erschel, CEO at Pixilify</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBtn;
