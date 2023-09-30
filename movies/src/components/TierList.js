import React, { useEffect, useState } from "react";
import Wrapper from "../assests/Wrappers/TierList";
import { useAppContext } from "../Context/appContext";
import TierListMovie from "./TierListMovie";

const TierList = ({ tierList }) => {
  const [sTier, setSTier] = useState([]);
  const [aTier, setATier] = useState([]);
  const [bTier, setBTier] = useState([]);
  const [cTier, setCTier] = useState([]);
  const [dTier, setDTier] = useState([]);
  const [fTier, setFTier] = useState([]);

  const populateTierList = () => {
    setSTier(tierList.filter((m) => m.personalRating >= 8.5));
    setATier(
      tierList.filter((m) => m.personalRating < 8.5 && m.personalRating >= 7)
    );
    setBTier(
      tierList.filter((m) => m.personalRating < 7 && m.personalRating >= 6)
    );
    setCTier(
      tierList.filter((m) => m.personalRating < 6 && m.personalRating >= 5)
    );
    setDTier(
      tierList.filter((m) => m.personalRating < 5 && m.personalRating >= 4.5)
    );
    setFTier(tierList.filter((m) => m.personalRating < 4.5));
  };

  useEffect(() => {
    populateTierList();
  }, [TierList]);

  return (
    <Wrapper>
      <div className="rows">
        <div className="tier-bracket">
          <div className="tier s">S</div>
          <div className="children">
            {sTier.map((m) => {
              return <TierListMovie poster={m.poster} title={m.title} />;
            })}
          </div>
        </div>
        <div className="tier-bracket">
          <div className="tier a">A</div>
          <div className="children">
            {aTier.map((m) => {
              return <TierListMovie poster={m.poster} title={m.title} />;
            })}
          </div>
        </div>
        <div className="tier-bracket">
          <div className="tier b">B</div>
          <div className="children">
            {bTier.map((m) => {
              return <TierListMovie poster={m.poster} title={m.title} />;
            })}
          </div>
        </div>
        <div className="tier-bracket">
          <div className="tier c">C</div>
          <div className="children">
            {cTier.map((m) => {
              return <TierListMovie poster={m.poster} title={m.title} />;
            })}
          </div>
        </div>
        <div className="tier-bracket">
          <div className="tier d">D</div>
          <div className="children">
            {dTier.map((m) => {
              return <TierListMovie poster={m.poster} title={m.title} />;
            })}
          </div>
        </div>
        <div className="tier-bracket">
          <div className="tier f">F</div>
          <div className="children">
            {fTier.map((m) => {
              return <TierListMovie poster={m.poster} title={m.title} />;
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TierList;
