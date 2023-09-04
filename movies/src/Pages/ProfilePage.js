import React, { useEffect } from "react";
import TierList from "../components/TierList";
import Wrapper from "../assests/Wrappers/Profile";
import FriendsList from "../components/FriendsList";
import WatchList from "../components/WatchList";
import { useAppContext } from "../Context/appContext";

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
        <div>
          <WatchList />
          {/* add a filter bar component here */}
        </div>
        <div className="mid">
          <TierList />
        </div>
        <div>
          <FriendsList />
        </div>
      </div>
    </Wrapper>
  );
};

export default ProfilePage;
