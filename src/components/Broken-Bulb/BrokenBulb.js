import React from "react";
import BrokenBulbImg from "../../images/broken-bulb.jpg";
import './index.css'

const BrokenBulb = props => {
  return (
    <div className="center-img">
      <img src={BrokenBulbImg} alt="BrokenBulb" className="responsive-img" />
    </div>
  );
};

export default BrokenBulb;
