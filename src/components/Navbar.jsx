

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profileMenu, setProfileMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    setProfileMenu(false);
  };

  const closeAllMenus = () => {
    setProfileMenu(false);
    setMobileMenu(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/dashboard/home" onClick={closeAllMenus}>
          📱 MyPhoneHub
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div
        className={`hamburger ${mobileMenu ? "active" : ""}`}
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links - Now on the right side */}
      <div className={`nav-links ${mobileMenu ? "active" : ""}`}>
        <Link to="/dashboard/home" onClick={closeAllMenus}>Home</Link>
        <Link to="/dashboard/about" onClick={closeAllMenus}>About</Link>
        <Link to="/dashboard/blog" onClick={closeAllMenus}>Blog</Link>
        <Link to="/dashboard/contact" onClick={closeAllMenus}>Contact</Link>
      </div>

      {/* Profile Menu */}
      <div className="profile-section">
        {user ? (
          <div className="profile-menu">
            <div
              className="profile-trigger"
              onClick={() => setProfileMenu(!profileMenu)}
            >
              <span className="username">Hi, {user.firstName || user.username}</span>
              <div className="profile-avatar">
                {user.firstName ? user.firstName.charAt(0).toUpperCase() : 'U'}
              </div>
            </div>

            {profileMenu && (
              <div className="profile-dropdown">
                <Link to="/dashboard/profile" onClick={closeAllMenus}>
                  👤 Profile
                </Link>
                <Link to="/dashboard/settings" onClick={closeAllMenus}>
                  ⚙️ Settings
                </Link>
                <div className="dropdown-divider"></div>
                <button onClick={handleLogout} className="logout-btn">
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </div>
        )}
      </div>

      {/* Overlay for mobile menu */}
      {mobileMenu && (
        <div className="mobile-overlay" onClick={closeAllMenus}></div>
      )}
    </nav>
  );
};

export default Navbar;