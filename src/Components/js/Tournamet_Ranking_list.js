import React from "react";
import "../Css/Tournamet_Ranking_list.css";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import { Link } from "react-router-dom";
import Trank_bg from "../images/Tournament_page/Trank_bg.png";
import T_coin from "../images/Tournament_page/T_coin.png";

export default function Tournamet_Ranking_list() {
  function createData(image, coin, rupees, num, protein) {
    return { image, coin, rupees, num, protein };
  }
  const rows = [
    createData(Trank_bg, T_coin, "11,000", "4th"),
    createData(Trank_bg, T_coin, "10,000", "5th"),
    createData(Trank_bg, T_coin, "9000", "6th"),
    createData(Trank_bg, T_coin, "8000", "7th"),
    createData(Trank_bg, T_coin, "7000", "8th"),
    createData(Trank_bg, T_coin, "6000", "9th"),
    createData(Trank_bg, T_coin, "5000", "10th"),
  ];
  return (
    <>
      <div className="Tournamet_Ranking_list">
        <div className="Inbox_Arrow">
          <Link to="/Tournamet">
            <img src={Back_Arrow}></img>{" "}
          </Link>{" "}
          &nbsp;&nbsp;&nbsp;
          <h3>Rankings</h3>
        </div>

        <div className="ranking_background">
          {rows.map((data, i) => {
            return (
              <div key={i} className="rankings_coin">
                <div className="triangle_blue">
                  <img className="left_rank" src={data.image} />
                  <img className="right_rank" src={data.image} />
                </div>
                <div className="dollar_coin">
                  <img className="center_dollar_coin" src={data.coin} />
                  <span className="rupees">{data.rupees}</span>
                </div>
                <span className="rank_no">{data.num}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
