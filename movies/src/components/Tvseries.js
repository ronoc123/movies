import React, { useEffect } from "react";
import Wrapper from "../assests/Wrappers/Movies";
import Genres from "./Genres";
import axios from "axios";
import Pagination from "./Pagination";
import { useState } from "react";
import SingleMovie from "./SingleMovie";

import useGenre from "../hooks/useGenre";

const Tvseries = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [activeGenres, setActiveGenres] = useState([]);
  let genreForUrl = useGenre(activeGenres);
  let key = process.env.REACT_APP_MOVIES_API;

  const getPopularMovies = async () => {
    try {
      const { data } = await axios(
        `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=${page}&with_genres=${genreForUrl}`
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
  };
  const updateGenre = (list) => {
    setActiveGenres(list);
  };

  useEffect(() => {
    getPopularMovies();
    window.scroll(0, 0);
  }, [page, activeGenres]);

  return (
    <Wrapper>
      <Genres type={"tv"} updateGenre={updateGenre} />
      <div className="content">
        {movie &&
          movie.map((item) => {
            return (
              <SingleMovie
                key={item.id}
                title={item.title || item.name}
                mediaType={item.media_type || "Tv"}
                release={item.first_air_date || item.release_date}
                rating={item.vote_average}
                backdrop={item.backdrop_path}
                poster={item.poster_path}
                id={item.id}
              />
            );
          })}
      </div>
      {movie.length >= 1 ? (
        <Pagination page={page} setPage={setPage} updatePage={updatePage} />
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default Tvseries;
