import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css";

function Profile() {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="profile-page">
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-empty-icon">
              <i className="ti ti-user-off"></i>
            </div>
            <h2 className="profile-empty-title">No user logged in</h2>
            <p className="profile-empty-sub">Please sign in to view your profile.</p>
            <button className="profile-btn" onClick={() => navigate("/login")}>
              <i className="ti ti-login"></i> Go to login
            </button>
          </div>
        </div>
      </div>
    );
  }

  const initials = user.fullName
    ? user.fullName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "U";

  const fields = [
    { label: "Full name",    value: user.fullName, icon: "ti-user"        },
    { label: "Email",        value: user.email,    icon: "ti-mail"        },
    { label: "Phone number", value: user.phone,    icon: "ti-phone"       },
    { label: "Age",          value: user.age,      icon: "ti-calendar"    },
    { label: "Gender",       value: user.gender,   icon: "ti-gender-bigender" },
  ];

  return (
    <div className="profile-page">
      <div className="profile-container">

        {/* ── Header ── */}
        <div className="profile-header">
          <div className="profile-avatar">{initials}</div>
          <div className="profile-header-info">
            <h1 className="profile-name">{user.fullName}</h1>
            <span className="profile-badge">
              <i className="ti ti-circle-check-filled"></i> Active patient
            </span>
          </div>
        </div>

        {/* ── Info card ── */}
        <div className="profile-card">
          <p className="profile-section-label">Personal information</p>

          <div className="profile-info">
            {fields.map(({ label, value, icon }) => (
              <div className="profile-row" key={label}>
                <span className="profile-row-label">
                  <i className={`ti ${icon}`} aria-hidden="true"></i>
                  {label}
                </span>
                <strong className="profile-row-value">{value || "—"}</strong>
              </div>
            ))}
          </div>

          {/* ── Actions ── */}
          <div className="profile-actions">
            <button
              className="profile-btn"
              onClick={() => alert("Edit Profile — Coming Soon")}
            >
              <i className="ti ti-edit"></i> Edit profile
            </button>

            {!showConfirm ? (
              <button
                className="logout-btn"
                onClick={() => setShowConfirm(true)}
              >
                <i className="ti ti-logout"></i>
                <span className="logout-divider"></span>
                <span className="logout-label">
                  <span className="logout-main">Logout</span>
                  <span className="logout-sub">End session</span>
                </span>
              </button>
            ) : (
              <div className="logout-confirm">
                <p>Are you sure you want to logout?</p>
                <div className="logout-confirm-actions">
                  <button className="confirm-yes" onClick={handleLogout}>
                    Yes, logout
                  </button>
                  <button className="confirm-no" onClick={() => setShowConfirm(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;