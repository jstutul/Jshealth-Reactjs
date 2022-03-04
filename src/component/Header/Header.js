import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import useAuth from "./../../hooks/useAuth";
const Header = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-scroll"
          style={{ backgroundColor: "#0a4275" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              JSHealth
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/service">
                    Services
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav d-flex flex-row">
                {user.emailVerified ? (
                  <>
                    <li className="nav-item me-3 me-lg-0">
                      <b style={{ color: "white" }} className="nav-link">
                        Welcome {user.displayName}
                      </b>
                    </li>
                    <li className="nav-item me-3 me-lg-0">
                      <button
                        style={{
                          background: "none",
                          color: "white",
                          border: "none",
                        }}
                        onClick={logout}
                        className="nav-link"
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <li className="nav-item me-3 me-lg-0">
                    <Link className="nav-link" to="/login" role="button">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
