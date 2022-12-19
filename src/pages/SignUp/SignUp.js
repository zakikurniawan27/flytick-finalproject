import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import "../../styles/signUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Name is required");
      return;
    }
    if (email === "") {
      alert("Email is required");
      return;
    }
    if (password === "") {
      alert("Password is required");
      return;
    }
    if (name !== "" && email !== "" && password !== "") {
      const data = {
        name,
        email,
        password,
      };
      try {
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/auth/register`, data, {});

        alert(result.data.message);
        navigate("/signin");
      } catch (error) {
        alert(error.response.data.message);
        console.log(error.response.data.message);
      }
    }
  };

  return (
    <div className="signUp">
      <div className="signUpAside" />
      <div className="signUpForm">
        <div className="signUpTitle">
          <h1>Sign Up</h1>
        </div>
        <div className="signUpCenter">
          <form className="signUpField" onSubmit={handleSubmit}>
            <div className="signUpField">
              <label className="signUpFieldLabel">Name</label>
              <input type="name" id="name" className="signUpFieldInput" placeholder="Enter your name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="signUpField">
              <label className="signUpFieldLabel">Email</label>
              <input type="email" id="email" className="signUpFieldInput" placeholder="Enter your email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="signUpField">
              <label className="signUpFieldLabel">Password</label>
              <input type="password" id="password" className="signUpFieldInput" placeholder="Enter your password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <div className="signUpField">
              <div className="signUpFieldbutton">
                <button
                  className="signUpFieldButton"
                  // onClick={(result) => {
                  //   localStorage.setItem(result.data.data) ? navigate("/signin") && alert("Registrasi berhasil !! ") : alert("Harap ulang registrasi !!");
                  // }}
                >
                  Create an Account
                </button>
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
};

export default SignUp;
