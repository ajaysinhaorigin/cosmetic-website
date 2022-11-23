import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="text-bg-dark">
        <nav className="container navbar navbar-expand-lg ">
          <div className=" container-fluid">
            <ul className="navbar-nav one me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-light" to="category/1">
                  Today's Deal
                </a>
              </li>
            </ul>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon text-light"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link text-light "
                    aria-current="page"
                    to="category/2"
                  >
                    Shop By
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-light"
                    aria-current="page"
                    to="category/3"
                  >
                    Best Sellers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" to="category/4">
                    Makeup
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" to="category/5">
                    skin
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" to="category/6">
                    Hair
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" to="category/7">
                    Appliances
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" to="category/8">
                    Bath & Body
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" to="category/9">
                    Mom & Baby
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" to="category/10">
                    Health & Wellness
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
