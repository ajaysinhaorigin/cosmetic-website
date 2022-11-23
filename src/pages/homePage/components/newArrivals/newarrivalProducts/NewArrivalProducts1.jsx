import React from "react";
import arrivalData from "../newarrivalData/arrivalData";
import Slider from "react-slick";

function NewArrivalProducts1() {
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
      ,
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {arrivalData.map((data) => {
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

export default NewArrivalProducts1;
