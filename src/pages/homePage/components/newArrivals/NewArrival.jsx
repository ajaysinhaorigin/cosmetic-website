import React from "react";
import "./NewArrival.css";
import NewArrivalProducts1 from "./NewArrivalProducts/NewArrivalProducts1";
import NewArrivalProducts2 from "./NewArrivalProducts/NewArrivalProducts2";

function NewArrival() {
  return (
    <div className="container p-5 home_components mb-4">
      <div className="text-center">
        <h1>New Arrivals</h1>
      </div>
      <div>
        <NewArrivalProducts1 />
        <NewArrivalProducts2 />
      </div>
    </div>
  );
}

export default NewArrival;
