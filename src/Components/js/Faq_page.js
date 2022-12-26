import React, { useState } from "react";
import "../Css/Faq_page.css";
import Back_Arrow from "../images/Back_Arrow.png";
import right from "../images/right.png";
import bottom from "../images/bottom.png";
import { Link } from "react-router-dom";

export default function Faq_page() {
  const [showMore, setShowMore] = useState(false);
  const [hide, SetHide] = useState(false);

  const [showMore2, setShowMore2] = useState(false);
  const [hide2, SetHide2] = useState(false);

  const [showMore3, setShowMore3] = useState(false);
  const [hide3, SetHide3] = useState(false);

  const [showMore4, setShowMore4] = useState(false);
  const [hide4, SetHide4] = useState(false);

  const [showMore5, setShowMore5] = useState(false);
  const [hide5, SetHide5] = useState(false);
  return (
    <>
      <div className="Sign_in_page">
        <div className="faqArrow">
        <Link to="/Tournamet">  <img src={Back_Arrow}></img></Link>
          <h3>FAQs</h3>
        </div>
        <div className="howcanhelp">
          <h1>How can we help you</h1>
        </div>

        <div className={`allfaqs ${hide ? "allfaqs2" : ""}`}>
          <div className="buyCoins">
            <h1>How do I buy coins?</h1>
            <div className="buyCoins2">
              {showMore ? (
                <img
                  id="buycoinbottom"
                  onClick={() => setShowMore(!showMore, SetHide(false))}
                  src={bottom}
                ></img>
              ) : (
                <img
                  id="buycoinright"
                  onClick={() => setShowMore(!showMore, SetHide(true))}
                  src={right}
                ></img>
              )}
            </div>
          </div>
          {hide && (
            <p className="faqdetails">
              Memee accepts variety of payment methods which includes PayPal,
              Bitcoin, Bank trasnfers, Credit/Debit Cards, Google Pay, Apple Pay
            </p>
          )}
        </div>

        <div className={`allfaqs ${hide2 ? "allfaqs2" : ""}`}>
          <div className="buyCoins">
            <h1>
              What methods of payment <br /> does memee accept?
            </h1>
            <div className="buyCoins2">
              {showMore2 ? (
                <img
                  id="buycoinbottom"
                  onClick={() => setShowMore2(!showMore2, SetHide2(false))}
                  src={bottom}
                ></img>
              ) : (
                <img
                  id="buycoinright"
                  onClick={() => setShowMore2(!showMore2, SetHide2(true))}
                  src={right}
                ></img>
              )}
            </div>
          </div>
          {hide2 && (
            <p className="faqdetails">
              Memee accepts variety of payment methods which includes PayPal,
              Bitcoin, Bank trasnfers, Credit/Debit Cards, Google Pay, Apple Pay
            </p>
          )}
        </div>

        <div className={`allfaqs ${hide3 ? "allfaqs2" : ""}`}>
          <div className="buyCoins">
            <h1>
              How do I place a cancellation
              <br />
              request?
            </h1>
            <div className="buyCoins2">
              {showMore3 ? (
                <img
                  id="buycoinbottom"
                  onClick={() => setShowMore3(!showMore3, SetHide3(false))}
                  src={bottom}
                ></img>
              ) : (
                <img
                  id="buycoinright"
                  onClick={() => setShowMore3(!showMore3, SetHide3(true))}
                  src={right}
                ></img>
              )}
            </div>
          </div>
          {hide3 && (
            <p className="faqdetails">
              Memee accepts variety of payment methods which includes PayPal,
              Bitcoin, Bank trasnfers, Credit/Debit Cards, Google Pay, Apple Pay
            </p>
          )}
        </div>

        <div className={`allfaqs ${hide4 ? "allfaqs2" : ""}`}>
          <div className="buyCoins">
            <h1>How do I edit or remove a method?</h1>
            <div className="buyCoins2">
              {showMore4 ? (
                <img
                  id="buycoinbottom"
                  onClick={() => setShowMore4(!showMore4, SetHide4(false))}
                  src={bottom}
                ></img>
              ) : (
                <img
                  id="buycoinright"
                  onClick={() => setShowMore4(!showMore4, SetHide4(true))}
                  src={right}
                ></img>
              )}
            </div>
          </div>
          {hide4 && (
            <p className="faqdetails">
              Memee accepts variety of payment methods which includes PayPal,
              Bitcoin, Bank trasnfers, Credit/Debit Cards, Google Pay, Apple Pay
            </p>
          )}
        </div>

        <div className={`allfaqs ${hide5 ? "allfaqs2" : ""}`}>
          <div className="buyCoins">
            <h1>How I can enter in tournament and what is criteria?</h1>
            <div className="buyCoins2">
              {showMore5 ? (
                <img
                  id="buycoinbottom"
                  onClick={() => setShowMore5(!showMore5, SetHide5(false))}
                  src={bottom}
                ></img>
              ) : (
                <img
                  id="buycoinright"
                  onClick={() => setShowMore5(!showMore4, SetHide5(true))}
                  src={right}
                ></img>
              )}
            </div>
          </div>
          {hide5 && (
            <p className="faqdetails">
              Memee accepts variety of payment methods which includes PayPal,
              Bitcoin, Bank trasnfers, Credit/Debit Cards, Google Pay, Apple Pay
            </p>
          )}
        </div>
      </div>
    </>
  );
}
