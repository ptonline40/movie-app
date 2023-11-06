import "./App.css";
import "./styles.css";
import { useState } from "react";
import SearchMovies from "./SearchMovies";
import FavouritesList from "./FavouritesList";
import MovieModal from "./MovieModal";

function App() {
  const [favourites, setFavourites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const addFavourite = (movie) => {
    setFavourites([...favourites, movie]);
  };

  const removeFavourite = (movie) => {
    setFavourites(favourites.filter((f) => f.imdbID !== movie.imdbID));
  };
  const showModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };
  console.log(favourites);
  return (
    <div className="App">
      <SearchMovies addFavourite={addFavourite} />
      <FavouritesList
        favourites={favourites}
        removeFavourite={removeFavourite}
        showModal={showModal}
      />
      {selectedMovie && (
        <MovieModal
          isModalOpen={isModalOpen}
          movie={selectedMovie}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;
