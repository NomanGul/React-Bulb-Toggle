import React from "react";
import LightBulbImg from "../../images/light-bulb.jpg";
import './index.css'

const LightBulb = props => {
  return (
    <div className="center-img">
      <img src={LightBulbImg} alt="LightBulb" className="responsive-img" />
    </div>
  );
};

export default LightBulb;
