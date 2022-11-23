import React from "react";
import {socialMediaData} from "./SocialMediaData/socialMediaData";
import "./SocialMedia.css";
import Slider from "react-slick";

function SocialMedia() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="container p-5 home_components mb-4">
      <div className="text-center">
        <h1>Our Social Media Channels</h1>
        <p>Stay tuned for Updates</p>
      </div>
      <div className="container d-flex">
        {socialMediaData.map((todaydeal) => {
          return (
            <React.Fragment key={todaydeal.id}>
              <div className="todaysdeals-img p-1">
                <img src={todaydeal.icon} alt="" />
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="social_media_slider">
        <Slider {...settings}>
          {socialMediaData.map((todaydeal) => {
            return (
              <React.Fragment key={todaydeal.id}>
                <div className="todaysdeals-img p-1">
                  <img src={todaydeal.img} alt="" />
                </div>
              </React.Fragment>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default SocialMedia;
