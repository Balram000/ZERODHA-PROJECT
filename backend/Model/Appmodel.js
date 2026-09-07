const mongoose = require("mongoose");
 
const AppSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tagline: { type: String, required: true },
  description: { type: String, required: true },
  accent: { type: String, required: true },
  tint: { type: String, required: true },
  initial: { type: String, required: true },
  url: { type: String },
  order: { type: Number, default: 0 },
});
 
const appModel = mongoose.model("App", AppSchema);
 
module.exports = { appModel };
