import React, { useEffect } from "react";
import TierList from "../components/TierList";
import Wrapper from "../assests/Wrappers/Profile";
import FriendsList from "../components/FriendsList";
import WatchList from "../components/WatchList";
import { useAppContext } from "../Context/appContext";
import UserCard from "../components/User/UserCard";
import BasicTabs from "../components/CustomTabPanel";
import RatingModal from "../components/RatingModal";

const ProfilePage = () => {
  const { getWatchListMovies, getFriends, getTierList } = useAppContext();

  useEffect(() => {
    getWatchListMovies();
    getFriends();
    getTierList();
  }, []);
  return (
    <Wrapper>
      <div className="profile-container">
        <div>
          <UserCard />
        </div>
        <div className="mid">
          <BasicTabs />
        </div>
        <div>{/* <FriendsList /> */}</div>
      </div>
    </Wrapper>
  );
};

export default ProfilePage;
