import { Router } from "express";
import { getAllAirdrops } from "../controllers/airdrop.controller";

const router = Router();

router.get("/", getAllAirdrops);

export default router;
