import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Stocker Ticker App</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">My Watchlist</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
