import React from "react";
import "../Css/Payment_Add_card_page.css";
import { Link } from "react-router-dom";
import back from "../images/payment_page/back.png";

export default function Payment_Add_card_page() {
  return (
    <>
      <div className="Payment_Add_card_page">
        <div className="add_card_wrapper">
          <div className="add_card_container">
            <div className="Inbox_Arrow">
              <Link to="/Payment_Manage_card_page">
                <img src={back}></img>{" "}
              </Link>{" "}
              &nbsp;&nbsp;&nbsp;
              <h3>Payment Method</h3>
            </div>
          </div>
          <div className="addcardpayment_page_main">
            <div className="name_here_input">
              <div className="full_name_font">Full Name</div>
              <input type="text" placeholder="Name here" />
            </div>

            <div className="canadainputofaddcard">
              <div className="full_name_font">Country</div>
              <input type="text" placeholder="Canada" />
            </div>

            <div className="cardnumpassword">
              <div className="full_name_font">Card number</div>
              <input type="Password" placeholder="Password" />
            </div>

            <div className="expiry_date">
              <div style={{ margin: "5px" }}>
                <div>Expiry date</div>
                <input type="text" placeholder="mm/yy" />
              </div>
              <div style={{ margin: "5px" }}>
                <div>cvv</div>
                <input type="text" placeholder="****" />
              </div>
            </div>
          </div>
          <div className="save_card_yellow">Save Card</div>
        </div>
      </div>
    </>
  );
}
