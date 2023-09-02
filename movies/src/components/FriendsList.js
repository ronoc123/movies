import React from "react";
import Wrapper from "../assests/Wrappers/FriendsList";
import Friend from "./Friend";
import { useState } from "react";

const FriendsList = () => {
  const [friends, setFreinds] = useState([]);
  return (
    <Wrapper>
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
    </Wrapper>
  );
};

export default FriendsList;
