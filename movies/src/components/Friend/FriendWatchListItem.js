import React from "react";
import Wrapper from "../../assests/Wrappers/WatchListItem";
import { img_300, unavailable } from "../../config/config";
import { useAppContext } from "../../Context/appContext";
import { AiFillEye } from "react-icons/ai";
import { MdRemoveCircle } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

import ErrorSimpleSnackbar from "../ErrorSimpleSnackbar";

const FriendWatchListItem = ({
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
  favorited,
  showSingleMovie,
  dbId,
  open,
  setOpen,
  handleClick,
  handleClose,
}) => {
  const { favoriteMovie, openRatingModal } = useAppContext();

  return (
    <Wrapper>
      <div className="list-container">
        <div className="fav-icon">
          <div className={favorited ? "icon  yellow" : "icon black"}>
            {favorited ? (
              <AiFillStar onClick={() => favoriteMovie(id)} />
            ) : (
              <AiFillStar onClick={() => favoriteMovie(id)} />
            )}
          </div>

          <div className="icon">
            <AiFillEye onClick={() => showSingleMovie(dbId, mediaType)} />
          </div>
          <div className="icon">
            <MdRemoveCircle />
          </div>
          <div className="rating">
            {personalRating > 0 ? personalRating : ""}
          </div>
        </div>
        <img
          src={poster ? `${img_300}/${poster}` : unavailable}
          alt={title}
          className="movie"
        />
      </div>
      <ErrorSimpleSnackbar
        open={open}
        handleClose={handleClose}
        handleClick={handleClick}
      />
    </Wrapper>
  );
};

export default FriendWatchListItem;
