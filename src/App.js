import "./App.css";
import "./styles/style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import User from "./pages/Account/User";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { useState } from "react";

function App() {
  const tokenLocalStorage = localStorage.getItem("token")
  const [token, setToken] = useState(tokenLocalStorage)
  return (
    <>
      <Provider store={store}>
        <Navbar setToken={setToken} token={token}/>
        <Routes>
          <Route path="/" element={<Home token={token} setToken={setToken} />} />
          <Route path="/signin" element={<SignIn setToken={setToken}/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
