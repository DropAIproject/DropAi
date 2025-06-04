import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import { connectDB } from "./config/database";
import { parse } from "./cron/parser";
import { processAirdrops } from "./controllers/airdrop.controller";
import airdropRoutes from "./routes/airdrop.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/airdrops", airdropRoutes);

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
