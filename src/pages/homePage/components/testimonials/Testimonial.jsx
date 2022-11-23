import React from "react";
import "./testimonial.css";
import Slider from "react-slick";
import testimonialImg from "../../../../assets/homePageAssets";
// import algelina from "./testimonial-images/a1.png";
// import jackson from "./testimonial-images/a2.png";
// import david from "./testimonial-images/a3.png";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container pt-5 pb-5 home_components mb-4">
        <div className="text-center">
          <h1>Testimonials</h1>
        </div>

        <div className="testimonial-slider">
          <Slider {...settings}>
            <div className="testimonial-person">
              <div className="testimonial-img">
                <img src={testimonialImg.a1} alt="" />
              </div>
              <div className="px-1">
                <h5 className="m-0">Angelina Frederic</h5>
                <strong>Head of maketing from k mart</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="testimonial-person">
              <div className="testimonial-img">
                <img src={testimonialImg.a2} alt="" />
              </div>
              <div className="px-1">
                <h5 className="m-0">Angelina Frederic</h5>
                <strong>CEO of redbull</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="testimonial-person ">
              <div className="testimonial-img">
                <img src={testimonialImg.a3} alt="" />
              </div>
              <div className="px-1">
                <h5 className="m-0">Angelina Frederic</h5>
                <strong>Resident Dj at lbiza</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="testimonial-person">
              <div className="testimonial-img">
                <img src={testimonialImg.a2} alt="" />
              </div>
              <div className="px-1">
                <h5 className="m-0">Angelina Frederic</h5>
                <strong>Resident Dj at lbiza</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="testimonial-person ">
              <div className="testimonial-img">
                <img src={testimonialImg.a3} alt="" />
              </div>
              <div className="px-1">
                <h5 className="m-0">Angelina Frederic</h5>
                <strong>CEO of redbull</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
