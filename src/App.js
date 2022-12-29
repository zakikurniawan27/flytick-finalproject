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
import DetailNotification from "./pages/Notification/DetailN";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Transaction from "./pages/Transaction/Transaction";
import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Dashboard from "./pages/Admin/Dashboard";
import Users from "./pages/Admin/Users"
import Airport from "./pages/Admin/Airport";
import Schedule from "./pages/Admin/Schedule";
import Flight from "./pages/Admin/Flight"
import City from "./pages/Admin/City"
import Country from "./pages/Admin/Country"
import TransactionSucces from "./pages/Transaction/TransactionSucces";
import History from "./pages/History/History";
import DetailHistory from "./pages/History/DetailHistory"

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
            <Route path="/transaction/:id" element={<Transaction adult={adult} child={child} />} />
            <Route path="/transactionSuccess" element={<TransactionSucces />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/edit-user" element={<EditUser />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/airports" element={<Airport />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/flight" element={<Flight />} />
            <Route path="/city" element={<City />} />
            <Route path="/country" element={<Country />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/history/:id" element={<History />}/>
            <Route path="/history/detail/:id" element={<DetailHistory/>}/>
            <Route path="/detail-notification/:id" element={<DetailNotification />} />
          </Routes>
          <Footer />
        </Provider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
