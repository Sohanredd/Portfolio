const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('🚀 Generating resume PDF...');

  const htmlPath = path.join(__dirname, '../public/resume.html');
  const pdfPath = path.join(__dirname, '../public/resume.pdf');

  // Check if HTML file exists
  if (!fs.existsSync(htmlPath)) {
    console.error('❌ Error: resume.html not found at', htmlPath);
    process.exit(1);
  }

  try {
    // Launch browser
    const browser = await puppeteer.launch({
      headless: 'new'
    });

    const page = await browser.newPage();

    // Load the HTML file
    await page.goto(`file://${htmlPath}`, {
      waitUntil: 'networkidle0'
    });

    // Generate PDF
    await page.pdf({
      path: pdfPath,
      format: 'Letter',
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      },
      printBackground: true,
      preferCSSPageSize: false
    });

    await browser.close();

    console.log('✅ Resume PDF generated successfully!');
    console.log('📄 Location:', pdfPath);
    console.log('📊 File size:', (fs.statSync(pdfPath).size / 1024).toFixed(2), 'KB');
  } catch (error) {
    console.error('❌ Error generating PDF:', error.message);
    process.exit(1);
  }
})();
