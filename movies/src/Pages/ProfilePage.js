import React from "react";
import TierList from "../components/TierList";
import Wrapper from "../assests/Wrappers/Profile";
import FriendsList from "../components/FriendsList";
import WatchList from "../components/WatchList";

const ProfilePage = () => {
  return (
    <Wrapper>
      <div className="profile-container">
        <WatchList />
        <TierList />
        <FriendsList />
      </div>
    </Wrapper>
  );
};

export default ProfilePage;
