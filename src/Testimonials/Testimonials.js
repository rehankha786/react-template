import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const testimonial = [
    {
      cardtitle: "“Satisfied Clients”",
      cardsubtitle: " Erschel, CEO at Pixilify",
      cardtext:
        " The thing I like best is their Service. Whenever I have a question, or need help, they have come through for me. I’ll not ever consider moving to another service.",
    },
    {
      cardtitle: "“Best Strategies”",
      cardsubtitle: "Faisal, CEO at Driver",
      cardtext:
        " Strengthen our online visibility with best strategies of SEO,branding, e-commerce, content and social media marketing. Thanks AppsGenii!",
    },
    {
      cardtitle: "“Easy / Support”",
      cardsubtitle: " Bruce, CEO at Seasonal Bids Inc.",
      cardtext:
        "Whenever I think of AppsGenii, I think of two things: easy to use and support whenever I need it.",
    },
    {
      cardtitle: "“Business Solutions”",
      cardsubtitle: " Denise, CEO at GoingNonStop Inc.",
      cardtext:
        "  Great business solutions, lots of information and very easy to deal with! Highly recommended to everyone.",
    },
    {
      cardtitle: "“Super Support”",
      cardsubtitle: "  Jason , CEO at LockBox",
      cardtext:
        " In a world full of fakes these guys are keeping things real by providing high class services. My iPhone app was created in just 2  weeks from scratch. They really took my idea and ran with it. Bestpart of it all is I only had to tell them the vague idea that I had scribbled down on a piece of paper and these guys turned intoa reality in just 2 weeks. They surely earned every dollar that I paid.",
    },
    {
      cardtitle: "Scott",
      cardsubtitle: "CEO",
      cardtext:
        "These guys definitely know their stuff. I wanted to have a mobile application for my online clothing store and had little to no ideawhat to do. Kudos to the managers who created the entire projectplan before kicking off the project so I could clearly understand    what I was getting in exchange for my money. Can’t wait to work  with those guys again.",
    },
  ];
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray",
          color: "white",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray",
          color: "white",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className='col '>
        <Slider {...settings}>
          {testimonial.map((cardItem) => {
            return (
              <div style={{ width: "18rem" }}>
                <h5>{cardItem.cardtitle}</h5>
                <h6 className=' mb-2 text-muted'>{cardItem.cardsubtitle}</h6>
                <p>{cardItem.cardtext}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Testimonials;
