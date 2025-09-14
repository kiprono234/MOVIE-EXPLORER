import React from "react";
import { Link } from "react-router-dom";
const Header = () => (
  <header className="header">
    <Link to="/"><h1> MOVIE🎬EXPLORER</h1></Link>
    <nav>
      <Link to="/watchlist">Watchlist</Link>
    </nav>
  </header>
);

export default Header;