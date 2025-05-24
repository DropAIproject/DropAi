import mongoose from "mongoose";

const checkedAirdropSchema = new mongoose.Schema({
  title: String,
  url: String,
  description: String,
  steps: Array,
});

export const CheckedAirdrop =
  mongoose.models.Airdrop ||
  mongoose.model("CheckedAirdrop", checkedAirdropSchema);
