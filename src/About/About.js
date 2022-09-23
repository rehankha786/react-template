import React from "react";
import "./About.css";
import AboutCon from "./AboutCon";
import { Container } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import AboutBtn from "./AboutBtn";
import Footer from "./Footer";
const about = () => {
  return (
    <>
      <Container>
        <h1>About Us</h1>
        <div className='About'>
          <AboutCon />
          <AboutBtn />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default about;
