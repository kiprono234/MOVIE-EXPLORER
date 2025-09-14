import React from "react";
import { useNavigate } from "react-router-dom";
import { useWatchlist } from "../context/WatchlistContext";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { watchlist, addToWatchlist } = useWatchlist();

  const isInWatchlist = watchlist.some((item) => item.id === movie.id);

  return (
    <div className="movie-card">
      <div className="poster-wrapper" style={{ position: "relative" }}>
        <img
          src={movie.poster}
          alt={movie.title}
          className="movie-poster"
          onClick={() => navigate(`/movie/${movie.id}`)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <span className="movie-title">{movie.title}</span>
      <button
        className="watchlist-btn"
        onClick={() => addToWatchlist(movie)}
        disabled={isInWatchlist}
      >
        {isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
      </button>
    </div>
  );
};

export default MovieCard;