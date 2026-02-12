# Deployment Guide - Sohan Reddy Portfolio

## 🎯 Quick Start

Your portfolio is now ready to deploy! The development server is running at `http://localhost:5173`

## 📋 Pre-Deployment Checklist

Before deploying, make sure to:

### 1. Update Personal Information
Edit `src/data/resume.ts` and update:
- ✅ Email address (currently: sohan.reddy@example.com)
- ✅ Phone number (currently: +1 (555) 123-4567)
- ✅ LinkedIn URL (currently: https://www.linkedin.com/in/sohan-reddy-7a8235183/)
- ✅ GitHub URL (currently: https://github.com/sohanreddy)
- ✅ Location (currently: Tampa, FL)

### 2. Add Your Resume
- Replace `public/resume.pdf` with your actual resume PDF file

### 3. Configure Contact Form (Optional)
To enable the contact form:
1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form and get your form ID
3. Update `src/components/Contact.tsx` line 30:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

### 4. Update Project Links
In `src/data/resume.ts`, update the project GitHub and demo URLs with your actual project links.

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Zero configuration needed
- Automatic HTTPS
- Global CDN
- Automatic deployments from Git
- Free for personal projects

**Steps:**

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Done! Your site will be live in ~2 minutes

3. **Custom Domain** (Optional):
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Option 2: Netlify

**Steps:**

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy via Netlify Drop**:
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder
   - Your site is live!

**Or use Netlify CLI**:
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages

**Steps:**

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json** - Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.ts** - Add base path:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/',
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to your repo → Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

### Option 4: AWS Amplify

**Steps:**

1. **Install Amplify CLI**:
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Amplify**:
   ```bash
   amplify init
   amplify add hosting
   amplify publish
   ```

## 🔧 Build Configuration

The project uses Vite with the following configuration:

**Build Command**: `npm run build`
**Output Directory**: `dist`
**Install Command**: `npm install`
**Development Command**: `npm run dev`

## 🌐 Environment Variables

If you need environment variables (e.g., for API keys):

1. Create `.env` file:
   ```
   VITE_FORMSPREE_ID=your_form_id
   VITE_ANALYTICS_ID=your_analytics_id
   ```

2. Access in code:
   ```typescript
   const formId = import.meta.env.VITE_FORMSPREE_ID;
   ```

3. Add to `.gitignore` (already included)

4. Set in deployment platform:
   - **Vercel**: Settings → Environment Variables
   - **Netlify**: Site settings → Environment variables
   - **GitHub Pages**: Use GitHub Secrets

## 📊 Analytics (Optional)

Add Google Analytics or other analytics:

1. **Google Analytics**:
   - Get tracking ID from [analytics.google.com](https://analytics.google.com)
   - Add to `index.html` in `<head>`:
     ```html
     <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'GA_MEASUREMENT_ID');
     </script>
     ```

## 🔍 SEO Optimization

Already included:
- ✅ Semantic HTML
- ✅ Meta tags in `index.html`
- ✅ Proper heading hierarchy
- ✅ Alt text for images (add when you add real images)

**Additional recommendations**:
1. Add `sitemap.xml` in public folder
2. Add `robots.txt` in public folder
3. Submit to Google Search Console
4. Add Open Graph tags for social sharing

## 🐛 Troubleshooting

### Build Errors

**Issue**: TypeScript errors during build
**Solution**: Run `npm run build` locally first to catch errors

**Issue**: Missing dependencies
**Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install`

### Deployment Issues

**Issue**: 404 on page refresh (SPA routing)
**Solution**: Add redirect rules:

**Vercel** - Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

**Netlify** - Create `public/_redirects`:
```
/*    /index.html   200
```

### Performance

**Issue**: Slow loading
**Solutions**:
- Optimize images (use WebP format)
- Enable compression on hosting platform
- Use lazy loading for images
- Consider code splitting

## 📱 Testing

Before deploying, test on:
- ✅ Desktop browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile devices (iOS Safari, Chrome Mobile)
- ✅ Tablet devices
- ✅ Different screen sizes (use browser dev tools)

## 🔒 Security

- ✅ HTTPS enabled (automatic on Vercel/Netlify)
- ✅ No sensitive data in code
- ✅ Environment variables for API keys
- ✅ Dependencies regularly updated

## 📈 Post-Deployment

After deployment:
1. Test all links and buttons
2. Verify contact form works
3. Check mobile responsiveness
4. Test on different browsers
5. Share with friends for feedback
6. Update resume regularly
7. Add new projects as you complete them

## 🎉 Your Portfolio is Ready!

Your professional portfolio is now live and ready to impress potential employers and clients!

**Next Steps**:
1. Share your portfolio URL on LinkedIn
2. Add it to your GitHub profile
3. Include it in your resume
4. Share on social media
5. Keep it updated with new projects and skills

---

Need help? Check the main [README.md](README.md) or create an issue on GitHub.
