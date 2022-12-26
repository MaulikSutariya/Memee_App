import React, { useState } from "react";
import "../Css/New_Trending_Memes_Page.css";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import video1 from "../images/New_memee_post_page/V_1.mp4";
import Heart from "../images/Home_page/Heart.png";
import S_1 from "../images/Share_Post_Social_Icon/S_1.png";
import S_2 from "../images/Share_Post_Social_Icon/S_2.png";
import S_3 from "../images/Share_Post_Social_Icon/S_3.png";
import S_4 from "../images/Share_Post_Social_Icon/S_4.png";
import S_5 from "../images/Share_Post_Social_Icon/S_5.png";
import S_6 from "../images/Share_Post_Social_Icon/S_6.png";
import S_7 from "../images/Share_Post_Social_Icon/S_7.png";
import S_8 from "../images/Share_Post_Social_Icon/S_8.png";
import S_9 from "../images/Share_Post_Social_Icon/S_9.png";
import S_10 from "../images/Share_Post_Social_Icon/S_10.png";
import { Link } from "react-router-dom";
import Like from "../images/Home_page/Like.png";

export default function New_Trending_Memes_Page() {
  const [like, setLike] = useState(false);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(65);

  const openSlider = () => {
    setOpen(!open);
  };

  const likeImage = () => {
    setLike(!like);
    setCount(count - 1);
  };
  const likeImage2 = () => {
    setLike(!like);
    setCount(count + 1);
  };

  const imagePostLikeHandler = () => {
    setLike(true);
    setCount(count + 1);
  };

  return (
    <>
      <div className="New_Trending_Memes_Page">
        <div
          style={{
            position: "absolute",
            zIndex: "50",
            backgroundColor: "transparent",
          }}
          className="Inbox_lite"
        >
          <div style={{ zIndex: "50" }} className="Inbox_Arrow">
            <Link to="/Home_page">
              <img src={Back_Arrow}></img>{" "}
            </Link>{" "}
            &nbsp;&nbsp;&nbsp;
            <h3>New Memes</h3>
          </div>
        </div>
        <video onDoubleClick={imagePostLikeHandler} src={video1} autoPlay="true" />
        <div className="absolutelikesharecmt">
          <div className="likesharecomment">
            <div className="post_like">
              {like ? (
                <img onClick={likeImage} src={Like}></img>
              ) : (
                <img onClick={likeImage2} src={Heart}></img>
              )}
              <h5>{count}k</h5>
            </div>
            <Link to="/Comments_page">
              <div className="post_like">
                {/* <img src={comments}></img> */}
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.058 0.826251C14.2115 0.856939 17.9153 3.4442 19.3676 7.33004C20.82 11.2163 19.7187 15.5943 16.5997 18.3341C13.4812 21.0734 8.99294 21.6065 5.31788 19.6742L5.27208 19.6581C5.26493 19.654 5.26378 19.6504 5.26224 19.6456L4.57971 19.2594C4.4407 19.2025 4.28665 19.1933 4.19261 19.2171C3.4831 19.4721 2.75798 19.6816 2.02168 19.8442L1.88671 19.8605C1.07616 19.8784 0.667756 19.3525 0.667756 18.5871L0.687298 18.4231C0.871363 17.6619 1.10204 16.9126 1.36458 16.2188C1.40531 16.0875 1.39175 15.9454 1.32147 15.8137L1.13765 15.4553C-0.487117 12.3488 -0.364589 8.61976 1.46059 5.62627C3.28554 2.63318 6.54635 0.812301 10.058 0.826251ZM10.0484 2.2208L9.76749 2.2252C6.85494 2.30853 4.17338 3.85738 2.65196 6.35266C1.08168 8.92808 0.976269 12.1361 2.37662 14.8135L2.55755 15.1664C2.79818 15.6167 2.84853 16.1444 2.68389 16.6713C2.42804 17.3508 2.21419 18.0454 2.04356 18.7511L2.138 18.3832L2.53273 18.2803C2.66823 18.2429 2.80406 18.2036 2.9406 18.1622L3.35272 18.0317L3.77133 17.8879C4.21354 17.7661 4.6837 17.7943 5.14686 17.9852C5.24408 18.0321 5.36471 18.0971 5.51677 18.1831L5.93909 18.4254C5.94625 18.4274 5.95251 18.4291 5.9573 18.4304L5.94496 18.4288L6.23269 18.573C9.25821 20.0338 12.8626 19.6042 15.4587 17.4728L15.6788 17.2858C18.3626 14.9283 19.31 11.1619 18.0605 7.81852C16.8109 4.47479 13.6231 2.24799 10.0484 2.2208ZM5.61596 9.68575C6.24606 9.68575 6.75732 10.1962 6.75732 10.8264C6.75732 11.4566 6.24606 11.967 5.61596 11.967C4.98586 11.967 4.4746 11.4566 4.4746 10.8264C4.4746 10.1962 4.98586 9.68575 5.61596 9.68575ZM10.0528 9.68575C10.6829 9.68575 11.1942 10.1962 11.1942 10.8264C11.1942 11.4566 10.6829 11.967 10.0528 11.967C9.42274 11.967 8.91148 11.4566 8.91148 10.8264C8.91148 10.1962 9.42274 9.68575 10.0528 9.68575ZM14.4897 9.68575C15.1198 9.68575 15.6311 10.1962 15.6311 10.8264C15.6311 11.4566 15.1198 11.967 14.4897 11.967C13.8596 11.967 13.3484 11.4566 13.3484 10.8264C13.3484 10.1962 13.8596 9.68575 14.4897 9.68575Z"
                    fill="white"
                  />
                </svg>

                <h5>175</h5>
              </div>{" "}
            </Link>
            <div onClick={openSlider} className="post_like">
              {/* <img src={share}></img> */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7048 2.41771L19.6682 2.55868L15.0231 18.1982C14.562 19.7492 12.5398 20.0591 11.6265 18.7796L11.539 18.6463L7.64322 12.1923L1.16768 8.2064C-0.208786 7.35903 0.0166965 5.31229 1.48629 4.75922L1.63738 4.70899L17.2939 0.153249C18.7092 -0.256348 20.0164 1.01205 19.7048 2.41771ZM17.7849 1.5794L17.712 1.59382L2.05598 6.14939C1.73008 6.24398 1.65003 6.66269 1.88786 6.87936L1.95398 6.92901L8.07822 10.6983L13.3235 5.4188C13.5889 5.15165 14.0055 5.12606 14.2998 5.34293L14.3842 5.41527C14.6513 5.68065 14.6769 6.09723 14.4601 6.39156L14.3877 6.47592L9.13522 11.7623L12.8232 17.8713C12.9988 18.1622 13.4096 18.1331 13.5547 17.8476L13.5852 17.7709L18.2305 2.1309C18.3204 1.82929 18.0737 1.54839 17.7849 1.5794Z"
                  fill="white"
                />
              </svg>

              <h5>20</h5>
            </div>
          </div>
        </div>

        <div className={open ? "ShareSlider" : "ShareSliderClose"}>
          <div
            className={open ? "ShareDivline" : ""}
            onClick={openSlider}
          ></div>

          <div className={open ? "shareiconsofsocial" : "shareiconsofsocial2"}>
            <div className={open ? "s_icon" : "s_icon2"}>
              <a href="https://www.facebook.com/">
                <img src={S_1} />
              </a>
            </div>
            <div className={open ? "s_icon" : "s_icon2"}>
              <a href="https://mail.google.com/">
                <img src={S_2} />
              </a>
            </div>
            <div className={open ? "s_icon" : "s_icon2"}>
              <a href="https://www.youtube.com/">
                <img src={S_3} />
              </a>
            </div>
            <div className={open ? "s_icon" : "s_icon2"}>
              <a href="https://www.whatsapp.com/">
                <img src={S_4} />
              </a>
            </div>
            <div className={open ? "s_icon" : "s_icon2"}>
              <a href="https://twitter.com/">
                <img src={S_5} />
              </a>
            </div>
            <div className={open ? "s_icon" : "s_icon2"}>
              <a href="https://web.telegram.org/">
                <img src={S_6} />
              </a>
            </div>
            <div className={open ? "s_icon" : "s_icon2"}>
              <a href="https://in.linkedin.com/">
                <img src={S_7} />
              </a>
            </div>
            <div className={open ? "s_icon" : "s_icon2"}>
              <a href="https://www.google.co.in/">
                <img src={S_9} />
              </a>
            </div>

            <div className={open ? "s_icon" : "s_icon2"}>
              <a href="https://www.instagram.com/">
                <img src={S_10} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
