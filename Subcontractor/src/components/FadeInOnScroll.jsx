import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './FadeInOnScroll.css';

const FadeInOnScroll = ({ children }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  // Updated Intersection Observer logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else if (window.innerWidth > 768) {
          // Only reset animation when out of view on larger screens
          setInView(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Lowered threshold to be more responsive
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Updated animation configuration
  const stylesAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(30px)', // Slightly increased the offset
    config: { tension: 200, friction: 30 },
  });

  return (
    <animated.div ref={ref} style={stylesAnimation} className="fadeIn">
      {children}
    </animated.div>
  );
};

export default FadeInOnScroll;
