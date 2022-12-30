import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle, BsBell } from "react-icons/bs";
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
                <a className="nav-link mt-1" aria-current="page" href="/">
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
                    {/* <button className="btn" type="button" onClick={() => navigate(`/notification`)}> */}
                    <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <BsBell className="fs-6" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-lg-end">
                      <li>
                        <div className="dropdown-item" onClick={() => navigate(`/notification`)}>
                          Notification
                        </div>
                      </li>
                    </ul>
                    <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <div className="row">
                        <div className="col-4">
                          <BsPersonCircle className="fs-3 mb-2" />
                        </div>
                        <div className="col-8">
                          <p>{user?.data?.name}</p>
                        </div>
                      </div>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-lg-end">
                      <li>
                        <button className="dropdown-item pe-auto" onClick={() => navigate(`/user/${user?.data?.id}`)}>
                          My Profil
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={() => navigate(`/history/${user?.data?.id}`)}>
                          History
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={handleLogout}>
                          Logout
                        </button>
                      </li>
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
