import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/queue.css";

function QueueStatus() {
  const [queue, setQueue] = useState(null);

  useEffect(() => {
    fetchQueueStatus();
  }, []);

  const fetchQueueStatus = async () => {
    try {
      // Get latest appointment
      const res = await axios.get(
        "http://localhost:5000/api/appointments/latest"
      );

      setQueue(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load queue status");
    }
  };

  if (!queue) {
    return (
      <div className="queue-page">
        <h2>Loading Queue Status...</h2>
      </div>
    );
  }

  return (
    <div className="queue-page">
      <div className="queue-container">
        <h1>🏥 Queue Status</h1>

        <p className="queue-subtitle">
          Check your live appointment queue details
        </p>

        <div className="queue-card">
          <div className="queue-row">
            <span>🎫 Token Number</span>
            <strong>{queue.tokenNumber}</strong>
          </div>

          <div className="queue-row">
            <span>👤 Patient Name</span>
            <strong>{queue.patientName}</strong>
          </div>

          <div className="queue-row">
            <span>👨‍⚕️ Doctor</span>
            <strong>{queue.doctor}</strong>
          </div>

          <div className="queue-row">
            <span>🏥 Department</span>
            <strong>{queue.department}</strong>
          </div>

          <div className="queue-row">
            <span>📍 Queue Position</span>
            <strong>{queue.tokenNumber}</strong>
          </div>

          <div className="queue-row">
            <span>⏱ Estimated Waiting Time</span>
            <strong>{(queue.tokenNumber - 1) * 10} Minutes</strong>
          </div>

          <div className="queue-row">
            <span>📢 Status</span>
            <strong className="status waiting">
              {queue.status}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueueStatus;