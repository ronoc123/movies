import React from "react";
import { unavailable, img_300 } from "../config/config";

const TierListMovie = ({ poster, title }) => {
  return (
    <div className="movie">
      <img
        className="img"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
    </div>
  );
};

export default TierListMovie;
