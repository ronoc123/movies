import React from "react";
import Wrapper from "../assests/Wrappers/Search";
import axios from "axios";
import { useState, useEffect } from "react";
import SingleMovie from "./SingleMovie";
import { BsSearch } from "react-icons/bs";
import Pagination from "./Pagination";

const Search = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  let key = process.env.REACT_APP_MOVIES_API;

  const getPopularMovies = async () => {
    try {
      const { data } = await axios(
        `
      https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${search}s&page=${page}&include_adult=false`
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

  useEffect(() => {
    if (search) {
      getPopularMovies();
    }
  }, [search]);

  return (
    <Wrapper>
      <div className="search-container">
        <input
          type="text"
          name="search"
          placeholder="Search Movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {movie.length === 0 ? (
        <h1 className="title">Search for a movie...</h1>
      ) : (
        ""
      )}
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
      {movie.length === 0 ? (
        ""
      ) : (
        <Pagination page={page} setPage={setPage} updatePage={updatePage} />
      )}
    </Wrapper>
  );
};

export default Search;
