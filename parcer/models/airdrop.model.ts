import mongoose from "mongoose";

const AirdropSchema = new mongoose.Schema({
  title: String,
  url: String,
  description: String,
  steps: Array,
});

export const Airdrop =
  mongoose.models.Airdrop || mongoose.model("Airdrop", AirdropSchema);
