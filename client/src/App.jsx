import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";

// Main Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Appointment Pages
import BookAppointment from "./pages/BookAppointment";
import QueueStatus from "./pages/QueueStatus";
import MyAppointments from "./pages/MyAppointments";

// Dashboard Pages
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";

// Other Pages
import Doctors from "./pages/Doctors";
import Profile from "./pages/Profile";
import ManageAppointments from "./pages/ManageAppointments";
import CompletedPatients from "./pages/CompletedPatients";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Appointment */}
        <Route
          path="/book"
          element={<BookAppointment />}
        />

        {/* Queue Status */}
        <Route
          path="/queue"
          element={<QueueStatus />}
        />

        {/* Patient Dashboard */}
        <Route
          path="/dashboard/patient"
          element={<PatientDashboard />}
        />

        {/* Doctor Dashboard */}
        <Route
          path="/dashboard/doctor"
          element={<DoctorDashboard />}
        />

        {/* Admin Dashboard */}
        <Route
          path="/dashboard/admin"
          element={<AdminDashboard />}
        />

        {/* Doctors */}
        <Route
          path="/doctors"
          element={<Doctors />}
        />

        {/* My Appointments */}
        <Route
          path="/myappointments"
          element={<MyAppointments />}
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* Manage Appointments */}
        <Route
          path="/manage-appointments"
          element={<ManageAppointments />}
        />

        {/* Completed Patients */}
        <Route
          path="/completed-patients"
          element={<CompletedPatients />}
        />

        {/* Reports */}
        <Route
          path="/reports"
          element={<Reports />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;