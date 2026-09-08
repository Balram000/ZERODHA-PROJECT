const express = require("express");
const router = express.Router();

const { holdingModel } = require("../Model/HoldingModel");
const authMiddleware = require("../middleware/authMiddleware");


// GET user's holdings
router.get("/", authMiddleware, async (req, res) => {
  try {
    const holdings = await holdingModel.find({
      userId: req.user.userId,
    });

    res.status(200).json({
      success: true,
      holdings,
    });
  } catch (error) {
    console.error("Get holdings error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch holdings",
    });
  }
});


// CREATE holding
router.post("/", authMiddleware, async (req, res) => {
  try {
    const {
      name,
      qty,
      avg,
      price,
      net,
      day,
    } = req.body;

    if (!name || qty == null || avg == null || price == null || !net || !day) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const holding = await holdingModel.create({
      userId: req.user.userId,
      name,
      qty,
      avg,
      price,
      net,
      day,
    });

    res.status(201).json({
      success: true,
      message: "Holding created successfully",
      holding,
    });
  } catch (error) {
    console.error("Create holding error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create holding",
    });
  }
});


module.exports = router;