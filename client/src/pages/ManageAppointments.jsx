import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/manageAppointments.css";

function ManageAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get("http://localhost:5000/api/appointments");
      setAppointments(res.data);
    } catch (err) {
      setError("Failed to load appointments. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const date = new Date(dateStr);
    return isNaN(date) ? dateStr : date.toLocaleDateString("en-IN", {
      day: "2-digit", month: "short", year: "numeric",
    });
  };

  const formatTime = (timeStr) => {
    if (!timeStr) return "—";
    const [h, m] = timeStr.split(":");
    if (h === undefined || m === undefined) return timeStr;
    const hour = parseInt(h);
    const ampm = hour >= 12 ? "PM" : "AM";
    return `${hour % 12 || 12}:${m} ${ampm}`;
  };

  return (
    <div className="manage-page">

      {/* ── Header ── */}
      <div className="manage-header">
        <div>
          <h1 className="manage-title">Manage appointments</h1>
          <p className="manage-subtitle">
            {loading ? "Loading..." : `${appointments.length} appointment${appointments.length !== 1 ? "s" : ""} found`}
          </p>
        </div>
        <button className="manage-refresh-btn" onClick={loadAppointments} disabled={loading}>
          <i className={`ti ti-refresh ${loading ? "spin" : ""}`}></i>
          Refresh
        </button>
      </div>

      {/* ── Error ── */}
      {error && (
        <div className="manage-error">
          <i className="ti ti-alert-circle"></i>
          {error}
        </div>
      )}

      {/* ── Loading skeleton ── */}
      {loading && (
        <div className="manage-skeleton">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="skeleton-row">
              <div className="skeleton-cell wide"></div>
              <div className="skeleton-cell"></div>
              <div className="skeleton-cell"></div>
              <div className="skeleton-cell narrow"></div>
              <div className="skeleton-cell narrow"></div>
              <div className="skeleton-cell narrow"></div>
            </div>
          ))}
        </div>
      )}

      {/* ── Empty state ── */}
      {!loading && !error && appointments.length === 0 && (
        <div className="manage-empty">
          <i className="ti ti-calendar-off"></i>
          <p>No appointments found</p>
          <span>New bookings will appear here automatically.</span>
        </div>
      )}

      {/* ── Table ── */}
      {!loading && appointments.length > 0 && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th><i className="ti ti-user" aria-hidden="true"></i> Patient</th>
                <th><i className="ti ti-stethoscope" aria-hidden="true"></i> Doctor</th>
                <th><i className="ti ti-building-hospital" aria-hidden="true"></i> Department</th>
                <th><i className="ti ti-calendar" aria-hidden="true"></i> Date</th>
                <th><i className="ti ti-clock" aria-hidden="true"></i> Time</th>
                <th><i className="ti ti-hash" aria-hidden="true"></i> Token</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="patient-cell">
                      <div className="patient-avatar">
                        {item.patientName?.charAt(0).toUpperCase() || "?"}
                      </div>
                      {item.patientName || "—"}
                    </div>
                  </td>
                  <td>{item.doctor || "—"}</td>
                  <td>
                    <span className="dept-badge">{item.department || "—"}</span>
                  </td>
                  <td>{formatDate(item.date)}</td>
                  <td>{formatTime(item.time)}</td>
                  <td>
                    <span className="token-badge">#{item.tokenNumber ?? "—"}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}

export default ManageAppointments;