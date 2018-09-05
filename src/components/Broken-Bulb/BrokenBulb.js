import React from "react";
import BrokenBulbImg from "../../images/broken-bulb.jpg";
import "./index.css";

// BROKEN BULB FUNCTIONAL COMPONENT
const BrokenBulb = () => {
  return (
    <div className="center-img">
      <img
        src={BrokenBulbImg}
        alt="BrokenBulb"
        className="responsive-img wobble animated"
      />
    </div>
  );
};

export default BrokenBulb;
