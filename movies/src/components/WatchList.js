import React, { useEffect } from "react";
import Wrapper from "../assests/Wrappers/WatchList";
import WatchListItem from "./WatchListItem";
import { useState } from "react";
import { useAppContext } from "../Context/appContext";
import SingleModal from "./SingleModal";
import axios from "axios";

const WatchList = ({ movieWatchList }) => {
  let key = process.env.REACT_APP_MOVIES_API;

  // const { movieWatchList } = useAppContext();

  const [singleMovie, setSingleMovie] = useState();
  const [showModal, setShowModal] = useState(false);

  const showSingleMovie = async (id, mediaType) => {
    try {
      const { data } = await axios(
        `https://api.themoviedb.org/3/${
          mediaType ? mediaType : "movie"
        }/${id}?api_key=${key}&language=en-US`
      );
      setSingleMovie(data);
      setShowModal(true);
    } catch (error) {
      console.log(error);
      setOpen(true);

      setTimeout(() => {
        setOpen(false);
      }, 5000);
    }
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  if (movieWatchList.length === 0) {
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
              showSingleMovie={showSingleMovie}
              favorited={m.favorited}
              dbId={m.dbId}
              open={open}
              setOpen={setOpen}
              handleClick={handleClick}
              handleClose={handleClose}
            />
          );
        })}
      </Wrapper>
    );
  }
};

export default WatchList;
