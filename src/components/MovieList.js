import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, watchlist, onAddToWatchlist }) => (
  <div className="movie-list">
    {movies.map(movie => (
      <MovieCard
        key={movie.id}
        movie={movie}
        onAddToWatchlist={onAddToWatchlist}
        isInWatchlist={watchlist.some(item => item.id === movie.id)}
      />
    ))}
  </div>
);

export default MovieList;