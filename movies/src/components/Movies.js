import React from "react";
import Wrapper from "../assests/Wrappers/Movies";
import Genres from "./Genres";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleMovie from "./SingleMovie";
import Pagination from "./Pagination";
import useGenre from "../hooks/useGenre";
import SingleModal from "./SingleModal";

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [activeGenres, setActiveGenres] = useState([]);
  const [numPage, setNumPage] = useState();
  const [singleMovie, setSingleMovie] = useState();
  const [showModal, setShowModal] = useState(false);
  let genreForUrl = useGenre(activeGenres);

  let key = process.env.REACT_APP_MOVIES_API;

  const getPopularMovies = async () => {
    try {
      const { data } = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}&with_genres=${genreForUrl}`
      );
      setNumPage(data.total_pages);
      setMovie(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const showSingleMovie = async (id, mediaType) => {
    try {
      const { data } = await axios(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
      );

      setSingleMovie(data);
      setShowModal(true);
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
      {showModal && (
        <SingleModal
          setShowModal={setShowModal}
          singleMovie={singleMovie}
          showSingleMovie={showSingleMovie}
        />
      )}
      <Genres type={"movie"} updateGenre={updateGenre} />
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
                showSingleMovie={showSingleMovie}
              />
            );
          })}
      </div>
      {movie.length >= 1 ? (
        <Pagination
          page={page}
          setPage={setPage}
          updatePage={updatePage}
          pageAmount={numPage}
        />
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default Movies;
