import "./App.css";
import "./styles/style.css";
import "./styles/responsiveHomePage.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import User from "./pages/Account/User";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Transaction from './pages/Transaction/Transaction'
import { useState } from "react";
import DetailSchedule from "./pages/Detail/DetailSchedule";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const tokenLocalStorage = localStorage.getItem("token");
  const [token, setToken] = useState(tokenLocalStorage);
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <Provider store={store}>
          <Navbar setToken={setToken} token={token} />
          <Routes>
            <Route path="/" element={<Home token={token} setToken={setToken} />} />
            <Route path="/signin" element={<SignIn setToken={setToken} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/user" element={<User />} />
            <Route path="/transaction/:id" element={<Transaction token={token}/>}/>
          </Routes>
          <Footer />
        </Provider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
