import FavouriteMovie from "./FavouriteMovie";
function FavouritesList(props) {
  return (
    <div>
      <h3>My Favourites List</h3>
      {props.favourites.length > 0 ? (
        <ul>
          {props.favourites.map((movie) => (
            <FavouriteMovie
              movie={movie}
              removeFavourite={props.removeFavourite}
            />
          ))}
        </ul>
      ) : (
        <p>You have no favourite movies yet!</p>
      )}
    </div>
  );
}

export default FavouritesList;
