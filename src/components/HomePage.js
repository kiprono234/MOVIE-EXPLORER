import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import MovieRow from "./MovieRow";
import moviesData from "../data/movies";

const categorize = (category) =>
  moviesData.filter((m) => m.category && m.category.includes(category));

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ genre: "", year: "", actor: "" });

  const filterMovies = (movies) =>
    movies.filter((movie) => {
      const matchesSearch =
        movie.title.toLowerCase().includes(search.toLowerCase());
      const matchesGenre = !filters.genre || movie.genre.includes(filters.genre);
      const matchesYear = !filters.year || movie.year === Number(filters.year);
      const matchesActor =
        !filters.actor ||
        movie.actors.some((a) =>
          a.toLowerCase().includes(filters.actor.toLowerCase())
        );
      return matchesSearch && matchesGenre && matchesYear && matchesActor;
    });

  return (
    <div className="main-content">
      <SearchBar search={search} setSearch={setSearch} />
      <Filters filters={filters} setFilters={setFilters} />
      <MovieRow title="Trending in Kenya" movies={filterMovies(categorize("Trending"))} />
      <MovieRow title="Top Rated" movies={filterMovies(categorize("Top Rated"))} />
      <MovieRow title="New Releases" movies={filterMovies(categorize("New Release"))} />
    </div>
  );
};
export default HomePage;