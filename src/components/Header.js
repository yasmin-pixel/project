import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      <div className="inner-content">
        <div className="brand">
          <nav class="navbar fixed-top navbar-light bg-light">
            <a class="navbar-brand" href="/">
              Tasty tv
            </a>
            <Link to="/">
              <button type="button" class="btn btn-secondary">
                Home
              </button>
            </Link>

            <div className="nav-links">
              <Link to="/favourite">
                <button type="button" class="btn btn-secondary">
                  Favourite
                </button>
              </Link>
            </div>
          </nav>
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-3">Whats on Tasty Tv </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
