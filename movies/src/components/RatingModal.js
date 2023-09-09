import React from "react";
import Wrapper from "../assests/Wrappers/Profile";
import { TextField, InputAdornment } from "@mui/material";

const RatingModal = () => {
  return (
    <Wrapper>
      <div className="rating-main">
        <div className="form-input">
          <TextField
            label="Rating"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            className="custom-textfield"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default RatingModal;
