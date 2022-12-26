import React, { useState } from "react";
import "../Css/New_Message_Page_Users.css";
import { Link } from "react-router-dom";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import Gallery from "../images/Chat_page/Gallery.png";
import send from "../images/Chat_page/send.png";
import emoji from "../images/Chat_page/emoji.png";

export default function New_Message_Page_Users() {
  const [inputList, setInputList] = useState("");
  const [Item, setItem] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItem = () => {
    setItem((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  return (
    <>
      <div className="New_Message_Page_Users_page">
        <div className="New_Messsage_Arrow">
          <Link to="/Inbox_Message_page">
            {" "}
            <img src={Back_Arrow}></img>{" "}
          </Link>{" "}
          &nbsp;&nbsp;&nbsp;
          <h3>New message</h3>
        </div>

        <div className="New_mess_to">
          <h6>To :</h6>
          <div className="New_mess_to_user">
            <h5>Sunila Ashwin</h5>
          </div>
        </div>

        <div className="usermessagetonewuser">
          {Item.map((itemVal, index) => {
            return (
              <div key={index} className="user_chat_1_1">
                <div className="user_chat_1">
                  <h5>{itemVal}</h5>
                </div>
              </div>
            );
          })}
        </div>

        <div className="chat_keyboard">
          <img src={Gallery}></img>
          <div className="chat_input">
            <input
              type="text"
              onChange={itemEvent}
              value={inputList}
              placeholder="Aa"
            ></input>
            <img id="chat_emoji" src={emoji}></img>
          </div>
          {/* <img src={send}></img> */}
          <svg
            onClick={listOfItem}
            width="30"
            height="40"
            viewBox="0 0 23 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.6313 12.3095C22.6406 11.4542 22.1745 10.6682 21.4215 10.2537L3.87589 0.574373C3.08909 0.129366 2.16439 0.180973 1.4275 0.682663C0.676239 1.19366 0.293837 2.41531 0.507035 3.29856L2.16439 10.1539C2.33359 10.8577 2.96388 11.3544 3.68722 11.3535L13.4351 11.3535C13.9351 11.3442 14.3412 11.7503 14.3318 12.2503C14.3327 12.7401 13.9342 13.1386 13.4351 13.1471L3.67876 13.1386C2.95457 13.1386 2.32513 13.6327 2.15423 14.3366L0.482499 21.2096C0.280301 22.021 0.516341 22.834 1.09163 23.4093C1.15932 23.477 1.23546 23.5531 1.31245 23.6115C2.0561 24.1876 3.02987 24.2629 3.85896 23.823L21.4046 14.3484C22.1575 13.9508 22.6228 13.164 22.6313 12.3095Z" />
          </svg>
        </div>
      </div>
    </>
  );
}
