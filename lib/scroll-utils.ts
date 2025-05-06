'use client';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin);
}

/**
 * Scroll to a specific element with animation
 * @param target Element ID, element reference, or scroll position
 * @param duration Animation duration in seconds
 * @param offset Offset from the target in pixels
 */
export const scrollToElement = (
  target: string | HTMLElement | number,
  duration: number = 1,
  offset: number = 0
) => {
  if (typeof window === 'undefined') return;
  
  if (window.smoothScroller) {
    window.smoothScroller.scrollTo(target);
    return;
  }
  
  // Fallback to regular GSAP scrolling
  gsap.to(window, {
    duration,
    scrollTo: {
      y: target,
      offsetY: offset,
      autoKill: false
    },
    ease: 'power3.out'
  });
};

/**
 * Scroll to the top of the page with animation
 * @param duration Animation duration in seconds
 */
export const scrollToTop = (duration: number = 1) => {
  if (typeof window === 'undefined') return;
  
  if (window.smoothScroller) {
    window.smoothScroller.scrollTop();
    return;
  }
  
  // Fallback to regular GSAP scrolling
  gsap.to(window, {
    duration,
    scrollTo: {
      y: 0,
      autoKill: false
    },
    ease: 'power3.out'
  });
};

// Add smoothScroller to global Window interface
declare global {
  interface Window {
    smoothScroller?: {
      scrollTo: (target: string | number | HTMLElement) => void;
      scrollTop: () => void;
      refresh: () => void;
    };
  }
}
