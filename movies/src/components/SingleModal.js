import Wrapper from "../assests/Wrappers/SingleModal";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { img_500, unavailable } from "../config/config";
import { AiFillStar } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../Context/appContext";

const SingleModal = ({ setShowModal, singleMovie, type, showSingleMovie }) => {
  const [video, setVideo] = useState("");
  const [recommended, setRecommended] = useState([]);

  let key = process.env.REACT_APP_MOVIES_API;

  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }

  async function fetchVideo() {
    let errorOccured = false;
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${type ? type : "movie"}/${
          singleMovie.id
        }/videos?api_key=${key}&language=en-US`
      );
      if (data.results[0]?.key) {
        setVideo(data.results[0]?.key);
      }
    } catch (error) {
      // console.log(error);
    }
  }
  async function fetchRelated() {
    try {
      const { data } = await axios.get(`
https://api.themoviedb.org/3/movie/${singleMovie.id}/similar?api_key=${key}&language=en-US&page=1`);
      setRecommended(data.results.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchVideo();
    fetchRelated();
  }, [singleMovie]);

  return (
    <Wrapper>
      <div className="info-container">
        <div className="close-icon" onClick={() => setShowModal(false)}>
          <AiOutlineCloseSquare />
        </div>
        <img
          src={
            singleMovie.poster_path
              ? `${img_500}/${singleMovie.poster_path}`
              : unavailable
          }
          alt={singleMovie?.original_title}
          className="image"
        />
        <div className="text-container">
          <div className="heading-container">
            <h1 className="text-title">
              {singleMovie.original_title || singleMovie.name}
            </h1>
            <div className="rating">
              <div className="star">
                <AiFillStar />
              </div>
              <div className="nums">
                {Math.round(singleMovie?.vote_average * 10) / 10} / 10
              </div>
            </div>
          </div>
          <div>{singleMovie?.release_date}</div>
          <div className="genres">
            {singleMovie.genres.map((item, i) => (
              <div className="single-genre" key={i}>
                {item.name}
              </div>
            ))}
          </div>
          <div className="release">{singleMovie?.status}</div>
          <div className="description">{singleMovie?.overview}</div>
          <div className="end">
            {singleMovie.budget ? (
              <div>Budget: ${numberWithCommas(singleMovie.budget)}</div>
            ) : (
              ""
            )}
            {singleMovie.runtime ? (
              <div>
                Duration: {Math.floor(singleMovie.runtime / 60)} Hours{" "}
                {singleMovie?.runtime % 60} Minutes
              </div>
            ) : (
              <div className="season">
                <span>
                  {singleMovie.number_of_seasons
                    ? singleMovie.number_of_seasons + " Season"
                    : "Duration Unknown"}
                </span>
              </div>
            )}
            {singleMovie.revenue ? (
              <div>Revenue: ${numberWithCommas(singleMovie.revenue)}</div>
            ) : (
              <div className="episode">
                <span>
                  {singleMovie.number_of_episodes
                    ? singleMovie.number_of_episodes + " Episodes"
                    : "Revenue Unknown"}{" "}
                </span>
              </div>
            )}
          </div>
          <div>
            {video ? (
              <a
                target="_blank"
                href={`https://www.youtube.com/watch?v=${video}`}
                className="video-link"
              >
                Watch Trailer
              </a>
            ) : null}
          </div>
          {recommended.length > 0 ? <h2>Similar Films</h2> : null}
          <div className="rec-container">
            {recommended
              ? recommended.map((item) => {
                  return (
                    <span
                      key={item.id}
                      className="rec"
                      onClick={() => showSingleMovie(item.id, "movie")}
                    >
                      {" | "}
                      {item.original_title || item.name}
                      {" | "}
                    </span>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleModal;
