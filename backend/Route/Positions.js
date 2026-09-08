
const express = require("express");
const router = express.Router();

const { positionModel } = require("../Model/PositionModel");
const authMiddleware = require("../middleware/authMiddleware");

// ADD POSITIONS
router.get("/addposition", authMiddleware, async (req, res) => {
  try {
    const position = [
      {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "+0.58%",
        day: "-1.24%",
        userId: req.user.userId,
      },
      {
        product: "CNC",
        name: "JUBLFOOD",
        qty: 1,
        avg: 3124.75,
        price: 3082.65,
        net: "+10.04%",
        day: "-1.35%",
        userId: req.user.userId,
      },
    ];

    await positionModel.insertMany(position);

    res.send("Positions added successfully");
  } catch (error) {
    console.log("Position error:", error);

    res.status(500).send("Failed to add positions");
  }
});

// ALL POSITIONS — without login
router.get("/allPosition", async (req, res) => {
  try {
    const positions = await positionModel.find({});

    res.status(200).json(positions);
  } catch (error) {
    console.log("Get all positions error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch all positions",
    });
  }
});

// USER POSITIONS — login required
router.get("/userpositions", authMiddleware, async (req, res) => {
  try {
    const positions = await positionModel.find({
      userId: req.user.userId,
    });

    res.status(200).json({
      success: true,
      positions,
    });
  } catch (error) {
    console.log("Get user positions error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch positions",
    });
  }
});

module.exports = router;

