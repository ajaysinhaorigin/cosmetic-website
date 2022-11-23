import React from "react";
import "./ShopByBrands.css";
import {shopByBrandsData} from "./ShopByBrandsData/shopByBrandsData";
import Slider from "react-slick";

function ShopByBrands() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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
    <div className="container home_components p-5 mb-4">
      <div className="text-center">
        <h1>Shop By Brands</h1>
      </div>
      <div>
        <Slider {...settings}>
          {shopByBrandsData.map((shopbybranddata) => {
            return (
              <React.Fragment key={shopbybranddata.id}>
                <div className="shopbybrand-img p-1 mx-1">
                  <img src={shopbybranddata.img} alt="" />
                </div>
              </React.Fragment>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default ShopByBrands;
