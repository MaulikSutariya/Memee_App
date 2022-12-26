import React from "react";
import "../Css/Organized_badge_page.css";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import right from "../images/right.png";
import bottom from "../images/bottom.png";
import B_1 from "../images/other_profile_badge_page/B_1.png";
import B_2 from "../images/other_profile_badge_page/B_2.png";
import B_3 from "../images/other_profile_badge_page/B_3.png";
import B_4 from "../images/other_profile_badge_page/B_4.png";
import B_5 from "../images/other_profile_badge_page/B_5.png";
import B_6 from "../images/other_profile_badge_page/B_6.png";
import B_1_1 from "../images/other_profile_badge_page/B_1_1.png";
import B_1_2 from "../images/other_profile_badge_page/B_1_2.png";
import B_1_3 from "../images/other_profile_badge_page/B_1_3.png";
import B_1_4 from "../images/other_profile_badge_page/B_1_4.png";
import lock from "../images/other_profile_badge_page/Lock.png";

export default function Organized_badge_page() {
  const [showMore, setShowMore] = useState(true);
  const [hide, SetHide] = useState(true);

  const [showMore2, setShowMore2] = useState(true);
  const [hide2, SetHide2] = useState(true);

  const [filterIcon, setFilterIcon] = useState(false);
  const [filter, setFilter] = useState(false);

  return (
    <>
      <div className="Organized_badge_page">
        <div className="org_badge_arrow">
          <div className="Inbox_Arrow">
            <Link to="/Other_person_profile_page">
              <img src={Back_Arrow}></img>{" "}
            </Link>{" "}
            &nbsp;&nbsp;&nbsp;
            <h3>Organize Badges</h3>
          </div>

          <div className="othrprfilesearchbar">
            <div className="Search_badgeofotherprofile">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.61154 0C14.9198 0 19.2231 4.20819 19.2231 9.39926C19.2231 11.849 18.2647 14.0799 16.6946 15.7529L19.7825 18.7636C20.072 19.0459 20.0726 19.5043 19.7839 19.7873C19.5214 20.0446 19.1102 20.0685 18.8202 19.8586L18.737 19.7886L15.6127 16.7417C13.9681 18.0288 11.8818 18.7985 9.61154 18.7985C4.30323 18.7985 0 14.5903 0 9.39926C0 4.20819 4.30323 0 9.61154 0ZM9.61154 1.44774C5.12086 1.44774 1.48044 5.00776 1.48044 9.39926C1.48044 13.7908 5.12086 17.3508 9.61154 17.3508C14.1022 17.3508 17.7426 13.7908 17.7426 9.39926C17.7426 5.00776 14.1022 1.44774 9.61154 1.44774Z" />
              </svg>
              <input type="text" placeholder="Search badges, rarity"></input>
            </div>

            <div className="filterbadge">
              {filterIcon ? (
                <svg
                  onClick={() => setFilterIcon(!filterIcon, setFilter(true))}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.7599 4.36611C5.7599 3.27915 4.86462 2.39426 3.76229 2.39426C2.66113 2.39426 1.76467 3.27915 1.76467 4.36611C1.76467 5.45306 2.66113 6.33796 3.76229 6.33796C4.86462 6.33796 5.7599 5.45306 5.7599 4.36611ZM7.52457 4.36611C7.52457 6.41344 5.83754 8.07987 3.76229 8.07987C1.68821 8.07987 0 6.41344 0 4.36611C0 2.31878 1.68821 0.652344 3.76229 0.652344C5.83754 0.652344 7.52457 2.31878 7.52457 4.36611ZM20 4.36634C20 3.88557 19.6047 3.49538 19.1177 3.49538H11.8825C11.3954 3.49538 11.0002 3.88557 11.0002 4.36634C11.0002 4.84711 11.3954 5.2373 11.8825 5.2373H19.1177C19.6047 5.2373 20 4.84711 20 4.36634ZM14.2397 15.9386C14.2397 17.0255 15.135 17.9104 16.2374 17.9104C17.3397 17.9104 18.235 17.0255 18.235 15.9386C18.235 14.8505 17.3397 13.9667 16.2374 13.9667C15.135 13.9667 14.2397 14.8505 14.2397 15.9386ZM12.4751 15.9386C12.4751 13.8901 14.1621 12.2248 16.2374 12.2248C18.3126 12.2248 19.9996 13.8901 19.9996 15.9386C19.9996 17.9859 18.3126 19.6523 16.2374 19.6523C14.1621 19.6523 12.4751 17.9859 12.4751 15.9386ZM0.883161 15.0673H8.11715C8.6042 15.0673 8.99949 15.4575 8.99949 15.9382C8.99949 16.419 8.6042 16.8092 8.11715 16.8092H0.883161C0.396111 16.8092 0.000823515 16.419 0.000823515 15.9382C0.000823515 15.4575 0.396111 15.0673 0.883161 15.0673Z"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setFilterIcon(!filterIcon, setFilter(false))}
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1.25098L1.42462 11.8264"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 11.8262L1.42462 1.25079"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>

          {filter && (
            <div className="otherpersonbadgefilter">
              <h1>Filter</h1>
              <div className="otherfilteroption">
                <div className="optofbadgeopt">
                  <h5>All&nbsp;Rarities</h5>
                </div>
                <div className="optofbadgeopt2">
                  <h5>Rarity:&nbsp;1</h5>
                </div>
                <div className="optofbadgeopt">
                  <h5>Rarity:&nbsp;2</h5>
                </div>
                <div className="optofbadgeopt">
                  <h5>Rarity:&nbsp;3</h5>
                </div>
                <div className="optofbadgeopt">
                  <h5>Rarity:&nbsp;4</h5>
                </div>
                <div className="optofbadgeopt">
                  <h5>Rarity:&nbsp;5</h5>
                </div>
              </div>
            </div>
          )}

          <br />
          <div className="other_badge">
            <div className="other_badge_1">
              <h1>Earned Badges</h1>
              <div className="buyCoins2">
                {showMore ? (
                  <img
                    id="buycoinbottom"
                    onClick={() => setShowMore(!showMore, SetHide(false))}
                    src={bottom}
                  ></img>
                ) : (
                  <img
                    id="buycoinright"
                    onClick={() => setShowMore(!showMore, SetHide(true))}
                    src={right}
                  ></img>
                )}
              </div>
            </div>
            {hide && (
              <div className="b_O_user">
                <div className="badge1ofuser">
                  <img src={B_1}></img>
                </div>
                <div className="badge1ofuser">
                  <img src={B_2}></img>
                </div>
                <div className="badge1ofuser">
                  <img src={B_3}></img>
                </div>
                <div className="badge1ofuser">
                  <img src={B_4}></img>
                </div>
                <div className="badge1ofuser">
                  <img src={B_5}></img>
                </div>
                <div className="badge1ofuser">
                  <img src={B_6}></img>
                </div>
              </div>
            )}
          </div>

          <br />

          <div className="other_badge">
            <div className="other_badge_1">
              <h1>Locked Badges</h1>
              <div className="buyCoins2">
                {showMore2 ? (
                  <img
                    id="buycoinbottom"
                    onClick={() => setShowMore2(!showMore2, SetHide2(false))}
                    src={bottom}
                  ></img>
                ) : (
                  <img
                    id="buycoinright"
                    onClick={() => setShowMore2(!showMore2, SetHide2(true))}
                    src={right}
                  ></img>
                )}
              </div>
            </div>
            {hide2 && (
              <div className="lockbadgesee">
                <div className="locked_container">
                  <div className="locked_top_right">
                    <div className="lock_img_bg_color">
                      <img src={B_1_1} style={{ margin: "16px" }} />
                    </div>
                    <div>
                      <img src={lock} />
                    </div>
                  </div>
                  <div className="first_place_text">1st Place Badge</div>
                  <div className="first_place_small_text">
                    When you get 1st position in the tournament.
                  </div>
                  <div className="first_place_small_text">Rarity: 3</div>
                  <div className="point_needed">14 Points Needed</div>
                  <div className="outer_yellow_fill">
                    <div className="inner_yellow_fill"></div>
                  </div>
                </div>

                <div className="locked_container">
                  <div className="locked_top_right">
                    <div className="lock_img_bg_color">
                      <img src={B_1_2} style={{ margin: "16px" }} />
                    </div>
                    <div>
                      <img src={lock} />
                    </div>
                  </div>
                  <div className="first_place_text">2nd Place Badge</div>
                  <div className="first_place_small_text">
                    When you get 1st position in the tournament.
                  </div>
                  <div className="first_place_small_text">Rarity: 3</div>
                  <div className="point_needed">84 Points Needed</div>
                  <div className="outer_yellow_fill">
                    <div className="inner_yellow_fill"></div>
                  </div>
                </div>

                <div className="locked_container">
                  <div className="locked_top_right">
                    <div className="lock_img_bg_color">
                      <img src={B_1_3} style={{ margin: "16px" }} />
                    </div>
                    <div>
                      <img src={lock} />
                    </div>
                  </div>
                  <div className="first_place_text">3rd Place Badge</div>
                  <div className="first_place_small_text">
                    When you get 1st position in the tournament.
                  </div>
                  <div className="first_place_small_text">Rarity: 3</div>
                  <div className="point_needed">90 Points Needed</div>
                  <div className="outer_yellow_fill">
                    <div className="inner_yellow_fill"></div>
                  </div>
                </div>

                <div className="locked_container">
                  <div className="locked_top_right">
                    <div className="lock_img_bg_color">
                      <img src={B_1_4} style={{ margin: "16px" }} />
                    </div>
                    <div>
                      <img src={lock} />
                    </div>
                  </div>
                  <div className="first_place_text">100 hrs spent</div>
                  <div className="first_place_small_text">
                    When you get 1st position in the tournament.
                  </div>
                  <div className="first_place_small_text">Rarity: 3</div>
                  <div className="point_needed">Spend 10 hours more</div>
                  <div className="outer_yellow_fill">
                    <div className="inner_yellow_fill"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
