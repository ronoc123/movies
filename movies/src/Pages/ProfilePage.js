import React, { useEffect } from "react";
import TierList from "../components/TierList";
import Wrapper from "../assests/Wrappers/Profile";
import FriendsList from "../components/FriendsList";
import WatchList from "../components/WatchList";
import { useAppContext } from "../Context/appContext";
import UserCard from "../components/UserCard";
import BasicTabs from "../components/CustomTabPanel";
import RatingModal from "../components/RatingModal";

const ProfilePage = () => {
  const { getWatchListMovies, getFriends, getTierListMovies } = useAppContext();

  useEffect(() => {
    getWatchListMovies();
    getFriends();
    getTierListMovies();
  }, []);
  return (
    <Wrapper>
      <div className="profile-container">
        <div></div>
        <div className="mid">
          <BasicTabs />
          {/* <UserCard /> */}
          {/* <TierList /> */}
        </div>
        <div>{/* <FriendsList /> */}</div>
      </div>
    </Wrapper>
  );
};

export default ProfilePage;
