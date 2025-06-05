import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const dbUri = process.env.DB_URI;

    if (!dbUri) {
      console.error("DB_URI is not defined in .env or environment variables.");
      process.exit(1);
    }

    await mongoose.connect(dbUri);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB connection error:", err);
    process.exit(1);
  }
};
