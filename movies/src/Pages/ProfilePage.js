import React, { useEffect } from "react";
import TierList from "../components/TierList";
import Wrapper from "../assests/Wrappers/Profile";
import FriendsList from "../components/FriendsList";
import WatchList from "../components/WatchList";
import { useAppContext } from "../Context/appContext";
import UserCard from "../components/UserCard";

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
        <div>{/* could hold something */}</div>
        <div className="mid">
          <UserCard />
          <TierList />
        </div>
        <div>{/* could hold somethign */}</div>
      </div>
    </Wrapper>
  );
};

export default ProfilePage;
