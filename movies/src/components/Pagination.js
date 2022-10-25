import React from "react";
import Wrapper from "../assests/Wrappers/Pagination";
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";

const Pagination = ({ page, setPage, updatePage, pageAmount }) => {
  let start = 0;
  let len = pageAmount >= 10 ? 10 : pageAmount;
  let values = Array.from({ length: len }, () => {
    start++;
    return start;
  });

  return (
    <Wrapper>
      <div className="arrow" onClick={() => updatePage("down")}>
        <BsArrowLeftSquare />
      </div>
      {values.map((p) => {
        return (
          <div
            className={page === p ? `single active` : `single`}
            onClick={() => setPage(p)}
            key={p}
          >
            {p}
          </div>
        );
      })}
      <div className="arrow" onClick={() => updatePage("up")}>
        <BsArrowRightSquare />
      </div>
    </Wrapper>
  );
};

export default Pagination;
