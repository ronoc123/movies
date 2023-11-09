import React from "react";
import Wrapper from "../assests/Wrappers/ViewFriendsPage";
import FriendCard from "../components/User/FriendCard";
import { useAppContext } from "../Context/appContext";
import { useEffect } from "react";
import CustomSearchBar from "../components/navigation/CustomSearchBar";

const ViewFriendsPage = () => {
  const { getFriends, userFollowing } = useAppContext();

  useEffect(() => {
    getFriends();
  }, []);
  return (
    <Wrapper>
      <div className="main">
        <div className="main-header">
          {/* <div className="col-1"> */}
          <div>{userFollowing.length} following</div>
          {/* <div> sort by: </div>
          </div>
          <div className="col-2">
            <CustomSearchBar />
          </div> */}
        </div>
        <div>
          {userFollowing?.map((friend) => {
            return (
              <FriendCard
                key={friend.id}
                firstname={friend.firstname}
                lastname={friend.lastname}
                email={friend.email}
                motto={friend.motto}
                id={friend.id}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default ViewFriendsPage;
