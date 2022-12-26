import React from "react";
import "../Css/Payment_Method_page.css";
import { Link } from "react-router-dom";
import apple_wallet from "../images/payment_page/apple_wallet.png";
import back from "../images/payment_page/back.png";
import credit_card from "../images/payment_page/credit_card.png";
import google_wallet from "../images/payment_page/google_wallet.png";
import plus from "../images/payment_page/plus.png";

export default function Payment_Method_page() {
  return (
    <>
      <div className="Payment_Method_page">
        <div className="payment_wrapper">
          <div className="payment_top_container">
            <div className="Inbox_Arrow">
              <Link to="/Add_Coins_page">
                <img src={back}></img>{" "}
              </Link>{" "}
              &nbsp;&nbsp;&nbsp;
              <h3>Payment Method</h3>
            </div>
            <Link to="/Payment_Add_card_page">
              <div className="payment_plus">
                <img src={plus} />
              </div>
            </Link>
          </div>
          <div className="pay_1_page_setup">
            <div className="payment_setup">
              Please setup your paymant method to get better delivery service
            </div>
            <div className="payment_method">Payment Methods</div>
            <div className="credit_card">
              <div className="credit_card_img">
                <div>
                  <img src={credit_card} />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <span style={{ color: "white" }}>Credit Card</span>
                  <br />
                  <span style={{ color: "#848484" }}>****</span>
                </div>
              </div>
              <div className="check_icon">
                <input type="checkbox" />
              </div>
            </div>
            <div className="credit_card">
              <div className="credit_card_img">
                <div>
                  <img src={apple_wallet} />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <span style={{ color: "white" }}>Apple Pay</span>
                  <br />
                  <span style={{ color: "#848484" }}>myemail.com</span>
                </div>
              </div>
              <div className="check_icon">
                <input type="checkbox" />
              </div>
            </div>
            <div className="credit_card">
              <div className="credit_card_img">
                <div>
                  <img src={google_wallet} />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <span style={{ color: "white" }}>Google Wallet</span>
                  <br />
                  <span style={{ color: "#848484" }}>myemail.com</span>
                </div>
              </div>
              <div className="check_icon">
                <input type="checkbox" />
              </div>
            </div>
            <Link to="/Payment_Manage_card_page">
              <div className="payment_continue_btn">Continue</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
