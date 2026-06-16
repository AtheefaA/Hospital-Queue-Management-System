import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookAppointment from "./pages/BookAppointment";
import QueueStatus from "./pages/QueueStatus";

// Dashboard Pages
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";

// Future Pages
import Doctors from "./pages/Doctors";
import MyAppointments from "./pages/MyAppointments";
import Profile from "./pages/Profile";

import ManageAppointments from "./pages/ManageAppointments";

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

        {/* Queue */}
        <Route
          path="/queue"
          element={<QueueStatus />}
        />

        {/* Dashboard Routes */}
        <Route
          path="/dashboard/patient"
          element={<PatientDashboard />}
        />

        <Route
          path="/dashboard/doctor"
          element={<DoctorDashboard />}
        />

        <Route
          path="/dashboard/admin"
          element={<AdminDashboard />}
        />

        {/* Future Routes */}

        
        <Route path="/doctors" element={<Doctors />} />

        <Route
          path="/myappointments"
          element={<MyAppointments />} />
        

        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
        path="/manage-appointments"
        element={<ManageAppointments />}
      />
       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;