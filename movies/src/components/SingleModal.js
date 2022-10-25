import Wrapper from "../assests/Wrappers/SingleModal";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { img_500, unavailable } from "../config/config";
import { AiFillStar } from "react-icons/ai";

const SingleModal = ({ setShowModal, singleMovie }) => {
  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }

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
          alt={singleMovie.original_title}
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
                {Math.round(singleMovie.vote_average * 10) / 10} / 10
              </div>
            </div>
          </div>
          <div>{singleMovie.release_date}</div>
          <div className="genres">
            {singleMovie.genres.map((item, i) => (
              <div className="single-genre" key={i}>
                {item.name}
              </div>
            ))}
          </div>
          <div className="release">{singleMovie.status}</div>
          <div className="description">{singleMovie.overview}</div>
          <div className="end">
            <div>Budget: ${numberWithCommas(singleMovie.budget)}</div>
            <div>Revenue: ${numberWithCommas(singleMovie.revenue)}</div>
            <div>
              Duration: {Math.floor(singleMovie.runtime / 60)} Hours{" "}
              {singleMovie.runtime % 60} Minutes
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleModal;
