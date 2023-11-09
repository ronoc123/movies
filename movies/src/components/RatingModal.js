import React from "react";
import Wrapper from "../assests/Wrappers/Profile";
import { TextField, InputAdornment } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useAppContext } from "../Context/appContext";
import { useState } from "react";

const RatingModal = () => {
  const { closeRatingModal, rateMovie, movieRatingId } = useAppContext();
  const [rating, setRating] = useState();

  const handleSubmit = () => {
    rateMovie(movieRatingId, rating);
    closeRatingModal();
  };

  return (
    <Wrapper>
      <div className="rating-main">
        <div className="form-input">
          <div className="close-btn" onClick={() => closeRatingModal()}>
            <CancelIcon />
          </div>
          <TextField
            label="Rating"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            className="custom-textfield"
            onChange={(e) => setRating(e.target.value)}
          />
          <button onClick={handleSubmit}>Rate</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default RatingModal;
