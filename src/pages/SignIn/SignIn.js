import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";

import "../../styles/signIn.css";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Actions/authActions";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is required");
      return;
    }
    if (password === "") {
      alert("Password is required");
      return;
    }
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
      };
      dispatch(login(data, navigate));
    }
  };

  // const googleLogin = useGoogleLogin({
  //   onSuccess: async (response) => {
  //     try {
  //       const data = {
  //         access_token: response.access_token,
  //       };
  //       console.log(data);
  //       const datas = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/oauth/login/google`, data);
  //       console.log(datas);
  //       if (datas.data) {
  //         localStorage.setItem("token", datas.data);
  //         window.location.reload();
  //       }
  //     } catch (error) {
  //       alert(error.response.data.message);
  //     }
  //   },
  //   onError: (error) => {
  //     alert(error);
  //   },
  // });

  return (
    <div className="signIn  mb-5">
      <div className="signInAside" />
      <div className="signInForm">
        <div className="signInTitle">
          <h1>Sign In</h1>
        </div>
        <div className="signInCenter">
          <form className="signInField" onSubmit={handleSubmit}>
            <div className="signInField">
              <label className="signInFieldLabel">Email</label>
              <input type="email" id="email" className="signInFieldInput" placeholder="Enter your email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="signInField position-relative">
              <label className="signInFieldLabel">Password</label>
              <a href="https://flytick-dev.up.railway.app/api/user/forgot-password" className="position-absolute top-0 end-0">
                Forgot Password ?
              </a>
              <input type="password" id="password" className="signInFieldInput" placeholder="Enter your password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
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

            {/* <div className="signInFieldbutton">
              <label className="signup">or sign up using </label>
            </div> */}

            {/* <div className="signInFieldbutton">
              <div className="googleButton">
                <button className="google px-2 py-1" onClick={googleLogin}>
                  <FaGoogle color="white" />
                </button>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
