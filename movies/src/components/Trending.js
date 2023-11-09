import Wrapper from "../assests/Wrappers/Trending";
import SingleMovie from "./SingleMovie";
import Genres from "./Genres";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleModal from "../components/SingleModal";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [singleMovie, setSingleMovie] = useState();
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
  const showSingleMovie = async (id, mediaType) => {
    try {
      const { data } = await axios(
        `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${key}&language=en-US`
      );
      setSingleMovie(data);
      setShowModal(true);
    } catch (error) {}
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Wrapper>
      {showModal && (
        <SingleModal setShowModal={setShowModal} singleMovie={singleMovie} />
      )}
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
                description={item.description}
                showSingleMovie={showSingleMovie}
              />
            );
          })}
      </div>
    </Wrapper>
  );
};

export default Trending;
