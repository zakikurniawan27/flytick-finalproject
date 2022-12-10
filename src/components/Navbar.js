import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom"
import { BsPersonCircle, BsBell } from "react-icons/bs"


function Navbar({token}) {

  const navigate = useNavigate()

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
              {!token ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link text-success-400" href="/signin">
                      Sign in
                    </a>
                  </li>
                  <li className="nav-item">
                    <button className="btn bttn mt-1 text-white" onClick={() => navigate("/signup")}>Sign Up</button>
                  </li>
                </>
              ):(
                <>
                  <div className="btn-group me-auto">
                    <button className="btn" type="button">
                      <BsBell className="fs-6"/>
                    </button>
                    <button className="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <BsPersonCircle className="fs-3"/> 
                    </button>
                    <ul className="dropdown-menu dropdown-menu-lg-end">
                      <li><a className="dropdown-item" href="/user">My Profil</a></li>
                      <li><button className="dropdown-item" href="/">Logout</button></li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
