import React from "react";
import "../Css/Tournament_congratulations_page.css";
import T_cong from "../images/Tournament_page/T_cong.png";

export default function Tournament_congratulations_page() {
  return (
    <>
      <div className="Tournament_congratulations_page">
        <div className="star_background">
          <div className="star_image_center">
            <img src={T_cong} />
          </div>
          <div className="congratulation_text">Congratulations</div>
          <div className="joined_message">
            Congrats, You joined the Tournament
          </div>
        </div>
      </div>
    </>
  );
}
