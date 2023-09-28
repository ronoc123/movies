import React from "react";
import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { CgProfile } from "react-icons/cg";
const FriendCard = ({ firstname, lastname, email, motto }) => {
  return (
    <div className="friend-container">
      <div className="info-container">
        <div className="profile-icon">
          <CgProfile />
        </div>
        <div>
          <div className="name-container">
            <span className="first-name capitalize">{firstname}</span>{" "}
            <span className="last-name capitalize">{lastname}</span>
          </div>
          <div className="description">{motto}</div>
        </div>
      </div>
      <div className="buttons">
        <Button
          variant="outlined"
          style={{
            color: "white",
            border: ".1em solid white",
            borderRadius: "1.5rem",
          }}
        >
          Message
        </Button>

        <div className="dot-button">
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
