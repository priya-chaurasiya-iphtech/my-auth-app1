

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./Dashboard.css"; // Dashboard styles

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
