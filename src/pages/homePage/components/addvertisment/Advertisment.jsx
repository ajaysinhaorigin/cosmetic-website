import React from "react";
import "./advertisment.css";
import AdvertismentImg from "../../../../assets/homePageAssets";
// import image15 from "./advertisment-images/15.png";
// import image16 from "./advertisment-images/16.png";
// import image17 from "./advertisment-images/17.png";
// import image18 from "./advertisment-images/18.png";

function Advertisment() {
  return (
    <>
      <div className="container advertisment-images mb-4">
        <div className="row">
          <div className="col-12  col-sm-6 advertisment-img mb-2">
            <img src={AdvertismentImg.Advertismentimg15} alt="" />
          </div>
          <div className="col-12  col-sm-6 ">
            {/* <div> */}
            <div className="advertisment-img">
              <img src={AdvertismentImg.Advertismentimg16} alt="" />
            </div>
            <div className="row pt-3">
              <div className="col-12  col-sm-6 advertisment-img mb-2">
                <img src={AdvertismentImg.Advertismentimg17} alt="" />
              </div>
              <div className="col-12  col-sm-6 advertisment-img">
                <img src={AdvertismentImg.Advertismentimg18} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advertisment;
