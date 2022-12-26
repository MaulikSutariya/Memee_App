import React, { useEffect, useState } from "react";
import "../Css/Tournament_Store_page.css";
import Home from "../images/Tournament_page/Home.png";
import explore from "../images/Home_page/explore.png";
import m_add from "../images/Home_page/m_add.png";
import tournament from "../images/Tournament_page/Tournamet_2.png";
import profile from "../images/Home_page/profile.png";
import { Link } from "react-router-dom";
import Notification from "../images/Home_page/Notification.png";
import Add from "../images/Home_page/Add.png";
import Coin from "../images/Home_page/Coin.png";
import Info_Circle from "../images/Tournament_page/Info_Circle.png";
import April from "../images/Tournament_Store_page/April.png";
import Amzon_card from "../images/Tournament_Store_page/Amzon_card.png";
import Coin2 from "../images/Tournament_Store_page/icons_items/Coin.png";
import Theme_1 from "../images/Tournament_Store_page/icons_items/space_theme/Theme_1.png";
import Theme_2 from "../images/Tournament_Store_page/icons_items/space_theme/Theme_2.png";
import Theme_3 from "../images/Tournament_Store_page/icons_items/space_theme/Theme_3.png";
import Theme_4 from "../images/Tournament_Store_page/icons_items/space_theme/Theme_4.png";
import Theme_5 from "../images/Tournament_Store_page/icons_items/space_theme/Theme_5.png";
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
import Newyer_1 from "../images/Tournament_Store_page/icons_items/new_year_theme/Newyer_1.png";
import Newyer_2 from "../images/Tournament_Store_page/icons_items/new_year_theme/Newyer_2.png";
import Newyer_3 from "../images/Tournament_Store_page/icons_items/new_year_theme/Newyer_3.png";
import Newyer_4 from "../images/Tournament_Store_page/icons_items/new_year_theme/Newyer_4.png";
import Newyer_5 from "../images/Tournament_Store_page/icons_items/new_year_theme/Newyer_5.png";
import save_E_1 from "../images/Tournament_Store_page/icons_items/save_earth_theme/save_E_1.png";
import save_E_2 from "../images/Tournament_Store_page/icons_items/save_earth_theme/save_E_2.png";
import save_E_3 from "../images/Tournament_Store_page/icons_items/save_earth_theme/save_E_3.png";
import save_E_4 from "../images/Tournament_Store_page/icons_items/save_earth_theme/save_E_4.png";
import save_E_5 from "../images/Tournament_Store_page/icons_items/save_earth_theme/save_E_5.png";
import Profile_b_1 from "../images/Tournament_Store_page/profile_background/Profile_b_1.png";
import Profile_b_2 from "../images/Tournament_Store_page/profile_background/Profile_b_2.png";
import Profile_b_3 from "../images/Tournament_Store_page/profile_background/Profile_b_3.png";
import Profile_b_4 from "../images/Tournament_Store_page/profile_background/Profile_b_4.png";
import Profile_b_5 from "../images/Tournament_Store_page/profile_background/Profile_b_5.png";
import green_coin from "../images/Tournament_Store_page/profile_background/green_coin.png";
import P_overlay_1 from "../images/Tournament_Store_page/profile_overlay/P_overlay_1.png";
import P_overlay_2 from "../images/Tournament_Store_page/profile_overlay/P_overlay_2.png";
import P_overlay_3 from "../images/Tournament_Store_page/profile_overlay/P_overlay_3.png";
import P_overlay_4 from "../images/Tournament_Store_page/profile_overlay/P_overlay_4.png";
import exploredefault from "../images/Home_page/explore.png";
import Homedefault from "../images/Explore_page/Home.png";
import m_adddefault from "../images/Home_page/m_add.png";
import tournamentdefault from "../images/Home_page/tournament.png";
import profiledefault from "../images/Home_page/profile.png";
import Navbar from "./Navbar";
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
import HomeOutline from "../images/Explore_page/Home.png";
import ExploreOutline from "../images/Home_page/explore.png";
import TournamentFill from "../images/Tournament_page/Tournamet_2.png";
import ProfileOutline from "../images/Home_page/profile.png";

export default function Tournament_Store_page({ theme, setTheme }) {
 

  const Default_ThemechangeMode = () => {
    setTheme("Default_theme_Navbar_color");
    localStorage.setItem("theme", "Default_theme_Navbar_color");
  };

  const Space_ThemechangeMode = () => {
    setTheme("Space_Theme_Navbar_color");
    localStorage.setItem("theme", "Space_Theme_Navbar_color");
  };

  const unicorn_ThemechangeMode = () => {
    setTheme("Unicorn_Theme_Navbar_color");
    localStorage.setItem("theme", "Unicorn_Theme_Navbar_color");
  };

  const memee_ThemechangeMode = () => {
    setTheme("Memee_Theme_Navbar_color");
    localStorage.setItem("theme", "Memee_Theme_Navbar_color");
  };

  const save_e_ThemechangeMode = () => {
    setTheme("Save_Earth_Day_Theme_Navbar_color");
    localStorage.setItem("theme", "Save_Earth_Day_Theme_Navbar_color");
  };

  const newyear_ThemechangeMode = () => {
    setTheme("New_Year_Theme_Navbar_color");
    localStorage.setItem("theme", "New_Year_Theme_Navbar_color");
  };

  const theme_1_ThemechangeMode = () => {
    setTheme("Theme_1_colors");
    localStorage.setItem("theme", "Theme_1_colors");
  };

  const medium_gray_ThemechangeMode = () => {
    setTheme("Medium_Gray_colors");
    localStorage.setItem("theme", "Medium_Gray_colors");
  };

  const Theme_2_ThemechangeMode = () => {
    setTheme("Theme_2_colors");
    localStorage.setItem("theme", "Theme_2_colors");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const [showIconsCmp, setShowIcons] = useState(true);
  const [showIButtonsCmp, setShowIButtons] = useState(false);
  const [showIFontCmp, setShowIFonts] = useState(false);
  const [showIBackgroundCmp, setShowIBackground] = useState(false);
  const [showIBackgroundoverCmp, setShowIBackgroundover] = useState(false);

  const showIcons = () => {
    setShowIcons(true);
    setShowIBackgroundover(false);
    setShowIBackground(false);
    setShowIFonts(false);
    setShowIButtons(false);
  };

  const showButtons = () => {
    setShowIButtons(true);
    setShowIBackgroundover(false);
    setShowIBackground(false);
    setShowIFonts(false);
    setShowIcons(false);
  };

  const showFonts = () => {
    setShowIFonts(true);
    setShowIButtons(false);
    setShowIcons(false);
    setShowIBackgroundover(false);
    setShowIBackground(false);
  };

  const showBackGround = () => {
    setShowIBackground(true);
    setShowIFonts(false);
    setShowIButtons(false);
    setShowIcons(false);
    setShowIBackgroundover(false);
  };

  const showBackGroundoverlay = () => {
    setShowIBackgroundover(true);
    setShowIBackground(false);
    setShowIFonts(false);
    setShowIButtons(false);
    setShowIcons(false);
  };

  return (
    <>
      <div className="Tournament_Store_page">
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

            <div className="Tourstorjudg1">
              <Link to="/Tournament_Store_page">
                {" "}
                <h4>Store</h4>{" "}
              </Link>
            </div>

            <div className="Tourstorjudg2">
              <Link to="/Tournament_judge_page">
                {" "}
                <h4>Judge</h4>{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="store_season">
          <img src={April}></img>
        </div>

        <div className="storeAmzon ">
          <h5>Gift cards</h5>
          <div className="storeAmzon2 ">
            <img src={Amzon_card}></img>
            <img src={Amzon_card}></img>
            <img src={Amzon_card}></img>
            <img src={Amzon_card}></img>
            <img src={Amzon_card}></img>
            <img src={Amzon_card}></img>
            <img src={Amzon_card}></img>
            <img src={Amzon_card}></img>
            <img src={Amzon_card}></img>
            <img src={Amzon_card}></img>
            <img src={Amzon_card}></img>
          </div>
        </div>

        <div className="StoreItems">
          <h5>Store Items</h5>
          <div className="StoreItems2">
            <h6
              onClick={showIcons}
              className={` ${showIconsCmp ? "sitem" : "sitem2"}`}
            >
              Icons
            </h6>
            <h6
              onClick={showButtons}
              className={` ${showIButtonsCmp ? "sitem" : "sitem2"}`}
            >
              Buttons
            </h6>
            <h6
              onClick={showFonts}
              className={` ${showIFontCmp ? "sitem" : "sitem2"}`}
            >
              Fonts
            </h6>
            <h6
              onClick={showBackGround}
              className={` ${showIBackgroundCmp ? "sitem" : "sitem2"}`}
            >
              Profile&nbsp;Background
            </h6>
            <h6
              onClick={showBackGroundoverlay}
              className={` ${showIBackgroundoverCmp ? "sitem" : "sitem2"}`}
            >
              Profile&nbsp;Overlay
            </h6>
          </div>
        </div>

        {showIconsCmp && (
          <div className="Store_theme">
            <div className="default_Theme">
              <div className="default_1">
                <h5>Default Theme</h5>
                {/* <img src={Coin2}></img> */}
              </div>

              <div onClick={Default_ThemechangeMode} className="default_2">
                <div className="default_d_1">
                  <img src={Homedefault}></img>
                  <h6>Home</h6>
                </div>

                <div className="default_d_1">
                  <img src={exploredefault}></img>
                  <h6>Explore</h6>
                </div>

                <div className="default_d_1">
                  <img id="defaultadd" src={m_adddefault}></img>
                </div>

                <div className="default_d_1">
                  <img src={tournamentdefault}></img>
                  <h6>Tournament</h6>
                </div>

                <div className="default_d_1">
                  <img src={profiledefault}></img>
                  <h6>Profile</h6>
                </div>
              </div>
            </div>

            <br />
            <div className="Space_Theme">
              <div className="Space_1">
                <h5>Space Theme</h5>
                <img src={Coin2}></img>
              </div>

              <div onClick={Space_ThemechangeMode} className="Space_2">
                <div className="Space_s_1">
                  <img src={Theme_1}></img>
                  <h6>Home</h6>
                </div>

                <div className="Space_s_1">
                  <img src={Theme_2}></img>
                  <h6>Explore</h6>
                </div>

                <div className="Space_s_1">
                  <img id="spaceadd" src={Theme_3}></img>
                </div>

                <div className="Space_s_1">
                  <img src={Theme_4}></img>
                  <h6>Tournament</h6>
                </div>

                <div className="Space_s_1">
                  <img src={Theme_5}></img>
                  <h6>Profile</h6>
                </div>
              </div>
            </div>

            <br />
            <div onClick={unicorn_ThemechangeMode} className="unicorn_Theme">
              <div className="unicorn_1">
                <h5>Unicorn Theme</h5>
                <img src={Coin2}></img>
              </div>

              <div className="unicorn_2">
                <div className="unicorn_u_1">
                  <img src={unicorn_1}></img>
                  <h6>Home</h6>
                </div>

                <div className="unicorn_u_1">
                  <img src={unicorn_2}></img>
                  <h6>Explore</h6>
                </div>

                <div className="unicorn_u_1">
                  <img id="spaceadd" src={unicorn_3}></img>
                </div>

                <div className="unicorn_u_1">
                  <img src={unicorn_4}></img>
                  <h6>Tournament</h6>
                </div>

                <div className="unicorn_u_1">
                  <img src={unicorn_5}></img>
                  <h6>Profile</h6>
                </div>
              </div>
            </div>

            <br />
            
            <div onClick={memee_ThemechangeMode} className="memee_Theme">
              <div className="memee_1">
                <h5>Memee Theme</h5>
                <img src={Coin2}></img>
              </div>

              <div className="memee_2">
                <div className="memee_m_1">
                  <img src={memee_1}></img>
                  <h6>Home</h6>
                </div>

                <div className="memee_m_1">
                  <img src={memee_2}></img>
                  <h6>Explore</h6>
                </div>

                <div className="memee_m_1">
                  <img id="spaceadd" src={memee_3}></img>
                </div>

                <div className="memee_m_1">
                  <img src={memee_4}></img>
                  <h6>Tournament</h6>
                </div>

                <div className="memee_m_1">
                  <img src={memee_5}></img>
                  <h6>Profile</h6>
                </div>
              </div>
            </div>
            <br />

            <div onClick={save_e_ThemechangeMode} className="save_e_Theme">
              <div className="save_e_1">
                <h5>Save Earth Day Theme</h5>
                <img src={Coin2}></img>
              </div>

              <div className="save_e_2">
                <div className="save_earth_1">
                  <img src={save_E_1}></img>
                  <h6>Home</h6>
                </div>

                <div className="save_earth_1">
                  <img src={save_E_2}></img>
                  <h6>Explore</h6>
                </div>

                <div className="save_earth_1">
                  <img id="spaceadd" src={save_E_3}></img>
                </div>

                <div className="save_earth_1">
                  <img src={save_E_4}></img>
                  <h6>Tournament</h6>
                </div>

                <div className="save_earth_1">
                  <img src={save_E_5}></img>
                  <h6>Profile</h6>
                </div>
              </div>
            </div>

            <br />

            <div onClick={newyear_ThemechangeMode} className="newyear_Theme">
              <div className="newyear_1">
                <h5>New Year Theme</h5>
                <img src={Coin2}></img>
              </div>

              <div className="newyear_2">
                <div className="newyear_n_1">
                  <img src={Newyer_1}></img>
                  <h6>Home</h6>
                </div>

                <div className="newyear_n_1">
                  <img src={Newyer_2}></img>
                  <h6>Explore</h6>
                </div>

                <div className="newyear_n_1">
                  <img id="spaceadd" src={Newyer_3}></img>
                </div>

                <div className="newyear_n_1">
                  <img src={Newyer_4}></img>
                  <h6>Tournament</h6>
                </div>

                <div className="newyear_n_1">
                  <img src={Newyer_5}></img>
                  <h6>Profile</h6>
                </div>
              </div>
            </div>
            <br />

            <div onClick={theme_1_ThemechangeMode} className="newyear_Theme">
              <div className="newyear_1">
                <h5>Theme : 1</h5>
                <img src={Coin2}></img>
              </div>

              <div  className="theme_1">
                <div className="newyear_n_1">
                  <img style={{ height: "21px" }} src={theme_1_1}></img>
                  <h6>Home</h6>
                </div>

                <div className="newyear_n_1">
                  <img style={{ height: "21px" }} src={theme_1_2}></img>
                  <h6>Explore</h6>
                </div>

                <div className="newyear_n_1">
                  <img
                    style={{ height: "56px" }}
                    id="spaceadd"
                    src={theme_1_3}
                  ></img>
                </div>

                <div className="newyear_n_1">
                  <img style={{ height: "21px" }} src={theme_1_4}></img>
                  <h6>Tournament</h6>
                </div>

                <div className="newyear_n_1">
                  <img style={{ height: "21px" }} src={theme_1_5}></img>
                  <h6>Profile</h6>
                </div>
              </div>
            </div>
            <br />
            <div className="newyear_Theme">
              <div className="newyear_1">
                <h5>Theme : 2</h5>
                <img src={Coin2}></img>
              </div>

              <div onClick={Theme_2_ThemechangeMode} className="theme_2">
                <div className="newyear_n_1">
                  <img style={{ height: "21px" }} src={Theme_2_1}></img>
                  <h6>Home</h6>
                </div>

                <div className="newyear_n_1">
                  <img style={{ height: "21px" }} src={Theme_2_2}></img>
                  <h6>Explore</h6>
                </div>

                <div className="newyear_n_1">
                  <img
                    style={{ height: "55px" }}
                    id="spaceadd"
                    src={Theme_2_3}
                  ></img>
                </div>

                <div className="newyear_n_1">
                  <img style={{ height: "21px" }} src={Theme_2_4}></img>
                  <h6>Tournament</h6>
                </div>

                <div className="newyear_n_1">
                  <img style={{ height: "21px" }} src={Theme_2_5}></img>
                  <h6>Profile</h6>
                </div>
              </div>
            </div>
            <br />
            <div className="newyear_Theme">
              <div className="newyear_1">
                <h5>Medium Gray Theme</h5>
                <img src={Coin2}></img>
              </div>

              <div
                onClick={medium_gray_ThemechangeMode}
                className="medium_gray_theme"
              >
                <div className="newyear_n_1">
                  <img style={{ height: "24px" }} src={M_G_1}></img>
                  <h6>Home</h6>
                </div>

                <div className="newyear_n_1">
                  <img style={{ height: "24px" }} src={M_G_2}></img>
                  <h6>Explore</h6>
                </div>

                <div className="newyear_n_1">
                  <img
                    style={{ height: "60px" }}
                    id="spaceadd"
                    src={M_G_3}
                  ></img>
                </div>

                <div className="newyear_n_1">
                  <img style={{ height: "24px" }} src={M_G_4}></img>
                  <h6>Tournament</h6>
                </div>

                <div className="newyear_n_1">
                  <img style={{ height: "25px" }} src={M_G_5}></img>
                  <h6>Profile</h6>
                </div>
              </div>
            </div>
          </div>
        )}

        {showIButtonsCmp && (
          <div className="store_buttons">
            <div className="store_space_btn">
              <div className="Space_1">
                <h5>Default</h5>
                {/* <img src={Coin2}></img> */}
              </div>
              <div className="default_btn">
                <button>Buttons</button>
              </div>
            </div>
            <br />
            <div className="store_space_btn">
              <div className="Space_1">
                <h5>Space</h5>
                <img src={Coin2}></img>
              </div>
              <div className="space_btn">
                <button>Buttons</button>
              </div>
            </div>

            <br />

            <div className="store_space_btn">
              <div className="Space_1">
                <h5>Unicorn </h5>
                <img src={Coin2}></img>
              </div>
              <div className="unicorn_btn">
                <button>Buttons</button>
              </div>
            </div>

            <br />

            <div className="store_space_btn">
              <div className="Space_1">
                <h5>Memee </h5>
                <img src={Coin2}></img>
              </div>
              <div className="memee_btn">
                <button>Buttons</button>
              </div>
            </div>

            <br />

            <div className="store_space_btn">
              <div className="Space_1">
                <h5>Save Earth </h5>
                <img src={Coin2}></img>
              </div>
              <div className="save_earth_btn">
                <button>Buttons</button>
              </div>
            </div>

            <br />

            <div className="store_space_btn">
              <div className="Space_1">
                <h5>New Year </h5>
                <img src={Coin2}></img>
              </div>
              <div className="newyear_btn">
                <button>Buttons</button>
              </div>
            </div>
          </div>
        )}

        {showIFontCmp && (
          <div className="store_fonts">
            <div className="font_style_1">
              <div className="Space_1">
                <h5>Font Style 1</h5>
                <img src={Coin2}></img>
              </div>
              <div className="F_style_1">
                <h5>I love memee app.</h5>
              </div>
            </div>
            <br />

            <div className="font_style_1">
              <div className="Space_1">
                <h5>Font Style 2</h5>
                <img src={Coin2}></img>
              </div>
              <div className="F_style_2">
                <h5>I love memee app.</h5>
              </div>
            </div>
            <br />

            <div className="font_style_1">
              <div className="Space_1">
                <h5>Font Style 3</h5>
                <img src={Coin2}></img>
              </div>
              <div className="F_style_3">
                <h5>I love memee app.</h5>
              </div>
            </div>
            <br />

            <div className="font_style_1">
              <div className="Space_1">
                <h5>Font Style 4</h5>
                <img src={Coin2}></img>
              </div>
              <div className="F_style_4">
                <h5>I love memee app.</h5>
              </div>
            </div>
          </div>
        )}

        {showIBackgroundCmp && (
          <div className="store_background">
            <div className="Str_background">
              <div className="Str_bg_1">
                <img src={Profile_b_1}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_1">
                <img src={Profile_b_2}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_1">
                <img src={Profile_b_3}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_1">
                <img src={Profile_b_4}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_1">
                <img src={Profile_b_1}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_1">
                <img src={Profile_b_5}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_1">
                <img src={Profile_b_3}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_1">
                <img src={Profile_b_4}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_1">
                <img src={Profile_b_1}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_1">
                <img src={Profile_b_2}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_1">
                <img src={Profile_b_3}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_1">
                <img src={Profile_b_4}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_1">
                <img src={Profile_b_1}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_1">
                <img src={Profile_b_2}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_1">
                <img src={Profile_b_3}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_1">
                <img src={Profile_b_4}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>
          </div>
        )}

        {showIBackgroundoverCmp && (
          <div className="profile_overlay">
            <div className="Str_background">
              <div className="Str_bg_ol">
                <img src={P_overlay_1}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_ol">
                <img src={P_overlay_2}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_ol">
                <img src={P_overlay_3}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_ol">
                <img src={P_overlay_4}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_ol">
                <img src={P_overlay_1}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_ol">
                <img src={P_overlay_2}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_ol">
                <img src={P_overlay_3}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_ol">
                <img src={P_overlay_4}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_ol">
                <img src={P_overlay_1}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_ol">
                <img src={P_overlay_2}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_ol">
                <img src={P_overlay_3}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_ol">
                <img src={P_overlay_4}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_ol">
                <img src={P_overlay_1}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_ol">
                <img src={P_overlay_2}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_ol">
                <img src={P_overlay_3}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>

            <div className="Str_background">
              <div className="Str_bg_ol">
                <img src={P_overlay_4}></img>
              </div>
              <div className="Str_bg_2">
                <img src={green_coin}></img>
              </div>
            </div>
          </div>
        )}

        {/* <Navbar spaceThemeNav={Space_ThemechangeMode} defaultThemeNav={Default_ThemechangeMode} unicorntheme={unicorn_ThemechangeMode}/> */}
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
