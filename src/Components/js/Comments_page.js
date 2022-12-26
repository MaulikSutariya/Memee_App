import React, { useEffect, useState } from "react";
import "../Css/Comments_page.css";
import Back_Arrow from "../images/Back_Arrow.png";
import { Link, useLocation } from "react-router-dom";

export default function Comments_page() {
  const location = useLocation();

  const userProfile = JSON.parse(localStorage.getItem("userdata")).profile;

  const [comment, setComment] = useState("");
  const [userData, setUserData] = useState([]);

  const date1 = new Date();
  const date2 = new Date(userData[0]?.createdAt);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  useEffect(() => {
    commentsList();
  }, []);

  // comments Api

  const itemEvent = (event) => {
    setComment(event.target.value);
  };
  const listOfItem = () => {
    var token = localStorage.getItem("token");

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("comment", comment);
    urlencoded.append("postId", location.state.id);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_2_BASE_URL}/userpost/comment/${
        JSON.parse(localStorage.getItem("userdata"))._id
      }`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        if (result) {
          commentsList();
          setComment("");
        }
      })
      .catch((error) => console.log("error", error));
  };

  // Comments get Api

  const commentsList = async () => {
    var token = localStorage.getItem("token");

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const fetchData = await fetch(
      `${process.env.REACT_APP_2_BASE_URL}/userpost/comment/${location.state.id}`,
      requestOptions
    );

    const data = await fetchData.json();
    setUserData(data);
  };

  return (
    <>
      <div className="main_Commments_page">
        <div className="comments_page">
          <div className="CommentsArrow">
            <Link to="/Home_page">
              <img src={Back_Arrow}></img>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <h3>Comments</h3>
          </div>

          <div className="comments">
            {userData.map((itemVal, index) => {
              return (
                <div key={index} className="User_comments">
                  <div className="cmd_User_img">
                    <img
                      id="commentsuserprofile2"
                      src={
                        process.env.REACT_APP_2_BASE_URL +
                        "/" +
                        itemVal.userProfile
                      }
                    ></img>
                  </div>
                  <div className="comments_description">
                    <div className="c_d_1">
                      <h5>{itemVal.username}</h5>
                      <h6>{itemVal.comment}</h6>
                      {/* {console.log(itemVal.createdAt)} */}
                    </div>
                    <div className="Comments_likes_share">
                      <h5>{diffDays} days ago</h5>
                      <h5>Like</h5>
                      <h5>Reply</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="cmpst">
          <div className="Comments_post">
            <img
              id="commentsuserprofile"
              src={process.env.REACT_APP_2_BASE_URL + "/" + userProfile}
            ></img>
            <div className="Comments_written_post">
              <input
                type="text"
                onChange={itemEvent}
                value={comment}
                placeholder="Write a comments"
              ></input>
              <h5 onClick={listOfItem}>Post</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
