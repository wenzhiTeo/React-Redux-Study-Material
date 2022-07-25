import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

import Cart from "./Cart";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  };

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                Redux Shopping App
              </Link>
            </h2>
          </li>
          <li>
            <h2
              className="header-h3"
              style={{ fontFamily: "monospace", fontSize: "20px" }}
            >
              <Link to="/counter" style={{ textDecoration: "none" }}>
                {"> Go to Counter App"}
              </Link>
            </h2>
          </li>

          <li>
            <Cart />
          </li>
          <li>
            <button onClick={logoutHandler} className="logoutBtn">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
