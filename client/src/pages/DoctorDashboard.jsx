import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/dashboard.css";

function DoctorDashboard() {
  const [stats, setStats] = useState({
    totalPatients: 0,
    waitingPatients: 0,
    completedPatients: 0,
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/appointments/stats"
      );

      setStats({
        totalPatients: res.data.totalPatients,
        waitingPatients: res.data.waitingPatients,
        completedPatients: res.data.completedPatients,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <h1 className="dashboard-title">
          👨‍⚕️ Doctor Dashboard
        </h1>

        <p className="dashboard-subtitle">
          Manage appointments and patient queue
        </p>

        {/* Statistics */}
        <div className="stats-grid">
          <div className="stat-card">
            <h2>{stats.totalPatients}</h2>
            <p>Total Patients</p>
          </div>

          <div className="stat-card">
            <h2>{stats.waitingPatients}</h2>
            <p>Waiting Patients</p>
          </div>

          <div className="stat-card">
            <h2>{stats.completedPatients}</h2>
            <p>Completed Patients</p>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>📋 Manage Appointments</h3>

            <p>
              View and manage all patient appointments.
            </p>

            <Link to="/manage-appointments">
              <button>Open</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h3>🎫 Queue Management</h3>

            <p>
              Monitor the hospital queue status.
            </p>

            <Link to="/queue">
              <button>Open</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h3>✅ Completed Patients</h3>

            <p>
              View completed patient appointments.
            </p>

            <Link to="/completed-patients">
              <button>Open</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h3>📊 Reports</h3>

            <p>
              View reports and analytics.
            </p>

            <Link to="/reports">
              <button>Open</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;