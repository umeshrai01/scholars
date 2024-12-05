import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/profile";
import { useState } from "react";
import { auth } from "./components/firebase";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Scholar from "./components/Scholar";
import Loan from "./components/Loan";
import Admin from "./components/Admin";
import AdminLogin from "./components/adminLogin";
import Type from "./components/Type";
import Dashboard from "./components/Dashboard";
import List from "./components/List";
import EditList from "./components/EditList";
import LoanRequest from "./components/LoanRequest";
import Application from "./components/Application";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  const [admin, setAdmin] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((admin) => {
      setAdmin(admin);
    });
  });
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Type />} />
        <Route
          path="/user"
          element={user ? <Navigate to="/profile" /> : <Login />}
        />
        <Route path="/scholarships" element={<Scholar />} />
        <Route path="/user/Education" element={<Loan />} />
        <Route path="/login/user" element={<Login />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/register/user" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/profile/dashboard/list" element={<List />} />
        <Route path="/admin/profile/dashboard/list/edit" element={<EditList />} />
        <Route
          path="/dashboard"
          element={admin ? <Navigate to="/admin/Profile" /> : <AdminLogin />}
        />
        <Route path="/admin/profile/dashboard" element={<Dashboard />} />
        <Route path="/admin/profile/dashboard/loanRequest" element={<LoanRequest />} />
        <Route path="/admin/testList" element={<Application />} />
        <Route path="/admin/profile" element={<Admin />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;