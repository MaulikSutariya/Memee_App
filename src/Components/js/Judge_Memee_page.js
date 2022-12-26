import React from "react";
import "../Css/Judge_Memee_page.css";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import { Link } from "react-router-dom";
import judge_post from "../images/Tournament_Judge_page/judge_post.png";
import like from "../images/Tournament_Judge_page/like.png";
import dislike from "../images/Tournament_Judge_page/dislike.png";

export default function Judge_Memee_page() {
  return (
    <div>
      <div className="Judge_Memee_page">
        <div className="j_M_head">
          <div className="Addcoins">
            <div className="Addcoin_Arrow">
              <Link to="/Home_page">
                <img src={Back_Arrow}></img>
              </Link>
              &nbsp;&nbsp;&nbsp;
              <h3>Judge</h3>
            </div>

            <div className="judegememee">
              <h3>
                <span>12</span>/100
              </h3>
            </div>
          </div>
        </div>

        <div className="judgepsts">
          <div className="judge_Post_1">
            <img id="jdpost" src={judge_post}></img>
            <div className="likedislikejudge">
              <div className="likejudge">
                <img src={like}></img>
              </div>
              <div className="likejudge">
                <img src={dislike}></img>
              </div>
            </div>
          </div>

          <div className="judge_Post_1">
            <img id="jdpost" src={judge_post}></img>
            <div className="likedislikejudge">
              <div className="likejudge">
                <img src={like}></img>
              </div>
              <div className="likejudge">
                <img src={dislike}></img>
              </div>
            </div>
          </div>

          <div className="judge_Post_1">
            <img id="jdpost" src={judge_post}></img>
            <div className="likedislikejudge">
              <div className="likejudge">
                <img src={like}></img>
              </div>
              <div className="likejudge">
                <img src={dislike}></img>
              </div>
            </div>
          </div>

          <div className="judge_Post_1">
            <img id="jdpost" src={judge_post}></img>
            <div className="likedislikejudge">
              <div className="likejudge">
                <img src={like}></img>
              </div>
              <div className="likejudge">
                <img src={dislike}></img>
              </div>
            </div>
          </div>

          <div className="judge_Post_1">
            <img id="jdpost" src={judge_post}></img>
            <div className="likedislikejudge">
              <div className="likejudge">
                <img src={like}></img>
              </div>
              <div className="likejudge">
                <img src={dislike}></img>
              </div>
            </div>
          </div>

          <div className="judge_Post_1">
            <img id="jdpost" src={judge_post}></img>
            <div className="likedislikejudge">
              <div className="likejudge">
                <img src={like}></img>
              </div>
              <div className="likejudge">
                <img src={dislike}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
