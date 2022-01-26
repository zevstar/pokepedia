import { useContext } from "react";
import { Link } from "react-router-dom";
//components
//import Nav from './components/Nav'
//contexts
import UserContext from "../../contexts/UserContext";
//css
//import './App.css';

//import React from "react";

const Nav = () => {
  const user = useContext(UserContext);
  // console.log(user);

  // Below we will use Link from react router to replace all of our anchor tags. We replace the href from <a> to 'to'.
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Pokepedia
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="pokemon/list"
              >
                Pokemon List
              </Link>
            </li>
            {!user ? (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="login"
                >
                  Login
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="favorites"
                >
                  Favorites
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
