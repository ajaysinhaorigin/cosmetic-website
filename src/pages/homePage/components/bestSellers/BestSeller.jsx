import React from "react";
import { bestSellerData } from "./BestSellerData/bestSellerData";
import "./BestSeller.css";
import Slider from "react-slick";

function BestSeller() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="container home_components p-5 mb-4">
      <div className="text-center">
        <h1>Best Sellers</h1>
      </div>
      <div>
        <Slider {...settings}>
          {bestSellerData.map((bestsellerdata) => {
            return (
              <React.Fragment key={bestsellerdata.id}>
                <div className="bestsellers-img p-1 px-2">
                  <img src={bestsellerdata.img} alt="" />
                </div>
              </React.Fragment>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default BestSeller;
