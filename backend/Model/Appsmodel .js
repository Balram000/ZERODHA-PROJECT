import mongoose from "mongoose";
 
const appSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    tagline: { type: String, required: true },
    description: { type: String, required: true },
    accent: { type: String, required: true },
    tint: { type: String, required: true },
    initial: { type: String, required: true },
    url: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);
 
export const App = mongoose.model("App", appSchema);
 