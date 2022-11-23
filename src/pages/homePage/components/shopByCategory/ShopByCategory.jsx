import React from "react";
import "./shopByCategory.css";
import categoryData from "./shopbycategory/categoryData";
import Slider from "react-slick";

function NewArrival() {
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
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="home_components shop_by_category container mt-4 mb-4 pt-3">
      <div className="text-center">
        <h3 className=" fw-bolder">Shop by Category</h3>
      </div>
      <div className="container d-flex text-center">
        <div className="main-shopbycategory-images container">
          <Slider {...settings}>
            {categoryData.map((data) => {
              return (
                <React.Fragment key={data.id}>
                  <div className="px-3">
                    <div className="shopbycategory-img p-1">
                      <img src={data.img} alt="" />
                    </div>
                    <h6 className="text-center">{data.product}</h6>
                  </div>
                </React.Fragment>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
