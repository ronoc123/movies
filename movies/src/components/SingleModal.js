import Wrapper from "../assests/Wrappers/SingleModal";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { img_500, unavailable } from "../config/config";

const SingleModal = ({ setShowModal, singleMovie }) => {
  return (
    <Wrapper>
      <div className="info-container" onClick={() => setShowModal(false)}>
        <div className="close-icon">
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
          <h1 className="text-title">
            {singleMovie.original_title || singleMovie.name}
          </h1>
          <div>{singleMovie.release_date}</div>
          <div>{singleMovie.genres.map((item) => " " + item.name)}</div>
          <div>{singleMovie.status}</div>
          <div>{singleMovie.vote_averge}</div>
          <div>{singleMovie.overview}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleModal;
