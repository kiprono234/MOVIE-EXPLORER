import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import moviesData from "../data/movies";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = moviesData.find((m) => m.id === Number(id));

  if (!movie) return <div>Movie not found.</div>;

  return (
    <div className="details-page">
      <button onClick={() => navigate(-1)}>Back</button>
      <div className="details-content">
        <img src={movie.poster} alt={movie.title} className="details-poster" />
        <div className="details-info">
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <div><strong>Genre:</strong> {movie.genre.join(", ")}</div>
          <div><strong>Year:</strong> {movie.year}</div>
          <div><strong>Cast:</strong> {movie.actors.join(", ")}</div>
          <div><strong>Rating:</strong> {movie.rating}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;