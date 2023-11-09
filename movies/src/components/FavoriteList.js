import React, { useEffect } from "react";
import Wrapper from "../assests/Wrappers/WatchList";
import WatchListItem from "./WatchListItem";
import { useState } from "react";
import { useAppContext } from "../Context/appContext";
import SingleModal from "./SingleModal";
import axios from "axios";

const FavoriteList = ({ movieWatchList }) => {
  let key = process.env.REACT_APP_MOVIES_API;

  // const { movieWatchList } = useAppContext();

  const [singleMovie, setSingleMovie] = useState();
  const [showModal, setShowModal] = useState(false);

  const showSingleMovie = async (id, mediaType) => {
    try {
      const { data } = await axios(
        `https://api.themoviedb.org/3/${
          mediaType ? mediaType : "tv"
        }/${id}?api_key=${key}&language=en-US`
      );

      setSingleMovie(data);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (movieWatchList.filter((m) => m.favorited === true).length === 0) {
    return <div>No Favorited Movies...</div>;
  } else {
    return (
      <Wrapper>
        {showModal && (
          <SingleModal
            setShowModal={setShowModal}
            singleMovie={singleMovie}
            showSingleMovie={showSingleMovie}
          />
        )}
        {movieWatchList
          ?.filter((m) => m.favorited === true)
          ?.map((m) => {
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
                showSingleMovie={showSingleMovie}
                favorited={m.favorited}
                dbId={m.dbId}
              />
            );
          })}
      </Wrapper>
    );
  }
};

export default FavoriteList;
