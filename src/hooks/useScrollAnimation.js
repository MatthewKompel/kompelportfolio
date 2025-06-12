import { useEffect, useRef } from 'react';

const useScrollAnimation = (animationType = 'fade-in', threshold = 0.1) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      currentElement.classList.add(animationType);
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [animationType, threshold]);

  return elementRef;
};

export default useScrollAnimation;
