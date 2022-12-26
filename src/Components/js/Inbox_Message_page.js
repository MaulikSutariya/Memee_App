import React, { useEffect, useState } from "react";
import "../Css/Inbox_Message_page.css";
import { Link } from "react-router-dom";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import Active from '../images/Message_page/Active.png';
import right from '../images/Message_page/right.png'


import { CiEdit } from "react-icons/ci";

export default function Inbox_Message_page() {


  const [userAllData,setUserAllData]=useState([])

  useEffect(()=>{
    UserList();
  },[])

 //   All post get Api
 const UserList = async () => {
  var token = localStorage.getItem("token");

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const fetchData = await fetch(
    `${process.env.REACT_APP_2_BASE_URL}/signUp`,
    requestOptions
  );
  const resUserData = await fetchData.json();
  setUserAllData(resUserData);
};


// end All post get api
  return (
    <>
      <div className="Inbox">
        <div className="Inbox_lite">
          <div className="Inbox_Arrow">
            <Link to="/Home_page">
              <img src={Back_Arrow}></img>{" "}
            </Link>{" "}
            &nbsp;&nbsp;&nbsp;
            <h3>Inbox</h3>
          </div>

          <div className="Activity_message">
            <div className="A_M_2">
              <Link to="/Inbox">
                <h4>Activity</h4>
              </Link>
            </div>
            <div className="A_M">
              <Link to="/Inbox_Message_page">
                <h4>Message</h4>
              </Link>
            </div>
          </div>
        </div>

        <div className="Inbox_Message_page">
          {userAllData?.map((data, i) => {
            return (
              <Link to="/Chat" state={{userInfo:data}}>
          
                <div key={i} className="Inbox_Message_page_2">
                  <div className="inbox_today_1">
                    <div className="Inbox_follow_user">
                      <img id="I_b_U_1" src={process.env.REACT_APP_2_BASE_URL + "/" +data.profile}></img>
                      <img id="I_b_U_3" src={Active}></img>
                    </div>
                    <div className="I_user_details">
                      <h5>{data.name}</h5>
                      <h6>{data.i_user_message}</h6>
                    </div>
                  </div>
                  <div className="Mess_Profile_LastActive">
                    <h2>10min&nbsp;ago</h2>
                    <img src={right}></img>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <Link to="/New_Message_page">
          <div className="addMessage">
        
            <CiEdit className="editIcon" />
     
          </div>
        </Link>
      </div>
    </>
  );
}
