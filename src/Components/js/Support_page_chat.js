import React from "react";
import "../Css/Support_page_chat.css";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import { Link } from "react-router-dom";
import Gallery from "../images/Chat_page/Gallery.png";
import send from "../images/Chat_page/send.png";
import emoji from "../images/Chat_page/emoji.png";
import Sup_Chat_user from "../images/support page/Sup_Chat_user.png";
import Sup_Chat_img_1 from "../images/support page/Sup_Chat_img_1.png";
import Sup_Chat_img_2 from "../images/support page/Sup_Chat_img_2.png";
import Sup_Chat_logo from "../images/support page/Sup_Chat_logo.png";

export default function Support_page_chat() {
  return (
    <>
      <div className="Support_page_chat">
        <div className="supp_chat_arr">
          <div className="CommentsArrow">
            <Link to="/Support_page_2">
              {" "}
              <img src={Back_Arrow}></img>
            </Link>{" "}
            &nbsp;&nbsp;&nbsp;
            <h3>Support</h3>
          </div>
        </div>

        <div className="sup_chat_1">
          <div className="support_chat">
            <div className="supp_1">
              <img src={Sup_Chat_user}></img>
              <div className="supp_2">
                <h4>Plagiarism</h4>
                <h5>903F9G9GTH</h5>
              </div>
            </div>
            <h3>Pending</h3>
          </div>
          <div className="reportodsup">
            <p>
              These rules and regulations for the use of Memee, located at
              Stumble’scom. By accessing this website we assume you accept these
              terms and conditions. Do not continue to use if you do not agree
              to take all of the terms and conditions stated on this page. By
              accessing this
            </p>
            <img src={Sup_Chat_img_1}></img>
            <img src={Sup_Chat_img_2}></img>
          </div>
        </div>

        <div className="sup_chat_1">
          <div className="support_chat">
            <div className="supp_1">
              <img src={Sup_Chat_logo}></img>
              <div className="supp_3">
                <h4>Memee Admin</h4>
                <h5>April 25, 2022</h5>
              </div>
            </div>
            <h3>Pending</h3>
          </div>
          <div className="reportodsup">
            <p>
              These rules and regulations for the use of Stumble’s Website,
              located at meme.com By accessing this website we assume you accept
              these terms and conditions. Do not continue to use if you do not
              agree to take all of the terms and conditions stated on this page.
              By accessing this website we assume you accept these terms and
              conditions.
            </p>
          </div>
        </div>

        <div className="chat_keyboard">
          <img src={Gallery}></img>
          <div className="chat_input">
            <input type="text" placeholder="Aa"></input>
            <img id="chat_emoji" src={emoji}></img>
          </div>
          {/* <img src={send}></img> */}
          <svg
            width="30"
            height="40"
            viewBox="0 0 23 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.6313 12.3095C22.6406 11.4542 22.1745 10.6682 21.4215 10.2537L3.87589 0.574373C3.08909 0.129366 2.16439 0.180973 1.4275 0.682663C0.676239 1.19366 0.293837 2.41531 0.507035 3.29856L2.16439 10.1539C2.33359 10.8577 2.96388 11.3544 3.68722 11.3535L13.4351 11.3535C13.9351 11.3442 14.3412 11.7503 14.3318 12.2503C14.3327 12.7401 13.9342 13.1386 13.4351 13.1471L3.67876 13.1386C2.95457 13.1386 2.32513 13.6327 2.15423 14.3366L0.482499 21.2096C0.280301 22.021 0.516341 22.834 1.09163 23.4093C1.15932 23.477 1.23546 23.5531 1.31245 23.6115C2.0561 24.1876 3.02987 24.2629 3.85896 23.823L21.4046 14.3484C22.1575 13.9508 22.6228 13.164 22.6313 12.3095Z" />
          </svg>
        </div>
      </div>
    </>
  );
}
