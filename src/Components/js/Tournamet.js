import React, { useState } from "react";
import "../Css/Tournamet.css";
import { Link } from "react-router-dom";
import Notification from "../images/Home_page/Notification.png";
import Add from "../images/Home_page/Add.png";
import Coin from "../images/Home_page/Coin.png";
import Info_Circle from "../images/Tournament_page/Info_Circle.png";
import amzon_icons_t from "../images/Tournament_page/amzon_icons_t.png";
import Modal from "react-modal";
import Navbar from "./Navbar";
import HomeOutline from "../images/Explore_page/Home.png";
import ExploreOutline from "../images/Home_page/explore.png";
import TournamentFill from "../images/Tournament_page/Tournamet_2.png";
import ProfileOutline from "../images/Home_page/profile.png";

export default function Tournamet() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="Tournamet_T">
        <div className="home_page_Header">
          <div className="Explore_name2">
            <h2>Tournament </h2>
            <Link to="/Faq_page"> <img src={Info_Circle}></img> </Link>
          </div>
          <div className="notiadd">
            <Link to="/Inbox">
            
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
            <div className="Tourstorjudg1">
              <Link to="/Tournamet">
                {" "}
                <h4>Tournament</h4>
              </Link>
            </div>

            <div className="Tourstorjudg2">
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

        <div className="trment_wrap">
          <div className="gold_text">
            <div className="amazon_icon">
              <img src={amzon_icons_t} />
            </div>
            <div className="gift_card_margin">
              <h1 className="gold">GOLD</h1>
              <h1 className="bonus">100$ Gift Card</h1>
            </div>
          </div>

          <div className="silver_text">
            <div className="amazon_icon">
              <img src={amzon_icons_t} />
            </div>
            <div className="gift_card_margin">
              <h1 className="silver">SILVER</h1>
              <h1 className="bonus">50$ Gift Card</h1>
            </div>
          </div>
          <div className="bronze_text">
            <div className="amazon_icon">
              <img src={amzon_icons_t} />
            </div>
            <div className="gift_card_margin">
              <h1 className="bronze">BRONZE</h1>
              <h1 className="bonus">20$ Gift Card</h1>
            </div>
          </div>
        </div>

        <div className="rank_of_tournament">
          <Link to="/Tournamet_Ranking_list">
            {" "}
            <div className="view_prizes">View all ranking prizes</div>{" "}
          </Link>

          <div
            onClick={() => {
              setIsOpen(true);
            }}
            className="enter_tournament"
          >
            Enter Tournament
          </div>
        </div>
        <Modal
          isOpen={isOpen}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => setIsOpen(false)}
          style={{
            overlay: {
              // backgroundColor:'grey'
            },
          }}
        >
          <div className="MOdalMain2">
            <div className="Modal2">
              <div className="edit_user_text">Rules & Regulations</div>

              <div className="M">
                <div className="edit_right_cross">
                  <svg
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
                <div className="M_1">
                  <div className="MMM">
                    <p>
                      During the tournament all
                      <br /> participants are expected to
                      <br /> behave professionally and should <br />
                      avoid abusive language/gestures/
                      <br /> question umpires decisions.
                    </p>
                    <p>
                      The Team Captain is responsible
                      <br /> for informing all of the teammates <br />
                      about when the team will be
                      <br /> playing and on what dates.
                    </p>
                  </div>
                </div>
              </div>
              <div className="save_changes2">
                <Link to="/Tournamet_post_entry">
                  {" "}
                  <button>Agree</button>
                </Link>
              </div>
            </div>
          </div>
        </Modal>

        
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
