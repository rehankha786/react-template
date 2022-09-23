import React from "react";
import "./App.css";
import Card from "./Cards/Card";
import TopHeader from "./Header/TopHeader";
import Contaxt from "./Contaxt/Contaxt";
import adv1 from "./image/how-we-work.jpeg";
import adv2 from "./image/service.jpeg";
import adv3 from "./image/Banner.jpg";
import adv4 from "./image/iOS-App.png";
import Industries from "./Industries/Industries";
import { Container } from "react-bootstrap";
import MobileApp from "./MobileApps/MobileApp";
import Blogs from "./Blogs/Blogs";
import Testimonials from "./Testimonials/Testimonials";
import Input from "./Input/Input";
import Footer from "./Footer/Footer";
import Clients from "./Clients/Clients";
import adv6 from "./image/Veiliux.png";
import adv7 from "./image/Untangle.png";
import adv8 from "./image/Tapto-Book.png";
import adv9 from "./image/Sharengo.png";
import adv10 from "./image/Veiliux.png";
import adv11 from "./image/Shoonze.png";
import adv12 from "./image/Serviceman.png";
import Slider from "react-slick";
import Navbar from "./NavBar/Navbar";
import MainHeader from "./MainHeader/MainHeader";

const App = () => {
  const card = [
    {
      imgurl: adv1,
      title: "Why AppsGenii !",
      disc: " We are a team of technological experts in with full scale experience in Digital Marketing, Web Apps & Mobile Apps Development.",
    },
    {
      title: "	HOW WE WORK?",
      imgurl: adv2,
      disc: "We combine our capabilities with an iterative, refined process to launch digital marketing solutions",
    },
    {
      title: "	Thought Leadership",
      imgurl: adv3,
      disc: "A solution is proposed, from here you can action the plan with just outline assistance.",
    },
  ];
  const idustieitem = [
    {
      title: "Mobile App(Android and IOS )Development",
      disc: "Our team of passionate strategists, experienced web designers,  and smart engineers has the skills to bring your ideas to life with the help of a Mobile App",
    },
    {
      title: "Social Media Marketing",
      disc: "We usually perceive social media marketing to promote website or mobile app on various social media Platforms.",
    },
    {
      title: "Cross Platform Mobile Development",
      disc: "We have build the many innovative cross platform mobile apps for several categories and industries including e-commerce, travel, entertainment, photography.",
    },
    {
      title: "Website Design & Development",
      disc: "If youre looking to sell your products or services online, or youre already using some e-commerce platform and looking to generate more business.",
    },
    {
      title: "Branding & Online Marketing",
      disc: "We ensure, with our Social Media Services, your business can quickly access to millions of potential customers just through key social media sites.",
    },
    {
      title: "Search Engine Optimization",
      disc: "Our prioritize goal is to increase your business leads, calls and sales through our Search Engine Optimization Services done right.",
    },
  ];
  const blogs = [
    {
      blogimg: adv1,
      dialog: "Best iOS Apps Development Services In Town!",
      date: "June 22, 2017",
    },
    {
      blogimg: adv4,
      dialog: "Enter Into An Era Of Mobile App Design Services!",
      date: "June 22, 2017",
    },
    {
      blogimg: adv3,
      dialog: "Do You Believe In Smart Web Development Services?",
      date: "June 16, 2017",
    },
    {
      blogimg: adv4,
      dialog: "Why Need AppsGenii For Web Designing Services?",
      date: "June 14, 2017",
    },
  ];
  const clients = [
    {
      clientImg: adv6,
    },
    {
      clientImg: adv7,
    },
    {
      clientImg: adv8,
    },
    {
      clientImg: adv9,
    },
    {
      clientImg: adv10,
    },
    {
      clientImg: adv11,
    },
    {
      clientImg: adv12,
    },
  ];

  const setting = {
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
    ],
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#2f2f2f",
        }}
      >
        <Container>
          <TopHeader />
        </Container>
      </div>

      <Navbar />

      <div className='d-lg-block d-none'>
        <MainHeader />
      </div>
      <div className='Quote '>
        <div className='container'>
          <Contaxt />
        </div>
      </div>

      <div className='card--container'>
        <div className='container'>
          <div className='row'>
            {card.map((item) => {
              return (
                <Card img={item.imgurl} title={item.title} disc={item.disc} />
              );
            })}
          </div>
        </div>
      </div>
      <div className='industries'>
        <h2 className='heading'>Industries</h2>
        <div className='border-bottam'></div>
        <div className='container'>
          <div className='row'>
            {idustieitem.map((items) => {
              return <Industries title={items.title} disc={items.disc} />;
            })}
          </div>
        </div>
      </div>
      <div className='testimonials'>
        <h2 className='heading-testimonial'>testimonials</h2>
        <div className='border-bottam'></div>
        <div className='container'>
          <div className='row'>
            <Testimonials />
          </div>
        </div>
      </div>

      <div className='clients'>
        <h2 className='heading-client'>Our Clients</h2>
        <div className='border-bottam'></div>
        <div className='container'>
          <div className='row'>
            <Slider {...setting}>
              {clients.map((clientitem) => {
                return <Clients clientitem={clientitem.clientImg} />;
              })}
            </Slider>
          </div>
        </div>
      </div>

      <div className='mobileapp'>
        <Container>
          <MobileApp />
        </Container>
      </div>
      <div className='blog'>
        <h1 className='heading-blog'>Blogs</h1>
        <div className='container'>
          <div className='row'>
            {blogs.map((blogitem) => {
              return (
                <Blogs
                  blogimg={blogitem.blogimg}
                  dialog={blogitem.dialog}
                  date={blogitem.date}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className='input-div'>
        <div className='container'>
          <div className='row'>
            <Input />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default App;
