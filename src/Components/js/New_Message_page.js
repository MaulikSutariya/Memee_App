import React from "react";
import "../Css/New_Message_page.css";
import { Link } from "react-router-dom";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import user_1 from "../images/New_Message_page/user_1.png";
import user_2 from "../images/New_Message_page/user_2.png";

export default function New_Message_page() {
  return (
    <>
      <div className="New_message_page">
        <div className="New_Messsage_Arrow">
          <Link to="/Inbox_Message_page">
            <img src={Back_Arrow}></img>{" "}
          </Link>
          &nbsp; &nbsp;
          <h3>New message</h3>
        </div>

        <div className="New_mess_to">
          <h6>To :</h6>
          <input type="text"></input>
        </div>

        <div className="new_message_user">
          <Link to="/New_Message_Page_Users">
            <div className="N_M_1">
              <img src={user_1}></img>
              <div className="N_M_1_details">
                <h5>Sunila Ashwin</h5>
                <h6>@sunila</h6>
              </div>
            </div>
          </Link>

          <Link to="/New_Message_Page_Users">
            <div className="N_M_1">
              <img src={user_2}></img>
              <div className="N_M_1_details">
                <h5>Emila Shikar</h5>
                <h6>@omerubaid_</h6>
              </div>
            </div>
          </Link>

          <Link to="/New_Message_Page_Users">
            <div className="N_M_1">
              <img src={user_1}></img>
              <div className="N_M_1_details">
                <h5>Omer Ubaid</h5>
                <h6>@omerubaid_</h6>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
