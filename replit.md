# Portfolio Website

## Overview

This is a modern, responsive portfolio website built for Gauri Khotele, a Product Manager and Consultant. The application showcases her professional experience, projects, and provides a contact form for potential collaborators. The site features a dark theme design with smooth animations and a professional aesthetic, highlighting her expertise in product discovery, search optimization, and strategic product development.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility
- **Animations**: Framer Motion for smooth, professional animations and transitions
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints with proper error handling and logging
- **Data Storage**: In-memory storage implementation with interfaces for future database integration
- **Validation**: Zod schemas for runtime type validation on both client and server

### Development Workflow
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Strict type checking with path mapping for clean imports
- **Code Organization**: Monorepo structure with shared schemas between client and server
- **Development Server**: Hot module replacement with error overlay for debugging

### Database Schema Design
The application uses Drizzle ORM with PostgreSQL dialect, featuring:
- **Users Table**: Basic user authentication structure with username/password
- **Contact Messages Table**: Stores form submissions with timestamps
- **Type Safety**: Generated TypeScript types from database schema
- **Validation**: Zod schemas derived from database schema for consistent validation

### UI/UX Design System
- **Theme**: Dark mode design with neutral color palette and cyan accents
- **Typography**: Multiple font families (Inter, DM Sans, Fira Code, Geist Mono) for different contexts
- **Layout**: Responsive grid system with mobile-first approach
- **Components**: Reusable component library with consistent styling patterns
- **Accessibility**: Proper ARIA labels, keyboard navigation, and screen reader support

## External Dependencies

### Database & ORM
- **Drizzle ORM**: Type-safe database operations with PostgreSQL
- **Neon Database**: Serverless PostgreSQL for production deployment
- **Database Migrations**: Automated schema management with Drizzle Kit

### UI & Animation Libraries
- **Radix UI**: Headless component primitives for accessibility
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Icon library with consistent design
- **Embla Carousel**: Touch-friendly carousel component

### Development Tools
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **TSX**: TypeScript execution for development server

### Form & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Runtime schema validation with TypeScript integration
- **Hookform Resolvers**: Zod integration for React Hook Form

### Utility Libraries
- **Class Variance Authority**: Type-safe variant management for components
- **clsx & tailwind-merge**: Conditional class name utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation

### Replit Integration
- **Vite Plugin Runtime Error Modal**: Enhanced error reporting in development
- **Cartographer Plugin**: Replit-specific development enhancements for better debugging