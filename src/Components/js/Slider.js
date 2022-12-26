import React from "react";
import "../Css/Slider.css";
import logo from "../images/logo.png";
import Slider_img from "../images/Slider_1.png";

export default function Slider() {
  return (
    <>
      <div className="Slider">
        <div className="Slider_1">
          <div className="logo">
            <img src={logo}></img>
          </div>
          <div className="Slider_img">
            <img src={Slider_img}></img>
          </div>
        </div>
      </div>
    </>
  );
}
