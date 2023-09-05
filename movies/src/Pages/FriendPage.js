import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../Context/appContext";
import { useEffect } from "react";
import Wrapper from "../assests/Wrappers/FriendPage";
import TierList from "../components/TierList";
import FriendsList from "../components/FriendsList";
import WatchList from "../components/WatchList";

const FriendPage = () => {
  const { getTierListMovies } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    getTierListMovies(id);
  }, []);

  // FIGURE OUT HOW TO GET THE PAGE PARAM TO LAOD SPECIFIC USERS DATA

  return (
    <Wrapper>
      <div className="profile-container">
        <div>
          <WatchList />
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

export default FriendPage;
