import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <p>
      <Link className="btn btn-secondary btn-lg" to="/">Search for Books</Link>
      <Link className="btn btn-dark btn-lg" to="/saved">Saved Books</Link>
      </p>
      
    </nav>
  );
}

export default Nav;
