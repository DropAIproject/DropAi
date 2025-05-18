import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../types/user.types";

const userSchema = new Schema<IUser>({
  tokenAdress: { type: String, required: true },
  compleatedDrops: { type: [String], default: [] },
});

export const User = mongoose.model<IUser>("User", userSchema);
