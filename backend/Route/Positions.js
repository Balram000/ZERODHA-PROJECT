const express = require("express");
const router = express.Router();
//const { PositionSchema } = require("./Schema/PositionSchema");
const { positionModel } = require("../Model/PositionModel");



router.get("/addposition", async (req, res) => {
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
      },
      {
        product: "CNC",
        name: "JUBLFOOD",
        qty: 1,
        avg: 3124.75,
        price: 3082.65,
        net: "+10.04%",
        day: "-1.35%",
      },
    ];

    await positionModel.insertMany(position);

    res.send("Positions added successfully");
  } catch (error) {
    console.log("Position error:", error);
    res.status(500).send("Failed to add positions");
  }
});


router.get('/allPosition', async (req, res) => {
    let allPosition = await positionModel.find({})
    res.json(allPosition)
  })

module.exports = router;