import "./App.css";
import Sign_in_page from "./Components/js/Sign_in_page";
import Slider from "./Components/js/Slider";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Error from "./Components/images/Error.png";
import Forgot_password_page from "./Components/js/Forgot_password_page";
import Verify_Email_page from "./Components/js/Verify_Email_page";
import New_Password_page from "./Components/js/New_Password_page";
import Faq_page from "./Components/js/Faq_page";
import On_bording_page from "./Components/js/On_bording_page";
import Sign_up_page from "./Components/js/Sign_up_page";
import Home_page from "./Components/js/Home_page";
import Comments_page from "./Components/js/Comments_page";
import Expolor_page from "./Components/js/Expolor_page";
import Explore_search_page from "./Components/js/Explore_search_page";
import { useEffect, useState } from "react";
import Inbox from "./Components/js/Inbox";
import Follow_Request from "./Components/js/Follow_Request";
import Inbox_Message_page from "./Components/js/Inbox_Message_page";
import Chat from "./Components/js/Chat";
import New_Message_page from "./Components/js/New_Message_page";
import New_Message_Page_Users from "./Components/js/New_Message_Page_Users";
import Explore_More_page from "./Components/js/Explore_More_page";
import Profile from "./Components/js/Profile";
import Post_Img_Page from "./Components/js/Post_Img_Page";
import Profile_Setting from "./Components/js/Profile_Setting";
import Profile_Notification from "./Components/js/Profile_Notification";
import Profile_Billing_page from "./Components/js/Profile_Billing_page";
import Edit_Profile_Page from "./Components/js/Edit_Profile_Page";
import Customize_Profile_page from "./Components/js/Customize_Profile_page";
import Support_page from "./Components/js/Support_page";
import Support_page_2 from "./Components/js/Support_page_2";
import Support_page_chat from "./Components/js/Support_page_chat";
import Tournamet from "./Components/js/Tournamet";
import Tournament_Store_page from "./Components/js/Tournament_Store_page";
import Tournament_judge_page from "./Components/js/Tournament_judge_page";
import Congratulations_page from "./Components/js/Congratulations_page";
import Add_Coins_page from "./Components/js/Add_Coins_page";
import Judge_Memee_page from "./Components/js/Judge_Memee_page";
import Tournamet_Ranking_list from "./Components/js/Tournamet_Ranking_list";
import Tournamet_post_entry from "./Components/js/Tournamet_post_entry";
import Tournament_congratulations_page from "./Components/js/Tournament_congratulations_page";
import Payment_Method_page from "./Components/js/Payment_Method_page";
import Payment_Manage_card_page from "./Components/js/Payment_Manage_card_page";
import Payment_credit_card_details_page from "./Components/js/Payment_credit_card_details_page";
import Payment_Add_card_page from "./Components/js/Payment_Add_card_page";
import Other_person_profile_page from "./Components/js/Other_person_profile_page";
import Organized_badge_page from "./Components/js/Organized_badge_page";
import Memee_user_story from "./Components/js/Memee_user_story";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Add_Post_Page from "./Components/js/Add_Post_Page";
import New_Trending_Memes_Page from "./Components/js/New_Trending_Memes_Page";
// import { useNavigate } from "react-router-dom";

function App() {
  // const Navigate = useNavigate();
  const [disableCmp, setDisableCmp] = useState();
  const [showSlider, setShowSlider] = useState(false);
  const [condiTion, setcondiTion] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "Default_theme_Navbar_color"
  );

  useEffect(() => {
    !localStorage.getItem("theme") &&
      localStorage.setItem("theme", "Default_theme_Navbar_color");
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setcondiTion(true);
    } else {
      setcondiTion(false);
    }
    setShowSlider(true);
    setDisableCmp(false);
    setTimeout(() => {
      setShowSlider(false);
      setDisableCmp(true);
    }, 500);
  }, []);

  return (
    <>
      <div className="sliderofapp">{showSlider && <Slider />}</div>
      <ToastContainer autoClose={1000} />
      <BrowserRouter>
        {disableCmp && (
          <div className="memee">
            <Routes>
              {condiTion == true ? (
                <Route path="/" element={<Home_page />} />
              ) : (
                <Route path="*" element={<On_bording_page />} />
              )}
              {/* <Route path="/" element={<On_bording_page />} /> */}
              <Route path="Sign_in_page" element={<Sign_in_page />} />
              <Route
                path="Forgot_password_page"
                element={<Forgot_password_page />}
              />
              <Route path="Verify_Email_page" element={<Verify_Email_page />} />
              <Route path="New_Password_page" element={<New_Password_page />} />
              <Route path="Sign_up_page" element={<Sign_up_page />} />
              <Route path="On_bording_page" element={<On_bording_page />} />
              <Route path="Faq_page" element={<Faq_page />} />
              <Route path="Home_page" element={<Home_page />} />
              <Route path="Comments_page" element={<Comments_page />} />
              <Route path="Expolor_page" element={<Expolor_page />} />
              <Route
                path="Explore_search_page"
                element={<Explore_search_page />}
              />
              <Route path="Inbox" element={<Inbox />} />
              <Route path="Follow_Request" element={<Follow_Request />} />
              <Route
                path="Inbox_Message_page"
                element={<Inbox_Message_page />}
              />
              <Route path="Chat" element={<Chat />} />
              <Route path="New_Message_page" element={<New_Message_page />} />
              <Route
                path="New_Message_Page_Users"
                element={<New_Message_Page_Users />}
              />
              <Route path="Explore_More_page" element={<Explore_More_page />} />
              <Route path="Profile" element={<Profile />} />
              <Route path="Post_Img_Page" element={<Post_Img_Page />} />
              <Route path="Profile_Setting" element={<Profile_Setting />} />
              <Route
                path="Profile_Notification"
                element={<Profile_Notification />}
              />
              <Route
                path="Profile_Billing_page"
                element={<Profile_Billing_page />}
              />
              <Route path="Edit_Profile_Page" element={<Edit_Profile_Page />} />
              <Route
                path="Customize_Profile_page"
                element={<Customize_Profile_page />}
              />
              <Route path="Support_page" element={<Support_page />} />
              <Route path="Support_page_2" element={<Support_page_2 />} />
              <Route path="Support_page_chat" element={<Support_page_chat />} />
              <Route path="Tournamet" element={<Tournamet />} />
              <Route
                path="Tournament_Store_page"
                element={
                  <Tournament_Store_page theme={theme} setTheme={setTheme} />
                }
              />
              <Route
                path="Tournament_judge_page"
                element={<Tournament_judge_page />}
              />
              <Route
                path="Congratulations_page"
                element={<Congratulations_page />}
              />
              <Route path="Add_Coins_page" element={<Add_Coins_page />} />
              <Route path="Judge_Memee_page" element={<Judge_Memee_page />} />
              <Route
                path="Tournamet_Ranking_list"
                element={<Tournamet_Ranking_list />}
              />
              <Route
                path="Tournamet_post_entry"
                element={<Tournamet_post_entry />}
              />
              <Route
                path="Tournament_congratulations_page"
                element={<Tournament_congratulations_page />}
              />
              <Route
                path="Payment_Method_page"
                element={<Payment_Method_page />}
              />
              <Route
                path="Payment_Manage_card_page"
                element={<Payment_Manage_card_page />}
              />
              <Route
                path="Payment_credit_card_details_page"
                element={<Payment_credit_card_details_page />}
              />
              <Route
                path="Payment_Add_card_page"
                element={<Payment_Add_card_page />}
              />

              <Route
                path="Other_person_profile_page"
                element={<Other_person_profile_page />}
              />

              <Route
                path="Organized_badge_page"
                element={<Organized_badge_page />}
              />

              <Route path="Memee_user_story" element={<Memee_user_story />} />
              <Route path="Add_Post_Page" element={<Add_Post_Page />} />
              <Route path="Faq_page" element={<Faq_page />} />
              <Route path="New_Trending_Memes_Page" element={<New_Trending_Memes_Page />} />
            </Routes>
          </div>
        )}

        <div className="no_Conetent">
          <div className="error">
            <div className="error2">
              <h2> UPPS!!!!</h2> <br />
              <h1>
                <span>SORRY!!</span> <br />
                This App Is Not Available In <br />{" "}
                <span id="">DESKTOP VIEW !!</span> Please Check in
                <br /> Mobile & Tablet View
              </h1>
            </div>
            <img src={Error}></img>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
