
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
