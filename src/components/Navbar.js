<<<<<<< HEAD
import React, { useEffect } from "react"
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom"
import { BsPersonCircle, BsBell } from "react-icons/bs"

import { logout, me } from "../Redux/Actions/authActions"
import { useDispatch, useSelector } from "react-redux"

function Navbar() {

  const {token, user} = useSelector((state) => state.auth) 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() =>{
    (async () => {
      if (token) {
        dispatch(me(() => {}))
      }
    })();
  }, [token, dispatch])

  const handleLogout = (e) =>{
    e.preventDefault()
    
    dispatch(logout(navigate))
  }
=======
import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle, BsBell } from "react-icons/bs";
import axios from "axios";
import { logout, me } from "../Redux/Actions/authActions";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (token) {
        dispatch(me(() => {}));
      }
    })();
  }, [token, dispatch]);

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout(navigate));
  };
>>>>>>> fbabdb394fb3dae15d1b3b2e37c695db661a1abd

  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand ms-2" href="/">
            <img src={logo} alt="logo" width="120" height="75" id="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
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
                    <button className="btn bttn mt-1" onClick={() => navigate("/signup")}>
                      Sign Up
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <div className="btn-group btn-group-sm me-auto">
                    <button className="btn" type="button">
                      <BsBell className="fs-6" />
                    </button>
                    <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <div className="row">
                        <div className="col-4">
<<<<<<< HEAD
                          <BsPersonCircle className="fs-3"/>
=======
                          <BsPersonCircle className="fs-3" />
>>>>>>> fbabdb394fb3dae15d1b3b2e37c695db661a1abd
                        </div>
                        <div className="col-8">
                          <p>{user?.data?.name}</p>
                        </div>
                      </div>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-lg-end">
<<<<<<< HEAD
                      <li><a className="dropdown-item" href="/user">My Profil</a></li>
                      <li><a className="dropdown-item" href="/history">History</a></li>
                      <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
=======
                      <li>
                        <a className="dropdown-item" href="/user">
                          My Profil
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/history">
                          History
                        </a>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={handleLogout}>
                          Logout
                        </button>
                      </li>
>>>>>>> fbabdb394fb3dae15d1b3b2e37c695db661a1abd
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
