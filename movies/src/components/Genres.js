import { useState, useEffect } from "react";
import axios from "axios";
import Wrapper from "../assests/Wrappers/Genre";
import SingleGenre from "./SingleGenre";

const Genres = ({ type }) => {
  let key = process.env.REACT_APP_MOVIES_API;
  const [genre, setGenre] = useState();
  const [activeGenre, setActiveGenre] = useState([]);

  const addGenre = (name) => {
    if (activeGenre) setActiveGenre([...activeGenre, name]);
  };

  const fetchGenre = async () => {
    try {
      let { data } = await axios(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${key}&language=en-US`
      );

      setGenre(data.genres);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  return (
    <Wrapper>
      <div className="genre-container">
        {genre &&
          genre.map((g) => {
            return (
              <SingleGenre
                key={g.id}
                name={g.name}
                addGenre={addGenre}
                id={g.id}
                activeGenre={activeGenre}
              />
            );
          })}
      </div>
    </Wrapper>
  );
};

export default Genres;
