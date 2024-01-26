import React from "react";
import LogoSearch from "./LogoSearch/LogoSearch";
import ProfileCard from "./ProfileCard/profileCard";
import "./profileSide.css";
import FollowersCard from "./FollowerCard/FollowersCard";

const ProfileSide = () => {
  return (
    <div className="profileSide">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
