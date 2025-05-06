'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
}

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({ children }) => {
  const smoother = useRef<ScrollSmoother | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  // Detect touch device on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isTouchCapable = 'ontouchstart' in window || 
        (window.navigator as any).maxTouchPoints > 0 ||
        (window.navigator as any).msMaxTouchPoints > 0;
      
      setIsTouchDevice(isTouchCapable);
    }
  }, []);

  // Expose scroll methods to window for global access
  useEffect(() => {
    if (typeof window !== 'undefined' && isInitialized && smoother.current) {
      // Add global methods to control smooth scrolling
      (window as any).smoothScroller = {
        scrollTo: (target: string | number | HTMLElement) => {
          if (smoother.current) {
            smoother.current.scrollTo(target, true);
          }
        },
        scrollTop: () => {
          if (smoother.current) {
            smoother.current.scrollTop(0);
          }
        },
        refresh: () => {
          ScrollTrigger.refresh(true);
        }
      };
    }
  }, [isInitialized]);

  useEffect(() => {
    // Only initialize on client-side
    if (typeof window === 'undefined') return;
    
    // Add loading class to prevent FOUC
    document.body.classList.add('gsap-init-loading');
    
    // Initialize ScrollTrigger
    ScrollTrigger.refresh();
    
    // Short delay to ensure DOM is fully rendered
    const initTimeout = setTimeout(() => {
      // Create the smoother instance with different settings for touch/non-touch
      smoother.current = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: isTouchDevice ? 0.8 : 1.2, // Less smoothing on touch devices
        effects: true,
        normalizeScroll: true, // Prevents jerky scrolling on iOS
        smoothTouch: isTouchDevice ? 0.1 : 0.5, // Much shorter smoothing time for touch devices
        ignoreMobileResize: true, // Prevents issues when mobile browsers show/hide UI
        speed: 1, // Default scrolling speed multiplier
        ease: "power4.out", // Easing function for smoother deceleration
        onUpdate: (self) => {
          // Add any custom update logic here
          // This runs on every frame during smooth scrolling
        }
      });
      
      // Force a refresh to ensure proper initialization
      ScrollTrigger.refresh(true);
      
      // Remove loading class after initialization
      document.body.classList.remove('gsap-init-loading');
      setIsInitialized(true);
    }, 300);

    return () => {
      // Clean up
      clearTimeout(initTimeout);
      if (smoother.current) {
        smoother.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} className="smooth-wrapper" style={{ overflow: 'hidden', position: 'relative' }}>
      <div 
        ref={contentRef} 
        className={`smooth-content ${!isInitialized ? 'opacity-0' : 'opacity-100'}`}
        style={{ transition: 'opacity 0.3s ease-in', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        {children}
      </div>
    </div>
  );
};

export default SmoothScrollWrapper;
