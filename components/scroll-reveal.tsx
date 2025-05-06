'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom' | 'none';
  delay?: number;
  duration?: number;
  threshold?: number; // 0-1, percentage of element visible before triggering
  className?: string;
  once?: boolean;
}

/**
 * ScrollReveal component - Animates elements when they enter the viewport
 */
const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade',
  delay = 0,
  duration = 0.8,
  threshold = 0.2,
  className = '',
  once = true
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  
  useEffect(() => {
    if (typeof window === 'undefined' || !elementRef.current) return;
    
    // Animation configurations
    const animations = {
      'fade': { opacity: 0, y: 0 },
      'slide-up': { opacity: 0, y: 50 },
      'slide-down': { opacity: 0, y: -50 },
      'slide-left': { opacity: 0, x: 50 },
      'slide-right': { opacity: 0, x: -50 },
      'zoom': { opacity: 0, scale: 0.9 },
      'none': {}
    };
    
    // Apply initial state
    const initialState = animations[animation];
    if (animation !== 'none') {
      gsap.set(elementRef.current, initialState);
    }
    
    // Create animation
    const createAnimation = () => {
      if (!elementRef.current) return;
      
      const animateIn = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: duration,
        delay: delay,
        ease: 'power2.out'
      };
      
      // Create ScrollTrigger
      triggerRef.current = ScrollTrigger.create({
        trigger: elementRef.current,
        start: `top bottom-=${threshold * 100}%`,
        onEnter: () => gsap.to(elementRef.current, animateIn),
        once: once
      });
      
      // If not once, also trigger when scrolling back up
      if (!once) {
        ScrollTrigger.create({
          trigger: elementRef.current,
          start: 'top bottom',
          onLeaveBack: () => gsap.to(elementRef.current, initialState)
        });
      }
    };
    
    // Small delay to ensure ScrollSmoother is initialized first
    const initTimeout = setTimeout(createAnimation, 100);
    
    return () => {
      clearTimeout(initTimeout);
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
    };
  }, [animation, delay, duration, threshold, once]);
  
  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
