import React from "react";
import "./Card.css";
const Card = ({ img, title, disc }) => {
  return (
    <>
      <div className='col'>
        <div className='card-img'>
          <img src={img} className='card-pic' />
          <div className='card-overlay'>
            <div className='card-title'>
              <h4>{title}</h4>
            </div>
            <p className='disc'>{disc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
