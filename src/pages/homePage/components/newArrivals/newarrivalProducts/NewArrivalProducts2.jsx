import React from "react";
import {newArrivalData} from "../NewArrivalData/newArrivalData";
import Slider from "react-slick";

function NewArrivalProducts2() {
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
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {newArrivalData.map((data) => {
          return (
            <React.Fragment key={data.id}>
              <div className="newarrival-img p-3">
                <img src={data.img} alt="" />
              </div>
            </React.Fragment>
          );
        })}
      </Slider>
    </>
  );
}

export default NewArrivalProducts2;
