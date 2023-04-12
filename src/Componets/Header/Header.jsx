import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="lg:flex w-full justify-between header items-center mb-16 bg-slate-50 rounded-sm ">
      
      <div onClick={() => setOpen(!open)}>
          {" "}
          <span>
            {open === true ? (
              <XMarkIcon className="h-6 w-6 text-blue-500 lg:hidden" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-blue-500 lg:hidden" />
            )}
          </span>{" "}
        </div>
      
      <div className="company-name">
       

        <p className="   font-extrabold text-6xl text-pink-300 ">Fit Employ</p>
      </div>
      <ul
        className={`  lg:justify-center lg:static lg:left-96   lg:flex absolute  ${
          open ? "top-12 duration-500 bg-white rounded-sm  " : "-left-32 "
        }   `}
      >
        <li>
          <Link className="m-2 text-violet-900" to="/">
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          <Link className="m-2 text-violet-900" to="/chart">
            Statistics
          </Link>
        </li>
        <li>
          <Link className="m-2 text-violet-900" to="/apply">
            Applied Jobs
          </Link>
        </li>
        <li>
          <Link className="m-2 text-violet-900" to="/blog">
            Blog
          </Link>
        </li>
      </ul>
      <div className="nav-bar-button ml-96 lg:mt-1 -mt-16 w-36 ">
        <button className="btn  text-white bg-violet-700">Star Applying</button>
      </div>
    </nav>
  );
};

export default Header;
