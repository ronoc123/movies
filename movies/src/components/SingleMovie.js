import Wrapper from "../assests/Wrappers/SingleMovie";
import { img_300, img_500 } from "../config/config";
import { useState } from "react";

const SingleMovie = ({
  title,
  mediaType,
  release,
  rating,
  backdrop,
  poster,
  id,
}) => {
  return (
    <Wrapper>
      <img src={`${img_300}/${poster}`} alt="" />
      <div className="single-title">{title}</div>
      <div className="type-container">
        <div className="type"> {mediaType}</div>
        <div className="release">{release}</div>
      </div>
      <div className={rating > 7 ? "rating gold" : "rating silver"}>
        {Math.round(rating * 10) / 10}
      </div>
    </Wrapper>
  );
};

export default SingleMovie;
