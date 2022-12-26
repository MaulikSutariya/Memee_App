import React from "react";
import "../Css/Memee_user_story.css";
import Stories from "react-insta-stories";
import { useLocation, useNavigate } from "react-router-dom";

export default function Memee_user_story() {
  const location = useLocation();
  const Navigate = useNavigate();
  const story = [
    {
      id: 1,
      url:process.env.REACT_APP_2_BASE_URL + "/" +location.state.storyData.story,
      duration: 2000,
      header: {
        heading: location.state.storyData.username,
        profileImage:process.env.REACT_APP_2_BASE_URL + "/" +location.state.storyData.userProfile
      },
    },
  ];
  return (
    <>
      <div className="Memee_user_story">
        <Stories
          stories={story}
          loop={true}
          priority={3}
          defaultInterval={7000}
          keyboardNavigation={false}
          width={"100%"}
          height={"100%"}
          onAllStoriesEnd={() => Navigate("/Home_page")}
        />
      </div>
    </>
  );
}
