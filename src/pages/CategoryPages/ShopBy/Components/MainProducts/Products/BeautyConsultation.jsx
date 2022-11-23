import React from "react";
import category from "../../../../../assets/shopby_category_page";

export const BeautyConsultation = () => {
  return (
    <>
      <div className="card main-carousel mb-4 border-0">
        <div className="card-img w-100">
          <div className="card main-carousel mb-4 border-0">
            <div className="card-img w-100">
              <img src={category.img2} className="w-100" />
            </div>
            <div className="card-img-overlay">
              <div className="main-text text-white container">
                <h2>
                  beauty <br /> Consultation
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <button className="border-0">SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
