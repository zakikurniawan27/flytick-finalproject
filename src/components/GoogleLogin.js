import React from "react";
import { FaGoogle } from "react-icons/fa";

import "../styles/signIn.css";

function GoogleLogin({ label }) {
  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      // Send access token to backend
      try {
        const data = {
          access_token: response.access_token,
        };
        const datas = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/oauth/login/google`, data);
        if (datas.data.token) {
          // Set token from backend to local storage
          // {"data": { "token": "ini token" }}
          localStorage.setItem("token", datas.data.token);
          // setToken(datas.data.token);
          window.location.reload();
        }
      } catch (error) {
        // If there are any error it will show the error message from backend
        // { "message": "Password salah" }
        alert(error.response.data.message);
      }
    },
    onError: (error) => {
      alert(error);
    },
  });
  return (
    <div className="signInFieldbutton">
      <div className="googleButton">
        <button className="google" onClick={googleLogin}>
          <FaGoogle color="white" /> {label}
        </button>
      </div>
    </div>
  );
}

export default GoogleLogin;
