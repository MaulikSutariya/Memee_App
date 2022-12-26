import React from "react";
import "../Css/Follow_Request.css";
import { Link } from "react-router-dom";
import Back_Arrow from "../images/Back_Arrow.png";
import follow_req_img from "../images/Follow_request_page/follow_req_img.png";
import Inbox_today_user from "../images/Inbox_page/Inbox_today_user.png";
import Three_dot from "../images/Follow_request_page/Three_dot.png";

export default function Follow_Request() {
  return (
    <>
      <div className="Follow_Request">
        <div className="CommentsArrow">
          <Link to="/Inbox">
            {" "}
            <img src={Back_Arrow}></img>{" "}
          </Link>{" "}
          &nbsp;&nbsp;&nbsp;
          <h3>Follow Request</h3>
        </div>

        <div className="Follow_req_img">
          <img src={follow_req_img}></img>
          <h3>Follow Requests</h3>
          <p>
            When people ask to follow, you’ll see their
            <br />
            requests here.
          </p>
        </div>

        <hr id="Inboxhr" />
        <h5 id="Suggest_for_uh">Suggestions for you</h5>
        <div className="Suggest_profile">
          <div className="Suggest_profiles">
            <div className="inbox_today_1">
              <div className="Inbox_follow_user">
                <img id="I_b_U_1" src={Inbox_today_user}></img>
              </div>
              <h5>
                <span>Sarah Saunders</span> started following you.
                <span2> 8h</span2>
              </h5>
            </div>
            <div className="F_req_dot">
              <div className="Today_follow">
                <h6>Follow</h6>
              </div>
              <img src={Three_dot}></img>
            </div>
          </div>

          <div className="Suggest_profiles">
            <div className="inbox_today_1">
              <div className="Inbox_follow_user">
                <img id="I_b_U_1" src={Inbox_today_user}></img>
              </div>
              <h5>
                <span>Sarah Saunders</span> started following you.
                <span2> 8h</span2>
              </h5>
            </div>
            <div className="F_req_dot">
              <div className="Today_follow">
                <h6>Follow</h6>
              </div>
              <img src={Three_dot}></img>
            </div>
          </div>

          <div className="Suggest_profiles">
            <div className="inbox_today_1">
              <div className="Inbox_follow_user">
                <img id="I_b_U_1" src={Inbox_today_user}></img>
              </div>
              <h5>
                <span>Sarah Saunders</span> started following you.
                <span2> 8h</span2>
              </h5>
            </div>
            <div className="F_req_dot">
              <div className="Today_follow">
                <h6>Follow</h6>
              </div>
              <img src={Three_dot}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
