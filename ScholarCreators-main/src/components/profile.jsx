import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { Link } from "react-router-dom";
import "@fontsource/poppins/400-italic.css";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

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
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div>
            {userDetails ? (
              <>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img src={userDetails.photo} width={"40%"} style={{borderRadius: "50%"}} alt="" />
                </div>
                <h3>Welcome {userDetails.firstName}</h3>
                <div>
                  <p><strong>Name: </strong>{userDetails.firstName}</p>
                  <p><strong>Role: </strong>User</p>
                  <p><strong>Email:</strong> {userDetails.email}</p>
                  <p><strong>Mobile No:</strong> {userDetails.lastName}</p>
                </div>
                <button className="btn btn-primary" onClick={handleLogout}>
                  Logout
                </button>
                <a href="/" ><button style={{marginLeft: "2rem", border: "none", padding: "0.5rem", color: "white", background: "#f5ab22", borderRadius: "0.5rem"}} component={Link}>Home</button></a>
              </>
            ) : (
              <p>User not logged in, Login to see profile..</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
