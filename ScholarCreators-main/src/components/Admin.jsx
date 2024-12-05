import React from "react";
import { auth } from "./firebase";

function Admin() {
  const adminProfile = {
    name: 'Nilesh Kumar',
    email: 'admin@gmail.com',
    role: 'Administrator',
    phoneNumber: '+911234567890',
  };

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <div>
      
      {adminProfile ? (
        <div className="adpro">
        <h4 style={{textAlign: "center", padding: "2rem"}}>Admin Profile</h4>
        <h3>Welcome, {adminProfile.name}!</h3>
          <div style={{ textAlign: 'left', margin: '20px auto' }}>
            <p><strong>Name:</strong> {adminProfile.name}</p>
            <p><strong>Email:</strong> {adminProfile.email}</p>
            <p><strong>Role:</strong> {adminProfile.role}</p>
            <p><strong>Phone Number:</strong> {adminProfile.phoneNumber}</p>
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
          <button className="btn btn-primary" style={{marginLeft: "2rem"}}>
            <a href="/admin/profile/dashboard">Admin Dashboard</a>
          </button>
        </div>
      ) : (
        <p>Please wait we update your details..</p>
      )}
    </div>
  );
}
export default Admin;
