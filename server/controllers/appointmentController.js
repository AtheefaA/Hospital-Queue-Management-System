const Appointment = require("../models/Appointment");

// Book Appointment
const bookAppointment = async (req, res) => {
  try {
    // Find last appointment
    // Find last appointment
const lastAppointment = await Appointment.findOne().sort({
  tokenNumber: -1,
});

const lastToken = Number(lastAppointment?.tokenNumber) || 0;

const nextToken = lastToken + 1;

const appointment = new Appointment({
  ...req.body,
  tokenNumber: nextToken,
  status: "Waiting",
});

await appointment.save();

res.status(201).json({
  success: true,
  message: "Appointment Booked Successfully",
  tokenNumber: nextToken,
  appointment,
});

await appointment.save();

    res.status(201).json({
      success: true,
      message: "Appointment Booked Successfully",
      tokenNumber: nextToken,
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({
      tokenNumber: 1,
    });

    res.json(appointments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Latest Appointment
const getLatestAppointment = async (req, res) => {
  try {
    const latest = await Appointment.findOne().sort({
      createdAt: -1,
    });

    if (!latest) {
      return res.status(404).json({
        message: "No appointments found",
      });
    }

    res.json(latest);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Export ALL functions
module.exports = {
  bookAppointment,
  getAppointments,
  getLatestAppointment,
};
