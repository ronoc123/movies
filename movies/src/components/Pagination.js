import React from "react";
import Wrapper from "../assests/Wrappers/Pagination";
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";

const Pagination = ({ page, setPage, updatePage }) => {
  let start = 0;
  let values = Array.from({ length: 10 }, () => {
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
