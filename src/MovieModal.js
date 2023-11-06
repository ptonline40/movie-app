import Modal from "react-modal";

function MovieModal({ movie, isModalOpen, closeModal }) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel={movie.Title}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
      </div>
      <div className="modal-header">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="modal-title">
          <h2>{movie.Title}</h2>
          <p>
            <strong>{movie.Year}</strong>
          </p>
        </div>
        <div className="modal-body">
          <p>
            <strong>Genre: </strong>
            {movie.Genre}
          </p>
          <p>
            <strong>Rating: </strong>
            {movie.imdbRating}
          </p>
          <p>
            <strong>Runtime: </strong>
            {movie.Runtime}
          </p>

          <p>
            <strong>Cast: </strong>
            {movie.Actors}
          </p>
        </div>
      </div>
    </Modal>
  );
}
export default MovieModal;
