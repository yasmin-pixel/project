import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      <div className="inner-content">
        <div className="brand">
          <Link to="/">
            <button type="button" class="btn btn-secondary">
              Home
            </button>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/favourite">
            <button type="button" class="btn btn-secondary">
              Favourite
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
