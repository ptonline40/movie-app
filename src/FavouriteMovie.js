function FavouriteMovie({ movie, removeFavourite }) {
  const handleRemove = (e) => {
    e.stopPropagation();
    removeFavourite(movie);
  };
  return (
    <li>
      <img src={movie.Poster} alt="movie.Title" />
      <div>
        <h4>{movie.Title}</h4>
        <p>{movie.Year}</p>
      </div>
      <button onClick={handleRemove}>Remove Movie</button>
    </li>
  );
}

export default FavouriteMovie;
