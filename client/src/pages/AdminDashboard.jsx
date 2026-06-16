import React from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

function AdminDashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <h1 className="dashboard-title">
          🛡️ Admin Dashboard
        </h1>

        <p className="dashboard-subtitle">
          Smart Hospital Administration Panel
        </p>

        <div className="stats-grid">
          <div className="stat-card">
            <h2>250</h2>
            <p>Total Patients</p>
          </div>

          <div className="stat-card">
            <h2>20</h2>
            <p>Total Doctors</p>
          </div>

          <div className="stat-card">
            <h2>80</h2>
            <p>Appointments Today</p>
          </div>

          <div className="stat-card">
            <h2>6</h2>
            <p>Departments</p>
          </div>
        </div>

        <div className="dashboard-grid">

          {/* Manage Users */}
          <div className="dashboard-card">
            <h3>👥 Manage Users</h3>
            <p>Add, edit and remove users.</p>

            <Link to="/register">
              <button>Open</button>
            </Link>
          </div>

          {/* Manage Doctors */}
          <div className="dashboard-card">
            <h3>👨‍⚕️ Manage Doctors</h3>
            <p>View and manage doctor information.</p>

            <Link to="/doctors">
              <button>Open</button>
            </Link>
          </div>

          {/* Manage Appointments */}
          <div className="dashboard-card">
            <h3>📅 Manage Appointments</h3>
            <p>Monitor and manage appointments.</p>

            <Link to="/manage-appointments">
            <button>Open</button>
            </Link>
          </div>

          {/* Reports */}
          <div className="dashboard-card">
            <h3>📊 Reports</h3>
            <p>View reports and analytics.</p>

            <Link to="/">
              <button>Open</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

