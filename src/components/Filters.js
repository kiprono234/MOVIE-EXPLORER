import React from "react";
import moviesData from "../data/movies";

const genres = [...new Set(moviesData.flatMap((m) => m.genre))];
const years = [...new Set(moviesData.map((m) => m.year))];
const actors = [...new Set(moviesData.flatMap((m) => m.actors))];

const Filters = ({ filters, setFilters }) => (
  <div className="filters">
    <select value={filters.genre} onChange={e => setFilters(f => ({ ...f, genre: e.target.value }))}>
      <option value="">All Genres</option>
      {genres.map(g => <option key={g} value={g}>{g}</option>)}
    </select>
    <select value={filters.year} onChange={e => setFilters(f => ({ ...f, year: e.target.value }))}>
      <option value="">All Years</option>
      {years.map(y => <option key={y} value={y}>{y}</option>)}
    </select>
    <select value={filters.actor} onChange={e => setFilters(f => ({ ...f, actor: e.target.value }))}>
      <option value="">All Actors</option>
      {actors.map(a => <option key={a} value={a}>{a}</option>)}
    </select>
  </div>
);
export default Filters;