import React from "react";
import Wrapper from "../assests/Wrappers/FriendsList";
import Friend from "./Friend";
import { useState } from "react";
import { useAppContext } from "../Context/appContext";

const FriendsList = () => {
  const [friends, setFreinds] = useState([]);
  const { userFriends } = useAppContext();
  return (
    <Wrapper>
      {userFriends?.map((friend) => {
        return (
          <Friend key={friend.id} id={friend.id} name={friend.firstname} />
        );
      })}
    </Wrapper>
  );
};

export default FriendsList;
