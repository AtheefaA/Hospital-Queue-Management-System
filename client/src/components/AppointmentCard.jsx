import "./AppointmentCard.css";

function AppointmentCard({ appointment }) {
  return (
    <div className="appointment-card">
      <h3>{appointment.doctorName}</h3>

      <p>Date: {appointment.date}</p>

      <p>Time: {appointment.time}</p>

      <p>Token: {appointment.tokenNumber}</p>

      <p>Status: {appointment.status}</p>
    </div>
  );
}

export default AppointmentCard;