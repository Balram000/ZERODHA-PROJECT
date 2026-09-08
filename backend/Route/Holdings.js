const express = require("express");
const router = express.Router();

const { holdingModel } = require("../Model/HoldingModel");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, async (req, res) => {
  try {
    const holdings = await holdingModel.find({
      userId: req.user.userId,
    });

    res.json(holdings);
  } catch (error) {
    console.error("Holdings error:", error);

    res.status(500).json({
      message: "Failed to fetch holdings",
    });
  }
});

module.exports = router;