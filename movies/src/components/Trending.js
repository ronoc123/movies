import Wrapper from "../assests/Wrappers/Trending";
import SingleMovie from "./SingleMovie";
import Genres from "./Genres";
import { useState, useEffect } from "react";
import axios from "axios";

const Trending = () => {
  const [movies, setMovies] = useState("");

  let key = process.env.REACT_APP_MOVIES_API;

  const getMovies = async () => {
    try {
      const { data } = await axios(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${key}`
      );
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Wrapper>
      <h1 className="title">Trending</h1>
      <div className="content">
        {movies &&
          movies.map((item) => {
            return (
              <SingleMovie
                key={item.id}
                title={item.title || item.name}
                mediaType={item.media_type}
                release={item.first_air_date || item.release_date}
                rating={item.vote_average}
                backdrop={item.backdrop_path}
                poster={item.poster_path}
                id={item.id}
              />
            );
          })}
      </div>
    </Wrapper>
  );
};

export default Trending;
