const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* MongoDB Connection */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:");
    console.error(err);
  });

/* Routes */
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);

/* Home Route */
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🏥 Smart Hospital Backend Running Successfully",
  });
});

/* Test Route */
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API Working Successfully",
  });
});

/* Start Server */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});