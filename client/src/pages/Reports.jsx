import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/reports.css";

function Reports() {
  const [stats, setStats] = useState({
    totalPatients: 0,
    waitingPatients: 0,
    completedPatients: 0,
  });

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/appointments/stats"
      );

      setStats(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="reports-page">
      <div className="reports-container">
        <h1>📊 Reports & Analytics</h1>
        <p>Hospital Appointment Statistics</p>

        <div className="reports-grid">
          <div className="report-card">
            <h2>{stats.totalPatients}</h2>
            <p>Total Patients</p>
          </div>

          <div className="report-card">
            <h2>{stats.waitingPatients}</h2>
            <p>Waiting Patients</p>
          </div>

          <div className="report-card">
            <h2>{stats.completedPatients}</h2>
            <p>Completed Patients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;