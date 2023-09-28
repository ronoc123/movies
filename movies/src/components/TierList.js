import React from "react";
import Wrapper from "../assests/Wrappers/TierList";
import { useAppContext } from "../Context/appContext";

const TierList = () => {
  const { movieTierList } = useAppContext();
  return (
    <Wrapper>
      <div className="ratings">
        <div className="tier s">S</div>
        <div className="tier a">A</div>
        <div className="tier b">B</div>
        <div className="tier c">C</div>
        <div className="tier d">D</div>
        <div className="tier f">F</div>
      </div>
      <div className="rows">
        <div className="tier-bracket"></div>
        <div className="tier-bracket"></div>
        <div className="tier-bracket"></div>
        <div className="tier-bracket"></div>
        <div className="tier-bracket"></div>
        <div className="tier-bracket"></div>
      </div>
    </Wrapper>
  );
};

export default TierList;
