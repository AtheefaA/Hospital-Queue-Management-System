import React from "react";
import "../styles/doctors.css";

function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. John Smith",
      specialization: "Cardiologist",
      experience: "10 Years",
      timing: "9:00 AM - 1:00 PM",
    },
    {
      id: 2,
      name: "Dr. Sarah Wilson",
      specialization: "Neurologist",
      experience: "8 Years",
      timing: "10:00 AM - 2:00 PM",
    },
    {
      id: 3,
      name: "Dr. David Kumar",
      specialization: "Orthopedic Surgeon",
      experience: "12 Years",
      timing: "2:00 PM - 6:00 PM",
    },
    {
      id: 4,
      name: "Dr. Priya Sharma",
      specialization: "Dermatologist",
      experience: "7 Years",
      timing: "9:30 AM - 12:30 PM",
    },
    {
      id: 5,
      name: "Dr. Anjali Devi",
      specialization: "Pediatrician",
      experience: "9 Years",
      timing: "11:00 AM - 4:00 PM",
    },
    {
      id: 6,
      name: "Dr. Rahul Mehta",
      specialization: "General Physician",
      experience: "15 Years",
      timing: "8:00 AM - 12:00 PM",
    },
  ];

  return (
    <div className="doctors-page">
      <div className="doctors-container">
        <h1 className="doctors-title">
          👨‍⚕️ Our Doctors
        </h1>

        <p className="doctors-subtitle">
          Meet our experienced specialists dedicated to your healthcare.
        </p>

        <div className="doctor-grid">
          {doctors.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              <div className="doctor-avatar">
                👨‍⚕️
              </div>

              <h2>{doctor.name}</h2>

              <p>
                <strong>Specialization:</strong>{" "}
                {doctor.specialization}
              </p>

              <p>
                <strong>Experience:</strong>{" "}
                {doctor.experience}
              </p>

              <p>
                <strong>Available:</strong>{" "}
                {doctor.timing}
              </p>

              <button
                onClick={() =>
                  (window.location.href = "/book")
                }
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
