import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Spinner from "../Spinner/Spinner";

const Header = () => {
  const { user, logout, loading, setLoading } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  // console.log(loggedUser[0]);
  const listItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/myorders">My orders</Link>
      </li>
      <li>
        <Link to="/myproducts">My Products</Link>
      </li>
      <li>
        <Link to="/">My wishlist</Link>
      </li>
      <li>
        <Link to="/">Contact us</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {listItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Musica SELL
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{listItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <>
            <button onClick={handleLogout} className="btn btn-outline">
              Logout
            </button>
            <div className="w-10 rounded-full ml-3">
              <label className="label-text">{user?.displayName}</label>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm btn-outline">
              Login
            </Link>
            <Link to="/signup" className="btn btn-sm btn-outline ml-2">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
