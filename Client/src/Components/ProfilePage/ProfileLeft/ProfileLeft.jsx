import React from "react";
import LogoSearch from "../../ProfileSide/LogoSearch/LogoSearch";
import FollowersCard from "../../ProfileSide/FollowerCard/FollowersCard";
import InfoCard from "./InfoCard/InfoCard";

const ProfileLeft = () => {
  return (
    <div className="profileSide">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
