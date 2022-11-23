import React, { Fragment } from "react";
import "./Search.css";
// import logo from './search-icons/logo.jpg'
// import searchIcon from "./search-icons/search-icon.png";
// import indianFlag from './search-icons/indian-flag.png';
// import wishlist from './search-icons/wishlist.jpeg';
// import profileIcon from "./search-icons/profile-icon.png";
// import cartIcon from "./search-icons/cart.png"
import HeaderImg from "../../../assets/headerAssets";
const Search = () => {
  return (
    <Fragment>
      <div className="container-fluid d-md-flex d-sm-block justify-content-around align-items-center search-component pt-3 pb-3">
        <div className="logo d-flex justify-content-around">
          <div className="d-md-none d-block d-flex ">
            <div className=" d-inline  mx-2 flag">
              <img src={HeaderImg.indianFlag} alt="" />
            </div>
            <span>INDIA</span>
          </div>
          <div className="main-logo">
            <img src={HeaderImg.logo} alt="" />
          </div>
          <div className="search-side-icons d-md-none d-block d-flex">
            <div className="profile">
              <img src={HeaderImg.profileIcon} alt="" />
            </div>
            <div className="wishlist">
              <img src={HeaderImg.wishlist} alt="" />
            </div>
            <div className="cart">
              <img src={HeaderImg.cartIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="input-field border border-dark align-items-center justify-content-around d-flex">
          <input type="text" placeholder="search" />
          <span>All Categories</span>
          <div className="search-icon">
            <img src={HeaderImg.searchIcon} alt="" />
          </div>
        </div>
        <div className="d-md-block d-none text-center">
          <div className=" d-inline  mx-2 flag">
            <img src={HeaderImg.indianFlag} alt="" />
          </div>
          <span>INDIA</span>
        </div>
        <div className="search-side-icons d-md-block d-none">
          <div className="profile mx-1">
            <img src={HeaderImg.profileIcon} alt="" />
          </div>
          <div className="wishlist mx-1">
            <img src={HeaderImg.wishlist} alt="" />
          </div>
          <div className="cart mx-1">
            <img src={HeaderImg.cartIcon} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
