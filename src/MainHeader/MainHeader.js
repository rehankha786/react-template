import React from "react";
import "./MainHeader.css";
import homeslide from "../image/home-slide-1.jpg";
import security from "../image/security.jpeg";
import Slider from "react-slick";
const MainHeader = () => {
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "block",
  //         background: "red",
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "block",
  //         background: "red",
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  const sliderSetting = {
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...sliderSetting}>
      <div className='homeImg'>
        <img src={homeslide} style={{ width: "100%", height: "81vh" }} />
        <h3 className='homeImg-h3'>
          Let us help you convert your ideas
          <br /> to reality Today
        </h3>
        <p className='homeImg-p'>
          Meet thye experts and get your dream ideas converted reality today
        </p>
        <button className='homeImg-btn'>
          Our services
          <i
            class='fa fa-solid fa-chevron-right'
            style={{ paddingLeft: "20px" }}
          ></i>
        </button>
      </div>
      <div className='securityImg'>
        <img src={security} style={{ width: "100%", height: "81vh" }} />
        <h1 className='securityImg-h1'>get your apps Website Edit Today</h1>
        <p className='securityImg-p'>
          Meet thye experts and get your dream ideas converted reality today
        </p>
        <button className='securityImg-btn'>
          Our services
          <i
            class='fa fa-solid fa-chevron-right'
            style={{ paddingLeft: "20px" }}
          ></i>
        </button>
      </div>
      <div className='homeImg'>
        <img src={homeslide} style={{ width: "100%", height: "81vh" }} />
        <h3 className='homeImg-h3'>
          Let us help you convert your ideas
          <br /> to reality Today
        </h3>
        <p className='homeImg-p'>
          Meet thye experts and get your dream ideas converted reality today
        </p>
        <button className='homeImg-btn'>
          Our services
          <i
            class='fa fa-solid fa-chevron-right'
            style={{ paddingLeft: "20px" }}
          ></i>
        </button>
      </div>
    </Slider>
  );
};

export default MainHeader;
