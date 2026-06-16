import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/appointment.css";

function BookAppointment() {
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    phone: "",
    doctor: "",
    department: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/appointments/book",
        formData
      );

      // Save logged-in user email if needed
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: formData.email,
        })
      );

      setToken(res.data.appointment.tokenNumber);
      setSubmitted(true);
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to book appointment"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      patientName: "",
      email: "",
      phone: "",
      doctor: "",
      department: "",
      date: "",
      time: "",
      symptoms: "",
    });

    setSubmitted(false);
    setToken(null);
  };

  if (submitted) {
    return (
      <div className="appointment-page">
        <div className="appointment-container success-container">
          <h1>✅ Appointment Booked Successfully</h1>

          <h2>Your Token Number</h2>

          <h1>#{token}</h1>

          <p>
            Doctor: <b>{formData.doctor}</b>
          </p>

          <p>
            Department: <b>{formData.department}</b>
          </p>

          <p>
            Date: <b>{formData.date}</b>
          </p>

          <p>
            Time: <b>{formData.time}</b>
          </p>

          <button
            className="appointment-btn"
            onClick={handleReset}
          >
            Book Another
          </button>

          <Link
            to="/queue-status"
            className="appointment-btn secondary-btn"
          >
            View Queue Status
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="appointment-page">
      <div className="appointment-container">
        <h1>Book Appointment</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={formData.patientName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          >
            <option value="">Select Doctor</option>
            <option>Dr. John Smith</option>
            <option>Dr. Sarah Wilson</option>
            <option>Dr. David Kumar</option>
            <option>Dr. Priya Sharma</option>
          </select>

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
            <option>Dermatology</option>
            <option>Pediatrics</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <textarea
            name="symptoms"
            placeholder="Symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="appointment-btn"
            disabled={loading}
          >
            {loading ? "Booking..." : "Book Appointment"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;