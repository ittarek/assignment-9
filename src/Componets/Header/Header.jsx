import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between  items-center m-auto py-5">
      <div className="company-name font-extrabold text-4xl">Go Hire</div>
      <div className="menu-item text-violet-700 ">
        <Link to="/"> Home </Link>
        <Link to="/chart">Statistics</Link>
        <button>Applied Jobs</button>
        <Link to="/blog">Blog</Link>
      </div>
      <div className="nav-bar-button">
        <button className="btn  text-white bg-violet-700">Star Applying</button>
      </div>
    </nav>
  );
};

export default Header;
