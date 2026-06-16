import "./QueueCard.css";

function QueueCard({
  currentToken,
  yourToken,
  waitingPatients,
}) {
  return (
    <div className="queue-card">
      <h2>Live Queue</h2>

      <p>Current Token: {currentToken}</p>

      <p>Your Token: {yourToken}</p>

      <p>Waiting Patients: {waitingPatients}</p>
    </div>
  );
}

export default QueueCard;