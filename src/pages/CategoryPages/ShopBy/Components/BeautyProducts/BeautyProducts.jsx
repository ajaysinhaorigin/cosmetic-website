import React from "react";
import "./BeautyProducts.css";
import { beautyProductsData } from "./BeautyProductsData/beautyProductsData.jsx";

export const BeautyProducts = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {beautyProductsData.map((products) => {
            return (
              <React.Fragment key={products.id}>
                <div className="col-2 mr-2 mb-2 beaty_products_div">
                  <div className="beaty_products">
                    <img src={products.img} alt="" />
                  </div>
                  <h4 className="text-center">{products.name}</h4>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};
