# ERAZE v4


A Next.js web application with advanced animations and performance optimizations.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd dotdna-clone
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the development server with Turbopack for fast refresh capabilities:

```bash
npm run dev
```

The application will be available at:
- Local: http://localhost:3000 (or next available port)
- Network: http://[your-local-ip]:3000

The port may automatically change if 3000 is already in use.

### Building for Production

To create a production build:

```bash
npm run build
```

### Running in Production Mode

After building, you can start the production server:

```bash
npm run start
```

## Project Structure

```
dotdna-clone/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── components/      # Page-specific components
│   │   ├── download/        # Download page
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main page
│   ├── components/          # Reusable components
│   ├── hooks/               # Custom React hooks
│   └── lib/                 # Utility functions
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── package.json             # Project dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## Performance Optimizations

This project includes several performance optimizations:

1. **Particle Field Optimization**: 
   - Reduced particle count from 250 to 100
   - Implemented frame rate limiting (60 FPS cap)
   - Added throttling for scroll and resize events

2. **Component Optimization**:
   - Dynamic imports for heavy components
   - React.memo for preventing unnecessary re-renders
   - Client-side only components where appropriate

3. **Animation Optimization**:
   - Motion blur effects during scrolling
   - Efficient canvas rendering
   - Throttled event listeners

4. **Code Splitting**:
   - Dynamic imports for framer-motion and other heavy libraries
   - Client-side only components for interactive elements

## Key Technologies

- Next.js 15 with Turbopack
- React 19
- TypeScript
- Framer Motion for animations
- GSAP for advanced animations
- Tailwind CSS for styling
- Three.js for 3D graphics

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint

## Browser Support

This application is optimized for modern browsers that support:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- WebGL for 3D graphics
- CSS Custom Properties (Variables)

## Troubleshooting

If you encounter issues:

1. Ensure you're using Node.js version 18 or higher
2. Clear node_modules and reinstall dependencies:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
3. Check that all required environment variables are set (if any)

## Performance Monitoring

The application includes built-in performance monitoring that tracks:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)
- Time to First Byte (TTFB)
