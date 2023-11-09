import React, { useEffect } from "react";
import Wrapper from "../../assests/Wrappers/User";

import { FaUserCircle } from "react-icons/fa";
import { useAppContext } from "../../Context/appContext";

const ViewableCard = () => {
  const { friend, userFollowing, addFriend, deleteFriend, getFriends } =
    useAppContext();

  const handleFollow = () => {
    if (userFollowing.some((f) => f.id === friend.id)) {
      deleteFriend(friend?.id);
    } else {
      addFriend(friend?.id);
    }
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <Wrapper>
      <div className="img-con">
        {friend?.profilePicture ? (
          <img
            src={`/api/users/${friend.id}/profile-picture/${friend.profilePicture}`}
            alt="picture"
          />
        ) : (
          <FaUserCircle />
        )}
      </div>
      <div className="info-con">
        <div className="capitalize">
          {friend?.firstname} {friend?.lastname}
        </div>
        <div>{friend?.motto ? friend?.motto : ""}</div>
      </div>
      <div className="stat-con">
        <button className="follow-btn" onClick={handleFollow}>
          {userFollowing.some((f) => f.id === friend?.id)
            ? "Unfollow"
            : "Follow"}
        </button>
        <div className="stacked-item">
          <span className="number">{friend?.followers}</span>
          <span className="title">followers</span>
        </div>
        <div className="stacked-item">
          <span className="number">{friend?.following}</span>
          <span className="title">following</span>
        </div>
        <div className="stacked-item end">
          <span className="number">{friend?.favorites}</span>
          <span className="title">favorites</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default ViewableCard;
