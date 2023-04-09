import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between  items-center m-auto py-5">
      <div className="company-name font-extrabold text-4xl">Go Hire</div>
      <div className="menu-item text-violet-700 ">
        <button>Statistics</button>
        <button>Applied Jobs</button>
        <button>Blog</button>
      </div>
      <div className="nav-bar-button">
        <button className="btn  text-white bg-violet-700">Star Applying</button>
      </div>
    </nav>
  );
};

export default Header;
