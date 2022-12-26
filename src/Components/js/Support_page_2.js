import React, { useState } from "react";
import "../Css/Support_page_2.css";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import { Link } from "react-router-dom";
import right from "../images/right.png";
import bottom from "../images/bottom.png";
import Attach from "../images/support page/Attach.png";

export default function Support_page_2() {
  const [hide, SetHide] = useState(false);
  const showUl = () => {
    SetHide(!hide);
  };

  return (
    <>
      <div className="Support_page_2">
        <div className="CommentsArrow">
          <Link to="/Support_page">
            {" "}
            <img src={Back_Arrow}></img>
          </Link>{" "}
          &nbsp;&nbsp;&nbsp;
          <h3>Support</h3>
        </div>

        <br />
        <div className="hideshowsupport">
          <div className={`Support_1 ${hide ? "Support_2" : ""}`}>
            <div onClick={showUl} className="supportsub">
              <h1>Select Subject</h1>
              <div className="buyCoins2">
                {hide ? (
                  <img id="buycoinbottom" src={bottom}></img>
                ) : (
                  <img id="buycoinright" src={right}></img>
                )}
              </div>
            </div>
            {hide && (
              <div className="ulliofsup">
                <ul className="support_ul">
                  <li>Abuse</li>
                  <li>Payment</li>
                  <li>Image</li>
                  <li>Profile</li>
                  <li>Tournament</li>
                  <li>Coins</li>
                  <li>Plagiarism</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <br />

        <div className="sup_y_mess">
          <h4>Your message</h4>
          <textarea placeholder="Type here" rows="5" maxLength={500}></textarea>
        </div>

        <div className="support_Attatch">
          <img src={Attach}></img>
          <h4>Attach images or proof</h4>
        </div>

        <div className="Sup_send_tick">
          <Link to="/Support_page_chat">
            {" "}
            <button>Send New Ticket</button>
          </Link>
        </div>
      </div>
    </>
  );
}
