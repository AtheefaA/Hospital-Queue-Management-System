const express = require("express");

const router = express.Router();

const {
  bookAppointment,
  getAppointments,
  getLatestAppointment,
} = require("../controllers/appointmentController");

router.post("/book", bookAppointment);

router.get("/", getAppointments);

router.get("/latest", getLatestAppointment);

module.exports = router;
