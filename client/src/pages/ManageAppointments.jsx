import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/manageAppointments.css";

function ManageAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      setLoading(true);
      setError("");

      // Correct API
      const res = await axios.get(
      "http://localhost:5000/api/appointments/all"
    );

    setAppointments(res.data.appointments || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load appointments. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    if (!date) return "-";

    try {
      return new Date(date).toLocaleDateString("en-IN");
    } catch {
      return date;
    }
  };

  return (
    <div className="manage-page">
      <div className="manage-header">
        <div>
          <h1 className="manage-title">Manage Appointments</h1>

          <p className="manage-subtitle">
            {loading
              ? "Loading..."
              : `${appointments.length} appointment${
                  appointments.length !== 1 ? "s" : ""
                } found`}
          </p>
        </div>

        <button
          className="manage-refresh-btn"
          onClick={loadAppointments}
        >
          Refresh
        </button>
      </div>

      {error && <div className="manage-error">{error}</div>}

      {!loading && !error && appointments.length === 0 && (
        <div className="manage-empty">
          <h2>No Appointments Found</h2>
        </div>
      )}

      {!loading && appointments.length > 0 && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Date</th>
                <th>Time</th>
                <th>Token</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((item) => (
                <tr key={item._id}>
                  <td>{item.patientName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.doctor}</td>
                  <td>{item.department}</td>
                  <td>{formatDate(item.date)}</td>
                  <td>{item.time}</td>
                  <td>{item.tokenNumber}</td>
                  <td>{item.status}</td>
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