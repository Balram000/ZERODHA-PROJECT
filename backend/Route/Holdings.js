const express = require("express");
const router = express.Router();


router.get('/allHolding', async (req, res) => {
    let allHolding = await holdingModel.find({})
    res.json(allHolding)
  })
  export default router;