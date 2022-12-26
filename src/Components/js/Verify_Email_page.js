import React, { useEffect } from "react";
import "../Css/Verify_Email_page.css";
import Back_Arrow from "../images/Back_Arrow.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Verify_Email_page() {
  const [OTP_Obj, setOTP_Obj] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const location = useLocation();
  const Navigate = useNavigate();

  useEffect(() => {}, []);

  let digitValidate = function (ele) {

    ele.value = ele.value.replace(/[^0-9]/g, "");
  };

  let tabChange = (val) => {
    let ele = document.querySelectorAll("input");

    if (ele[val - 1].value != "") {
      ele[val].focus();
    } else if (ele[val - 1].value == "") {
      ele[val - 2].focus();
    }
  };

  const verifyOtp = () => {
    const Otpuser =
      OTP_Obj.first + OTP_Obj.second + OTP_Obj.third + OTP_Obj.fourth;
    const dataBaseOtp = location.state.dataOtp;

    if (Number(dataBaseOtp) === Number(Otpuser)) {
      toast.success("Otp Verify Successfully");
      Navigate("/New_Password_page");
    } else {
      toast.error("Invalid Otp");
    }
  };

  return (
    <>
      <div className="Sign_in_page">
        <div className="back_Arrow">
          <Link to="/Forgot_password_page">
            {" "}
            <img src={Back_Arrow}></img>{" "}
          </Link>
        </div>
        <div className="mainContent">
          <div className="VerifyText">
            <h1>Verify Email</h1>
            <p>
              Code is sent to <span>iammemer@memee.com</span>
            </p>
          </div>
          <div className="form">
            <div className="verfyotp">
              <input
                   required
                type="text"
                value={OTP_Obj.first}
                onChange={(e) =>
                  setOTP_Obj({ ...OTP_Obj, first: e.target.value })
                }
                onInput={() => digitValidate(this)}
                onKeyUp={() => tabChange(1)}
                maxLength="1"
              />
              <input
                   required
                type="text"
                value={OTP_Obj.second}
                onChange={(e) =>
                  setOTP_Obj({ ...OTP_Obj, second: e.target.value })
                }
                onInput={() => digitValidate(this)}
                onKeyUp={() => tabChange(2)}
                maxLength="1"
              />
              <input
                   required
                type="text"
                value={OTP_Obj.third}
                onChange={(e) =>
                  setOTP_Obj({ ...OTP_Obj, third: e.target.value })
                }
                onInput={() => digitValidate(this)}
                onKeyUp={() => tabChange(3)}
                maxLength="1"
              />
              <input
                   required
                type="text"
                value={OTP_Obj.fourth}
                onChange={(e) =>
                  setOTP_Obj({ ...OTP_Obj, fourth: e.target.value })
                }
                onInput={() => digitValidate(this)}
                onKeyUp={() => tabChange(4)}
                maxLength="1"
              />
            </div>
            <br />
            <div className="resendotp">
              <h6>Didn’t recive code?</h6>
              <h5>Resend OTP</h5>
              <hr id="resendotphr" />
            </div>
            {/* <span style={{ color: "red" }}>{error}</span> */}
            {/* <Link to="/New_Password_page"></Link> */}
            <button onClick={verifyOtp} id="Sign_in_button">
              <span>Verify Phone</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
