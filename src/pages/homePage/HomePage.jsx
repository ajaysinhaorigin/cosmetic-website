import React from "react";
import "./HomePage.css";
import HomePageComponents from "./components";

const HomePage = () => {
  return (
    <>
      <HomePageComponents.HomePageBanner />
      <HomePageComponents.ShopByCategory />
      <HomePageComponents.BestSeller />
      <HomePageComponents.Advertisment />
      <HomePageComponents.NewArrival />
      <HomePageComponents.TodaysDeals />
      <HomePageComponents.ShopByBrands />
      <HomePageComponents.SkinConsultation />
      <HomePageComponents.Testimonial />
      <HomePageComponents.SocialMedia />
    </>
  );
};

export default HomePage;
