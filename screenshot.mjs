// node screenshot.mjs <url> <outfile> [width] [height] [--full]
import puppeteer from 'puppeteer';

const [url, out, w = '1440', h = '2400'] = process.argv.slice(2);
const full = process.argv.includes('--full');

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: Number(w), height: Number(h), deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
await new Promise((r) => setTimeout(r, 800));
await page.screenshot({ path: out, fullPage: full });
await browser.close();
console.log('saved', out);
