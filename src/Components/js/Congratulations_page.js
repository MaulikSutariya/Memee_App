import React from "react";
import "../Css/Congratulations_page.css";
import win_congratulations from "../images/Tournament_Judge_page/win_congratulations.png";

export default function Congratulations_page() {
  return (
    <>
      <div className="Congratulations_page">
        <div className="trophyofcongo">
          <img src={win_congratulations}></img>
        </div>
        <br />
        <div className="trophyofcongo2">
          <h1>Congratulations</h1>
          <h2>Congrats, You have won the tournament by getting 106 likes.</h2>
        </div>
      </div>
    </>
  );
}
