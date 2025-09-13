'use client';

// Particle Field Component - Creates animated floating particles background
// This component renders particles that float around and connect to nearby particles

import React, { useEffect, useRef } from 'react';

// TypeScript interface defining the structure of a particle
interface Particle {
  x: number;          // X position on canvas
  y: number;          // Y position on canvas
  vx: number;         // X velocity (speed and direction)
  vy: number;         // Y velocity (speed and direction)
  size: number;       // Particle radius
  opacity: number;    // Particle transparency
  life: number;       // Current age of particle
  maxLife: number;    // Maximum age before particle resets
}

// Throttle function type
type ThrottleFunction = (...args: unknown[]) => void;

/**
 * ParticleField Component
 * 
 * Creates an animated background with:
 * - 100 floating particles
 * - Particles that wrap around screen edges
 * - Connections drawn between nearby particles
 * - Glow effects on particles
 * - Automatic particle lifecycle management
 * - Directional motion blur effect based on scroll velocity
 * 
 * Features:
 * - Canvas-based rendering for smooth performance
 * - Responsive to window resizing
 * - Particles fade in/out based on their lifecycle
 * - Connection lines appear when particles are close
 * - Motion blur effect activates during scrolling
 */
const ParticleField: React.FC = () => {
  // useRef hooks to access DOM elements and store data
  const canvasRef = useRef<HTMLCanvasElement>(null);    // Reference to canvas element
  const animationRef = useRef<number>(0);                // Reference to animation frame ID
  const particlesRef = useRef<Particle[]>([]);          // Array of all particles
  const scrollVelocityRef = useRef<number>(0);          // Current scroll velocity
  const lastScrollYRef = useRef<number>(0);             // Last scroll position
  const lastTimeRef = useRef<number>(0);                // Last timestamp for velocity calculation
  const decayTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Timeout for velocity decay
  // Add frame rate limiting
  const targetFPS = 60;
  const frameInterval = 1000 / targetFPS;
  const lastFrameTimeRef = useRef<number>(0);

  // Throttle function for scroll events
  const throttle = (func: (...args: unknown[]) => void, limit: number): ThrottleFunction => {
    let inThrottle = false;
    return function(...args: unknown[]) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  };

  // useEffect runs when component mounts and sets up the particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;  // Exit if canvas doesn't exist

    const ctx = canvas.getContext('2d');
    if (!ctx) return;     // Exit if 2D context isn't available

    // Function to resize canvas to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Set initial canvas size and listen for window resize
    resizeCanvas();
    const throttledResizeCanvas = throttle(resizeCanvas, 100);
    window.addEventListener('resize', throttledResizeCanvas);

    // Scroll event handler to calculate velocity
    const handleScroll = () => {
      const currentTime = Date.now();
      const currentScrollY = window.scrollY;
      
      // Calculate time delta for velocity calculation
      const deltaTime = currentTime - lastTimeRef.current;
      
      if (deltaTime > 0) {
        // Calculate velocity (pixels per second)
        const deltaY = currentScrollY - lastScrollYRef.current;
        scrollVelocityRef.current = deltaY / (deltaTime / 1000);
        
        // Clear any existing decay timeout
        if (decayTimeoutRef.current) {
          clearTimeout(decayTimeoutRef.current);
        }
        
        // Set timeout to decay velocity to zero after scrolling stops
        decayTimeoutRef.current = setTimeout(() => {
          scrollVelocityRef.current = 0;
        }, 100);
      }
      
      // Update last values
      lastScrollYRef.current = currentScrollY;
      lastTimeRef.current = currentTime;
    };

    // Add scroll event listener with throttling
    const throttledHandleScroll = throttle(handleScroll, 16); // ~60fps
    window.addEventListener('scroll', throttledHandleScroll);

    // Function to create a new particle with random properties
    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,           // Random X position
        y: Math.random() * canvas.height,          // Random Y position
        vx: (Math.random() - 0.5) * 0.25,          // Random X velocity (-0.125 to 0.125) - Reduced by half
        vy: (Math.random() - 0.5) * 0.25,          // Random Y velocity (-0.125 to 0.125) - Reduced by half
        size: Math.random() * 1.2 + 0.3,           // Random size (0.3 to 1.5) - Reduced from 0.5 to 2.5
        opacity: Math.random() * 0.5 + 0.3,        // Increased minimum opacity from 0.2 to 0.3 (0.3 to 0.8)
        life: 0,                                    // Starts at age 0
        maxLife: Math.random() * 200 + 100         // Random lifespan (100-300 frames)
      };
    };

    // Initialize particles array with 100 particles (reduced from 250)
    const maxParticles = 100;
    for (let i = 0; i < maxParticles; i++) {
      particlesRef.current.push(createParticle());
    }

    // Main animation function - runs every frame
    const animate = (currentTime: number) => {
      // Frame rate limiting
      if (currentTime - lastFrameTimeRef.current < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTimeRef.current = currentTime;
      
      // Clear the entire canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Get scroll velocity and direction
      const scrollVelocity = scrollVelocityRef.current;
      const isScrollingDown = scrollVelocity > 0;
      const isScrollingUp = scrollVelocity < 0;
      
      // Calculate blur intensity based on scroll speed (capped at 2000 pixels/second)
      const maxVelocity = 2000;
      const blurIntensity = Math.min(Math.abs(scrollVelocity) / maxVelocity, 1);
      
      // Update and draw each particle
      particlesRef.current.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;  // Increase particle age

        // Wrap particles around screen edges (like Pac-Man)
        if (particle.x < 0) particle.x = canvas.width;    // Left edge to right
        if (particle.x > canvas.width) particle.x = 0;    // Right edge to left
        if (particle.y < 0) particle.y = canvas.height;   // Top edge to bottom
        if (particle.y > canvas.height) particle.y = 0;   // Bottom edge to top

        // Calculate opacity based on particle age (fades as it gets older)
        const lifeRatio = particle.life / particle.maxLife;
        const currentOpacity = particle.opacity * (1 - lifeRatio);

        // Draw motion blur effect when scrolling
        if (isScrollingDown || isScrollingUp) {
          // Number of trail particles based on blur intensity
          const trailCount = Math.floor(blurIntensity * 10) + 1;
          
          // Draw trail particles
          for (let i = 0; i < trailCount; i++) {
            // Calculate trail position based on scroll direction
            const trailOffset = isScrollingDown ? (i * 2) : (i * -2);
            const trailX = particle.x + (isScrollingDown ? particle.vx * i : particle.vx * i);
            const trailY = particle.y + trailOffset;
            
            // Trail particles become more transparent further from the main particle
            const trailOpacity = currentOpacity * (1 - (i / trailCount));
            
            // Draw trail particle
            ctx.beginPath();
            ctx.arc(trailX, trailY, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(141, 255, 79, ${trailOpacity})`;
            ctx.shadowBlur = 15;  // Add glow effect to trail particles
            ctx.shadowColor = '#8DFF4F';
            ctx.fill();
            ctx.shadowBlur = 0;  // Reset shadow for next particle
          }
        }
        
        // Draw the main particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(141, 255, 79, ${currentOpacity})`; // DOTDNA green with calculated opacity
        ctx.fill();

        // Add enhanced glow effect to particle
        ctx.shadowBlur = 20;  // Increased from 10 to 20 for more glow
        ctx.shadowColor = '#8DFF4F';
        ctx.fill();
        ctx.shadowBlur = 0;  // Reset shadow for next particle

        // Reset particle if it reaches maximum age
        if (particle.life >= particle.maxLife) {
          particlesRef.current[index] = createParticle();
        }
      });

      // Request next animation frame for smooth animation
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animate(0);

    // Cleanup function - runs when component unmounts
    return () => {
      // Cancel animation frame to prevent memory leaks
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      // Remove event listeners
      window.removeEventListener('resize', throttledResizeCanvas);
      window.removeEventListener('scroll', throttledHandleScroll);
      
      // Clear decay timeout if it exists
      if (decayTimeoutRef.current) {
        clearTimeout(decayTimeoutRef.current);
      }
    };
  }, [frameInterval]); // Add frameInterval to dependency array

  return (
    <canvas
      ref={canvasRef}
      className="particle-field"
      style={{
        position: 'fixed',          // Fixed position to stay in place during scroll
        top: 0,
        left: 0,
        width: '100%',              // Full screen width
        height: '100%',             // Full screen height
        pointerEvents: 'none',      // Allows clicking through the canvas
        zIndex: 0,                  // Behind other content
        opacity: 0.8                // Increased from 0.6 to 0.8 for more visibility
      }}
    />
  );
};

// Export component for use in other files
export default ParticleField;