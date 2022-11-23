import React from "react";
import "./shopByBanner.css";
import shopby from "../../../../assets/shopby_category_page";

export function ShopByBanner() {
  return (
    <>
      <div className="card main-carousel mb-4 border-0">
        <div className="card-img w-100">
          <div className="card main-carousel mb-4 border-0">
            <div className="card-img w-100">
              <img src={shopby.banner} className="w-100" />
            </div>
            <div className="card-img-overlay">
              <div className="main-text text-white container">
                <span>
                  <button className="btn text-white">Home /</button>
                  <button className="btn text-white bold">SHOP BY</button>
                </span>
                <p className="py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br /> Excepturi maiores laboriosam dicta quo veritatis <br />{" "}
                  repellendus commodi modi nulla nemo enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
