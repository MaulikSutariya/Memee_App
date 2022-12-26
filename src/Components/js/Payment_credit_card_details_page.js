import React, { useState } from "react";
import "../Css/Payment_credit_card_details_page.css";
import { Link } from "react-router-dom";
import back from "../images/payment_page/back.png";
import plus from "../images/payment_page/plus.png";
import visa_card from "../images/payment_page/visa_card.png";
import visa from "../images/payment_page/visa.png";
import set_default from "../images/payment_page/set_default.png";
import remove from "../images/payment_page/remove.png";
import edit from "../images/payment_page/edit.png";

export default function Payment_credit_card_details_page() {
  const [open, setOpen] = useState(false);
  const [removeCard, setRemoveCard] = useState(false);
  const [cancel, setCancel] = useState(false);
  const clickToCancel = () => {
    setCancel(true);
  };
  const openSlider = () => {
    setOpen(!open);
  };
  const openRemoveCard = () => {
    setRemoveCard(!removeCard);
  };
  return (
    <>
      <div className="Payment_credit_card_details_page">
        <div className="credit_wrapper">
          <div className="payment_top_container">
            <div className="Inbox_Arrow">
              <Link to="/Payment_Manage_card_page">
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
          <div onClick={() => (open ? setOpen(false) : null)}>
            <div className="platinumcardmain">
              <div className="platinum_container">
                <img src={visa_card} />
              </div>
              <div className="card_holder_container">
                <div className="card_name">
                  <div style={{ marginBottom: "16px" }}>Card Holder Name</div>
                  <div style={{ marginBottom: "16px" }}>Ending in</div>
                  <div style={{ marginBottom: "16px" }}>Expiry</div>
                  <div style={{ marginBottom: "16px" }}>
                    Card Holder <br /> Address
                  </div>
                </div>
                <div className="card_name_info">
                  <div style={{ marginBottom: "16px" }}>Mr Astronut</div>
                  <div style={{ marginBottom: "16px" }}>0212</div>
                  <div style={{ marginBottom: "16px" }}>01/23</div>
                  <div style={{ marginBottom: "16px" }}>
                    31901 Thornridge <br /> Cir. Shiloh, <br /> Hawaii 81063
                  </div>
                </div>
              </div>
              <div className="proceed_continue_btn" onClick={openSlider}>
                Proceed
              </div>
            </div>
          </div>
          <div className={open ? "sliderOpen" : "sliderClose"}>
            <div className={open ? "line" : ""} onClick={openSlider}></div>
            <div className="ul_list">
              <div className="edit_delete">
                <div className={open ? "showImagewrapper" : "imgWrapper"}>
                  <img src={set_default} />
                </div>
                <div className={open ? "set_slider_font" : "slider_font_none"}>
                  Set as Default
                </div>
              </div>
              <div className="edit_delete">
                <div className={open ? "showImagewrapper" : "imgWrapper"}>
                  <img src={remove} />
                </div>
                <div
                  className={open ? "set_slider_font" : "slider_font_none"}
                  onClick={() => {
                    openRemoveCard();
                    setOpen(false);
                  }}
                >
                  Remove Card
                </div>
              </div>
              <div className="edit_delete">
                <div className={open ? "showImagewrapper" : "imgWrapper"}>
                  <img src={edit} />
                </div>
                <div className={open ? "set_slider_font" : "slider_font_none"}>
                  Edit Card
                </div>
              </div>
            </div>
          </div>
          {removeCard ? (
            <>
              <div className="removeCardPage"></div>
              <div className="removeCard">
                <h2>Remove Card</h2>
                <p>Are you sure you want to remove this card?</p>
                <div className="visa_center_img_card">
                  <img src={visa} />
                </div>
                <div className="ending_in">
                  <div>Ending in</div>
                  <div>0212</div>
                </div>
                <div
                  className="credit_confirm"
                  onClick={() => setRemoveCard(false)}
                >
                  Confirm
                </div>
                <div
                  className="credit_cancel"
                  onClick={() => setRemoveCard(false)}
                >
                  Cancel
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
