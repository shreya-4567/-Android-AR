# AR Drill Trainer

## Overview

This is a full-stack web application that provides an AR (Augmented Reality) training platform for drill exercises. The application allows users to select training drills, view detailed information about them, and practice using AR visualization with 3D placement capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom configuration for 3D assets
- **Styling**: Tailwind CSS with custom design system
- **State Management**: Zustand for client-side state
- **3D Graphics**: React Three Fiber with Three.js for 3D rendering and AR visualization
- **UI Components**: Radix UI primitives with custom styling
- **Data Fetching**: TanStack React Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API**: RESTful API structure (routes not yet implemented)
- **Development**: Hot module replacement with Vite integration

### Key Components

#### Frontend Structure
- **App Router**: Simple view-based routing between drill selector, detail view, and AR scene
- **Component Library**: Comprehensive UI component library using Radix primitives
- **3D Scene Management**: Canvas-based 3D rendering with touch/click interaction support
- **State Stores**: Modular Zustand stores for drill management, game state, and audio control

#### 3D and AR Features
- **AR Scene**: Full 3D environment with ground plane interaction
- **Touch Handling**: Custom touch/mouse interaction for 3D object placement
- **Marker System**: Drill marker placement and management in 3D space
- **GLSL Support**: Shader support for advanced 3D effects

#### Design System
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Theme System**: CSS custom properties with light/dark mode support
- **Typography**: Inter font integration
- **Component Variants**: Class variance authority for consistent styling

## Data Flow

1. **Drill Selection**: Users browse available drills from local data store
2. **Drill Details**: Detailed view shows drill information, tips, and difficulty
3. **AR Mode**: 3D scene initialization with camera controls and ground plane
4. **Marker Placement**: Touch/click interactions place drill markers in 3D space
5. **State Persistence**: Zustand manages application state across views

## External Dependencies

### Database and ORM
- **Database**: PostgreSQL (configured but not yet connected)
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Connection**: Neon Database serverless driver
- **Migration**: Drizzle Kit for schema management

### 3D and Graphics
- **Three.js**: Core 3D library
- **React Three Fiber**: React renderer for Three.js
- **React Three Drei**: Utility components and helpers
- **Post-processing**: Advanced visual effects pipeline

### UI and Interaction
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Class Variance Authority**: Type-safe CSS class variants
- **CMDK**: Command palette functionality

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **ESBuild**: Fast backend bundling
- **TSX**: TypeScript execution for development
- **Replit Integration**: Error overlay and development tools

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server to `dist/index.js`
3. **Asset Handling**: Support for 3D models (.gltf, .glb) and audio files

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Static Serving**: Express serves built frontend in production
- **Development Mode**: Vite dev server with HMR integration

### Production Deployment
- **Entry Point**: `dist/index.js` as the main server file
- **Static Assets**: Served from `dist/public` directory
- **Database**: PostgreSQL connection via environment variables

## Development Notes

- The application uses a monorepo structure with shared types and schemas
- Database integration is configured but not yet implemented in the API routes
- The storage system currently uses in-memory storage with an interface ready for database integration
- AR functionality is built on web-standard technologies without requiring special AR frameworks
- The 3D scene supports both touch and mouse interactions for broad device compatibility