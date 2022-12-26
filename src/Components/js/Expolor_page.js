import React from "react";
import "../Css/Expolor_page.css";
import { Link } from "react-router-dom";
import Notification from "../images/Home_page/Notification.png";
import Add from "../images/Home_page/Add.png";
import Coin from "../images/Home_page/Coin.png";
import Explore_bg_3 from "../images/Explore_page/Explore_bg_3.png";
import Explore_user_1 from "../images/Explore_page/Explore_user_1.png";
import Explore_user_2 from "../images/Explore_page/Explore_user_2.png";
import Explore_user_3 from "../images/Explore_page/Explore_user_3.png";
import Explore_user_4 from "../images/Explore_page/Explore_user_4.png";
import Explore_bg_1 from "../images/Explore_page/Explore_bg_1.png";
import Explore_bg_4 from "../images/Explore_page/Explore_bg_4.png";
import Explore_bg_2 from "../images/Explore_page/Explore_bg_2.png";
import Navbar from "./Navbar";
import HomeOutline from "../images/Explore_page/Home.png";
import ExploreFill from "../images/Explore_page/Explore_2.png";
import TournamentOutline from "../images/Home_page/tournament.png";
import ProfileOutline from "../images/Home_page/profile.png";

export default function Expolor_page(props) {
  const tableData = [
    {
      id: 1,
      Explore_post_bg: Explore_bg_3,
      Explore_user_tag_img: Explore_user_1,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 2,
      Explore_post_bg: Explore_bg_1,
      Explore_user_tag_img: Explore_user_2,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 3,
      Explore_post_bg: Explore_bg_4,
      Explore_user_tag_img: Explore_user_3,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 4,
      Explore_post_bg: Explore_bg_2,
      Explore_user_tag_img: Explore_user_4,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 5,
      Explore_post_bg: Explore_bg_3,
      Explore_user_tag_img: Explore_user_1,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 6,
      Explore_post_bg: Explore_bg_1,
      Explore_user_tag_img: Explore_user_2,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 7,
      Explore_post_bg: Explore_bg_4,
      Explore_user_tag_img: Explore_user_3,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 8,
      Explore_post_bg: Explore_bg_2,
      Explore_user_tag_img: Explore_user_4,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 1,
      Explore_post_bg: Explore_bg_3,
      Explore_user_tag_img: Explore_user_1,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 2,
      Explore_post_bg: Explore_bg_1,
      Explore_user_tag_img: Explore_user_2,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 3,
      Explore_post_bg: Explore_bg_4,
      Explore_user_tag_img: Explore_user_3,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 4,
      Explore_post_bg: Explore_bg_2,
      Explore_user_tag_img: Explore_user_4,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 5,
      Explore_post_bg: Explore_bg_3,
      Explore_user_tag_img: Explore_user_1,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 6,
      Explore_post_bg: Explore_bg_1,
      Explore_user_tag_img: Explore_user_2,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 7,
      Explore_post_bg: Explore_bg_4,
      Explore_user_tag_img: Explore_user_3,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 8,
      Explore_post_bg: Explore_bg_2,
      Explore_user_tag_img: Explore_user_4,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 1,
      Explore_post_bg: Explore_bg_3,
      Explore_user_tag_img: Explore_user_1,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 2,
      Explore_post_bg: Explore_bg_1,
      Explore_user_tag_img: Explore_user_2,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 3,
      Explore_post_bg: Explore_bg_4,
      Explore_user_tag_img: Explore_user_3,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 4,
      Explore_post_bg: Explore_bg_2,
      Explore_user_tag_img: Explore_user_4,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 5,
      Explore_post_bg: Explore_bg_3,
      Explore_user_tag_img: Explore_user_1,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 6,
      Explore_post_bg: Explore_bg_1,
      Explore_user_tag_img: Explore_user_2,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 7,
      Explore_post_bg: Explore_bg_4,
      Explore_user_tag_img: Explore_user_3,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
    {
      id: 8,
      Explore_post_bg: Explore_bg_2,
      Explore_user_tag_img: Explore_user_4,
      Explore_user_tag_nameofUser: "Jullian Fortan",
    },
  ];

  return (
    <>
      <div className="mainclassofapp">
        <div className="Explore_page">
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

            <Link to="/Explore_search_page">
              {" "}
              <input
                type="text"
                placeholder="Search hashtags, usernames"
              ></input>
            </Link>
          </div>

          <div className="Explore_tags">
            <h2>Trending Tags</h2>
          </div>

          <div className="Explore_tags_items">
            <div className="Explore_tags_items_1">
              <h4>#Nature</h4>
            </div>

            <div className="Explore_tags_items_2">
              <h4>#CanadaPolitics</h4>
            </div>

            <div className="Explore_tags_items_2">
              <h4>#TrumpSeason</h4>
            </div>

            <div className="Explore_tags_items_2">
              <h4>#Nature</h4>
            </div>

            <div className="Explore_tags_items_2">
              <h4>#CanadaPolitics</h4>
            </div>

            <div className="Explore_tags_items_2">
              <h4>#TrumpSeason</h4>
            </div>
          </div>

          <div className="user_post_explore">
            {tableData.map((data, i) => {
              return (
                <Link to="/Explore_More_page">
                  <div
                    key={i}
                    style={{ backgroundImage: `url(${data.Explore_post_bg})` }}
                    className="user_post_explore_1"
                  >
                    <div className="user_post_explore_1_details">
                      <br />
                      <br />
                      <br />
                      <br />
                      &nbsp;
                      <div className="user_explor_post_details">
                        <img src={data.Explore_user_tag_img}></img>
                        <h5>{data.Explore_user_tag_nameofUser}</h5>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* <div className="navbar ">
          <Link to="/Home_page">
            {" "}
            <div className="home2">
              <img src={Home}></img>
              <h6>Home</h6>
            </div>
          </Link>
          <Link to="/Expolor_page">
            {" "}
            <div className="home">
              <img src={explore}></img>
              <h6>Explore</h6>
            </div>
          </Link>
          &nbsp;
          <div className="home3">
            <img src={m_add}></img>
          </div>
          &nbsp;
          <Link to="/Tournamet">
                <div className='home2'>
                    <img src={tournament}></img>
                    <h6>Tournament</h6>
                </div>
                </Link>
          <Link to="/Profile">  <div className='home2'>
                    <img src={profile}></img>
                    <h6>Profile</h6>
                </div></Link>
        </div> */}
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
