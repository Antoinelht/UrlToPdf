const puppeteer = require('puppeteer');

(async () => {
  // Create browser instance
const browser = await puppeteer.launch({ 
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
  // Create a new page
  const page = await browser.newPage();

  // Website URL to export as pdf
  const website_url = "https://www.makeprops.fr/";

  // Open URL in current page
  await page.goto(website_url, {
    waitUntil: "networkidle2",
  });

  // Save PDF File
  await page.pdf({ path: "./MakeProps.pdf", format: "a4" });

  // Close browser instance
  await browser.close();
})();