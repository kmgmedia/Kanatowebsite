# Kanato Website

A modern, responsive website for Kanato - a digital design and development agency. Built with React, TypeScript, and Vite for optimal performance and developer experience.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Contributing](#contributing)
- [License](#license)
- [Contact & Support](#contact--support)

## 📖 Overview

The Kanato Website is a professional business website showcasing digital design and development services. The site features a modern design system, responsive layouts, and optimized performance. It includes multiple pages for showcasing services, projects, team information, and client testimonials.

## ✨ Features

- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **Modern UI Components** - Comprehensive design system with reusable components
- **Performance Optimized** - Built with Vite for fast development and production builds
- **SEO Ready** - Includes SEO optimization and meta tags
- **Accessibility** - Built with accessibility best practices
- **Analytics Integration** - Analytics hook for tracking user interactions
- **Contact Forms** - EmailJS integration for contact and quote requests
- **Dynamic Routing** - Client-side routing with React Router
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **TypeScript** - Type-safe development with TypeScript

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher) or **yarn**
- **Git** (for version control)

## Available Scripts

### Development

```bash
npm run dev
```

Starts the development server with hot module replacement (HMR). Perfect for local development.

### Build

```bash
npm run build
```

Creates an optimized production build. The output is generated in the `dist/` directory.

### Preview

```bash
npm run preview
```

Serves the production build locally for testing before deployment.

### Type Checking

```bash
npm run type-check
```

Runs TypeScript type checking to ensure type safety across the project.

### Lint

```bash
npm run lint
```

Runs ESLint to check code quality and consistency.

## 📁 Project Structure

```
Kanatowebsite/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/               # Reusable UI components (buttons, cards, etc.)
│   │   │   ├── Footer.tsx         # Footer component
│   │   │   ├── Navbar.tsx         # Navigation bar
│   │   │   ├── SEO.tsx            # SEO meta tags
│   │   │   └── WhatsAppButton.tsx # WhatsApp contact button
│   │   ├── pages/
│   │   │   ├── Home.tsx           # Homepage
│   │   │   ├── About.tsx          # About page
│   │   │   ├── Services.tsx       # Services page
│   │   │   ├── Projects.tsx       # Portfolio/Projects page
│   │   │   ├── Contact.tsx        # Contact page
│   │   │   ├── RequestQuote.tsx   # Quote request page
│   │   │   ├── Clients.tsx        # Clients page
│   │   │   ├── DesignSystem.tsx   # Design system showcase
│   │   │   ├── NotFound.tsx       # 404 page
│   │   │   ├── _aboutComponents/  # About page sub-components
│   │   │   ├── _contactComponents/# Contact page sub-components
│   │   │   ├── _homeComponents/   # Home page sub-components
│   │   │   ├── _designSystemComponents/ # Design system components
│   │   │   └── _requestQuoteComponents/ # Quote form components
│   │   ├── App.tsx                # Main App component
│   │   ├── Root.tsx               # Root layout component
│   │   └── routes.tsx             # Route definitions
│   ├── hooks/
│   │   └── useAnalytics.ts        # Analytics hook
│   ├── lib/
│   │   └── emailjs.config.ts      # EmailJS configuration
│   ├── styles/
│   │   ├── fonts.css              # Custom fonts
│   │   ├── index.css              # Global styles
│   │   ├── tailwind.css           # Tailwind CSS
│   │   └── theme.css              # Theme variables
│   └── main.tsx                   # Entry point
├── public/
│   ├── robots.txt                 # SEO robots file
│   └── sitemap.xml                # Sitemap for SEO
├── index.html                     # HTML template
├── package.json                   # Dependencies and scripts
├── vite.config.ts                 # Vite configuration
├── postcss.config.mjs             # PostCSS configuration
├── tailwind.config.js             # Tailwind CSS configuration
└── README.md                       # This file
```

## 🛠 Technology Stack

### Frontend Framework & Build

- **React** - UI library for building components
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool and dev server

### Styling

- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool
- **Custom Theme** - Project-specific theme variables

### UI Components

- **shadcn/ui** - High-quality, accessible React components
- Custom component library built on top of shadcn/ui

### Routing

- **React Router** - Client-side routing

### Integration

- **EmailJS** - Email service for contact forms
- **Analytics** - Custom analytics tracking

### Development Tools

- **Node.js** - JavaScript runtime
- **npm** - Package manager

## 🤝 Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate comments.

## 📄 License

This project is proprietary software. All rights reserved. Unauthorized copying, modification, or distribution of this code is prohibited. See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for attribution information.

## 📧 Contact & Support

For support, inquiries, or collaboration opportunities, please reach out to:

- **Website**: https://Kanatowebsite.com
- **Email**: contact@kanato.com
- **WhatsApp**: [Contact via WhatsApp](https://wa.me/1234567890)

For bug reports or feature requests, please open an issue on the GitHub repository.

---

© 2026 Kanato Engineering Resources Nig. Ltd. All rights reserved. | RC 666713
