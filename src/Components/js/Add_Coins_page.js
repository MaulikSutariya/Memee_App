import React from "react";
import "../Css/Add_Coins_page.css";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import { Link } from "react-router-dom";
import Coin from "../images/Home_page/Coin.png";
import Add_Coin_poster from "../images/Tournament_Judge_page/Add_Coin_poster.png";
import coinofhistory from "../images/Tournament_Judge_page/coinofhistory.png";

export default function Add_Coins_page() {
  return (
    <>
      <div className="Add_Coins_page">
        <div className="Addcoins">
          <div className="Addcoin_Arrow">
            <Link to="/Home_page">
              <img src={Back_Arrow}></img>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <h3>Add Coins</h3>
          </div>

          <div className="add_coin">
            <h3>107412</h3>
            <img src={Coin}></img>
          </div>
        </div>

        <br />
        <div className="addposterofcoin">
          <Link to="/Payment_Method_page">
            
            <img src={Add_Coin_poster}></img>
          </Link>
          <Link to="/Payment_Method_page">
            
            <img src={Add_Coin_poster}></img>
          </Link>
          <Link to="/Payment_Method_page">
            
            <img src={Add_Coin_poster}></img>
          </Link>
          <Link to="/Payment_Method_page">
            
            <img src={Add_Coin_poster}></img>
          </Link>
          <Link to="/Payment_Method_page">
            
            <img src={Add_Coin_poster}></img>
          </Link>
          <Link to="/Payment_Method_page">
            
            <img src={Add_Coin_poster}></img>
          </Link>
          <Link to="/Payment_Method_page">
            
            <img src={Add_Coin_poster}></img>
          </Link>
          <Link to="/Payment_Method_page">
            
            <img src={Add_Coin_poster}></img>
          </Link>
          <Link to="/Payment_Method_page">
            
            <img src={Add_Coin_poster}></img>
          </Link>
          <Link to="/Payment_Method_page">
            
            <img src={Add_Coin_poster}></img>
          </Link>
        </div>

        <div>
          <div className="add_coin_purchase">
            <h5>Purchasing History</h5>
            <h6>View all</h6>
          </div>

          <div className="AddCoinSHistory">
            <div className="AddCoinSHistory1">
              <h3>15 Mar</h3>
            </div>
            <div className="AddCoinSHistory2">
              <img src={coinofhistory}></img>
              <h3>1000</h3>
            </div>
            <div className="AddCoinSHistory3">
              <h3>$10</h3>
            </div>
          </div>

          <div className="AddCoinSHistory">
            <div className="AddCoinSHistory1">
              <h3>10 Mar</h3>
            </div>
            <div className="AddCoinSHistory2">
              <img src={coinofhistory}></img>
              <h3>2000</h3>
            </div>
            <div className="AddCoinSHistory3">
              <h3>$7</h3>
            </div>
          </div>

          <div className="AddCoinSHistory">
            <div className="AddCoinSHistory1">
              <h3>05 Feb</h3>
            </div>
            <div className="AddCoinSHistory2">
              <img src={coinofhistory}></img>
              <h3>5000</h3>
            </div>
            <div className="AddCoinSHistory3">
              <h3>$5</h3>
            </div>
          </div>

          <div className="AddCoinSHistory">
            <div className="AddCoinSHistory1">
              <h3>17 Jan</h3>
            </div>
            <div className="AddCoinSHistory2">
              <img src={coinofhistory}></img>
              <h3>3000</h3>
            </div>
            <div className="AddCoinSHistory3">
              <h3>$3</h3>
            </div>
          </div>

          <div className="AddCoinSHistory">
            <div className="AddCoinSHistory1">
              <h3>10 Mar</h3>
            </div>
            <div className="AddCoinSHistory2">
              <img src={coinofhistory}></img>
              <h3>1000</h3>
            </div>
            <div className="AddCoinSHistory3">
              <h3>$10</h3>
            </div>
          </div>

          <div className="AddCoinSHistory">
            <div className="AddCoinSHistory1">
              <h3>15 Mar</h3>
            </div>
            <div className="AddCoinSHistory2">
              <img src={coinofhistory}></img>
              <h3>1000</h3>
            </div>
            <div className="AddCoinSHistory3">
              <h3>$10</h3>
            </div>
          </div>

          <div className="AddCoinSHistory">
            <div className="AddCoinSHistory1">
              <h3>10 Mar</h3>
            </div>
            <div className="AddCoinSHistory2">
              <img src={coinofhistory}></img>
              <h3>2000</h3>
            </div>
            <div className="AddCoinSHistory3">
              <h3>$7</h3>
            </div>
          </div>

          <div className="AddCoinSHistory">
            <div className="AddCoinSHistory1">
              <h3>05 Feb</h3>
            </div>
            <div className="AddCoinSHistory2">
              <img src={coinofhistory}></img>
              <h3>5000</h3>
            </div>
            <div className="AddCoinSHistory3">
              <h3>$5</h3>
            </div>
          </div>

          <div className="AddCoinSHistory">
            <div className="AddCoinSHistory1">
              <h3>17 Jan</h3>
            </div>
            <div className="AddCoinSHistory2">
              <img src={coinofhistory}></img>
              <h3>3000</h3>
            </div>
            <div className="AddCoinSHistory3">
              <h3>$3</h3>
            </div>
          </div>

          <div className="AddCoinSHistory">
            <div className="AddCoinSHistory1">
              <h3>10 Mar</h3>
            </div>
            <div className="AddCoinSHistory2">
              <img src={coinofhistory}></img>
              <h3>1000</h3>
            </div>
            <div className="AddCoinSHistory3">
              <h3>$10</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
