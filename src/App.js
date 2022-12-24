import "./App.css";
import "./styles/style.css";
import "./styles/responsiveHomePage.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import User from "./pages/Account/User";
import EditUser from "./pages/Account/EditUser";
import Notification from "./pages/Notification/Notification";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Transaction from "./pages/Transaction/Transaction";
import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const [adult, setAdult] = useState("");
  const [child, setChild] = useState("");
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home adult={adult} child={child} setAdult={setAdult} setChild={setChild} />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/transaction/:id/:id" element={<Transaction adult={adult} child={child} />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="/notification" element={<Notification />} />
          </Routes>
          <Footer />
        </Provider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
