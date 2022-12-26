import React from "react";
import "../Css/Payment_Manage_card_page.css";
import back from "../images/payment_page/back.png";
import plus from "../images/payment_page/plus.png";
import { Link } from "react-router-dom";
import visa from "../images/payment_page/visa.png";
import dot from "../images/payment_page/dot.png";

export default function Payment_Manage_card_page() {
  return (
    <>
      <div className="Payment_Manage_card_page">
        <div className="method_wrapper">
          <div className="payment_top_container">
            <div className="Inbox_Arrow">
              <Link to="/Payment_Method_page">
                <img src={back}></img>{" "}
              </Link>{" "}
              &nbsp;&nbsp;&nbsp;
              <h3>Manage Cards</h3>
            </div>
            <Link to="/Payment_Add_card_page">
              <div className="payment_plus">
                <img src={plus} />
              </div>
            </Link>
          </div>

          <div className="visa_main_container">
            <div className="visa_container">
              <div className="visa_info">
                <div style={{ marginBottom: "16px" }}>
                  <span style={{ color: "white" }}>Mr Astronut</span>
                  <br />
                  <span style={{ color: "#848484" }}>*** *** *** *** 3456</span>
                </div>
                <div>
                  <img src={visa} />
                </div>
              </div>
              <div className="check_icon">
                <img src={dot} />
              </div>
            </div>
            <div className="visa_container">
              <div className="visa_info">
                <div style={{ marginBottom: "16px" }}>
                  <span style={{ color: "white" }}>Mr Astronut</span>
                  <br />
                  <span style={{ color: "#848484" }}>*** *** *** *** 3456</span>
                </div>
                <div>
                  <img src={visa} />
                </div>
              </div>
              <div className="check_icon">
                <img src={dot} />
              </div>
            </div>
            <div className="visa_container">
              <div className="visa_info">
                <div style={{ marginBottom: "16px" }}>
                  <span style={{ color: "white" }}>Mr Astronut</span>
                  <br />
                  <span style={{ color: "#848484" }}>*** *** *** *** 3456</span>
                </div>
                <div>
                  <img src={visa} />
                </div>
              </div>
              <div className="check_icon">
                <img src={dot} />
              </div>
            </div>
            <Link to="/Payment_credit_card_details_page">
              <div className="method_continue_btn">Continue</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
