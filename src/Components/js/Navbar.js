import React, { useEffect, useState } from "react";
import "../Css/Navbar.css";
import m_add from "../images/Home_page/m_add.png";
import profile_default from "../images/navbar/profile_default.png";
import tournament_yellow from "../images/navbar/tournament_yellow.png";
import space_add from "../images/all_theme_navbar/space_theme_navbar/space_add.png";
import space_Explore from "../images/all_theme_navbar/space_theme_navbar/space_Explore.png";
import space_Home from "../images/all_theme_navbar/space_theme_navbar/space_Home.png";
import space_profile from "../images/all_theme_navbar/space_theme_navbar/space_profile.png";
import space_Tournament from "../images/all_theme_navbar/space_theme_navbar/space_Tournament.png";
import unicorn_1 from "../images/Tournament_Store_page/icons_items/unicorn_theme/unicorn_1.png";
import unicorn_2 from "../images/Tournament_Store_page/icons_items/unicorn_theme/unicorn_2.png";
import unicorn_3 from "../images/Tournament_Store_page/icons_items/unicorn_theme/unicorn_3.png";
import unicorn_4 from "../images/Tournament_Store_page/icons_items/unicorn_theme/unicorn_4.png";
import unicorn_5 from "../images/Tournament_Store_page/icons_items/unicorn_theme/unicorn_5.png";
import memee_1 from "../images/Tournament_Store_page/icons_items/memee_theme/memee_1.png";
import memee_2 from "../images/Tournament_Store_page/icons_items/memee_theme/memee_2.png";
import memee_3 from "../images/Tournament_Store_page/icons_items/memee_theme/memee_3.png";
import memee_4 from "../images/Tournament_Store_page/icons_items/memee_theme/memee_4.png";
import memee_5 from "../images/Tournament_Store_page/icons_items/memee_theme/memee_5.png";
import save_E_1 from "../images/Tournament_Store_page/icons_items/save_earth_theme/save_E_1.png";
import save_E_2 from "../images/Tournament_Store_page/icons_items/save_earth_theme/save_E_2.png";
import save_E_3 from "../images/Tournament_Store_page/icons_items/save_earth_theme/save_E_3.png";
import save_E_4 from "../images/Tournament_Store_page/icons_items/save_earth_theme/save_E_4.png";
import save_E_5 from "../images/Tournament_Store_page/icons_items/save_earth_theme/save_E_5.png";
import Newyer_1 from "../images/Tournament_Store_page/icons_items/new_year_theme/Newyer_1.png";
import Newyer_2 from "../images/Tournament_Store_page/icons_items/new_year_theme/Newyer_2.png";
import Newyer_3 from "../images/Tournament_Store_page/icons_items/new_year_theme/Newyer_3.png";
import Newyer_4 from "../images/Tournament_Store_page/icons_items/new_year_theme/Newyer_4.png";
import Newyer_5 from "../images/Tournament_Store_page/icons_items/new_year_theme/Newyer_5.png";
import theme_1_1 from "../images/all_theme_navbar/Theme1/theme_1_1.png";
import theme_1_2 from "../images/all_theme_navbar/Theme1/theme_1_2.png";
import theme_1_3 from "../images/all_theme_navbar/Theme1/theme_1_3.png";
import theme_1_4 from "../images/all_theme_navbar/Theme1/theme_1_4.png";
import theme_1_5 from "../images/all_theme_navbar/Theme1/theme_1_5.png";
import M_G_1 from "../images/all_theme_navbar/medium_gay_theme/M_G_1.png";
import M_G_2 from "../images/all_theme_navbar/medium_gay_theme/M_G_2.png";
import M_G_3 from "../images/all_theme_navbar/medium_gay_theme/M_G_3.png";
import M_G_4 from "../images/all_theme_navbar/medium_gay_theme/M_G_4.png";
import M_G_5 from "../images/all_theme_navbar/medium_gay_theme/M_G_5.png";
import Theme_2_1 from "../images/all_theme_navbar/Theme2/Theme_2_1.png";
import Theme_2_2 from "../images/all_theme_navbar/Theme2/Theme_2_2.png";
import Theme_2_3 from "../images/all_theme_navbar/Theme2/Theme_2_3.png";
import Theme_2_4 from "../images/all_theme_navbar/Theme2/Theme_2_4.png";
import Theme_2_5 from "../images/all_theme_navbar/Theme2/Theme_2_5.png";

import { Link } from "react-router-dom";

export default function Navbar({
  HomeImg,
  ExploreImg,
  TournamentImg,
  ProfileImg,
  HomeColor,
  ExploreColor,
  TournamentColor,
  ProfileColor,
}) {
  return (
    <>
      {localStorage.getItem("theme") == "Default_theme_Navbar_color" ? (
        <div className="navbar ">
          <div>
            <Link to="/Home_page">
              <div className="home2">
                <img src={HomeImg} />
                <h6 style={{ color: HomeColor }}>Home</h6>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Expolor_page">
              <div className="home2">
                <img src={ExploreImg} />
                <h6 style={{ color: ExploreColor }}>Explore</h6>
              </div>
            </Link>
          </div>

          <Link to="/Add_Post_Page">
            <div className="home3">
              <img style={{ height: "55px" }} src={m_add}></img>
            </div>
          </Link>

          <div>
            <Link to="/Tournamet">
              <div className="home2">
                <img src={TournamentImg} />

                <h6 style={{ color: TournamentColor }}>Tournament</h6>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Profile">
              {" "}
              <div className="home2">
                <img src={ProfileImg} />

                <h6 style={{ color: ProfileColor }}>Profile</h6>
              </div>
            </Link>
          </div>
        </div>
      ) : null}

      {localStorage.getItem("theme") == "Space_Theme_Navbar_color" ? (
        <div className="navbar ">
          <div>
            <Link to="/Home_page">
              <div className="home2">
                <img style={{ height: "25px" }} src={space_Home}></img>
                <h6>Home</h6>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Expolor_page">
              <div className="home2">
                <img style={{ height: "25px" }} src={space_Explore}></img>
                <h6>Explore</h6>
              </div>
            </Link>
          </div>

          <Link to="/Add_Post_Page">
            <div className="home3">
              <img style={{ height: "61px" }} src={space_add}></img>
            </div>
          </Link>

          <div>
            <Link to="/Tournamet">
              <div className="home2">
                <img style={{ height: "25px" }} src={space_Tournament}></img>
                <h6>Tournament</h6>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Profile">
              <div className="home2">
                <img style={{ height: "25px" }} src={space_profile}></img>

                <h6>Profile</h6>
              </div>
            </Link>
          </div>
        </div>
      ) : null}

      {localStorage.getItem("theme") == "Unicorn_Theme_Navbar_color" ? (
        <div className="navbar ">
          <div>
            <Link to="/Home_page">
              <div className="home2">
                <img style={{ height: "25px" }} src={unicorn_1}></img>
                <h6>Home</h6>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Expolor_page">
              <div className="home2">
                <img style={{ height: "25px" }} src={unicorn_2}></img>
                <h6>Explore</h6>
              </div>
            </Link>
          </div>

          <Link to="/Add_Post_Page">
            <div className="home3">
              <img style={{ height: "61px" }} src={unicorn_3}></img>
            </div>
          </Link>

          <div>
            <Link to="/Tournamet">
              <div className="home2">
                <img style={{ height: "25px" }} src={unicorn_4}></img>
                <h6>Tournament</h6>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Profile">
              <div className="home2">
                <img style={{ height: "25px" }} src={unicorn_5}></img>

                <h6>Profile</h6>
              </div>
            </Link>
          </div>
        </div>
      ) : null}

      {localStorage.getItem("theme") == "Memee_Theme_Navbar_color" ? (
        <div className="navbar ">
          <div>
            <Link to="/Home_page">
              <div className="home2">
                <img style={{ height: "25px" }} src={memee_1}></img>
                <h6>Home</h6>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Expolor_page">
              <div className="home2">
                <img style={{ height: "25px" }} src={memee_2}></img>
                <h6>Explore</h6>
              </div>
            </Link>
          </div>

          <Link to="/Add_Post_Page">
            <div className="home3">
              <img style={{ height: "61px" }} src={memee_3}></img>
            </div>
          </Link>

          <div>
            <Link to="/Tournamet">
              <div className="home2">
                <img style={{ height: "25px" }} src={memee_4}></img>
                <h6>Tournament</h6>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Profile">
              <div className="home2">
                <img style={{ height: "25px" }} src={memee_5}></img>

                <h6>Profile</h6>
              </div>
            </Link>
          </div>
        </div>
      ) : null}

      {localStorage.getItem("theme") == "Save_Earth_Day_Theme_Navbar_color" && (
        <div className="navbar ">
          <div>
            <Link to="/Home_page">
              <div className="home2">
                <img style={{ height: "25px" }} src={save_E_1}></img>
                <h6>Home</h6>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Expolor_page">
              <div className="home2">
                <img style={{ height: "25px" }} src={save_E_2}></img>
                <h6>Explore</h6>
              </div>
            </Link>
          </div>

          <Link to="/Add_Post_Page">
            <div className="home3">
              <img style={{ height: "61px" }} src={save_E_3}></img>
            </div>
          </Link>

          <div>
            <Link to="/Tournamet">
              <div className="home2">
                <img style={{ height: "25px" }} src={save_E_4}></img>
                <h6>Tournament</h6>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Profile">
              <div className="home2">
                <img style={{ height: "25px" }} src={save_E_5}></img>

                <h6>Profile</h6>
              </div>
            </Link>
          </div>
        </div>
      )}

      {localStorage.getItem("theme") == "New_Year_Theme_Navbar_color" && (
        <div className="navbar ">
          <div>
            <Link to="/Home_page">
              <div className="home2">
                <img style={{ height: "25px" }} src={Newyer_1}></img>
                <h6>Home</h6>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Expolor_page">
              <div className="home2">
                <img style={{ height: "25px" }} src={Newyer_2}></img>
                <h6>Explore</h6>
              </div>
            </Link>
          </div>

          <Link to="/Add_Post_Page">
            <div className="home3">
              <img style={{ height: "61px" }} src={Newyer_3}></img>
            </div>
          </Link>

          <div>
            <Link to="/Tournamet">
              <div className="home2">
                <img style={{ height: "25px" }} src={Newyer_4}></img>
                <h6>Tournament</h6>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Profile">
              <div className="home2">
                <img style={{ height: "25px" }} src={Newyer_5}></img>

                <h6>Profile</h6>
              </div>
            </Link>
          </div>
        </div>
      )}

      {localStorage.getItem("theme") == "Theme_1_colors" && (
        <div className="navbar ">
          <div>
            <Link to="/Home_page">
              <div className="home2">
                <img style={{ height: "25px" }} src={theme_1_1}></img>
                <h6>Home</h6>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Expolor_page">
              <div className="home2">
                <img style={{ height: "25px" }} src={theme_1_2}></img>
                <h6>Explore</h6>
              </div>
            </Link>
          </div>

          <Link to="/Add_Post_Page">
            <div className="home3">
              <img style={{ height: "61px" }} src={theme_1_3}></img>
            </div>
          </Link>

          <div>
            <Link to="/Tournamet">
              <div className="home2">
                <img style={{ height: "25px" }} src={theme_1_4}></img>
                <h6>Tournament</h6>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Profile">
              <div className="home2">
                <img style={{ height: "25px" }} src={theme_1_5}></img>

                <h6>Profile</h6>
              </div>
            </Link>
          </div>
        </div>
      )}

      {localStorage.getItem("theme") == "Medium_Gray_colors" && (
        <div className="navbar ">
          <div>
            <Link to="/Home_page">
              <div className="home2">
                <img style={{ height: "25px" }} src={M_G_1}></img>
                <h6>Home</h6>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Expolor_page">
              <div className="home2">
                <img style={{ height: "25px" }} src={M_G_2}></img>
                <h6>Explore</h6>
              </div>
            </Link>
          </div>

          <Link to="/Add_Post_Page">
            <div className="home3">
              <img style={{ height: "61px" }} src={M_G_3}></img>
            </div>
          </Link>

          <div>
            <Link to="/Tournamet">
              <div className="home2">
                <img style={{ height: "25px" }} src={M_G_4}></img>
                <h6>Tournament</h6>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Profile">
              <div className="home2">
                <img style={{ height: "25px" }} src={M_G_5}></img>

                <h6>Profile</h6>
              </div>
            </Link>
          </div>
        </div>
      )}

      {localStorage.getItem("theme") == "Theme_2_colors" && (
        <div className="navbar ">
          <div>
            <Link to="/Home_page">
              <div className="home2">
                <img style={{ height: "25px" }} src={Theme_2_1}></img>
                <h6>Home</h6>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Expolor_page">
              <div className="home2">
                <img style={{ height: "25px" }} src={Theme_2_2}></img>
                <h6>Explore</h6>
              </div>
            </Link>
          </div>

          <Link to="/Add_Post_Page">
            <div className="home3">
              <img style={{ height: "61px" }} src={Theme_2_3}></img>
            </div>
          </Link>

          <div>
            <Link to="/Tournamet">
              <div className="home2">
                <img style={{ height: "25px" }} src={Theme_2_4}></img>
                <h6>Tournament</h6>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Profile">
              <div className="home2">
                <img style={{ height: "25px" }} src={Theme_2_5}></img>

                <h6>Profile</h6>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
