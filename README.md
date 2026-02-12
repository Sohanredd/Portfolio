# Sohan Reddy - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing professional experience, projects, and skills as a Senior Data Engineer and AI Specialist.

## 🚀 Features

- **Modern Design**: Glassmorphism UI with gradient backgrounds and smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Interactive Animations**: Powered by Framer Motion for smooth transitions
- **Contact Form**: Integrated with Formspree for easy message handling
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Type Safe**: Built with TypeScript for robust code quality

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Form Handling**: Formspree

## 📦 Installation

1. **Clone the repository** (or you're already in it!)

2. **Install dependencies**:
```bash
npm install
```

3. **Configure Formspree** (Optional - for contact form):
   - Sign up at [Formspree](https://formspree.io/)
   - Create a new form and get your form ID
   - Update the form endpoint in `src/components/Contact.tsx`:
     ```typescript
     const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     ```

4. **Add your resume**:
   - Replace `public/resume.pdf` with your actual resume PDF file

5. **Update personal information**:
   - Edit `src/data/resume.ts` to update your personal details, experience, projects, etc.

## 🚀 Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📤 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments:
- Go to [Vercel](https://vercel.com)
- Import your GitHub repository
- Vercel will auto-detect Vite and configure the build settings
- Deploy!

### Deploy to Netlify

1. **Build the project**:
```bash
npm run build
```

2. **Deploy the `dist` folder** to Netlify:
   - Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or use Netlify CLI:
     ```bash
     npm install -g netlify-cli
     netlify deploy --prod --dir=dist
     ```

### Deploy to GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Add deploy scripts to package.json**:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. **Update vite.config.ts** with your repo name:
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

## 📝 Customization

### Update Personal Information

Edit `src/data/resume.ts` to customize:
- Personal details (name, title, contact info)
- About section
- Skills
- Work experience
- Projects
- Education
- Certifications

### Update Colors

Modify `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Update Animations

Adjust animation settings in `tailwind.config.js` under the `animation` and `keyframes` sections.

## 📱 Sections

1. **Home/Hero**: Introduction with CTA buttons
2. **About**: Professional summary and key highlights
3. **Skills**: Categorized technical skills
4. **Experience**: Work history with achievements
5. **Projects**: Featured projects with descriptions
6. **Education**: Academic background and certifications
7. **Contact**: Contact form and information
8. **Footer**: Social links and availability status

## 🎨 Design Features

- **Glassmorphism**: Frosted glass effect on cards
- **Gradient Backgrounds**: Animated gradient backgrounds
- **Smooth Scrolling**: Smooth navigation between sections
- **Hover Effects**: Interactive hover animations
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Loading States**: Form submission feedback

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For any questions or suggestions, feel free to reach out:
- Email: sohan.reddy@example.com
- LinkedIn: [linkedin.com/in/sohan-reddy-7a8235183](https://www.linkedin.com/in/sohan-reddy-7a8235183/)
- GitHub: [github.com/sohanreddy](https://github.com/sohanreddy)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
