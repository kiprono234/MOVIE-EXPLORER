import React from "react";
import MovieCard from "./MovieCard";

const MovieRow = ({ title, movies }) => (
  <section className="movie-row">
    <h2>{title}</h2>
    <div className="movie-list">
      {movies.length === 0 ? <span>No results.</span> : movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </section>
);
export default MovieRow;