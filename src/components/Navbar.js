import React from "react";
import { Link } from "react-router-dom";
import "../Main.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/Resume">Resume</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  );
}

export default Navbar;
