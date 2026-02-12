# Resume Setup Instructions

Your professional resume has been created and is ready to use! Follow these steps to generate the PDF and integrate it with your portfolio.

## What's Been Created

A comprehensive HTML resume (`public/resume.html`) that includes:
- ✅ Professional header with contact information
- ✅ LinkedIn and GitHub profile links
- ✅ Complete professional summary
- ✅ Detailed work experience from D2I Healthcare and Johnson & Johnson
- ✅ Comprehensive technical skills organized by category
- ✅ Education (MS in Data Science with 4.0 GPA)
- ✅ Professional certification (Databricks Certified Data Engineer)
- ✅ Academic project details
- ✅ Clean, professional formatting optimized for both screen and print

## How to Convert HTML to PDF

### Option 1: Using Your Browser (Recommended - FREE)

1. **Open the resume HTML file**:
   ```bash
   open public/resume.html
   ```
   Or navigate to `http://localhost:5173/resume.html` when your dev server is running

2. **Print to PDF**:
   - **Chrome/Edge**: Press `Cmd + P` (Mac) or `Ctrl + P` (Windows)
   - In the print dialog:
     - Destination: Select "Save as PDF"
     - Layout: Portrait
     - Paper size: Letter
     - Margins: Default or Custom (0.5 inches)
     - Options: ✓ Background graphics
   - Click "Save" and save as `public/resume.pdf`

3. **Firefox**:
   - Press `Cmd + P` or `Ctrl + P`
   - Choose "Save to PDF" as printer
   - Save as `public/resume.pdf`

### Option 2: Using Online Tools (FREE)

1. Visit any of these free converters:
   - [HTML to PDF Converter](https://www.web2pdfconvert.com/)
   - [CloudConvert](https://cloudconvert.com/html-to-pdf)
   - [Sejda HTML to PDF](https://www.sejda.com/html-to-pdf)

2. Upload `public/resume.html`
3. Download the PDF
4. Save it as `public/resume.pdf`

### Option 3: Using Node.js Script (Advanced)

If you want to automate this:

1. Install puppeteer:
   ```bash
   npm install --save-dev puppeteer
   ```

2. Create a script `scripts/generate-resume-pdf.js`:
   ```javascript
   const puppeteer = require('puppeteer');
   const path = require('path');

   (async () => {
     const browser = await puppeteer.launch();
     const page = await browser.newPage();

     await page.goto(`file://${path.join(__dirname, '../public/resume.html')}`, {
       waitUntil: 'networkidle0'
     });

     await page.pdf({
       path: 'public/resume.pdf',
       format: 'Letter',
       margin: {
         top: '0.5in',
         right: '0.5in',
         bottom: '0.5in',
         left: '0.5in'
       },
       printBackground: true
     });

     await browser.close();
     console.log('✅ Resume PDF generated successfully!');
   })();
   ```

3. Run the script:
   ```bash
   node scripts/generate-resume-pdf.js
   ```

## Verify Your Resume

After generating the PDF:

1. **Check the PDF**:
   - Open `public/resume.pdf`
   - Verify all information is correct
   - Ensure formatting looks professional
   - Check that links are preserved (if clickable PDFs are important)

2. **Test in Your Portfolio**:
   ```bash
   npm run dev
   ```
   - Click the "Download Resume" button on your portfolio
   - Verify it downloads/opens the PDF correctly

## Updating Your Resume

When you need to update your resume:

1. **Update the data source**: Edit `src/data/resume.ts`
2. **Regenerate HTML**: Re-run this process or manually edit `public/resume.html`
3. **Convert to PDF**: Follow the steps above again

## Quick Tips

- **Keep Both Files**: Keep both `resume.html` and `resume.pdf` in the `public` folder
  - HTML version: Easy to update and maintain
  - PDF version: What recruiters download

- **ATS-Friendly**: This resume is designed to be ATS (Applicant Tracking System) friendly with:
  - Clean structure
  - Standard section headings
  - No complex graphics or tables
  - Proper heading hierarchy

- **Customization**: You can customize the styling in the `<style>` section of `resume.html`

## Next Steps

1. Generate your PDF using one of the methods above
2. Test the download functionality in your portfolio
3. Consider keeping the HTML version for easy updates
4. Commit both files to your repository

---

**Need help?** The HTML file is fully styled and ready to print. Just open it in a browser and use Print to PDF!
