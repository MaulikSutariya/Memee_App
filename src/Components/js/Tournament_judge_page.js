import React from "react";
import "../Css/Tournament_judge_page.css";
import { Link } from "react-router-dom";
import Notification from "../images/Home_page/Notification.png";
import Add from "../images/Home_page/Add.png";
import Coin from "../images/Home_page/Coin.png";
import Info_Circle from "../images/Tournament_page/Info_Circle.png";
import judge from "../images/Tournament_Judge_page/judge.png";
import judge_true from "../images/Tournament_Judge_page/judge_true.png";
import Navbar from "./Navbar";
import HomeOutline from "../images/Explore_page/Home.png";
import ExploreOutline from "../images/Home_page/explore.png";
import TournamentFill from "../images/Tournament_page/Tournamet_2.png";
import ProfileOutline from "../images/Home_page/profile.png";

export default function Tournament_judge_page() {
  return (
    <>
      <div className="Tournament_judge_page">
        <div className="home_page_Header">
          <div className="Explore_name2">
            <h2>Tournament </h2>
            <img src={Info_Circle}></img>
          </div>
          <div className="notiadd">
            <Link to="/Inbox">
              {" "}
              <div className="Home_Notification">
                <img src={Notification}></img>
              </div>
            </Link>
            <Link to="/Add_Coins_page">
                <div className="add_coin">
                  <img src={Add}></img>
                  <h3>7412</h3>
                  <img src={Coin}></img>
                </div>
              </Link>
          </div>
        </div>

        <div className="tsj">
          <div className="Tourstorjudg">
            <div className="Tourstorjudg2">
              <Link to="/Tournamet">
                {" "}
                <h4>Tournament</h4>{" "}
              </Link>
            </div>

            <div className="Tourstorjudg2">
              <Link to="/Tournament_Store_page">
                {" "}
                <h4>Store</h4>{" "}
              </Link>
            </div>

            <div className="Tourstorjudg1">
              <Link to="/Tournament_judge_page">
                {" "}
                <h4>Judge</h4>{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="judge_baner">
          <img src={judge}></img>
        </div>

        <div className="Judge_history">
          <div className="judge_h">
            <h5>History</h5>
          </div>

          <div className="daysmemeestatus">
            <div className="judgedays">
              <h3>Days</h3>
            </div>
            <div className="judgedays">
              <h3>No. of Memes</h3>
            </div>
            <div className="judgedays">
              <h3>Status</h3>
            </div>
          </div>

          <div className="judgeRank">
            <div className="judgerank1">
              <h3>01</h3>
            </div>
            <div className="judgerank2">
              <h3>40/100</h3>
            </div>
            <div className="judgerank3">
              {/* <img src={judge_true}></img> */}
            </div>
          </div>

          <div className="judgeRank">
            <div className="judgerank1">
              <h3>02</h3>
            </div>
            <div className="judgerank2">
              <h3>100/100</h3>
            </div>
            <div className="judgerank3">
              <img src={judge_true}></img>
            </div>
          </div>

          <div className="judgeRank">
            <div className="judgerank1">
              <h3>03</h3>
            </div>
            <div className="judgerank2">
              <h3>100/100</h3>
            </div>
            <div className="judgerank3">
              <img src={judge_true}></img>
            </div>
          </div>

          <div className="judgeRank">
            <div className="judgerank1">
              <h3>04</h3>
            </div>
            <div className="judgerank2">
              <h3>100/100</h3>
            </div>
            <div className="judgerank3">
              <img src={judge_true}></img>
            </div>
          </div>

          <div className="judgeRank">
            <div className="judgerank1">
              <h3>05</h3>
            </div>
            <div className="judgerank2">
              <h3>100/100</h3>
            </div>
            <div className="judgerank3">
              <img src={judge_true}></img>
            </div>
          </div>

          <div className="judgeRank">
            <div className="judgerank1">
              <h3>06</h3>
            </div>
            <div className="judgerank2">
              <h3>100/100</h3>
            </div>
            <div className="judgerank3">
              <img src={judge_true}></img>
            </div>
          </div>

          <div className="judgeRank">
            <div className="judgerank1">
              <h3>07</h3>
            </div>
            <div className="judgerank2">
              <h3>100/100</h3>
            </div>
            <div className="judgerank3">
              <img src={judge_true}></img>
            </div>
          </div>

          <div className="judgeRank">
            <div className="judgerank1">
              <h3>08</h3>
            </div>
            <div className="judgerank2">
              <h3>100/100</h3>
            </div>
            <div className="judgerank3">
              <img src={judge_true}></img>
            </div>
          </div>

          <div className="judgeRank">
            <div className="judgerank1">
              <h3>09</h3>
            </div>
            <div className="judgerank2">
              <h3>100/100</h3>
            </div>
            <div className="judgerank3">
              <img src={judge_true}></img>
            </div>
          </div>

          <div className="judgeRank">
            <div className="judgerank1">
              <h3>10</h3>
            </div>
            <div className="judgerank2">
              <h3>100/100</h3>
            </div>
            <div className="judgerank3">
              <img src={judge_true}></img>
            </div>
          </div>
        </div>

        {/* <div className="navbar ">
          <div className="home2">
            <img src={Home}></img>
            <h6>Home</h6>
          </div>
          <Link to="/Expolor_page">
            {" "}
            <div className="home2">
              <img src={explore}></img>
              <h6>Explore</h6>
            </div>
          </Link>
          &nbsp;
          <div className="home3">
            <img src={m_add}></img>
          </div>
          &nbsp;
          <div className="home">
            <img src={tournament}></img>
            <h6>Tournament</h6>
          </div>
          <Link to="/Profile">
            {" "}
            <div className="home2">
              <img src={profile}></img>
              <h6>Profile</h6>
            </div>
          </Link>
        </div> */}
        <Navbar
          HomeColor={"gray"}
          ExploreColor={"gray"}
          TournamentColor={"rgba(255, 205, 47, 1)"}
          ProfileColor={"gray"}
          HomeImg={HomeOutline}
          ExploreImg={ExploreOutline}
          TournamentImg={TournamentFill}
          ProfileImg={ProfileOutline}
        />
      </div>
    </>
  );
}
