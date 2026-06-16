import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/myappointments.css";

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/appointments"
      );

      // Show only logged-in user's appointments
      const myAppointments = res.data.filter(
        (item) => item.email === user?.email
      );

      setAppointments(myAppointments);
    } catch (error) {
      console.log(error);
      alert("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="appointments-page">
      <div className="appointments-container">
        <h1>📋 My Appointments</h1>

        {loading ? (
          <p>Loading...</p>
        ) : appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          appointments.map((appointment) => (
            <div
              className="appointment-card"
              key={appointment._id}
            >
              <h2>{appointment.patientName}</h2>

              <p>
                <strong>📧 Email:</strong>{" "}
                {appointment.email}
              </p>

              <p>
                <strong>📱 Phone:</strong>{" "}
                {appointment.phone}
              </p>

              <p>
                <strong>👨‍⚕️ Doctor:</strong>{" "}
                {appointment.doctor}
              </p>

              <p>
                <strong>🏥 Department:</strong>{" "}
                {appointment.department}
              </p>

              <p>
                <strong>📅 Date:</strong>{" "}
                {appointment.date}
              </p>

              <p>
                <strong>🕒 Time:</strong>{" "}
                {appointment.time}
              </p>

              <p>
                <strong>🩺 Symptoms:</strong>{" "}
                {appointment.symptoms}
              </p>

              <p>
                <strong>🎫 Token:</strong>{" "}
                {appointment.tokenNumber || "Not Assigned"}
              </p>

              <p>
                <strong>📢 Status:</strong>{" "}
                {appointment.status || "Waiting"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyAppointments;

