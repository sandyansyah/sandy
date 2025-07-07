# Sandyka Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Three.js featuring 3D animations and interactive elements.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **3D Animations**: Interactive Three.js elements with mouse-following effects
- **Dark/Light Mode**: Theme switching with next-themes
- **Responsive Design**: Mobile-first approach with full responsiveness
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized for Core Web Vitals
- **Animations**: Smooth transitions with Framer Motion
- **Interactive UI**: Hover effects, scroll animations, and dynamic content

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/sandyansyah/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Technologies Used

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js

### Tools & Libraries
- **next-themes** - Theme management
- **React Icons** - Icon library
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 📁 Project Structure

```
sandy-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── 3d/
│   │   ├── ParticlesBackground.tsx  # 3D particle system
│   │   └── FloatingCube.tsx         # 3D animated shapes
│   ├── layout/
│   │   ├── Navbar.tsx              # Navigation bar
│   │   └── Footer.tsx              # Footer component
│   ├── sections/
│   │   ├── Hero.tsx                # Hero section
│   │   ├── About.tsx               # About section
│   │   ├── Experience.tsx          # Work experience
│   │   ├── Projects.tsx            # Projects showcase
│   │   ├── Skills.tsx              # Skills section
│   │   └── Contact.tsx             # Contact form
│   └── ui/
│       ├── AnimatedText.tsx        # Animated text component
│       ├── ScrollProgress.tsx      # Scroll progress bar
│       └── SectionTitle.tsx        # Section title component
├── public/                         # Static assets
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
├── tailwind.config.js             # Tailwind CSS config
├── next.config.js                 # Next.js config
└── postcss.config.js              # PostCSS config
```

## 🎨 Features Breakdown

### 3D Effects
- Interactive particle background that responds to mouse movement
- Floating 3D shapes with continuous animation
- WebGL-powered graphics using Three.js

### Responsive Design
- Mobile-first approach
- Breakpoints for all device sizes
- Touch-friendly interactions

### Performance
- Lazy loading for images and components
- Optimized bundle size
- Smooth 60fps animations

### SEO & Accessibility
- Semantic HTML structure
- Meta tags for social sharing
- ARIA labels for accessibility
- Structured data for search engines

## 🚀 Deployment

The website can be deployed on various platforms:

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the .next folder
```

### Self-hosting
```bash
npm run build
npm run start
```

## 📝 Customization

1. **Update Personal Info**: Edit the content in each section component
2. **Change Colors**: Modify the color scheme in `tailwind.config.js`
3. **Add Projects**: Update the projects array in `components/sections/Projects.tsx`
4. **Modify 3D Elements**: Customize the Three.js components in `components/3d/`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Contact

Sandyka Ardiansyah
- Email: sandyansyah356@gmail.com
- LinkedIn: [linkedin.com/in/sandyka](https://www.linkedin.com/in/sandyka)
- GitHub: [github.com/sandyansyah](https://github.com/sandyansyah)
- Website: [www.sandykaa.com](https://www.sandykaa.com)