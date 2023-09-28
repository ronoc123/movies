import React from "react";
import Wrapper from "../assests/Wrappers/ViewFriendsPage";
import FriendCard from "../components/User/FriendCard";
import { useAppContext } from "../Context/appContext";
import { useEffect } from "react";
import CustomSearchBar from "../components/navigation/CustomSearchBar";

const ViewFriendsPage = () => {
  const { getFriends, userFriends } = useAppContext();

  useEffect(() => {
    getFriends();
  }, []);
  return (
    <Wrapper>
      <div className="main">
        <div className="main-header">
          <div className="col-1">
            <div>155 friends</div>
            <div> sort by: </div>
          </div>
          <div className="col-2">
            <CustomSearchBar />
          </div>
        </div>
        <div>
          {userFriends?.map((friend) => {
            return (
              <FriendCard
                firstname={friend.firstname}
                lastname={friend.lastname}
                email={friend.email}
                motto={friend.motto}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default ViewFriendsPage;
