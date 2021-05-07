import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Home";
import Search from "./Search";
import Houses from "./Houses";

export default function NavBar() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Exercise 03
          </a>

          <div>
            <ul className="navbar">
              <li className="nav-link">
                <Link to="/">Home</Link>
              </li>

              <li className="nav-link ">
                <Link to="/search">Search</Link>
              </li>

              <li className="nav-link ">
                <Link to="/houses">Houses</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/search">
            <Search />
          </Route>

          <Route path="/houses">
            <Houses />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
