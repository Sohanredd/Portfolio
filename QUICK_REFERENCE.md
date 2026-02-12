# 🚀 Quick Reference Guide

## 📝 Most Common Tasks

### 1. Update Your Information

**File**: `src/data/resume.ts`

```typescript
export const personalInfo = {
  name: "Your Name",              // ← Change this
  title: "Your Title",            // ← Change this
  email: "your.email@example.com", // ← Change this
  phone: "+1 (555) 123-4567",     // ← Change this
  location: "Your City, State",   // ← Change this
  linkedin: "https://www.linkedin.com/in/yourprofile", // ← Change this
  github: "https://github.com/yourusername",       // ← Change this
  resumeUrl: "/resume.pdf",
};
```

### 2. Add/Edit Work Experience

**File**: `src/data/resume.ts` (line ~80)

```typescript
export const experience = [
  {
    company: "Company Name",
    role: "Your Role",
    period: "Start Date – End Date",
    location: "City, State",
    description: "Brief description of your role",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      // Add more...
    ],
    technologies: ["Tech1", "Tech2", "Tech3"],
  },
  // Add more positions...
];
```

### 3. Add/Edit Projects

**File**: `src/data/resume.ts` (line ~120)

```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    achievements: [
      "Achievement 1",
      "Achievement 2",
    ],
    technologies: ["Tech1", "Tech2"],
    image: "/projects/image.png",
    github: "https://github.com/user/repo",
    demo: "https://demo-url.com",
  },
  // Add more projects...
];
```

### 4. Update Skills

**File**: `src/data/resume.ts` (line ~50)

```typescript
export const skills = {
  "Category Name": [
    "Skill 1",
    "Skill 2",
    "Skill 3",
  ],
  "Another Category": [
    "Skill A",
    "Skill B",
  ],
  // Add more categories...
};
```

### 5. Change Colors

**File**: `tailwind.config.js`

```javascript
colors: {
  primary: {
    500: '#3b82f6',  // Main color
    600: '#2563eb',  // Darker shade
    // Change these hex values
  },
}
```

### 6. Update Contact Form

**File**: `src/components/Contact.tsx` (line 30)

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ↑ Replace YOUR_FORM_ID with your actual Formspree form ID
```

**Get Formspree ID:**
1. Go to [formspree.io](https://formspree.io)
2. Sign up (free)
3. Create new form
4. Copy the form ID
5. Paste in the code above

### 7. Replace Resume PDF

1. Get your resume as a PDF file
2. Rename it to `resume.pdf`
3. Replace the file in `public/resume.pdf`

### 8. Add Project Images

1. Create folder: `public/projects/`
2. Add your images: `public/projects/project1.png`
3. Update image path in `src/data/resume.ts`:
   ```typescript
   image: "/projects/project1.png",
   ```

## 🎨 Styling Quick Tips

### Change Section Background

**File**: Any component file

```typescript
// Current: glass effect
className="glass rounded-xl p-8"

// Solid background
className="bg-slate-900 rounded-xl p-8"

// Different opacity
className="bg-white/10 rounded-xl p-8"
```

### Change Text Colors

```typescript
// White text
className="text-white"

// Gray text
className="text-gray-400"

// Gradient text
className="gradient-text"

// Blue text
className="text-blue-400"
```

### Change Button Styles

```typescript
// Primary button (gradient)
className="bg-gradient-to-r from-blue-600 to-cyan-600"

// Secondary button (glass)
className="glass glass-hover"

// Outline button
className="border border-blue-500 hover:bg-blue-500/10"
```

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new package
npm install package-name

# Update all packages
npm update
```

## 📱 Testing Checklist

Before deploying, test:

- [ ] All navigation links work
- [ ] Contact form submits (if configured)
- [ ] Resume downloads
- [ ] Social links open correctly
- [ ] Mobile menu works
- [ ] Responsive on phone (< 768px)
- [ ] Responsive on tablet (768px - 1024px)
- [ ] Responsive on desktop (> 1024px)
- [ ] All animations work smoothly
- [ ] No console errors

## 🚀 Deploy in 3 Steps

### Vercel (Easiest)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push

# 2. Go to vercel.com
# 3. Import your GitHub repo
# Done! ✨
```

### Netlify

```bash
# 1. Build
npm run build

# 2. Go to app.netlify.com/drop
# 3. Drag and drop the 'dist' folder
# Done! ✨
```

## 🐛 Common Issues & Fixes

### Issue: TypeScript errors

```bash
# Fix: Check the file with errors
# Make sure all imports are correct
# Restart VS Code if needed
```

### Issue: Styles not applying

```bash
# Fix: Make sure Tailwind classes are correct
# Check tailwind.config.js includes all files
# Restart dev server: Ctrl+C then npm run dev
```

### Issue: Component not showing

```bash
# Fix: Check if component is imported in App.tsx
# Check if component is exported correctly
# Check browser console for errors
```

### Issue: Build fails

```bash
# Fix: Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📞 Need More Help?

1. **Check main docs**: [README.md](README.md)
2. **Deployment help**: [DEPLOYMENT.md](DEPLOYMENT.md)
3. **Project overview**: [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)
4. **Google the error**: Copy error message and search
5. **Check component code**: Look at similar examples in other components

## 💡 Pro Tips

1. **Save often**: Vite auto-reloads on save
2. **Use browser DevTools**: F12 to inspect elements
3. **Test mobile view**: Use browser responsive mode (Ctrl+Shift+M)
4. **Keep it simple**: Don't over-customize at first
5. **Update regularly**: Add new projects as you complete them
6. **Get feedback**: Share with friends before deploying
7. **Version control**: Commit changes regularly with Git

## 🎯 Quick Wins

Want to make quick improvements?

1. **Add your photo**: 
   - Add image to `public/photo.jpg`
   - Update Hero component to display it

2. **Add favicon**:
   - Create 32x32 icon
   - Save as `public/favicon.ico`
   - Update `index.html`

3. **Add Google Analytics**:
   - Get tracking ID
   - Add script to `index.html`

4. **Improve SEO**:
   - Update meta description in `index.html`
   - Add Open Graph tags
   - Create `sitemap.xml`

5. **Add more projects**:
   - Just copy a project object in `resume.ts`
   - Update the details
   - Done!

---

**Remember**: Start simple, test often, deploy early! 🚀
