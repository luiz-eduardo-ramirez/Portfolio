import React, { useEffect, useRef, useState } from 'react';

const AnimateOnScroll = ({
  children,
  animation = 'animate-fade-in',
  delay = 0,
  duration = 0,
  triggerOnce = true,
  className = '',
  rootMargin = '0px 0px -50px 0px',
  threshold = 0.1,
  as: Component = 'div'
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(currentRef);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [triggerOnce, rootMargin, threshold]);

  const style = {
    animationDelay: delay ? `${delay}ms` : undefined,
    animationDuration: duration ? `${duration}ms` : undefined,
  };

  return (
    <Component
      ref={ref}
      style={style}
      className={`${isVisible ? animation : 'opacity-0'} ${className}`}
    >
      {children}
    </Component>
  );
};

export default AnimateOnScroll;
