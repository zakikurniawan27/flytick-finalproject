import "./App.css";
import "./styles/style.css";
import "./styles/Responsive/responsiveHomePage.css";
import "./styles/Responsive/responsiveSearchSchedule.css"
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
import Users from "./pages/Admin/Users";
import Airport from "./pages/Admin/Airport";
import Schedule from "./pages/Admin/Schedule";
import Flight from "./pages/Admin/Flight";
import City from "./pages/Admin/City";
import Country from "./pages/Admin/Country";
import TransactionSucces from "./pages/Transaction/TransactionSucces";
import CreateUsers from "./pages/Admin/Form/UsersForm"
import Protected from "./components/Protected";
import History from "./pages/History/History";
import DetailHistory from "./pages/History/DetailHistory";
import NotFound from "./pages/404/404.jsx";

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
            <Route path="/dashboard" element={
            <Protected roles={["admin"]}>
              <Dashboard />
            </Protected>} />
            <Route path="/users" element={
            <Protected roles={["admin"]}>
              <Users />
            </Protected>} />
            <Route path="/users/:id" element={
            <Protected roles={["admin"]}>
              <Users />
            </Protected>} />
            <Route path="/airports" element={
            <Protected roles={["admin"]}>
              <Airport />
            </Protected>} />
            <Route path="/schedule" element={
            <Protected roles={["admin"]}>
              <Schedule />
            </Protected>} />
            <Route path="/flight" element={
            <Protected roles={["admin"]}>
              <Flight />
            </Protected>} />
            <Route path="/city" element={
            <Protected roles={["admin"]}>
              <City />
            </Protected>} />
            <Route path="/country" element={
            <Protected roles={["admin"]}>
              <Country />
            </Protected>} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/history/:id" element={<History />} />
            <Route path="/history/detail/:id" element={<DetailHistory />} />
            <Route path="/detail-notification/:id" element={<DetailNotification />} />
            <Route path="/cuser" element={
            <Protected roles={["admin"]}>
              <CreateUsers />
            </Protected>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Provider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
