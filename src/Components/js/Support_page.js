import React from "react";
import "../Css/Support_page.css";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import { Link } from "react-router-dom";
import S_1 from "../images/Settings_page/S_1.png";

export default function Support_page() {
  return (
    <>
      <div className="Support_page">
        <div className="CommentsArrow">
          <Link to="/Profile_Setting">
            {" "}
            <img src={Back_Arrow}></img>
          </Link>{" "}
          &nbsp;&nbsp;&nbsp;
          <h3>Support</h3>
        </div>

        <br />
        <div className="support">
          <div className="supp_1">
            <img src={S_1}></img>
            <div className="supp_2">
              <h4>Abuse</h4>
              <h5>903F9G9GTH</h5>
              <h6>April 25, 2022 | 9:00am</h6>
            </div>
          </div>
          <h3>Pending</h3>
        </div>

        <div className="support">
          <div className="supp_1">
            <img src={S_1}></img>
            <div className="supp_2">
              <h4>Plagiarism</h4>
              <h5>9UF39HJ3HJ</h5>
              <h6>April 25, 2022 | 9:00am</h6>
            </div>
          </div>
          <h3>Pending</h3>
        </div>

        <div className="Sup_send_tick">
          <Link to="/Support_page_2">
            {" "}
            <button>Send New Ticket</button>
          </Link>
        </div>
      </div>
    </>
  );
}
