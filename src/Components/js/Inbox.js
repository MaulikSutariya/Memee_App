import React from "react";
import "../Css/Inbox.css";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import { Link } from "react-router-dom";
import Request_user from "../images/Inbox_page/Request_user.png";
import right from "../images/Inbox_page/right.png";
import Inbox_today_user from "../images/Inbox_page/Inbox_today_user.png";
import Inbox_Alert from "../images/Inbox_page/Inbox_Alert.png";
import Inbox_today_user4 from "../images/Inbox_page/Inbox_today_user4.png";
import Inbox_today_user3 from "../images/Inbox_page/Inbox_today_user3.png";

export default function Inbox() {
  return (
    <>
      <div className="Inbox">
        <div className="Inbox_lite">
          <div className="Inbox_Arrow">
            <Link to="/Home_page">
              <img src={Back_Arrow}></img>{" "}
            </Link>{" "}
            &nbsp;&nbsp;&nbsp;
            <h3>Inbox</h3>
          </div>

          <div className="Activity_message">
            <div className="A_M">
              <Link to="/Inbox">
                <h4>Activity</h4>
              </Link>
            </div>
            <div className="A_M_2">
              <Link to="/Inbox_Message_page">
                <h4>Message</h4>
              </Link>
            </div>
          </div>
        </div>

        <div className="i_class_relative">
          <Link to="/Follow_Request">
            <div className="Inbox_follow_request">
              <div className="Inbox_follow_request_1">
                <div className="Inbox_follow_request_1_1">
                  <img src={Request_user}></img>
                </div>
                <div className="Inbox_follow_request_1_2">
                  <h2>Follow Requests</h2>
                  <h5>Approve or ignore requests</h5>
                </div>
              </div>

              <div className="Inbox_follow_request_2">
                <div className="Inbox_follow_request_2_2">
                  <h6>2</h6>
                </div>
                <img src={right}></img>
              </div>
            </div>
          </Link>

          <hr id="Inboxhr" />

          <div>
            <h5 id="Today_inbox_today">Today</h5>
            <div className="inbox_today">
              <div className="inbox_today_1">
                <div className="Inbox_follow_user">
                  <img id="I_b_U_1" src={Inbox_today_user}></img>
                  <img id="I_b_U_2" src={Inbox_Alert}></img>
                </div>
                <h5>
                  <span>Sarah Saunders</span> started following you.
                  <span2> 8h</span2>
                </h5>
              </div>
              <div className="Today_follow">
                <h6>Follow</h6>
              </div>
            </div>
          </div>
          <hr id="Inboxhr" />

          <h5 id="Today_inbox_today">Yesterday</h5>
          <div className="inbox_Yesterday">
            <div className="inbox_Yesterday_1">
              <div className="Inbox_follow_user">
                <img id="I_b_U_1" src={Inbox_today_user3}></img>
                <img id="I_b_U_2" src={Inbox_Alert}></img>
              </div>
              <h5>
                <span>Jereme Kerr</span> started following you.
                <span2> 8h</span2>
              </h5>
            </div>
            <div className="Yesterday_follow">
              <h6>Following</h6>
            </div>
          </div>

          <br />
          <div className="inbox_Yesterday">
            <div className="inbox_Yesterday_1">
              <div className="Inbox_follow_user">
                <img id="I_b_U_1" src={Inbox_today_user4}></img>
                <img id="I_b_U_2" src={Inbox_Alert}></img>
              </div>
              <h5>
                <span>Jereme Kerr</span> started following you.
                <span2> 8h</span2>
              </h5>
            </div>
          </div>

          <br />
          <div className="inbox_today">
            <div className="inbox_today_1">
              <div className="Inbox_follow_user">
                <img id="I_b_U_1" src={Inbox_today_user}></img>
                <img id="I_b_U_2" src={Inbox_Alert}></img>
              </div>
              <h5>
                <span>Sarah Saunders</span> started following you.
                <span2> 8h</span2>
              </h5>
            </div>
            <div className="Today_follow">
              <h6>Follow</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
