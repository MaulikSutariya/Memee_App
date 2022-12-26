import React, { useState } from "react";
import "../Css/Profile.css";
import { Link } from "react-router-dom";
import Profile_setting from "../images/Profile_page/Profile_setting.png";
import Profile_edit from "../images/Profile_page/Profile_edit.png";
import Add from "../images/Home_page/Add.png";
import Coin from "../images/Home_page/Coin.png";

import Budge_1 from "../images/Profile_page/Budge_1.png";
import Budge_2 from "../images/Profile_page/Budge_2.png";
import Budge_3 from "../images/Profile_page/Budge_3.png";


import Navbar from "./Navbar";
import HomeOutline from "../images/Explore_page/Home.png";
import ExploreOutline from "../images/Home_page/explore.png";
import TournamentOutline from "../images/Home_page/tournament.png";
import ProfileFill from "../images/Profile_page/Profile2.png";
import { useEffect } from "react";

export default function Profile() {
  const userName = JSON.parse(localStorage.getItem("userdata")).name;

  const userProfile = JSON.parse(localStorage.getItem("userdata")).profile;

  const userBio = JSON.parse(localStorage.getItem("userdata")).bio;

  const userId = JSON.parse(localStorage.getItem("userdata"))._id;

  const [tableData, setTableData] = useState([]);

  

  //  GET APi Apply

  useEffect(() => {
    commentsList();
  }, []);

  const commentsList = async () => {
    var token = localStorage.getItem("token");

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const fetchData = await fetch(
      `${process.env.REACT_APP_2_BASE_URL}/userpost/getPostData/${userId}`,
      requestOptions
    );

    const data = await fetchData.json();
    setTableData(data.postData);
   
  };

  // END GET APi

  

  const [showT, setShowT] = useState(false);
  const ShowTourPage = () => {
    setShowT(true);
    setShowP(false);
  };
  const [showP, setShowP] = useState(true);
  const ShowTourPage2 = () => {
    setShowT(false);
    setShowP(true);
  };

  return (
    <>
      <div className="profile">
        <div className="Profile_p_1">
          <div className="Profile_p_1_1">
            <div className="Profile_p_1_Pset">
              <div className="Profile_setndedit">
                <Link to="/Customize_Profile_page">
                  {" "}
                  <div className="P_S_1">
                    <img src={Profile_edit}></img>
                  </div>{" "}
                </Link>
                &nbsp;&nbsp;
                <Link to="/Profile_Setting">
                  {" "}
                  <div className="P_S_1">
                    <img src={Profile_setting}></img>
                  </div>
                </Link>
              </div>
              <Link to="/Add_Coins_page">
                {" "}
                <div className="add_coinOfProfile">
                  <img src={Add}></img>
                  <h3>7412</h3>
                  <img src={Coin}></img>
                </div>
              </Link>
            </div>

            <div className="profile_1_user">
              <img
                src={process.env.REACT_APP_2_BASE_URL + "/" + userProfile}
              ></img>
              <h1>{userName}</h1>

              <div className="Profile_following">
                <div className="P_f_1">
                  <h3>{tableData.length}</h3>
                  <h4>Posts</h4>
                </div>
                <span>|</span>
                <div className="P_f_1">
                  <h3>3</h3>
                  <h4>Followers</h4>
                </div>
                <span>|</span>
                <div className="P_f_1">
                  <h3>2</h3>
                 
                  <h4>Followings</h4>
                </div>
              </div>

              <p>“{userBio}”</p>
            </div>
          </div>
        </div>

        <div className="profile_badge">
          <div className="P_B_1">
            <div className="P_B_1_1">
              <h3>Earned Badges</h3>
              <h4>Organize Badges</h4>
            </div>
          </div>

          <div className="P_B_2">
            <div className="P_B_2_2">
              <div className="P_B_2_2_2">
                <img src={Budge_1}></img>
              </div>
              <h6>Most Wins</h6>
            </div>

            <div className="P_B_2_2">
              <div className="P_B_2_2_2">
                <img src={Budge_2}></img>
              </div>
              <h6>Top shot</h6>
            </div>

            <div className="P_B_2_2">
              <div className="P_B_2_2_2">
                <img src={Budge_3}></img>
              </div>
              <h6>Best Edit</h6>
            </div>

            <div className="P_B_2_2">
              <div className="P_B_2_2_2">
                <img src={Budge_1}></img>
              </div>
              <h6>Most Wins</h6>
            </div>
          </div>
        </div>

        <div className="Post_message">
          <div className={showP ? "Post_A_M" : "Post_A_M_2"}>
            <h4 onClick={ShowTourPage2}>Posts</h4>
          </div>
          <div className={showP ? "Post_A_M_2" : "Post_A_M"}>
            <h4 onClick={ShowTourPage}>Tournament Entry</h4>
          </div>
        </div>

        {showP && (
          <div>
            <div className="postofUser_profile_page">
              <h2>{tableData.length} Posts</h2>
              <select>
                <option>April</option>
              </select>
            </div>

            <div className="Posted_profile_by_user">
              {tableData.map((data, i) => {
                return (
                  <div key={i} className="Posted_profile_by_user1">
                    <Link to="/Post_Img_Page">
                      {" "}
                      <img src={process.env.REACT_APP_2_BASE_URL + "/" + data.userPost}></img>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {showT && (
          <div>
            <div className="postofUser_profile_page">
              <h2>{tableData.length} Posts</h2>
              <select>
                <option>April</option>
              </select>
            </div>

            <div className="Posted_profile_by_user">
              {tableData.map((data, i) => {
                return (
                  <div key={i} className="Posted_profile_by_user1">
                    <Link to="/Post_Img_Page">
                      <img
                        src={
                          process.env.REACT_APP_2_BASE_URL + "/" + data.userPost
                        }
                      ></img>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <Navbar
          HomeColor={"gray"}
          ExploreColor={"gray"}
          TournamentColor={"gray"}
          ProfileColor={"rgba(255, 205, 47, 1)"}
          HomeImg={HomeOutline}
          ExploreImg={ExploreOutline}
          TournamentImg={TournamentOutline}
          ProfileImg={ProfileFill}
        />
      </div>
    </>
  );
}
