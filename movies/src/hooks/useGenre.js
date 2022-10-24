const useGenre = (selectedGenre) => {
  if (selectedGenre.length < 1) return;

  let genreId = selectedGenre.reduce((acc, curr) => acc + "," + curr);

  return genreId;
};

export default useGenre;
