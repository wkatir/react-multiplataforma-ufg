# React Multiplataforma UFG - Modern Web Development Project

A comprehensive React application showcasing modern web development practices with TypeScript, Vite, and Tailwind CSS. This project demonstrates advanced component architecture, responsive design, and modern UI/UX patterns.

---

## 🚀 Live Demo

Visit the application at: [http://localhost:5174/](http://localhost:5174/)

---

## 📄 Project Overview

This project is part of the **Introduction to HTML and CSS** course at Francisco Gavidia University (UFG). It demonstrates modern web development practices using React, TypeScript, and Tailwind CSS to create a responsive, accessible, and visually appealing web application.

### Key Features
- **Modern Component Architecture** - Reusable, accessible components
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark/Light Theme** - Seamless theme switching
- **Interactive Navigation** - Smooth scrolling and section highlighting
- **Professional UI/UX** - Modern design patterns and animations

---

## 🎯 Pages & Components

### 1. **Home Page** (`src/pages/Home.tsx`)
- **Modern Hero Design** - Professional landing page with call-to-action buttons
- **Responsive Layout** - Two-column design that adapts to all screen sizes
- **Interactive Elements** - Hover effects and smooth transitions
- **Feature Cards** - Quick access to Profile, Recipe, and Gallery sections

### 2. **Profile Page** (`src/pages/Profile.tsx`)
- **Professional About Section** - Modern layout with achievements and skills
- **Technology Showcase** - Interactive badges for React, TypeScript, Tailwind CSS, etc.
- **Achievement Statistics** - Visual representation of projects, technologies, and experience
- **Hobbies & Interests** - Grid layout with icons and descriptions
- **Contact Integration** - Direct email link for professional networking

### 3. **Recipe Page** (`src/pages/Recipe.tsx`)
- **Interactive Timeline Design** - Step-by-step recipe instructions with visual timeline
- **Sticky Navigation** - Section-based navigation that highlights current content
- **Professional Layout** - Two-column design with main content and sidebar
- **Salvadoran Pupusas Recipe** - Authentic recipe with ingredients and preparation steps
- **Cooking Tips** - Alert components with helpful cooking advice

### 4. **Gallery Page** (`src/pages/Gallery.tsx`)
- **Modern Carousel Design** - Interactive image carousel with navigation controls
- **Touch/Swipe Support** - Mobile-friendly gesture controls
- **Responsive Grid** - Adaptive layout for different screen sizes
- **Hover Effects** - Smooth animations and transitions
- **Professional Images** - High-quality Unsplash images with proper attribution

---

## 🛠 Tech Stack

### Core Technologies
- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.8** - Type-safe development
- **Vite 7.0** - Lightning-fast build tool
- **Tailwind CSS 4.1** - Utility-first CSS framework

### UI Components & Libraries
- **shadcn/ui** - Beautiful, accessible component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Beautiful icons
- **Embla Carousel** - Modern carousel functionality
- **Class Variance Authority** - Component variant management

### Development Tools
- **ESLint** - Code linting and formatting
- **SWC** - Fast TypeScript/JavaScript compiler
- **Framer Motion** - Animation library

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/wkatir/react-multiplataforma-ufg.git

# Navigate to project directory
cd react-multiplataforma-ufg

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server (http://localhost:5174/)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

---

## 📂 Project Structure
```plaintext
react-multiplataforma-ufg/
│
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   │   ├── alert.tsx   # Alert component
│   │   │   ├── badge.tsx   # Badge component
│   │   │   ├── button.tsx  # Button component
│   │   │   ├── carousel.tsx # Carousel component
│   │   │   └── dropdown-menu.tsx # Dropdown menu
│   │   ├── NavBar.tsx      # Navigation component
│   │   ├── ProtectedRoute.tsx # Route protection
│   │   ├── mode-toggle.tsx # Theme toggle component
│   │   └── theme-provider.tsx # Theme provider
│   │
│   ├── pages/              # Main application pages
│   │   ├── Home.tsx        # Landing page with hero design
│   │   ├── Profile.tsx     # Professional profile page
│   │   ├── Recipe.tsx      # Interactive recipe page
│   │   └── Gallery.tsx     # Modern carousel gallery
│   │
│   ├── lib/                # Utility functions
│   │   └── utils.ts
│   │
│   ├── assets/             # Static assets
│   │   └── react.svg
│   │
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
│
├── public/                 # Public assets
├── components.json         # shadcn/ui configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies and scripts
```

---

## 🎨 Features

### Modern UI/UX
- **Dark/Light Theme** - Seamless theme switching with system preference detection
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive Carousel** - Touch/swipe support with navigation controls
- **Sticky Navigation** - Section-based navigation with active highlighting
- **Smooth Animations** - Hover effects and micro-interactions
- **Accessibility** - WCAG compliant components with Radix UI

### Developer Experience
- **Hot Module Replacement** - Instant updates during development
- **TypeScript Support** - Full type safety across the application
- **ESLint Configuration** - Consistent code style and best practices
- **Component Library** - Reusable, accessible components with shadcn/ui

### Performance
- **Vite Build** - Lightning-fast development and optimized production builds
- **Tree Shaking** - Unused code elimination
- **Image Optimization** - Automatic image optimization and lazy loading
- **Carousel Performance** - Smooth scrolling with Embla Carousel

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px (single column layout)
- **Tablet**: 768px - 1024px (adaptive grid layouts)
- **Desktop**: 1024px+ (full two-column layouts)

### Features
- **Mobile-First** - Optimized for mobile devices
- **Touch Support** - Swipe gestures for carousel
- **Adaptive Typography** - Responsive text sizes
- **Flexible Grids** - CSS Grid and Flexbox layouts

---

## 🎯 Component Highlights

### Interactive Carousel (Gallery)
- Smooth scrolling with navigation arrows
- Touch/swipe support for mobile devices
- Hover effects and image scaling
- Responsive design that adapts to screen size

### Timeline Design (Recipe)
- Visual timeline with connected steps
- Sticky navigation sidebar
- Intersection Observer for active section highlighting
- Professional layout with images and content

### Professional Profile
- Achievement statistics with visual design
- Technology badges with icons
- Hobbies grid with descriptions
- Contact integration with email

### Modern Hero (Home)
- Two-column layout with call-to-action buttons
- Feature cards for quick navigation
- Professional typography and spacing
- Responsive design for all devices

---

## 🛠 Recommended Tools

### Development Environment
- **Code Editor:** VS Code with React/TypeScript extensions
- **Browser:** Chrome DevTools, Firefox Developer Tools
- **Design Tools:** Figma, Adobe XD for component design
- **API Testing:** Postman, Insomnia for backend integration

### Additional Libraries to Consider
- **State Management:** Zustand, Redux Toolkit, or React Query
- **Routing:** React Router DOM for SPA navigation
- **Forms:** React Hook Form with Zod validation
- **Testing:** Vitest, React Testing Library, Playwright
- **Deployment:** Vercel, Netlify, or GitHub Pages

---

## 📚 Learning Resources

### React & TypeScript
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)

### Styling & UI
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/)
- [Embla Carousel](https://www.embla-carousel.com/)

### Best Practices
- [React Best Practices](https://react.dev/learn)
- [Modern CSS Techniques](https://web.dev/learn/css/)
- [Accessibility Guidelines](https://www.w3.org/WAI/)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

Special thanks to:
- **Vite Team** for the incredible build tool
- **Tailwind CSS** for the utility-first CSS framework
- **shadcn/ui** for the beautiful component library
- **Radix UI** for accessible UI primitives
- **Embla Carousel** for smooth carousel functionality
- **React Team** for the amazing framework
- **Francisco Gavidia University (UFG)** for the educational opportunity

---

## 📞 Contact

**Developer:** Wilmer Salazar  
**Email:** wilmerhenrysalazarmartinez@gmail.com  
**Project:** React Multiplataforma UFG  

---

*This project demonstrates modern web development practices and serves as a foundation for building scalable React applications with TypeScript, Vite, and Tailwind CSS.*
