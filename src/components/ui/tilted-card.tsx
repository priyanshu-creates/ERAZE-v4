import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
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

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1
  });

  const [lastY, setLastY] = useState(0);

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

      <motion.div
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
            <motion.img
              src={imageSrc}
              alt={altText}
              className="tilted-card-img"
              style={{
                width: imageWidth,
                height: imageHeight
              }}
            />
            {displayOverlayContent && overlayContent && (
              <motion.div className="tilted-card-overlay">{overlayContent}</motion.div>
            )}
          </>
        )}
        {/* Spotlight effect */}
        <motion.div
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
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="tilted-card-caption"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}