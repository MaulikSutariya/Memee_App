import React, { useRef } from "react";
import "../Css/Forgot_password_page.css";
import Back_Arrow from "../images/Back_Arrow.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Forgot_password_page() {
  const [email, setEmail] = useState("");
  const Navigate = useNavigate();

  async function emailSend() {
  

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/send-email`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: email,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      
        if (response.data.status == 200) {
          toast.success(response.data.message);
          Navigate("/Verify_Email_page", {
            state: { dataOtp: response.data.data.code },
          });
        } else {
          toast.error(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error.response.data.message);
      });
  }

  return (
    <>
      {/* <ToastContainer /> */}
      <div className="Sign_in_page">
        <div className="back_Arrow">
          <Link to="/Sign_in_page">
            {" "}
            <img src={Back_Arrow}></img>{" "}
          </Link>
        </div>
        <div className="mainContent">
          <div className="ForgotPasswordText">
            <h1>Forgot Password</h1>
            <p>You’ll receive 04 digit code to verify email.</p>
          </div>
          <div className="form">
            <div class="yourEmail">
              <h5>ENTER EMAIL</h5>
              <input
                   required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
              />
            </div>
            <br />
            <button onClick={emailSend} id="Sign_in_button">
              <span>Continue</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
