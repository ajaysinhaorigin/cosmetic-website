import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/App.css";
import HomePage from "./pages/homePage/HomePage";
import { Components } from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Components.Header />
      <Components.Navbar />
      <Components.BodyContainer>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/about" element={<HomePage />} />
        </Routes>
      </Components.BodyContainer>
      <Components.Footer />
    </React.Fragment>
  );
};

export default App;
