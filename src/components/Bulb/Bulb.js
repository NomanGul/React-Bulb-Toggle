import React from "react";
import BulbImg from "../../images/bulb.jpg";
import './index.css'

const Bulb = props => {
  return (
    <div className="center-img">
      <img src={BulbImg} alt="Bulb" className="responsive-img" />
    </div>
  );
};

export default Bulb;
