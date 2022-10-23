const SingleGenre = ({ name, addGenre, activeGenre }) => {
  return (
    <div
      className={
        activeGenre.includes(name) ? "genre-name active-genre" : "genre-name"
      }
      onClick={() => addGenre(name)}
    >
      {name}
    </div>
  );
};

export default SingleGenre;
