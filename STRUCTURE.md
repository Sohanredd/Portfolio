# 📂 Project Structure Overview

## Visual File Tree

```
Portfolio/
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies & scripts
│   ├── tsconfig.json             # TypeScript config
│   ├── tsconfig.node.json        # TypeScript Node config
│   ├── vite.config.ts            # Vite build config
│   ├── tailwind.config.js        # Tailwind CSS config
│   ├── postcss.config.js         # PostCSS config
│   └── .gitignore                # Git ignore rules
│
├── 📚 Documentation
│   ├── README.md                 # Main documentation
│   ├── DEPLOYMENT.md             # Deployment guide
│   ├── PROJECT_SUMMARY.md        # Project overview
│   ├── QUICK_REFERENCE.md        # Quick tips & commands
│   └── STRUCTURE.md              # This file
│
├── 🌐 Public Assets
│   └── public/
│       └── resume.pdf            # Resume PDF (replace this!)
│
├── 💻 Source Code
│   └── src/
│       │
│       ├── 🎨 Components (UI Building Blocks)
│       │   ├── Navbar.tsx        # Top navigation bar
│       │   ├── Hero.tsx          # Landing/home section
│       │   ├── About.tsx         # About me section
│       │   ├── Skills.tsx        # Skills showcase
│       │   ├── Experience.tsx    # Work history
│       │   ├── Projects.tsx      # Project portfolio
│       │   ├── Education.tsx     # Education & certs
│       │   ├── Contact.tsx       # Contact form
│       │   └── Footer.tsx        # Page footer
│       │
│       ├── 📊 Data
│       │   └── resume.ts         # All content data ⭐ EDIT THIS!
│       │
│       ├── 🎯 Core Files
│       │   ├── App.tsx           # Main app component
│       │   ├── main.tsx          # React entry point
│       │   └── index.css         # Global styles
│       │
│       └── 📱 Entry Point
│           └── index.html        # HTML template
│
└── 🚀 Build Output (generated)
    └── dist/                     # Production build (after npm run build)
```

## Component Hierarchy

```
App.tsx
│
├── Navbar.tsx (Fixed at top)
│
└── Main Content
    │
    ├── Hero.tsx
    │   ├── Name & Title
    │   ├── CTA Buttons
    │   └── Animated Background
    │
    ├── About.tsx
    │   ├── Summary
    │   └── Highlight Cards (4)
    │
    ├── Skills.tsx
    │   └── Skill Categories (6)
    │       ├── AI & Machine Learning
    │       ├── Data Engineering
    │       ├── Business Intelligence
    │       ├── Cloud & DevOps
    │       ├── Programming
    │       └── Compliance
    │
    ├── Experience.tsx
    │   └── Job Cards (2)
    │       ├── Intuceo
    │       └── Johnson & Johnson
    │
    ├── Projects.tsx
    │   └── Project Cards (2)
    │       ├── AI-Powered PDLC Platform
    │       └── GPU-Optimized RAG Chat
    │
    ├── Education.tsx
    │   ├── Degree Info
    │   └── Certifications (4)
    │
    ├── Contact.tsx
    │   ├── Contact Form
    │   └── Contact Info
    │
    └── Footer.tsx
        ├── Quick Links
        ├── Social Links
        └── Copyright
```

## Data Flow

```
resume.ts (Data Source)
    ↓
Components (UI)
    ↓
App.tsx (Assembly)
    ↓
main.tsx (Render)
    ↓
index.html (Display)
```

## File Sizes (Approximate)

| File | Lines | Purpose |
|------|-------|---------|
| `resume.ts` | 200 | All content data |
| `Hero.tsx` | 180 | Landing section |
| `Contact.tsx` | 270 | Contact form |
| `Experience.tsx` | 120 | Work history |
| `Projects.tsx` | 120 | Project showcase |
| `Education.tsx` | 160 | Education info |
| `About.tsx` | 90 | About section |
| `Skills.tsx` | 65 | Skills display |
| `Navbar.tsx` | 110 | Navigation |
| `Footer.tsx` | 100 | Footer |
| `App.tsx` | 30 | Main app |

## Key Files to Edit

### 🔴 Must Edit (Before Deployment)

1. **`src/data/resume.ts`** ⭐ MOST IMPORTANT
   - Update ALL personal information
   - Add your real experience
   - Add your real projects
   - Update skills

2. **`public/resume.pdf`**
   - Replace with your actual resume

3. **`src/components/Contact.tsx`** (line 30)
   - Add your Formspree form ID

### 🟡 Optional Edits

1. **`tailwind.config.js`**
   - Change color scheme
   - Adjust animations

2. **`index.html`**
   - Update meta tags
   - Add analytics

3. **Component files**
   - Customize layouts
   - Add/remove sections

### 🟢 Don't Need to Edit

- `package.json` (already configured)
- `tsconfig.json` (already configured)
- `vite.config.ts` (already configured)
- `.gitignore` (already configured)

## Build Process

```
Source Files (src/)
    ↓
TypeScript Compilation
    ↓
Tailwind CSS Processing
    ↓
Vite Bundling
    ↓
Optimization & Minification
    ↓
Output (dist/)
    ↓
Ready to Deploy! 🚀
```

## Development Workflow

```
1. Edit Files
   ↓
2. Save (Ctrl+S)
   ↓
3. Auto-reload in Browser
   ↓
4. Check Changes
   ↓
5. Repeat
```

## Deployment Workflow

```
1. Update Content (resume.ts)
   ↓
2. Test Locally (npm run dev)
   ↓
3. Build (npm run build)
   ↓
4. Deploy to Platform
   ↓
5. Test Live Site
   ↓
6. Share! 🎉
```

## Dependencies Overview

### Production Dependencies
```
react              → UI framework
react-dom          → React DOM rendering
framer-motion      → Animations
lucide-react       → Icons
@formspree/react   → Contact form
```

### Development Dependencies
```
typescript         → Type safety
vite               → Build tool
tailwindcss        → Styling
@vitejs/plugin-react → React support
autoprefixer       → CSS compatibility
postcss            → CSS processing
```

## Styling Architecture

```
Tailwind CSS (Utility Classes)
    ↓
tailwind.config.js (Custom Config)
    ↓
index.css (Global Styles)
    ↓
Component Classes
    ↓
Final Styles
```

## Animation Layers

```
1. CSS Animations (index.css)
   - Gradient backgrounds
   - Custom keyframes

2. Tailwind Animations (tailwind.config.js)
   - Float effects
   - Glow effects

3. Framer Motion (Components)
   - Scroll animations
   - Hover effects
   - Page transitions
```

## Responsive Breakpoints

```
Mobile First Approach:

Default (Mobile)
    ↓ 768px
Tablet (md:)
    ↓ 1024px
Desktop (lg:)
    ↓ 1280px
Large Desktop (xl:)
```

## Color System

```
Primary Colors:
- Blue: #3b82f6 (primary-500)
- Cyan: #06b6d4 (cyan-500)

Background:
- Dark: #020617 (slate-950)
- Glass: rgba(255,255,255,0.05)

Text:
- White: #ffffff
- Gray: #9ca3af (gray-400)
```

## Performance Optimization

```
✅ Code Splitting (Vite)
✅ Tree Shaking (Vite)
✅ CSS Purging (Tailwind)
✅ Asset Optimization (Vite)
✅ Lazy Loading (React)
✅ Minification (Vite)
```

## Browser Compatibility

```
✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ Mobile Browsers
```

---

**Quick Navigation:**
- [Main README](README.md)
- [Deployment Guide](DEPLOYMENT.md)
- [Quick Reference](QUICK_REFERENCE.md)
- [Project Summary](PROJECT_SUMMARY.md)
