import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import hospitalImage from "../assets/hospital.png";
import logoImage from "../assets/logo.png";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <span className="hero-badge">
            🏥 Smart Healthcare Solution
          </span>

          <h1>
            Smart Hospital
            <br />
            Queue Management System
          </h1>

          <p>
            Reduce waiting time with online appointment booking,
            live queue tracking, digital token management,
            and efficient hospital services.
          </p>

          <div className="hero-buttons">
            <Link to="/book">
              <button className="primary-btn">
                Book Appointment
              </button>
            </Link>

            <Link to="/queue">
              <button className="secondary-btn">
                View Queue
              </button>
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img
            src={hospitalImage}
            alt="Hospital"
            className="hero-image"
          />
        </div>
      </section>

<section className="features">
  <div className="feature-container">
    
    <h2 className="section-title">Our Features</h2>

    <div className="feature-content-wrapper">
      <div className="feature-grid">

        {/* 1 */}
        <div className="feature-card">
          <div className="feature-icon">📅</div>
          <h3>Online Appointment</h3>
          <p>
            Book appointments anytime and anywhere without
            waiting in long queues.
          </p>
        </div>

        {/* 2 */}
        <div className="feature-card">
          <div className="feature-icon">🎫</div>
          <h3>Digital Token</h3>
          <p>
            Receive your token instantly and monitor it
            easily from your device.
          </p>
        </div>

        {/* 3 */}
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Live Queue Tracking</h3>
          <p>
            Track your queue position and estimated
            waiting time in real time.
          </p>
        </div>

        {/* 4 */}
        <div className="feature-card">
          <div className="feature-icon">👨‍⚕️</div>
          <h3>Doctor Management</h3>
          <p>
            Doctors can efficiently manage appointments
            and patient records.
          </p>
        </div>

        {/* 5 */}
        <div className="feature-card">
          <div className="feature-icon">💊</div>
          <h3>Medicine Reminder</h3>
          <p>
            Get timely reminders for medicines and
            follow-up appointments.
          </p>
        </div>

        {/* 6 */}
        <div className="feature-card">
          <div className="feature-icon">🩺</div>
          <h3>Health Records</h3>
          <p>
            Securely store and access your medical
            history anytime.
          </p>
        </div>

        {/* 7 */}
        <div className="feature-card">
          <div className="feature-icon">🔔</div>
          <h3>Instant Notifications</h3>
          <p>
            Receive appointment confirmations and
            queue status alerts instantly.
          </p>
        </div>

        {/* 8 */}
        <div className="feature-card">
          <div className="feature-icon">📱</div>
          <h3>Mobile Friendly</h3>
          <p>
            Access hospital services easily from your
            phone, tablet, or computer.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* About */}
      <section className="about">
        <h2>About Our System</h2>

        <p>
          The Smart Hospital Queue Management System helps reduce
          hospital waiting times and improve patient experience.
          Patients can book appointments online, doctors can
          manage schedules, and administrators can monitor the
          complete workflow from a centralized dashboard.
        </p>
      </section>

      {/* Statistics */}
      <section className="statistics">
        <div className="stat-card">
          <h2>1000+</h2>
          <p>Patients Served</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Expert Doctors</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Online Service</p>
        </div>

        <div className="stat-card">
          <h2>99%</h2>
          <p>Customer Satisfaction</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <img
            src={logoImage}
            alt="Hospital Logo"
            className="footer-logo"
          />

          <h2>Smart Hospital Queue Management</h2>

          <p>Faster • Smarter • Better Healthcare</p>

          <p>© 2026 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;