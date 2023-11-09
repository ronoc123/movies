import { useAppContext } from "../Context/appContext";
import React from "react";
import { useState } from "react";
import Wrapper from "../assests/Wrappers/SingleMovie";
import { img_300, img_500, unavailable } from "../config/config";
import { HiPlusSm } from "react-icons/hi";
import { Snackbar } from "@mui/material";
import SimpleSnackbar from "./SnackBar";

const SingleMovie = ({
  title,
  mediaType,
  release,
  rating,
  backdrop,
  poster,
  id,
  showSingleMovie,
  description,
}) => {
  const { addMovieToWatchList, user } = useAppContext();

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

  const addToList = () => {
    let savedMovie = {
      title: title,
      rating,
      rating,
      description: description,
      releaseDate: release,
      mediaType: mediaType,
      personalRating: 0,
      poster: poster,
      dbId: id,
    };

    addMovieToWatchList(savedMovie);
    handleClick();
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  };

  return (
    <Wrapper>
      <img
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
        onClick={() => showSingleMovie(id, mediaType)}
      />
      <div className="single-title">{title}</div>
      <div className="type-container">
        <div className="type"> {mediaType}</div>
        <div className="release">{release}</div>
      </div>
      <div className={rating > 7 ? "rating gold" : "rating silver"}>
        {Math.round(rating * 10) / 10}
      </div>
      {user && (
        <div className="add-icon" onClick={addToList}>
          <HiPlusSm />
        </div>
      )}

      <SimpleSnackbar
        open={open}
        handleClose={handleClose}
        handleClick={handleClick}
      />
      <div></div>
    </Wrapper>
  );
};

export default SingleMovie;
