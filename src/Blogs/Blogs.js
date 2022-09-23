import React from "react";
import "./Blogs.css";
import "font-awesome/css/font-awesome.min.css";
const Blogs = ({ blogimg, dialog, date }) => {
  return (
    <div className='col'>
      <div className='blog-container'>
        <img src={blogimg} className='blog-img' />
      </div>
      <div className='blog-border'></div>
      <h5 className='dialog'>{dialog}</h5>
      <i className='fa fa-clock-o blog-icon' style={{ fontSize: "14px" }}>
        <span className='date'>{date}</span>
      </i>
    </div>
  );
};
export default Blogs;
