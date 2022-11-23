import React from "react";
import shopbyCategoryComponents from "./Components";

const ShopBy = () => {
  return (
    <>
      <shopbyCategoryComponents.ShopByBanner />
      <shopbyCategoryComponents.MainProducts />
      <shopbyCategoryComponents.BeautyProducts />
      <shopbyCategoryComponents.BestSellingProducts />
      <shopbyCategoryComponents.CategoryInFocus />
      <shopbyCategoryComponents.EverydayEssentials />
    </>
  );
};
export default ShopBy;
