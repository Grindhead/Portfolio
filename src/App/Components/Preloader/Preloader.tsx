import * as React from 'react';
import Gear from "../../../Assets/Images/gear.png";
import "./Preloader.css";

export const Preloader = () => {
  return (
    <div className="preloaderContainer">
      <img src={Gear} alt="preloader" className="preloader" />
    </div>
  );
};
