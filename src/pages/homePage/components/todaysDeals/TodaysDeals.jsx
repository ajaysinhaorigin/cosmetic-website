import React from "react";
import "./TodaysDeals.css";
import { todaysDealsData } from "./TodaysDealsData/todaysDealsData";
import Slider from "react-slick";

function TodaysDeals() {
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
    <div className="container p-5 home_components mb-4">
      <div className="text-center">
        <h1>Today's Deals</h1>
      </div>
      <div>
        <Slider {...settings}>
          {todaysDealsData.map((todaydeal) => {
            return (
              <React.Fragment key={todaydeal.id}>
                <div className="p-2">
                  <div className="todaysdeals-img">
                    <img src={todaydeal.img} alt="" />
                  </div>
                  <span className="todayDeal_span1">{todaydeal.off}</span>
                  <span className="todayDeal_span2">{todaydeal.Deal}</span>
                </div>
              </React.Fragment>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default TodaysDeals;
