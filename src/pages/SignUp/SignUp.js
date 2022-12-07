import React from "react";
import { FaGoogle } from "react-icons/fa";

import "../../styles/signUp.css";

function SignUp() {
  return (
    <div className="signUp">
      <div className="signUpAside" />
      <div className="signUpForm">
        <div className="signUpTitle">
          <h1>Sign Up</h1>
        </div>
        <div className="signUpCenter">
          <form className="signUpField">
            <div className="signUpField">
              <label className="signUpFieldLabel">Name</label>
              <input type="email" id="email" className="signUpFieldInput" placeholder="Enter your email" name="email" />
            </div>
            <div className="signUpField">
              <label className="signUpFieldLabel">Email</label>
              <input type="email" id="email" className="signUpFieldInput" placeholder="Enter your email" name="email" />
            </div>

            <div className="signUpField">
              <label className="signUpFieldLabel">Password</label>
              <input type="password" id="password" className="signUpFieldInput" placeholder="Enter your email" name="password" />
            </div>

            <div className="signUpField">
              <div className="signUpFieldbutton">
                <button className="signUpFieldButton">Create an Account</button>
              </div>
            </div>

            <div className="signUpFieldbutton">
              <label className="signup">or sign up using </label>
            </div>

            <div className="signUpFieldbutton">
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

export default SignUp;
