const express = require("express");
const router = express.Router();

const { positionModel } = require("../Model/PositionModel");

router.get("/allPosition", async (req, res) => {
  try {
    const positions = await positionModel.find({});

    res.status(200).json(positions);
  } catch (error) {
    console.log("Get positions error:", error);

    res.status(500).json({
      message: "Failed to fetch positions",
    });
  }
});

module.exports = router;