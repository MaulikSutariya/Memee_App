import React, { useEffect } from "react";
import "../Css/Edit_Profile_Page.css";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import { Link, useNavigate } from "react-router-dom";

import edit_uplod_profile from "../images/Settings_page/edit_profile_upload.png";
import { toast } from "react-toastify";
import { useState } from "react";
import default_image_og_user from '../images/default_image_og_user.jpg'

export default function Edit_Profile_Page() {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [bio, setBio] = useState("");
  const [profile, setProfile] = useState("");
  const [email, setEmail] = useState("");
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

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

  //  image upload end

  // get userData APi

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    var token = localStorage.getItem("token");

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    let result = await fetch(
      `${process.env.REACT_APP_2_BASE_URL}/profile/getProfileData`,
      requestOptions
    );
    result = await result.json();
    setProfile(result.profile);
    setBio(result.bio);
    setName(result.name);
    setPhone_no(result.phone_no);
    setEmail(result.email);
  };

  // end Get UserData Api

  async function editProfile() {
    var FormData = require("form-data");
    var myHeaders = new Headers();
    var token = localStorage.getItem("token");
    myHeaders.append("Authorization", `Bearer ${token}`);
    // console.table(name, phone_no, bio, profile);

    var data = new FormData();
    if (typeof profile === "object") {
      data.append("profile", profile);
    }
    data.append("name", name);
    data.append("phone_no", phone_no);
    data.append("bio", bio);
    var requestOptions = {
      method: "POST",
      body: data,
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_2_BASE_URL}/profile/updateProfile`,
      requestOptions
    )
      .then((response) => response.json())

      .then((result) => {
        if (result.status == 200) {
          localStorage.setItem("userdata", JSON.stringify(result.data));
          toast.success("Profile Update Successfully");
          Navigate("/Home_page");
        }
      })

      .catch((error) => console.log("error", error));
  }

  return (
    <>
      <div className="Edit_Profile_Page">
        <div className="CommentsArrow">
          <Link to="/Profile_Setting">
            <img src={Back_Arrow}></img>
          </Link>
          &nbsp;&nbsp;
          <h3>Edit Profile</h3>
        </div>

        <div className="E">
          <div className="E_1">
            <div className="E_1_1">
              <img
                id="E_1"
                ref={uploadedImage}
                src={process.env.REACT_APP_2_BASE_URL + "/" + profile ?process.env.REACT_APP_2_BASE_URL + "/" + profile :default_image_og_user}
              ></img>
              <input
                   required
                id="fileupload"
                type="file"
                accept="/images/*"
                onChange={handleImageUpload}
                ref={imageUploader}
              ></input>
              <div id="E_1edit">
                <img
                  value={profile}
                  onClick={() => imageUploader.current.click()}
                  src={edit_uplod_profile}
                ></img>
              </div>
            </div>
            <h1>{name}</h1>
            <h2>{email}</h2>
          </div>
        </div>

        <div className="Ee">
          <div className="EEE">
            <h5>Name</h5>
            <input
                 required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Mr Astronut"
            />
          </div>

          <div className="EEE">
            <h5>Email</h5>
            <input
                 required
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="iammemer@memee.com"
            />
          </div>

          <div className="EEE">
            <h5>Phone</h5>
            <input
                 required
              type="text"
              value={phone_no}
              onChange={(e) => setPhone_no(e.target.value)}
              placeholder="+123-555-2514"
            />
          </div>

          <div className="EEE">
            <h5>Bio</h5>
            <input
                 required
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              type="text"
              placeholder="“Like to travel and shoot cinematic videos and 
                    love to catpure nature”"
            />
          </div>
        </div>

        <div className="EEe">
          <button onClick={editProfile}>Save</button>
        </div>
      </div>
    </>
  );
}
