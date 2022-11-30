import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand ms-2" href="/">
            <img src={logo} alt="logo" width="120" height="75" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarScroll">
            <div className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-success-400" href="/">
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <button className="btn bttn mt-1 text-white">Sign Up</button>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
