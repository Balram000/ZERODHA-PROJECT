
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const { appModel } = require("./Model/Appmodel.js");

router.get("/addapps", authMiddleware, async (req, res) => {
    try {
      const apps = [
        { name: "Console", tagline: "Your account, one dashboard", description: "Track holdings, funds, reports and account settings in a single backoffice view.", accent: "#5B6B79", tint: "#EEF1F3", initial: "C", order: 1 },
        { name: "Coin", tagline: "Direct mutual funds", description: "Invest in direct mutual funds at zero commission and build long-term wealth.", accent: "#2E8B57", tint: "#EAF5EF", initial: "Co", order: 2 },
        { name: "Kite", tagline: "Trading, simplified", description: "Fast, clean trading terminal for equity, F&O, currency and commodity markets.", accent: "#387ED1", tint: "#EAF2FB", initial: "K", order: 3 },
        { name: "Varsity", tagline: "Learn the markets", description: "Free structured modules that take you from the basics to advanced trading.", accent: "#D97B29", tint: "#FBF1E7", initial: "V", order: 4 },
        { name: "TradingView", tagline: "Advanced charting", description: "Professional-grade charts and technical analysis tools built into Kite.", accent: "#131722", tint: "#ECEDEF", initial: "T", order: 5 },
      ];
  
      await appModel.insertMany(apps);
      res.send("Apps added successfully");
    } catch (error) {
      console.log("App seed error:", error);
      res.status(500).send("Failed to add apps");
    }
  });
  
  router.get("/allApps", authMiddleware, async (req, res) => {
    try {
      let allApps = await appModel.find({}).sort({ order: 1 });
      res.json(allApps);
    } catch (error) {
      console.log("Fetch apps error:", error);
      res.status(500).json({ message: "Failed to fetch apps" });
    }
  });

  exports = router;