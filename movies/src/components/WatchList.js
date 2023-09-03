import React, { useEffect } from "react";
import Wrapper from "../assests/Wrappers/WatchList";
import WatchListItem from "./WatchListItem";
import { useState } from "react";
import { useAppContext } from "../Context/appContext";

const WatchList = () => {
  const { movieWatchList } = useAppContext();
  console.log(movieWatchList);
  return (
    <Wrapper>
      {movieWatchList?.map((m) => {
        return (
          <WatchListItem
            key={m.id}
            description={m.description}
            id={m.id}
            mediaType={m.mediaType}
            name={m.name}
            personalRating={m.personalRating}
            poster={m.poster}
            rating={m.rating}
            releaseDate={m.releaseDate}
            title={m.title}
            watched={m.watched}
          />
        );
      })}
    </Wrapper>
  );
};

export default WatchList;
