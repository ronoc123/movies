import React from "react";
import Wrapper from "../assests/Wrappers/UserCard";
import { useAppContext } from "../Context/appContext";

const UserCard = () => {
  const { user } = useAppContext();

  return <Wrapper>{user}</Wrapper>;
};

export default UserCard;
