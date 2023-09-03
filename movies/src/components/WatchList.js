import React, { useEffect } from "react";
import Wrapper from "../assests/Wrappers/WatchList";
import WatchListItem from "./WatchListItem";
import { useState } from "react";
import { useAppContext } from "../Context/appContext";

const WatchList = () => {
  const { movieWatchList } = useAppContext();

  return (
    <Wrapper>
      {movieWatchList?.map(() => {
        return <WatchListItem />;
      })}
    </Wrapper>
  );
};

export default WatchList;
