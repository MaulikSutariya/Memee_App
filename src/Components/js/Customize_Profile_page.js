import React from "react";
import "../Css/Customize_Profile_page.css";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import { Link } from "react-router-dom";
import TH_1 from "../images/customize_Profile_Page/TH_1.png";
import TH_2 from "../images/customize_Profile_Page/TH_2.png";
import PB_1 from "../images/customize_Profile_Page/PB_1.png";
import PB_2 from "../images/customize_Profile_Page/PB_2.png";
import BO_1 from "../images/customize_Profile_Page/BO_1.png";
import i_1 from "../images/customize_Profile_Page/i_1.png";
import i_2 from "../images/customize_Profile_Page/i_2.png";
import i_3 from "../images/customize_Profile_Page/i_3.png";
import i_4 from "../images/customize_Profile_Page/i_4.png";
import i_5 from "../images/customize_Profile_Page/i_5.png";
import I_love_memee_app from "../images/customize_Profile_Page/I_love_memee_app.png";

export default function Customize_Profile_page() {
  return (
    <>
      <div className="Customize_Profile_page">
        <div className="CommentsArrow">
          <Link to="/Profile">
            <img src={Back_Arrow}></img>
          </Link>
          &nbsp;&nbsp;
          <h3>Customize Profile</h3>
        </div>

        <div className="theme_Pack">
          <h5>Theme Pack</h5>
          <div className="Theme_P">
            <img src={TH_1}></img>
            <img src={TH_2}></img>
            <img src={TH_2}></img>
            <img src={TH_2}></img>
            <img src={TH_2}></img>
            <img src={TH_2}></img>
            <img src={TH_2}></img>
            <img src={TH_2}></img>
          </div>
        </div>

        <div className="theme_P_Back">
          <h5>Profile Background</h5>
          <div className="Theme_P_back">
            <img src={PB_1}></img>
            <img src={PB_2}></img>
            <img src={PB_1}></img>
            <img src={PB_2}></img>
            <img src={PB_1}></img>
            <img src={PB_2}></img>
            <img src={PB_1}></img>
            <img src={PB_2}></img>
          </div>
        </div>

        <div className="theme_P_B">
          <h5>Profile Background</h5>
          <div className="Theme_P_b">
            <img src={BO_1}></img>
            <img src={BO_1}></img>
          </div>
        </div>

        <div className="theme_P_B_icons">
          <h5>Icons</h5>
          <div className="Theme_ICONS">
            <img src={i_1}></img>
            <img src={i_2}></img>
            <img src={i_3}></img>
            <img src={i_4}></img>
            <img src={i_5}></img>
          </div>
        </div>

        <div className="theme_P_Btn">
          <h5>Buttons</h5>
          <button className="ibtn">Buttons</button>
        </div>

        <div className="theme_P_font">
          <h5>Fonts</h5>
          <div className="Theme_font">
            <img src={I_love_memee_app}></img>
          </div>
        </div>
      </div>
    </>
  );
}
