import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);

  // Get logged in user
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDashboardOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setMenuOpen(false);
    setDashboardOpen(false);

    alert("Logged out successfully");

    navigate("/login");
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          🏥 Smart Hospital Queue
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/book" onClick={handleLinkClick}>
              Book Appointment
            </Link>
          </li>

          <li>
            <Link to="/queue" onClick={handleLinkClick}>
              Queue Status
            </Link>
          </li>

          {/* Dashboard */}
          <li className="dropdown">
            <button
              className="dropdown-btn"
              onClick={() =>
                setDashboardOpen(!dashboardOpen)
              }
            >
              Dashboard ▼
            </button>

            {dashboardOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/dashboard/patient"
                    onClick={handleLinkClick}
                  >
                    👤 Patient Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    to="/dashboard/doctor"
                    onClick={handleLinkClick}
                  >
                    👨‍⚕️ Doctor Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    to="/dashboard/admin"
                    onClick={handleLinkClick}
                  >
                    🛡️ Admin Dashboard
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Show Profile if logged in */}
          {user && (
            <li>
              <Link
                to="/profile"
                onClick={handleLinkClick}
              >
                👤 Profile
              </Link>
            </li>
          )}

          {/* Login/Register only if NOT logged in */}
          {!user && (
            <>
              <li>
                <Link
                  to="/login"
                  onClick={handleLinkClick}
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  onClick={handleLinkClick}
                >
                  Register
                </Link>
              </li>
            </>
          )}

          {/* Logout if logged in */}
          {user && (
            <li>
              <button
                className="dropdown-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger ${
            menuOpen ? "is-open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${
          menuOpen ? "active" : ""
        }`}
      >
        <ul>
          <li>
            <Link
              to="/"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/book"
              onClick={handleLinkClick}
            >
              Book Appointment
            </Link>
          </li>

          <li>
            <Link
              to="/queue"
              onClick={handleLinkClick}
            >
              Queue Status
            </Link>
          </li>

          <li>
            <button
              className="mobile-dashboard-btn"
              onClick={() =>
                setDashboardOpen(!dashboardOpen)
              }
            >
              Dashboard ▼
            </button>

            {dashboardOpen && (
              <ul className="mobile-dropdown">
                <li>
                  <Link
                    to="/dashboard/patient"
                    onClick={handleLinkClick}
                  >
                    👤 Patient Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    to="/dashboard/doctor"
                    onClick={handleLinkClick}
                  >
                    👨‍⚕️ Doctor Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    to="/dashboard/admin"
                    onClick={handleLinkClick}
                  >
                    🛡️ Admin Dashboard
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {user && (
            <li>
              <Link
                to="/profile"
                onClick={handleLinkClick}
              >
                👤 Profile
              </Link>
            </li>
          )}

          {!user && (
            <>
              <li>
                <Link
                  to="/login"
                  onClick={handleLinkClick}
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  onClick={handleLinkClick}
                >
                  Register
                </Link>
              </li>
            </>
          )}

          {user && (
            <li>
              <button
                className="mobile-dashboard-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>

      {menuOpen && (
        <div
          className="nav-overlay"
          onClick={() => {
            setMenuOpen(false);
            setDashboardOpen(false);
          }}
        />
      )}
    </>
  );
}

export default Navbar;

