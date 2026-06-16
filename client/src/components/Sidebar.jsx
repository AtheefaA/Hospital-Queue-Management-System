import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Dashboard</h3>

      <Link to="/dashboard">Home</Link>

      <Link to="/book">Book Appointment</Link>

      <Link to="/appointments">My Appointments</Link>

      <Link to="/queue">Queue Status</Link>

      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default Sidebar;