const express = require("express");
const router = express.Router();
const App = require("../Model/Appmodel.js");
 
// GET /api/apps
router.get("/", async (req, res) => {
  try {
    const apps = await App.find().sort({ order: 1 });
    res.status(200).json({ success: true, data: apps });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
 
// GET /api/apps/:id
router.get("/id", async (req, res) => {
  try {
    const app = await App.findById(req.params.id);
    if (!app) {
      return res.status(404).json({ success: false, message: "App not found" });
    }
    res.status(200).json({ success: true, data: app });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
 
// POST /api/apps
router.post("/", async (req, res) => {
  try {
    const { name, tagline, description, accent, tint, initial, url, order } = req.body;
 
    if (!name || !tagline || !description || !accent || !tint || !initial) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }
 
    const app = await App.create({ name, tagline, description, accent, tint, initial, url, order });
    res.status(201).json({ success: true, data: app });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ success: false, message: "App already exists" });
    }
    res.status(500).json({ success: false, message: error.message });
  }
});
 
// PUT /api/apps/:id
router.put("/id", async (req, res) => {
  try {
    const app = await App.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!app) {
      return res.status(404).json({ success: false, message: "App not found" });
    }
    res.status(200).json({ success: true, data: app });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
 
// DELETE /api/apps/:id
router.delete("/id", async (req, res) => {
  try {
    const app = await App.findByIdAndDelete(req.params.id);
    if (!app) {
      return res.status(404).json({ success: false, message: "App not found" });
    }
    res.status(200).json({ success: true, message: "App deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
 
module.exports = router;