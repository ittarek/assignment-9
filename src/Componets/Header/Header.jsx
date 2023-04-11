import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between  items-center mb-16 bg-slate-50 rounded-sm ">
      <div className="company-name font-extrabold text-6xl text-pink-300">Fit Employ</div>
      <ul className="menu-item text-violet-700 lg:flex">
        <li><Link className="m-2" to="/"> Home </Link></li>
        <li><Link className="m-2" to="/chart">Statistics</Link></li>
        <li><Link className="m-2" to="/apply">Applied Jobs</Link></li>
        <li><Link className="m-2" to="/blog">Blog</Link></li>
      </ul>
      <div className="nav-bar-button">
        <button className="btn  text-white bg-violet-700">Star Applying</button>
      </div>
    </nav>
  );
};

export default Header;
