import React from "react";
import { useWatchlist } from "../context/WatchlistContext";
import MovieCard from "./MovieCard";

const Watchlist = () => {
  const { watchlist } = useWatchlist();

  if (!Array.isArray(watchlist) || watchlist.length === 0) {
    return (
      <div className="main-content">
        <h2>Your Watchlist is empty.</h2>
      </div>
    );
  }

  return (
    <div className="main-content">
      <h2>Your Watchlist</h2>
      <div className="movie-list">
        {watchlist.map((movie) => (
          <div className="watchlist-movie-card" key={movie.id}>
            <MovieCard movie={movie} />
            <div className="watchlist-actions">
              {movie.watchLink && (
                <a
                  href={movie.watchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="watch-now-btn"
                >
                  Watch Now
                </a>
              )}
              {movie.trailer && (
                <a
                  href={movie.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trailer-btn"
                >
                  Watch Trailer
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;