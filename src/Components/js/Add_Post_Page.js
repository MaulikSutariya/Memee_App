import React, { useState } from "react";
import "../Css/Add_Post_Page.css";
import { json, Link, useNavigate } from "react-router-dom";
import Back_Arrow from "../images/Back_Arrow.png";
import upload from "../images/Post_Images/upload.png";
import { toast } from "react-toastify";

export default function Add_Post_Page() {
  const Navigate = useNavigate();
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [profile, setProfile] = useState({});

  const [location, setLocation] = useState("");
  const [hashTag, setHashTag] = useState("");
  const [caption, setCaption] = useState("");

  const submitHandler = () => {
    var myHeaders = new Headers();
    var token = localStorage.getItem("token");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("caption", caption);
    formdata.append("location", location);
    formdata.append("hashTag", hashTag);
    formdata.append("profile", profile);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_2_BASE_URL}/userpost/${JSON.parse( localStorage.getItem('userdata'))._id}`,
      requestOptions
    )
      .then(function (response) {
        if (response.status == 200) {
          toast.success("Succesfully Upload Post");
          Navigate("/Home_page");
        } else {
          toast.error("Try Again Post Not Uploded");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleImageUpload = (e) => {
    setProfile(e.target.files[0]);
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="add_post_page">
        <div className="CommentsArrow">
          <Link to="/Home_page">
            {" "}
            <img src={Back_Arrow}></img>{" "}
          </Link>{" "}
          &nbsp;&nbsp;&nbsp;
          <h3>Post</h3>
        </div>

        <div className="POst_1">
          <div className="POstOfuserupload">
            <img
              src={upload}
              value={profile}
              onClick={() => imageUploader.current.click()}
              ref={uploadedImage}
            />
          </div>

          <input
            id="fileupload2"
            type="file"
            accept="image/*,video/mp4,video/webm"
            onChange={handleImageUpload}
            ref={imageUploader}
          ></input>


        </div>

        <div className="post_details">
          <div className="locationinput">
            <label>Location :</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter Location"
            />
          </div>

          <div className="locationinput">
            <label>Caption :</label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Enter Caption"
            />
          </div>

          <div className="locationinput">
            <label>HashTag:</label>
            <input
              type="text"
              value={hashTag}
              onChange={(e) => setHashTag(e.target.value)}
              placeholder="Enter HashTag"
            />
          </div>

          <div className="postbutton">
            <div onClick={submitHandler} className="post__yellow_btn">
              Post
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
