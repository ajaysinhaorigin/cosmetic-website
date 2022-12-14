import React from "react";
import category from "../../../../../assets/shopby_category_page";

export function Exfoliate() {
  return (
    <>
      <div className="card main-carousel mb-4 border-0">
        <div className="card-img w-100">
          <div className="card main-carousel mb-4 border-0">
            <div className="card-img w-100">
              <img src={category.img1} className="w-100" />
            </div>
            <div className="card-img-overlay">
              <div className="main-text text-white container">
                <h2>
                  Exfoliate,Tone
                  <br /> &Hydrate{" "}
                </h2>
                <p>
                  Recieve your summer body gift consectetur adipisicing elit.
                </p>
                <button className="border-0">SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
