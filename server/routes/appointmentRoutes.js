const express = require("express");
const router = express.Router();

const {
  bookAppointment,
  getLatestAppointment,
  getAllAppointments,
  getDashboardStats,
  updateAppointmentStatus,
  deleteAppointment,
} = require("../controllers/appointmentController");

/* ===========================================
   Book Appointment
   POST: /api/appointments/book
=========================================== */
router.post("/book", bookAppointment);

/* ===========================================
   Get Latest Appointment by Email
   GET: /api/appointments/latest?email=user@gmail.com
=========================================== */
router.get("/latest", getLatestAppointment);

/* ===========================================
   Get All Appointments
   GET: /api/appointments/all
=========================================== */
router.get("/all", getAllAppointments);

/* ===========================================
   Dashboard Statistics
   GET: /api/appointments/stats
=========================================== */
router.get("/stats", getDashboardStats);

/* ===========================================
   Update Appointment Status
   PUT: /api/appointments/status/:id

   Body Example:
   {
     "status": "Completed"
   }

   Available Status:
   - Waiting
   - In Progress
   - Completed
   - Cancelled
=========================================== */
router.put("/status/:id", updateAppointmentStatus);

/* ===========================================
   Delete Appointment
   DELETE: /api/appointments/:id
=========================================== */
router.delete("/:id", deleteAppointment);

module.exports = router;

