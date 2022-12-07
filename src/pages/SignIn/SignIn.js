import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import "../../styles/signIn.css";

function SignIn() {
  return (
    <div className="signIn">
      <div className="signInAside" />
      <div className="signInForm">
        <div className="signInTitle">
          <h1>Sign In</h1>
        </div>
        <div className="signInCenter">
          <form className="signInField">
            <div className="signInField">
              <label className="signInFieldLabel">Email</label>
              <input type="email" id="email" className="signInFieldInput" placeholder="Enter your email" name="email" />
            </div>

            <div className="signInField">
              <label className="signInFieldLabel">Password</label>
              <input type="password" id="password" className="signInFieldInput" placeholder="Enter your password" name="password" />
            </div>

            <div className="signInField">
              <div className="signInFieldbutton">
                <button className="signInFieldButton">Sign In</button>
              </div>
              <div className="signInFieldbutton">
                <label className="signup">create an account? </label>
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>

            <div className="signInFieldbutton">
              <label className="signup">or sign up using </label>
            </div>

            <div className="signInFieldbutton">
              <div className="googleButton">
                <button className="google">
                  <FaGoogle color="white" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
