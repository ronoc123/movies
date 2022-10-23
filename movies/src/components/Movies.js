import React from "react";
import Wrapper from "../assests/Wrappers/Movies";
import Genres from "./Genres";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleMovie from "./SingleMovie";
import Pagination from "./Pagination";

const Movies = () => {
  const [movie, setMovie] = useState();
  const [page, setPage] = useState(1);
  let key = process.env.REACT_APP_MOVIES_API;

  const getPopularMovies = async () => {
    try {
      const { data } = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}`
      );

      setMovie(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePage = (direction) => {
    if (direction === "up") {
      if (page === 10) {
        setPage(1);
      } else {
        setPage(page + 1);
      }
    }

    if (direction === "down") {
      if (page === 1) {
        setPage(10);
      } else {
        setPage(page - 1);
      }
    }
    window.scroll(0, 0);
  };

  useEffect(() => {
    getPopularMovies();
  }, [page]);

  return (
    <Wrapper>
      <Genres type={"movie"} />
      <div className="content">
        {movie &&
          movie.map((item) => {
            return (
              <SingleMovie
                key={item.id}
                title={item.title || item.name}
                mediaType={item.media_type || "Movie"}
                release={item.first_air_date || item.release_date}
                rating={item.vote_average}
                backdrop={item.backdrop_path}
                poster={item.poster_path}
                id={item.id}
              />
            );
          })}
      </div>
      <Pagination page={page} setPage={setPage} updatePage={updatePage} />
    </Wrapper>
  );
};

export default Movies;
