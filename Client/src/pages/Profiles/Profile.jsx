import React from "react";
import "./Profile.css";
import ProfileCard from "../../Components/ProfileSide/ProfileCard/profileCard";
import PostSide from "../../Components/PostSide/PostSide";
import ProfileLeft from "../../Components/ProfilePage/ProfileLeft/ProfileLeft";
import RightSide from "../../Components/RightSide/RightSide";

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
