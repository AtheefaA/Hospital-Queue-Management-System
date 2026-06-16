const Appointment = require("../models/Appointment");

// ==========================
// Book Appointment
// ==========================
const bookAppointment = async (req, res) => {
  try {
    const {
      patientName,
      email,
      phone,
      doctor,
      department,
      date,
      time,
      symptoms,
    } = req.body;

    if (
      !patientName ||
      !email ||
      !phone ||
      !doctor ||
      !department ||
      !date ||
      !time ||
      !symptoms
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Generate Token Number
    const lastAppointment = await Appointment.findOne().sort({
      tokenNumber: -1,
    });

    const tokenNumber = lastAppointment
      ? lastAppointment.tokenNumber + 1
      : 1;

    const appointment = await Appointment.create({
      patientName,
      email,
      phone,
      doctor,
      department,
      date,
      time,
      symptoms,
      tokenNumber,
      status: "Waiting",
    });

    res.status(201).json({
      success: true,
      message: "Appointment Booked Successfully",
      appointment,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==========================
// Latest Appointment
// ==========================
const getLatestAppointment = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const appointment = await Appointment.findOne({
      email,
    }).sort({
      createdAt: -1,
    });

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "No appointment found",
      });
    }

    const peopleAhead = await Appointment.countDocuments({
      tokenNumber: {
        $lt: appointment.tokenNumber,
      },
      status: "Waiting",
    });

    res.status(200).json({
      success: true,
      ...appointment.toObject(),
      peopleAhead,
      estimatedWait: peopleAhead * 10,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==========================
// Get All Appointments
// ==========================
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({
      tokenNumber: 1,
    });

    res.status(200).json({
      success: true,
      count: appointments.length,
      appointments,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==========================
// Dashboard Statistics
// ==========================
const getDashboardStats = async (req, res) => {
  try {
    const totalPatients =
      await Appointment.countDocuments();

    const waitingPatients =
      await Appointment.countDocuments({
        status: "Waiting",
      });

    const completedPatients =
      await Appointment.countDocuments({
        status: "Completed",
      });

    const inProgressPatients =
      await Appointment.countDocuments({
        status: "In Progress",
      });

    const cancelledPatients =
      await Appointment.countDocuments({
        status: "Cancelled",
      });

    res.status(200).json({
      success: true,
      totalPatients,
      waitingPatients,
      completedPatients,
      inProgressPatients,
      cancelledPatients,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==========================
// Update Status
// ==========================
const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const appointment =
      await Appointment.findByIdAndUpdate(
        id,
        {
          status,
        },
        {
          new: true,
        }
      );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Status Updated Successfully",
      appointment,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==========================
// Delete Appointment
// ==========================
const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    await Appointment.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Appointment Deleted Successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  bookAppointment,
  getLatestAppointment,
  getAllAppointments,
  getDashboardStats,
  updateAppointmentStatus,
  deleteAppointment,
};