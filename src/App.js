import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieDetails";
import Watchlist from "./components/Watchlist";
import { WatchlistProvider } from "./context/WatchlistContext";
import "./App.scss";

function App() {
  return (
    <WatchlistProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </Router>
    </WatchlistProvider>
  );
}
export default App;