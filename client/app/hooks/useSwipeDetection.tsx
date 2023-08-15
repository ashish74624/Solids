import { useEffect, RefObject } from 'react';

const detectSwipe = (element: HTMLElement | null, onSwipeLeft: () => void, onSwipeRight: () => void) => {
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
        onSwipeRight();
      } else {
        onSwipeLeft();
      }
    }

    startX = null;
    startY = null;
  };

  if (element) {
    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchmove', handleTouchMove);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
    };
  }
};

export default detectSwipe;
