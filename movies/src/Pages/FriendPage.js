import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../Context/appContext";
import { useEffect } from "react";
import Wrapper from "../assests/Wrappers/Profile";
import TierList from "../components/TierList";
import FriendsList from "../components/FriendsList";
import WatchList from "../components/WatchList";
import BasicTabs from "../components/CustomTabPanel";
import UserCard from "../components/User/UserCard";
import ViewableCard from "../components/Friend/ViewableCard";

const FriendPage = () => {
  const { getFriendsMovies, getFriendsInfo } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    getFriendsMovies(id);
    getFriendsInfo();
  }, []);

  // FIGURE OUT HOW TO GET THE PAGE PARAM TO LAOD SPECIFIC USERS DATA

  return (
    <Wrapper>
      <div className="profile-container">
        <div>
          <ViewableCard />
        </div>
        <div className="mid">
          <BasicTabs />
        </div>
        <div>{/* <FriendsList /> */}</div>
      </div>
    </Wrapper>
  );
};

export default FriendPage;
