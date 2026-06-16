import React from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

function PatientDashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <h1 className="dashboard-title">
          👤 Patient Dashboard
        </h1>

        <p className="dashboard-subtitle">
          Welcome to Smart Hospital Queue Management System
        </p>

        <div className="dashboard-grid">

          {/* Book Appointment */}
          <div className="dashboard-card">
            <h3>📅 Book Appointment</h3>

            <p>
              Book a new appointment with your preferred doctor.
            </p>

            <Link to="/book">
              <button className="dashboard-btn">
                Open
              </button>
            </Link>
          </div>

          {/* Queue Status */}
          <div className="dashboard-card">
            <h3>🎫 Queue Status</h3>

            <p>
              Check your live queue position and waiting time.
            </p>

            <Link to="/queue">
              <button className="dashboard-btn">
                Open
              </button>
            </Link>
          </div>

          {/* My Appointments */}
          <div className="dashboard-card">
            <h3>📋 My Appointments</h3>

            <p>
              View all your booked appointments and details.
            </p>

            <Link to="/manage-appointments">
              <button className="dashboard-btn">
                Open
              </button>
            </Link>
          </div>

          {/* Profile */}
          <div className="dashboard-card">
            <h3>👤 Profile</h3>

            <p>
              View and manage your personal information.
            </p>

            <Link to="/profile">
              <button className="dashboard-btn">
                Open
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
