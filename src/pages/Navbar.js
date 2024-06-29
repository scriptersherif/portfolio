import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div>
      <div className="nav-links-container">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Experience">Experience & Skills</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
