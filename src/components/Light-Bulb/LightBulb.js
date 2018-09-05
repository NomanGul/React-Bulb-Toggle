import React from "react";
import LightBulbImg from "../../images/light-bulb.jpg";
import "./index.css";

// LIGHT BULB FUNCTIOANAL COMPONENT
const LightBulb = () => {
  return (
    <div className="center-img">
      <img
        src={LightBulbImg}
        alt="LightBulb"
        className="responsive-img fadeIn animated"
      />
    </div>
  );
};

export default LightBulb;
