import React from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

function DoctorDashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <h1 className="dashboard-title">
          👨‍⚕️ Doctor Dashboard
        </h1>

        <p className="dashboard-subtitle">
          Manage appointments and patient queue
        </p>

        <div className="stats-grid">
          <div className="stat-card">
            <h2>25</h2>
            <p>Today's Patients</p>
          </div>

          <div className="stat-card">
            <h2>10</h2>
            <p>Waiting</p>
          </div>

          <div className="stat-card">
            <h2>15</h2>
            <p>Completed</p>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>📋 View Patients</h3>
            <p>View all today's patient appointments.</p>

            <Link to="/queue">
              <button>Open</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h3>🎫 Queue Management</h3>
            <p>Manage the current hospital queue.</p>

            <Link to="/queue">
              <button>Open</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h3>✅ Completed Patients</h3>
            <p>View completed appointments.</p>

            <Link to="/book">
              <button>Open</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;

