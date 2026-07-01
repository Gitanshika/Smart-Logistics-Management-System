const Shipment = require("../models/Shipment");

const createShipment = async (req, res) => {
  try {
    const {
  pickupAddress,
  deliveryAddress,
  receiverName,
  receiverPhone,
  packageWeight,
} = req.body;

// Generate Tracking ID
const trackingId = "TRK" + Date.now();

// Create Shipment
const shipment = await Shipment.create({
  trackingId,
  customer: req.user.userId,
  pickupAddress,
  deliveryAddress,
  receiverName,
  receiverPhone,
  packageWeight,
});

return res.status(201).json({
  message: "Shipment booked successfully",
  shipment,
});

  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

const getMyShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find({
      customer: req.user.userId,
    }).populate("driver", "name email");

    return res.status(200).json({
      count: shipments.length,
      shipments,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

const User = require("../models/User");

const assignDriver = async (req, res) => {
  try {
    const { shipmentId } = req.params;
    const { driverId } = req.body;

    const shipment = await Shipment.findById(shipmentId);

    if (!shipment) {
      return res.status(404).json({
        message: "Shipment not found",
      });
    }

    const driver = await User.findOne({
    _id: driverId,
    role: "driver",
});

    if (!driver) {
      return res.status(404).json({
        message: "Driver not found",
      });
    }

    shipment.driver = driverId;
    shipment.status = "Assigned";

    await shipment.save();

    return res.status(200).json({
      message: "Driver assigned successfully",
      shipment,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};


const getAssignedShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find({
      driver: req.user.userId,
    }).populate("customer", "name email");

    return res.status(200).json({
      count: shipments.length,
      shipments,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

const updateShipmentStatus = async (req, res) => {
  try {
    const { shipmentId } = req.params;
    const { status } = req.body;

    const shipment = await Shipment.findById(shipmentId);

    if (!shipment) {
      return res.status(404).json({
        message: "Shipment not found",
      });
    }

    // Driver can update only their own assigned shipment
    if (shipment.driver.toString() !== req.user.userId) {
      return res.status(403).json({
        message: "You are not assigned to this shipment",
      });
    }

    shipment.status = status;

    await shipment.save();

    return res.status(200).json({
      message: "Shipment status updated",
      shipment,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
const trackShipment = async (req, res) => {
  try {
    const { trackingId } = req.params;

    const shipment = await Shipment.findOne({ trackingId })
      .populate("customer", "name email")
      .populate("driver", "name email");

    if (!shipment) {
      return res.status(404).json({
        message: "Shipment not found",
      });
    }

    return res.status(200).json({
      shipment,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

const getAllShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find()
      .populate("customer", "name email")
      .populate("driver", "name email");

    return res.status(200).json({
      count: shipments.length,
      shipments,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  createShipment,
  getMyShipments,
  assignDriver,
  getAssignedShipments,
  updateShipmentStatus,
  trackShipment,
  getAllShipments,
};