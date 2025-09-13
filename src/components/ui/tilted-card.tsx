import { useRef, useState, useEffect } from 'react';
import './tilted-card.css';

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

export interface TiltedCardProps {
  imageSrc?: string;
  altText?: string;
  captionText?: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
  className?: string;
  children?: React.ReactNode;
  spotlightColor?: string;
  spotlightSize?: string;
  spotlightIntensity?: string;
}

export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.02, // Reduced scale effect
  rotateAmplitude = 5, // Reduced rotation amplitude for more subtle effect
  showMobileWarning = false,
  showTooltip = false,
  overlayContent = null,
  displayOverlayContent = false,
  className = '',
  children,
  spotlightColor = "rgba(127, 226, 0, 0.7)",
  spotlightSize = "150px", // Rolled back to previous size
  spotlightIntensity = "80px" // Rolled back to previous intensity
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const [motionModules, setMotionModules] = useState<{ 
    motion: React.ComponentType<unknown>; 
    useMotionValue: (value: number) => { set: (value: number) => void; get: () => number }; 
    useSpring: (value: unknown, options: unknown) => unknown 
  } | null>(null);
  // Initialize all hooks at the top level
  const [motionValues, setMotionValues] = useState<{
    x: { set: (value: number) => void; get: () => number };
    y: { set: (value: number) => void; get: () => number };
    rotateX: { set: (value: number) => void; get: () => number };
    rotateY: { set: (value: number) => void; get: () => number };
    scale: { set: (value: number) => void; get: () => number };
    opacity: { set: (value: number) => void; get: () => number };
    rotateFigcaption: { set: (value: number) => void; get: () => number };
  } | null>(null);
  const [lastY, setLastY] = useState(0);

  // Dynamically import framer-motion modules
  useEffect(() => {
    const loadMotionModules = async () => {
      const motion = await import('framer-motion');
      setMotionModules({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        motion: motion.motion as any,
        useMotionValue: motion.useMotionValue,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        useSpring: motion.useSpring as any
      });
      
      // Initialize motion values after modules are loaded
      const x = motion.useMotionValue(0);
      const y = motion.useMotionValue(0);
      const rotateX = motion.useSpring(motion.useMotionValue(0), springValues);
      const rotateY = motion.useSpring(motion.useMotionValue(0), springValues);
      const scale = motion.useSpring(1, springValues);
      const opacity = motion.useSpring(0);
      const rotateFigcaption = motion.useSpring(0, {
        stiffness: 350,
        damping: 30,
        mass: 1
      });
      
      setMotionValues({
        x,
        y,
        rotateX,
        rotateY,
        scale,
        opacity,
        rotateFigcaption
      });
    };
    
    loadMotionModules();
  }, []);

  // If motion modules are not loaded yet, render a simple placeholder
  if (!motionModules || !motionValues) {
    return (
      <figure
        className={`tilted-card-figure ${className}`}
        style={{
          height: containerHeight,
          width: containerWidth
        }}
      >
        <div className="tilted-card-inner" style={{ width: containerWidth, height: containerHeight }}>
          {children ? (
            <div className="tilted-card-content">
              {children}
            </div>
          ) : (
            <>
              {imageSrc && (
                <img // Using img instead of Image for simplicity in this placeholder
                  src={imageSrc}
                  alt={altText}
                  className="tilted-card-img"
                  style={{
                    width: imageWidth,
                    height: imageHeight
                  }}
                />
              )}
              {displayOverlayContent && overlayContent && (
                <div className="tilted-card-overlay">{overlayContent}</div>
              )}
            </>
          )}
        </div>
      </figure>
    );
  }

  const { motion } = motionModules;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionDiv = motion as any;
  const { x, y, rotateX, rotateY, scale, opacity, rotateFigcaption } = motionValues;

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className={`tilted-card-figure ${className}`}
      style={{
        height: containerHeight,
        width: containerWidth
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="tilted-card-mobile-alert">This effect is not optimized for mobile. Check on desktop.</div>
      )}

      <MotionDiv
        className="tilted-card-inner"
        style={{
          width: containerWidth,
          height: containerHeight,
          rotateX,
          rotateY,
          scale
        }}
      >
        {children ? (
          <div className="tilted-card-content">
            {children}
          </div>
        ) : (
          <>
            <MotionDiv
              src={imageSrc}
              alt={altText}
              className="tilted-card-img"
              style={{
                width: imageWidth,
                height: imageHeight
              }}
            />
            {displayOverlayContent && overlayContent && (
              <MotionDiv className="tilted-card-overlay">{overlayContent}</MotionDiv>
            )}
          </>
        )}
        {/* Spotlight effect */}
        <MotionDiv
          className="tilted-card-spotlight"
          style={{
            background: `radial-gradient(circle at center, ${spotlightColor}, transparent)`,
            width: spotlightSize,
            height: spotlightSize,
            x: x,
            y: y,
            filter: `blur(${spotlightIntensity})`,
            opacity: opacity,
            transition: "opacity 0.2s ease",
          }}
        />
      </MotionDiv>

      {showTooltip && (
        <MotionDiv
          className="tilted-card-caption"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption
          }}
        >
          {captionText}
        </MotionDiv>
      )}
    </figure>
  );
}