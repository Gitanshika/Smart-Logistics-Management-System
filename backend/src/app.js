const express = require("express");
const cors = require("cors");

const app = express();
const shipmentRoutes = require("./routes/shipment.routes");

// middleware
app.use(express.json());
app.use(cors());
app.use("/api/shipments", shipmentRoutes);

// routes
const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);

module.exports = app;