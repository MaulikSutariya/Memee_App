import React from "react";
import "../Css/Explore_search_page.css";
import Add from "../images/Home_page/Add.png";
import Coin from "../images/Home_page/Coin.png";
import Notification from "../images/Home_page/Notification.png";
import { Link } from "react-router-dom";
import Explore_search_user_1 from "../images/Explore_search_img/Explore_search_user_1.png";
import close from "../images/Explore_search_img/close.png";
import Navbar from "./Navbar";
import HomeOutline from "../images/Explore_page/Home.png";
import ExploreFill from "../images/Explore_page/Explore_2.png";
import TournamentOutline from "../images/Home_page/tournament.png";
import ProfileOutline from "../images/Home_page/profile.png";

export default function Explore_search_page() {
  return (
    <>
      <div className="mainclassofapp">
        <div className="Explore_search_page">
          <div className="home_page_Header">
            <div className="Explore_name">
              <h2>Explore </h2>
            </div>
            <div className="notiadd">
              <Link to="/Inbox">
                {" "}
                <div className="Home_Notification">
                  <img src={Notification}></img>
                </div>
              </Link>
              <Link to="/Add_Coins_page">
                {" "}
                <div className="add_coin">
                  <img src={Add}></img>
                  <h3>7412</h3>
                  <img src={Coin}></img>
                </div>
              </Link>
            </div>
          </div>

          <div className="Search_explore">
            {/* <img src={search}></img> */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.61154 0C14.9198 0 19.2231 4.20819 19.2231 9.39926C19.2231 11.849 18.2647 14.0799 16.6946 15.7529L19.7825 18.7636C20.072 19.0459 20.0726 19.5043 19.7839 19.7873C19.5214 20.0446 19.1102 20.0685 18.8202 19.8586L18.737 19.7886L15.6127 16.7417C13.9681 18.0288 11.8818 18.7985 9.61154 18.7985C4.30323 18.7985 0 14.5903 0 9.39926C0 4.20819 4.30323 0 9.61154 0ZM9.61154 1.44774C5.12086 1.44774 1.48044 5.00776 1.48044 9.39926C1.48044 13.7908 5.12086 17.3508 9.61154 17.3508C14.1022 17.3508 17.7426 13.7908 17.7426 9.39926C17.7426 5.00776 14.1022 1.44774 9.61154 1.44774Z" />
            </svg>
            <input type="text" placeholder="Search hashtags, usernames"></input>
          </div>

          <div className="Expolore_search_options">
            <div className="Expolore_search_options_top">
              <h5>Top</h5>
            </div>
            <div className="Expolore_search_options_top2">
              <h5>Accounts</h5>
            </div>
            <div className="Expolore_search_options_top2">
              <h5>Tags</h5>
            </div>
            <div className="Expolore_search_options_top2">
              <h5>Places</h5>
            </div>
          </div>

          <div className="Search_explore_react_search">
            <div className="Search_explore_react_search_1">
              <h3>Recent Searches</h3>
            </div>
            <div className="Search_explore_react_search_2">
              <h3>See All</h3>
            </div>
          </div>

          <div className="Recent_search_user_profile">
            <div className="Recent_user_1">
              <div className="R_U_1">
                <img src={Explore_search_user_1}></img>
                <div className="R_U_1_1">
                  <h5>Isaac Carew</h5>
                  <h6>Isaac_09</h6>
                </div>
              </div>

              <div className="R_U_2">
                <img src={close}></img>
              </div>
            </div>

            <div className="Recent_user_1">
              <div className="R_U_1">
                <img src={Explore_search_user_1}></img>
                <div className="R_U_1_1">
                  <h5>Isaac Carew</h5>
                  <h6>Isaac_09</h6>
                </div>
              </div>

              <div className="R_U_2">
                <img src={close}></img>
              </div>
            </div>

            <div className="Recent_user_1">
              <div className="R_U_1">
                <img src={Explore_search_user_1}></img>
                <div className="R_U_1_1">
                  <h5>Isaac Carew</h5>
                  <h6>Isaac_09</h6>
                </div>
              </div>

              <div className="R_U_2">
                <img src={close}></img>
              </div>
            </div>

            <div className="Recent_user_1">
              <div className="R_U_1">
                <div className="R_hash">
                  <h1>#</h1>
                </div>
                <div className="R_U_1_1">
                  <h5>#isaac</h5>
                  <h6>136k posts</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Navbar
          HomeColor={"gray"}
          ExploreColor={"rgba(255, 205, 47, 1)"}
          TournamentColor={"gray"}
          ProfileColor={"gray"}
          HomeImg={HomeOutline}
          ExploreImg={ExploreFill}
          TournamentImg={TournamentOutline}
          ProfileImg={ProfileOutline}
        />
      </div>
    </>
  );
}
