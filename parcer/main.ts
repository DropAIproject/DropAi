import express from "express";
import userRoutes from "./routes/user.routes";
import { connectDB } from "./config/database";
import { parse } from "./cron/parser";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

parse();

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
