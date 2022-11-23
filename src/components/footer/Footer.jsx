import React from "react";
import "./Footer.css";
// import customerexperience from "./footer-icons/customerexperience.png";
// import cashondelivery from "./footer-icons/cashondelivery.png"
// import deliverytrunk from "./footer-icons/deliverytrunk.png";
// import assured from "./footer-icons/assured.png";
// import returnpoliceicon from "./footer-icons/7days.png";
// import newlettersIcon from './footer-icons/newletters-icon.png';
// import location from './footer-icons/location.png';
// import mail from './footer-icons/mail.png';
// import phone from './footer-icons/phone-call.png';
import footerImg from "../../assets/footerAsstes";
// import logo from '../../assets/headerAssets';

const Footer = () => {
  return (
    <>
      <div className="footer_aws">
        <div className="container">
          <div className="footer-flex d-block d-md-flex  mb-5 pt-5 mt-5">
            <div className="customer d-flex  p-3">
              <div className="footer-icon">
                <img src={footerImg.customerexperience} alt="" />
              </div>
              <p>Best Customer Experience</p>
            </div>

            <div className="customer d-flex  p-3">
              <div className="footer-icon">
                <img src={footerImg.cashondelivery} alt="" />
              </div>
              <p>Cash on Delivery</p>
            </div>

            <div className="customer d-flex  p-3">
              <div className="footer-icon">
                <img src={footerImg.deliverytrunk} alt="" />
              </div>
              <p>Delivery in 3-5 Days</p>
            </div>

            <div className="customer d-flex  p-3">
              <div className="footer-icon">
                <img src={footerImg.assured} alt="" />
              </div>
              <p>Assured premium Quality</p>
            </div>

            <div className="customer d-flex  p-3">
              <div className="footer-icon">
                <img src={footerImg.returnpoliceicon} alt="" />
              </div>
              <p>7 Days Return Policy</p>
            </div>
          </div>

          <div className="footer-flex row">
            <div className="col-12 col-sm-6 col-lg-3 mb-2">
              <p>CATEGORIES</p>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Cleansers & Toners
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Moisturisers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Body Care
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Eyes, Lips & Neck
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Rebalancing Oils
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Self Tanners
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Make-Up
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-2 mb-2">
              <p>SERVICE</p>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Track Your Order
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Returns Policy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Delivery Information
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Loyalty Program
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Help & FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mb-2">
              <p>NEWLETTERS</p>
              <p>
                Sign up for our mailing list to be the first to receive updates
                from us about new products
              </p>
              <div className="newsletters w-100 d-flex justify-content-between">
                <input
                  type="text"
                  placeholder="your email address"
                  className="color-gray input_news"
                />
                <button className="newletters-icon mx-1">
                  <img src={footerImg.newlettersIcon} alt="" />
                </button>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-2">
              <div className="main-logo">
                <img src={footerImg.logo} alt="" />
              </div>
              <div className=" d-flex">
                <div className="footer-icon-find">
                  <img src={footerImg.location} alt="" />
                </div>
                <p>Lorem Ipsum is simply of the industry Lorem Ipsum</p>
              </div>
              <div className=" d-flex">
                <div className="footer-icon-find  ">
                  <img src={footerImg.mail} alt="" />
                </div>
                <p>info@logoname.co.in</p>
              </div>
              <div className=" d-flex">
                <div className="footer-icon-find ">
                  <img src={footerImg.phone} alt="" />
                </div>
                <p>(+91)-1800-18000</p>
              </div>
            </div>
          </div>
          <div className="text-center pt-3 pb-1">
            <p>© 2022 AWESMATIC, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
