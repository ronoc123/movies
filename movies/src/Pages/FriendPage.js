import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../Context/appContext";
import { useEffect } from "react";
import Wrapper from "../assests/Wrappers/Profile";
import ViewableCard from "../components/Friend/ViewableCard";
import FriendCustomTabs from "../components/Friend/FriendCustomTabs";

const FriendPage = () => {
  const { getFriendsMovies, getFriendsInfo, getFriendsTierList, friend } =
    useAppContext();
  const { id } = useParams();
  useEffect(() => {
    getFriendsMovies(id);
    getFriendsInfo(id);
    getFriendsTierList(id);
  }, [id]);

  // FIGURE OUT HOW TO GET THE PAGE PARAM TO LAOD SPECIFIC USERS DATA

  return (
    <Wrapper>
      <div className="profile-container">
        <div>
          <ViewableCard />
        </div>
        <div className="mid">
          <FriendCustomTabs />
        </div>
        <div>{/* <FriendsList /> */}</div>
      </div>
    </Wrapper>
  );
};

export default FriendPage;
