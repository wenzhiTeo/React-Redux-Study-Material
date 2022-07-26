import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

import Cart from "./Cart";
import "./Header.css";

const Header = ({ isReduxStore }) => {
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
                Redux Shopping Cart
              </Link>
            </h2>
          </li>
          <li>
            <h2
              className="header-h3"
              style={{ fontFamily: "monospace", fontSize: "20px" }}
            >
              <Link to="/counter" style={{ textDecoration: "none" }}>
                {"Redux Counter"}
              </Link>
            </h2>
          </li>
          <li>
            <h2
              className="header-h3"
              style={{ fontFamily: "monospace", fontSize: "20px" }}
            >
              <Link to="/saga_usecase" style={{ textDecoration: "none" }}>
                {"Redux Saga"}
              </Link>
            </h2>
          </li>

          {isReduxStore && (
            <>
              <li>
                <Cart />
              </li>
              <li>
                <button onClick={logoutHandler} className="logoutBtn">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
