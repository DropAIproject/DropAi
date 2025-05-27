import { CheckedAirdrop } from "../models/checked.airdrop.model";
import { Airdrop } from "../models/airdrop.model";
import { queryOllama } from "../cron/ollama-request";
import { Request, Response } from "express";

export async function processAirdrops() {
  const airdrops = await Airdrop.find();

  for (const airdrop of airdrops) {
    const prompt = `Good airdrop? ${airdrop.description}`;

    const isLegit = await queryOllama(
      "Evaluate the airdrop information and give a true rating if it is normal and false if it is not." +
        prompt
    );

    console.log("isLegit", isLegit);

    if (isLegit === true) {
      await CheckedAirdrop.create({
        title: airdrop.title,
        url: airdrop.url,
        description: airdrop.description,
        steps: airdrop.steps,
      });

      console.log(`✅ Added to checked airdrops: ${airdrop.name}`);
    } else {
      console.log(`❌ Skiped: ${airdrop.name}`);
    }
  }
}

export async function getAllAirdrops(req: Request, res: Response) {
  try {
    const airdrops = await CheckedAirdrop.find();
    res.status(200).json(airdrops);
  } catch (error) {
    console.error("Error fetching airdrops:", error);
    res.status(500).json({ message: "Server error" });
  }
}
