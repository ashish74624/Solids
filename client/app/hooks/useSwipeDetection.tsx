import { useEffect, useState, RefObject } from 'react';

const useSwipeDetection = (elementRef: RefObject<HTMLElement | null>) => {
  const [swipeDirection, setSwipeDirection] = useState<string | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    let startX: number | null = null;
    let startY: number | null = null;

    const handleTouchStart = (event: TouchEvent) => {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!startX || !startY) {
        return;
      }

      const deltaX = event.touches[0].clientX - startX;
      const deltaY = event.touches[0].clientY - startY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          setSwipeDirection('right');
        } else {
          setSwipeDirection('left');
        }
      }

      startX = null;
      startY = null;
    };

    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchmove', handleTouchMove);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
    };
  }, [elementRef]);

  return swipeDirection;
};

export default useSwipeDetection;
