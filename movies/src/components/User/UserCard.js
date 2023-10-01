import React from "react";
import Wrapper from "../../assests/Wrappers/User";

import { FaUserCircle } from "react-icons/fa";
import { useAppContext } from "../../Context/appContext";

const UserCard = () => {
  const { user } = useAppContext();

  return (
    <Wrapper>
      <div className="img-con">
        <FaUserCircle />
      </div>
      <div className="info-con">
        <div className="capitalize">
          {user.firstname} {user.lastname}
        </div>
        <div>{user.motto ? user.motto : "Add Motto"}</div>
      </div>
      <div className="stat-con">
        <div className="stacked-item">
          <span className="number">{user.followers}</span>
          <span className="title">followers</span>
        </div>
        <div className="stacked-item">
          <span className="number">{user.following}</span>
          <span className="title">following</span>
        </div>
        <div className="stacked-item end">
          <span className="number">{user.favorites}</span>
          <span className="title">favorites</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default UserCard;
