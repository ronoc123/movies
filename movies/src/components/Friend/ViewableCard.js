import React from "react";
import Wrapper from "../../assests/Wrappers/User";

import { FaUserCircle } from "react-icons/fa";
import { useAppContext } from "../../Context/appContext";

const ViewableCard = () => {
  const { friend } = useAppContext();

  return (
    <Wrapper>
      <div className="img-con">
        <FaUserCircle />
      </div>
      <div className="info-con">
        <div className="capitalize">
          {friend?.firstname} {friend?.lastname}
        </div>
        <div>{friend?.motto ? friend?.motto : "Add Motto"}</div>
      </div>
      <div className="stat-con">
        <div className="stacked-item">
          <span className="number">355</span>
          <span className="title">followers</span>
        </div>
        <div className="stacked-item">
          <span className="number">355</span>
          <span className="title">following</span>
        </div>
        <div className="stacked-item end">
          <span className="number">355</span>
          <span className="title">favorites</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default ViewableCard;
