import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes";
import { connectDB } from "./config/database";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
