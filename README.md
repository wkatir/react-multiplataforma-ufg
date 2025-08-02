# React Multiplataforma UFG - Modern Web Development Project

This repository contains a comprehensive React application built with modern web technologies, designed to showcase advanced frontend development practices and component architecture.

---

## 📄 Contents

### 1. Work Guide: Introduction to Modern React
This guide provides foundational knowledge about modern React development with TypeScript, Vite, and component-based architecture. You will learn how to create scalable web applications using modern tools and best practices.

**Exercises:**
1. **Personal Profile Component (`Profile.tsx`)**
   - Create a personal profile component with:
     - A main heading with your full name using modern typography.
     - A short description paragraph with responsive design.
     - An "About Me" section with a short bio using Tailwind CSS.
     - A "My Favorite Hobbies" section with an animated list.
     - A footer with copyright information and social links.
2. **Recipe Management System (`Recipe.tsx`)**
   - Create a recipe component with:
     - A title and description with modern styling.
     - An "Ingredients" section with an interactive list.
     - A "Preparation Steps" section with numbered steps.
     - Integration with external recipe APIs.
     - A footer with author attribution and sharing features.

---

### 2. Modern CSS Exercises with Tailwind
This guide covers modern styling with Tailwind CSS, responsive design, and component-based styling. You'll learn to create beautiful, responsive interfaces using utility-first CSS.

**Exercises:**
1. **Profile Card Styling (`Profile.tsx` + Tailwind CSS)**
   - Style a profile card with modern design patterns:
     - Background gradients and glassmorphism effects.
     - Responsive padding and centered content.
     - Width constraints and responsive margins.
     - Rounded corners and modern box shadows.
     - Dark/light theme support.
2. **Responsive Image Gallery (`Gallery.tsx` + Tailwind CSS)**
   - Use CSS Grid and Flexbox for responsive layouts.
   - Create a modern gallery with hover effects and animations.
   - Implement lazy loading and image optimization.
   - Add smooth transitions and micro-interactions.

---

## 🛠 Tech Stack

### Core Technologies
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Components & Libraries
- **shadcn/ui** - Beautiful, accessible component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Beautiful icons
- **Framer Motion** - Animation library

### Development Tools
- **ESLint** - Code linting and formatting
- **SWC** - Fast TypeScript/JavaScript compiler
- **Class Variance Authority** - Component variant management

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
npm run dev          # Start development server
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
│   │   ├── Profile.tsx     # Personal profile component
│   │   ├── Recipe.tsx      # Recipe management component
│   │   ├── Gallery.tsx     # Image gallery component
│   │   ├── About.tsx       # About section component
│   │   ├── NavBar.tsx      # Navigation component
│   │   └── mode-toggle.tsx # Theme toggle component
│   │
│   ├── blocks/             # Complex component blocks
│   │   └── Components/
│   │       # (removed AnimatedList component)
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
- **Smooth Animations** - Framer Motion powered micro-interactions
- **Accessibility** - WCAG compliant components with Radix UI

### Developer Experience
- **Hot Module Replacement** - Instant updates during development
- **TypeScript Support** - Full type safety across the application
- **ESLint Configuration** - Consistent code style and best practices
- **Component Library** - Reusable, accessible components with shadcn/ui

### Performance
- **Vite Build** - Lightning-fast development and optimized production builds
- **Tree Shaking** - Unused code elimination
- **Lazy Loading** - Component and route-based code splitting
- **Image Optimization** - Automatic image optimization and lazy loading

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
- **Framer Motion** for smooth animations
- **React Team** for the amazing framework

---

*This project demonstrates modern web development practices and serves as a foundation for building scalable React applications with TypeScript, Vite, and Tailwind CSS.*
