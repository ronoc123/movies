import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMessage } from "react-icons/ai";
import Wrapper from "../assests/Wrappers/Friend";

const Friend = ({ name, id }) => {
  return (
    <Wrapper>
      <div className="profile-icon">
        <CgProfile />
      </div>
      <div className="border-container">
        <span className="name">{name}</span>
        <span className="message">
          <AiOutlineMessage />
        </span>
      </div>
    </Wrapper>
  );
};

export default Friend;
