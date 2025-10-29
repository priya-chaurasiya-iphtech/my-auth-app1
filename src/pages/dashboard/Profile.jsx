// import React, { useState } from "react";
// import { useAuth } from "../../context/AuthContext";

// const Profile = () => {
//   const { user } = useAuth();
//   const [avatar, setAvatar] = useState(user?.avatar || "");

//   return (
//     <div style={{ padding: 20, maxWidth: 900, margin: "20px auto" }}>
//       <h2>Profile</h2>
//       <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
//         <img
//           src={avatar || user?.avatar || "https://picsum.photos/120"}
//           alt="avatar"
//           style={{ width: 120, height: 120, borderRadius: 8, objectFit: "cover" }}
//         />
//         <div>
//           <p><strong>Name:</strong> {user?.firstName} {user?.lastName}</p>
//           <p><strong>Phone:</strong> {user?.phone}</p>
//           <p><strong>Username:</strong> {user?.username}</p>
//           <p style={{ marginTop: 8 }}>
//             To change avatar while demo is running, enter an image URL and refresh:
//           </p>
//           <input placeholder="Image URL (not persisted here)" value={avatar} onChange={(e)=>setAvatar(e.target.value)} style={{ width: 300, padding: 6 }} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
// import React from "react";
// import { useAuth } from "../../context/AuthContext"; // fixed import path
// import { useNavigate } from "react-router-dom";

// export default function Profile() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   if (!user) {
//     return (
//       <div style={{ padding: "30px", textAlign: "center" }}>
//         Please login to see your profile.
//       </div>
//     );
//   }

//   // Get first letter of first name for avatar
//   const initial = user.firstName.charAt(0).toUpperCase();

//   return (
//     <div style={{ padding: "30px", maxWidth: "600px", margin: "auto" }}>
//       <h2 style={{ marginBottom: "20px" }}>Welcome, {user.firstName}!</h2>

//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: "20px",
//           border: "1px solid #ccc",
//           padding: "20px",
//           borderRadius: "10px",
//         }}
//       >
//         {/* Circle with initial */}
//         <div
//           style={{
//             width: "60px",
//             height: "60px",
//             borderRadius: "50%",
//             backgroundColor: "#2575fc",
//             color: "white",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontSize: "1.5rem",
//             fontWeight: "bold",
//           }}
//         >
//           {initial}
//         </div>

//         <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
//           <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Username:</strong> {user.username}</p>
//         </div>
//       </div>

//       <button
//         onClick={handleLogout}
//         style={{
//           marginTop: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#e74c3c",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/slices/authSlice"; // Redux action import karo
import "./Profile.css";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Redux se user data lelo
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout()); // Redux action dispatch karo
    navigate("/login");
  };

  if (!user || !isAuthenticated) {
    return (
      <div className="profile-container">
        <div className="not-logged-in">
          <div className="not-logged-in-icon">🔒</div>
          <h3>Authentication Required</h3>
          <p>Please login to view your profile</p>
          <button
            className="login-redirect-btn"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const initial = user.firstName ? user.firstName.charAt(0).toUpperCase() : 'U';

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
        <p>Manage your account information and preferences</p>
      </div>

      <div className="profile-card">
        <div className="profile-avatar-section">
          <div className="profile-avatar-large">
            {initial}
          </div>
          <div className="profile-info">
            <h2>{user.firstName} {user.lastName}</h2>
            <p className="profile-role">Premium Member</p>
            <div className="profile-stats">
              <div className="stat">
                <span className="stat-number">12</span>
                <span className="stat-label">Orders</span>
              </div>
              <div className="stat">
                <span className="stat-number">5</span>
                <span className="stat-label">Reviews</span>
              </div>
              <div className="stat">
                <span className="stat-number">2</span>
                <span className="stat-label">Years</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-section">
            <h3>Personal Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Full Name</span>
                <span className="detail-value">{user.firstName} {user.lastName}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email Address</span>
                <span className="detail-value">{user.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Username</span>
                <span className="detail-value">@{user.username}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone Number</span>
                <span className="detail-value">{user.phone || "Not provided"}</span>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h3>Account Settings</h3>
            <div className="settings-grid">
              <button
                className="setting-btn"
                onClick={() => navigate("/dashboard/settings")}
              >
                <span className="setting-icon">⚙️</span>
                Settings
              </button>
              <button className="setting-btn">
                <span className="setting-icon">🔒</span>
                Change Password
              </button>
              <button className="setting-btn">
                <span className="setting-icon">🔔</span>
                Notification Settings
              </button>
              <button className="setting-btn">
                <span className="setting-icon">🎨</span>
                Theme Preferences
              </button>
            </div>
          </div>
        </div>

        <div className="profile-actions">
          <button className="secondary-btn">
            Download Data
          </button>
          <button className="secondary-btn">
            Privacy Settings
          </button>
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}