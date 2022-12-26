import React from "react";
import "../Css/New_Password_page.css";
import Back_Arrow from "../images/Back_Arrow.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function New_Password_page() {
  const [passwordShow, setPasswordShow] = useState(false);
  const eyeHandler = () => {
    setPasswordShow((prevState) => !prevState);
  };

  const [passwordShow2, setPasswordShow2] = useState(false);
  const eyeHandler2 = () => {
    setPasswordShow2((prevState) => !prevState);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setConfirmPassword] = useState("");
  const Navigate = useNavigate();

  async function NewPassword() {
    console.table(email, password, cPassword);
    const sendData = JSON.stringify({
      email: email,
      password: password,
      cPassword: cPassword,
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/reset-password`,
      headers: {
        "Content-Type": "application/json",
      },
      data: sendData,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        if (response.data.status == 200) {
          toast.success(response.data.message);
          Navigate("/Sign_in_page");
        } else {
          toast.error(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(signUpUser());
  }

  return (
    <>
      <div className="Sign_in_page">
        <div className="back_Arrow">
          <Link to="/Verify_Email_page">
            {" "}
            <img src={Back_Arrow}></img>{" "}
          </Link>
        </div>
        <div className="mainContent">
          <div className="ForgotPasswordText">
            <h1>New Password</h1>
          </div>

          <div className="form">
            <div class="yourEmail">
              <h5>YOUR EMAIL</h5>
              <input
                   required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
              />
            </div>
            <br />
            <div class="yourEmail">
              <h5 id="confirmpassword">NEW PASSWORD</h5>
              <input
                   required
                id="confirmpasswordinput"
                type={passwordShow ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />

              {passwordShow ? (
                <svg
                  onClick={eyeHandler}
                  id="visibale"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
              ) : (
                <svg
                  onClick={eyeHandler}
                  id="visibale"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-slash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                </svg>
              )}
            </div>
            <br />
            <div class="yourEmail">
              <h5 id="confirmpassword">CONFIRM NEW PASSWORD</h5>
              <input
                   required
                id="confirmpasswordinput"
                type={passwordShow2 ? "text" : "password"}
                value={cPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Password"
              />

              {passwordShow2 ? (
                <svg
                  onClick={eyeHandler2}
                  id="visibale"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
              ) : (
                <svg
                  onClick={eyeHandler2}
                  id="visibale"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-slash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                </svg>
              )}
            </div>
            <br />
            <button onClick={NewPassword} id="Sign_in_button">
              <span>Reset password</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
