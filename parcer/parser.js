const puppeteer = require('puppeteer');
const fs = require('fs'); 

async function getMainPageAirdrops(page) {
  await page.goto('https://airdrops.io/', { waitUntil: 'domcontentloaded' });

  await page.waitForSelector('.scrollContent article');

  const airdrops = await page.evaluate(() => {
    const items = [];
    document.querySelectorAll('.scrollContent article').forEach((el) => {
      const link = el.querySelector('a');
      const title = link?.innerText.trim();
      const url = link?.href;
      if (title && url) items.push({ title, url });
    });
    return items;
  });

  return airdrops;
}

async function getAirdropDetails(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  try {
    await page.waitForSelector('.inside-article', { timeout: 5000 });
  } catch {
    return { description: 'Cannot find description.', steps: [] };
  }

  const details = await page.evaluate(() => {
    const description = document.querySelector('.inside-article')?.innerText.trim();
    const steps = [];
    document.querySelectorAll('.howtoearn li').forEach(li => steps.push(li.innerText.trim()));
    return { description, steps };
  });

  return details;
}

async function main() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  const airdrops = await getMainPageAirdrops(page);
  console.log(`Foun ${airdrops.length} airdrops`);

  const detailed = [];

  for (const drop of airdrops.slice(0, 5)) {
    console.log(`Loading: ${drop.title}`);
    const details = await getAirdropDetails(page, drop.url);
    detailed.push({ ...drop, ...details });
  }

  await browser.close();

  // Збереження в файл
  fs.writeFileSync('airdrops.json', JSON.stringify(detailed, null, 2), 'utf-8');
  console.log('✅ Data was saved to  airdrops.json');
}

main();
