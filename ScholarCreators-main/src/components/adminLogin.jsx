import React, { useState } from "react";
import "./adminL.css";
import { toast } from "react-toastify";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminEmail = 'admin@gmail.com';
  const adminPassword = 'Admin@1234';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === adminEmail && password === adminPassword) {
      console.log("admin logged in Successfully");
      window.location.href = "/admin/profile";
      toast.success("admin logged in Successfully", {
        position: "top-center",
      });

    } else {
      console.log("Invalid email or password.");
      toast.success("Invalid email or password.", {
        position: "top-center",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="adminForm">
      <h3>Admin Login</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default AdminLogin;
