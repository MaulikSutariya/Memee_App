import React from "react";
import "../Css/Post_Img_Page.css";
import { Link } from "react-router-dom";
import Back_Arrow from "../images/Back_Arrow.png";
import post from "../images/Post_img_page/post.png";
import not_like from "../images/Post_img_page/not_like.png";
import like from "../images/Post_img_page/like.png";

export default function Post_Img_Page() {
  return (
    <>
      <div className="Post_Img_Page">
        <div className="CommentsArrow">
          <Link to="/Profile">
            <img src={Back_Arrow}></img>{" "}
          </Link>
          &nbsp;&nbsp;&nbsp;
          <h3>Details</h3>
        </div>

        <div className="P_I_post">
          <h2>January 1, 2022</h2>
          <img src={post}></img>
        </div>

        <div className="P_I_like">
          <div className="P_I_like_1">
            <img src={like}></img>
            <h5>324</h5>
          </div>
          <div className="P_I_like_2">
            <img src={not_like}></img>
            <h5>12</h5>
          </div>
        </div>
      </div>
    </>
  );
}
