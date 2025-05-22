const puppeteer = require("puppeteer");
import { Airdrop } from "../models/airdrop.model";
import { Page } from "puppeteer";

interface Airdrop {
  title: string;
  url: string;
}

interface AirdropDetails {
  description: string;
  steps: string[];
}

async function getMainPageAirdrops(page: Page) {
  await page.goto("https://airdrops.io/", { waitUntil: "domcontentloaded" });

  await page.waitForSelector(".scrollContent article");

  const airdrops = await page.evaluate(() => {
    const items: Airdrop[] = [];
    document.querySelectorAll(".scrollContent article").forEach((el) => {
      const link = el.querySelector("a");
      const title = link?.innerText.trim();
      const url = link?.href;
      if (title && url) items.push({ title, url });
    });
    return items;
  });

  return airdrops;
}

async function getAirdropDetails(
  page: Page,
  url: string
): Promise<AirdropDetails> {
  await page.goto(url, { waitUntil: "domcontentloaded" });

  try {
    await page.waitForSelector(".inside-article", { timeout: 5000 });
  } catch {
    return { description: "Cannot find description.", steps: [] };
  }

  const details = await page.evaluate(() => {
    const description =
      (
        document.querySelector(".inside-article") as HTMLElement
      )?.innerText.trim() || "No description.";

    const steps: string[] = [];
    document.querySelectorAll(".howtoearn li").forEach((li) => {
      steps.push(li.textContent?.trim() || "");
    });

    return { description, steps };
  });

  return details;
}

export const parse = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  const airdrops = await getMainPageAirdrops(page);
  console.log(`Found ${airdrops.length} airdrops`);

  for (const drop of airdrops) {
    console.log(`Loading: ${drop.title}`);
    const details = await getAirdropDetails(page, drop.url);
    const fullData = { ...drop, ...details };

    await Airdrop.findOneAndUpdate({ url: drop.url }, fullData, {
      upsert: true,
      new: true,
    });
  }

  await browser.close();
  console.log("✅ Data saved to MongoDB");
};
