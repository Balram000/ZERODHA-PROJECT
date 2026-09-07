const mongoose = require("mongoose");
require("dotenv").config();
const App = require("./models/App");
 
const apps = [
  {
    name: "Console",
    tagline: "Your account, one dashboard",
    description: "Track holdings, funds, reports and account settings in a single backoffice view.",
    accent: "#5B6B79",
    tint: "#EEF1F3",
    initial: "C",
    order: 1,
  },
  {
    name: "Coin",
    tagline: "Direct mutual funds",
    description: "Invest in direct mutual funds at zero commission and build long-term wealth.",
    accent: "#2E8B57",
    tint: "#EAF5EF",
    initial: "Co",
    order: 2,
  },
  {
    name: "Kite",
    tagline: "Trading, simplified",
    description: "Fast, clean trading terminal for equity, F&O, currency and commodity markets.",
    accent: "#387ED1",
    tint: "#EAF2FB",
    initial: "K",
    order: 3,
  },
  {
    name: "Varsity",
    tagline: "Learn the markets",
    description: "Free structured modules that take you from the basics to advanced trading.",
    accent: "#D97B29",
    tint: "#FBF1E7",
    initial: "V",
    order: 4,
  },
  {
    name: "TradingView",
    tagline: "Advanced charting",
    description: "Professional-grade charts and technical analysis tools built into Kite.",
    accent: "#131722",
    tint: "#ECEDEF",
    initial: "T",
    order: 5,
  },
];
 
const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    await App.deleteMany();
    await App.insertMany(apps);
    console.log("Apps seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  }
};
 
seed();