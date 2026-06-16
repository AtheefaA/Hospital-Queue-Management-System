import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/completedPatients.css";

function CompletedPatients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompletedPatients();
  }, []);

  const fetchCompletedPatients = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/appointments/all"
      );

      // If your backend returns { success, appointments }
      const appointments = res.data.appointments || [];

      // Keep only completed appointments
      const completed = appointments.filter(
        (item) => item.status === "Completed"
      );

      setPatients(completed);
    } catch (error) {
      console.error(error);
      alert("Failed to load completed patients");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="completed-page">
      <div className="completed-container">
        <h1>✅ Completed Patients</h1>
        <p className="subtitle">
          View completed appointments
        </p>

        {loading ? (
          <h3>Loading...</h3>
        ) : patients.length === 0 ? (
          <div className="empty-card">
            <h3>No completed patients found.</h3>
          </div>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Department</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {patients.map((patient) => (
                  <tr key={patient._id}>
                    <td>#{patient.tokenNumber}</td>
                    <td>{patient.patientName}</td>
                    <td>{patient.doctor}</td>
                    <td>{patient.department}</td>
                    <td>{patient.date}</td>
                    <td>{patient.time}</td>
                    <td>
                      <span className="status completed">
                        {patient.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompletedPatients;