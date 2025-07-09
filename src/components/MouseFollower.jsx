import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                            window.innerWidth <= 1024 || 
                            ('ontouchstart' in window);
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const updateTouchPosition = (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        setMousePosition({ x: touch.clientX, y: touch.clientY });
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      if (!isMobile) {
        setIsVisible(false);
      }
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleTouchStart = (e) => {
      updateTouchPosition(e);
    };

    const handleTouchMove = (e) => {
      e.preventDefault(); // Prevent scrolling while touching
      updateTouchPosition(e);
    };

    const handleTouchEnd = () => {
      // Keep visible for a short time after touch ends
      setTimeout(() => {
        if (isMobile) {
          setIsVisible(false);
        }
      }, 1000);
    };

    // Mouse events for desktop
    if (!isMobile) {
      document.addEventListener('mousemove', updateMousePosition);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    }

    // Touch events for mobile/tablet
    if (isMobile) {
      document.addEventListener('touchstart', handleTouchStart, { passive: false });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render on very small screens or if not supported
  if (window.innerWidth < 320) {
    return null;
  }

  // Responsive sizes based on screen size
  const getResponsiveSize = () => {
    if (window.innerWidth <= 480) {
      return { main: 30, particle1: 3, particle2: 2, glow: 12 };
    } else if (window.innerWidth <= 768) {
      return { main: 35, particle1: 3.5, particle2: 2.5, glow: 14 };
    } else if (window.innerWidth <= 1024) {
      return { main: 38, particle1: 4, particle2: 3, glow: 15 };
    } else {
      return { main: 40, particle1: 4, particle2: 3, glow: 16 };
    }
  };

  const sizes = getResponsiveSize();

  return (
    <>
      {/* Main follower with ॐ symbol */}
      <motion.div
        className={`fixed pointer-events-none z-50 ${isMobile ? 'mix-blend-normal' : 'mix-blend-difference'}`}
        animate={{
          x: mousePosition.x - sizes.main / 2,
          y: mousePosition.y - sizes.main / 2,
          opacity: isVisible ? (isMobile ? 0.9 : 1) : 0,
        }}
        transition={{
          type: "spring",
          stiffness: isMobile ? 300 : 500,
          damping: isMobile ? 35 : 28,
          mass: isMobile ? 0.8 : 0.5,
        }}
        style={{
          width: `${sizes.main}px`,
          height: `${sizes.main}px`,
        }}
      >
        <div className="relative w-full h-full">
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: isMobile ? 4 : 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Middle ring */}
          <motion.div
            className="absolute inset-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 opacity-50"
            animate={{
              scale: [1.1, 0.9, 1.1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: isMobile ? 3 : 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Inner core with ॐ */}
          <motion.div
            className="absolute inset-2 rounded-full bg-gradient-to-r from-orange-600 to-orange-800 flex items-center justify-center shadow-lg"
            animate={{
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: isMobile ? 2 : 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.span
              className={`text-white font-bold select-none ${
                sizes.main <= 30 ? 'text-sm' : 
                sizes.main <= 35 ? 'text-base' : 
                'text-lg'
              }`}
              style={{ 
                fontFamily: 'serif',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
              }}
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: isMobile ? 3 : 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ॐ
            </motion.span>
          </motion.div>
        </div>
      </motion.div>

      {/* Trailing particles - Only show on larger screens */}
      {sizes.main > 30 && (
        <>
          <motion.div
            className="fixed pointer-events-none z-40"
            animate={{
              x: mousePosition.x - sizes.particle1 * 2,
              y: mousePosition.y - sizes.particle1 * 2,
              opacity: isVisible ? (isMobile ? 0.4 : 0.6) : 0,
            }}
            transition={{
              type: "spring",
              stiffness: isMobile ? 150 : 200,
              damping: isMobile ? 25 : 20,
              mass: isMobile ? 1 : 0.8,
            }}
          >
            <motion.div
              className="rounded-full bg-gradient-to-r from-orange-300 to-orange-500"
              style={{
                width: `${sizes.particle1 * 4}px`,
                height: `${sizes.particle1 * 4}px`,
              }}
              animate={{
                scale: [0.5, 1, 0.5],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: isMobile ? 1.5 : 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Secondary trailing particle */}
          <motion.div
            className="fixed pointer-events-none z-39"
            animate={{
              x: mousePosition.x - sizes.particle2 * 1.5,
              y: mousePosition.y - sizes.particle2 * 1.5,
              opacity: isVisible ? (isMobile ? 0.3 : 0.4) : 0,
            }}
            transition={{
              type: "spring",
              stiffness: isMobile ? 100 : 150,
              damping: isMobile ? 30 : 25,
              mass: isMobile ? 1.2 : 1,
            }}
          >
            <motion.div
              className="rounded-full bg-gradient-to-r from-orange-200 to-orange-400"
              style={{
                width: `${sizes.particle2 * 3}px`,
                height: `${sizes.particle2 * 3}px`,
              }}
              animate={{
                scale: [0.3, 0.8, 0.3],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: isMobile ? 2 : 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </>
      )}

      {/* Subtle glow effect - Only on desktop and larger tablets */}
      {!isMobile && sizes.main > 35 && (
        <motion.div
          className="fixed pointer-events-none z-30"
          animate={{
            x: mousePosition.x - sizes.glow * 2,
            y: mousePosition.y - sizes.glow * 2,
            opacity: isVisible ? 0.1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            mass: 1.2,
          }}
        >
          <motion.div
            className="rounded-full bg-gradient-radial from-orange-400 to-transparent"
            style={{
              width: `${sizes.glow * 4}px`,
              height: `${sizes.glow * 4}px`,
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </>
  );
};

export default MouseFollower;