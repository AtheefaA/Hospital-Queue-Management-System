import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/myappointments.css";

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user?.email) {
      fetchAppointments();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/appointments/all"
      );

      const myAppointments = res.data.filter(
        (appointment) => appointment.email === user.email
      );

      setAppointments(myAppointments);
    } catch (error) {
      console.error(error);
      alert("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="appointments-page">
        <div className="appointments-container">
          <h1>📋 My Appointments</h1>
          <p className="no-data">
            Please login to view your appointments.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="appointments-page">
      <div className="appointments-container">
        <h1>📋 My Appointments</h1>

        {loading ? (
          <div className="loading">
            <h3>Loading appointments...</h3>
          </div>
        ) : appointments.length === 0 ? (
          <div className="no-data">
            <h3>No appointments found.</h3>
          </div>
        ) : (
          appointments.map((appointment) => (
            <div
              className="appointment-card"
              key={appointment._id}
            >
              <div className="card-header">
                <h2>{appointment.patientName}</h2>

                <span
                  className={`status ${appointment.status
                    ?.toLowerCase()
                    .replace(/\s+/g, "")}`}
                >
                  {appointment.status || "Waiting"}
                </span>
              </div>

              <div className="card-content">
                <p>
                  <strong>🎫 Token :</strong>{" "}
                  {appointment.tokenNumber}
                </p>

                <p>
                  <strong>📧 Email :</strong>{" "}
                  {appointment.email}
                </p>

                <p>
                  <strong>📱 Phone :</strong>{" "}
                  {appointment.phone}
                </p>

                <p>
                  <strong>👨‍⚕️ Doctor :</strong>{" "}
                  {appointment.doctor}
                </p>

                <p>
                  <strong>🏥 Department :</strong>{" "}
                  {appointment.department}
                </p>

                <p>
                  <strong>📅 Date :</strong>{" "}
                  {appointment.date}
                </p>

                <p>
                  <strong>🕒 Time :</strong>{" "}
                  {appointment.time}
                </p>

                <p>
                  <strong>🩺 Symptoms :</strong>{" "}
                  {appointment.symptoms}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyAppointments;