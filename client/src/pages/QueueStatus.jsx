import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/queue.css";

function QueueStatus() {
  const [queue, setQueue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchQueueStatus();
  }, []);

  const fetchQueueStatus = async () => {
    setLoading(true);
    setError("");

    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user || !user.email) {
        setError("Please book an appointment first.");
        setLoading(false);
        return;
      }

      const res = await axios.get(
        `http://localhost:5000/api/appointments/latest?email=${user.email}`
      );

      setQueue(res.data);
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          "Failed to fetch queue status."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="queue-page">
        <div className="queue-container">
          <h2>Loading Queue...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="queue-page">
        <div className="queue-container">
          <h2>{error}</h2>

          <button
            className="queue-btn"
            onClick={fetchQueueStatus}
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="queue-page">
      <div className="queue-container">
        <h1>Hospital Queue Status</h1>

        <div className="queue-card">
          <p>
            <strong>Token Number:</strong> #{queue.tokenNumber}
          </p>

          <p>
            <strong>Patient:</strong> {queue.patientName}
          </p>

          <p>
            <strong>Doctor:</strong> {queue.doctor}
          </p>

          <p>
            <strong>Department:</strong> {queue.department}
          </p>

          <p>
            <strong>Date:</strong> {queue.date}
          </p>

          <p>
            <strong>Time:</strong> {queue.time}
          </p>

          <p>
            <strong>People Ahead:</strong> {queue.peopleAhead}
          </p>

          <p>
            <strong>Estimated Wait:</strong>{" "}
            {queue.estimatedWait > 0
              ? `${queue.estimatedWait} Minutes`
              : "You're Next"}
          </p>

          <p>
            <strong>Status:</strong> {queue.status}
          </p>
        </div>

        <button
          className="queue-btn"
          onClick={fetchQueueStatus}
        >
          Refresh Status
        </button>
      </div>
    </div>
  );
}

export default QueueStatus;