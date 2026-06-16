import React, { useState } from "react";
import axios from "axios";
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/appointments/book",
        formData
      );

      alert(res.data.message || "Appointment Booked Successfully!");

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
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to book appointment"
      );
    }
  };

  return (
    <div className="appointment-page">
      <div className="appointment-container">

        <h1>🏥 Book Appointment</h1>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Patient Name</label>

            <input
              type="text"
              name="patientName"
              placeholder="Enter your name"
              value={formData.patientName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>

            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Select Doctor</label>

            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
            >
              <option value="">Choose Doctor</option>
              <option>Dr. John Smith</option>
              <option>Dr. Sarah Wilson</option>
              <option>Dr. David Kumar</option>
              <option>Dr. Priya Sharma</option>
            </select>
          </div>

          <div className="input-group">
            <label>Department</label>

            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Choose Department</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Orthopedics</option>
              <option>Dermatology</option>
              <option>Pediatrics</option>
            </select>
          </div>

          <div className="input-group">
            <label>Appointment Date</label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Appointment Time</label>

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Symptoms</label>

            <textarea
              name="symptoms"
              rows="4"
              placeholder="Describe your symptoms..."
              value={formData.symptoms}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="appointment-btn"
          >
            Book Appointment
          </button>

        </form>

      </div>
    </div>
  );
}

export default BookAppointment;