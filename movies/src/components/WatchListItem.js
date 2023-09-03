import React from "react";
import Wrapper from "../assests/Wrappers/WatchListItem";

const WatchListItem = ({
  description,
  id,
  mediaType,
  name,
  personalRating,
  poster,
  rating,
  releaseDate,
  title,
  watched,
}) => {
  return (
    <Wrapper>
      <div>
        <div>{name}</div>
        <div>{personalRating}</div>
        <div>{watched === false ? "Mark as watched" : "Mark as unwatched"}</div>
      </div>
    </Wrapper>
  );
};

export default WatchListItem;
