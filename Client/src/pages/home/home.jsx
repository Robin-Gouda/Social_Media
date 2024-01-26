import React from "react";
import "./home.css";
import ProfileSide from "../../Components/ProfileSide/profileSide";
import PostSide from "../../Components/PostSide/PostSide";
import RightSide from "../../Components/RightSide/RightSide";

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
