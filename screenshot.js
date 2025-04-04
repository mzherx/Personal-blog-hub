const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        defaultViewport: null,
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--force-device-scale-factor=4']
    });

    const page = await browser.newPage();

    // Force Desktop View
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

    // Set a higher resolution viewport for better quality
    await page.setViewport({
        width: 1920,  // Increased width for better clarity
        height: 1080, // Slightly increased height
        deviceScaleFactor: 4, // Makes the screenshot ultra-sharp
    });

    // Open the website with no timeout
    await page.goto('http://localhost:3000/blog', {
        waitUntil: 'networkidle2', // Ensures everything loads properly
        timeout: 0
    });

    // Custom wait function (instead of waitForTimeout)
    await new Promise(r => setTimeout(r, 10000));

    // Capture Ultra HD Screenshot
    await page.screenshot({
        path: 'screenshot.png',
        fullPage: true,
        type: 'png'
    });

    await browser.close();
    console.log('Ultra HD Screenshot taken successfully!');
})();
