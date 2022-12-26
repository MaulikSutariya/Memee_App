import React from "react";
import "../Css/Tournamet_post_entry.css";
import { Link } from "react-router-dom";
import T_post_entry from "../images/Tournament_page/T_post_entry.png";
import Back from "../images/Tournament_page/Back.png";

export default function Tournamet_post_entry() {
  return (
    <>
      <div className="Tournamet_post_entry">
        <div className="post_story_wrapper">
          <div className="back_space_between">
            <div className="Aa_circle2">
              <Link to="/Tournamet">
                <img src={Back}></img>
              </Link>
            </div>
            <div className="Aa_circle">Aa</div>
          </div>
          <div className="center_full_image">
            <img src={T_post_entry} className="center_pink_shape" />
          </div>
          <br />
          <br />
          <Link to="/Tournament_congratulations_page">
            <div className="post_story_yellow_btn">Post Entry</div>
          </Link>
        </div>
      </div>
    </>
  );
}
