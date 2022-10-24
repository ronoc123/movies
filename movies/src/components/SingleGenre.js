import { AiOutlineCloseCircle } from "react-icons/ai";

const SingleGenre = ({ name, addGenre, activeGenre, id }) => {
  return (
    <div
      className={
        activeGenre.includes(id) ? "genre-name active-genre" : "genre-name"
      }
      onClick={() => addGenre(id)}
    >
      <span className={activeGenre.includes(id) ? "show" : "hide"}>
        <AiOutlineCloseCircle />
      </span>
      {name}
    </div>
  );
};

export default SingleGenre;
