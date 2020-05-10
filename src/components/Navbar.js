import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Main.scss";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink
        className="nav_link"
        activeClassName="active_nav_link"
        exact
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="nav_link"
        activeClassName="active_nav_link"
        exact
        to="/Resume"
      >
        Resume
      </NavLink>
    </div>
  );
}

export default Navbar;
