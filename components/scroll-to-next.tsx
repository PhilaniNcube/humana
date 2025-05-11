'use client'

import { useEffect } from 'react';

const ScrollToNextSection = () => {
  useEffect(() => {
    console.log('ScrollToNextSection: useEffect triggered.');
    if (typeof window === 'undefined') {
      console.log('ScrollToNextSection: Window is undefined, returning.');
      return;
    }

    let observer: IntersectionObserver | null = null;

    const initObserver = () => {
      console.log('ScrollToNextSection: initObserver called.');
      const sectionElements = document.querySelectorAll('section');
      
      if (!sectionElements || sectionElements.length === 0) {
        console.log('ScrollToNextSection: No section elements found after delay.');
        return;
      }

      console.log(`ScrollToNextSection: Found ${sectionElements.length} section elements:`, 
        Array.from(sectionElements).map(el => ({ id: el.id, className: el.className, tagName: el.tagName }))
      );

      const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px', // No margin
        threshold: 0.1 // Callback is run when 10% of the target is visible
      };
      
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const targetDesc = entry.target.id ? `id="${entry.target.id}"` : `class="${entry.target.className || '[no class]'}"`;
          if (entry.isIntersecting) {
            console.log(`ScrollToNextSection: Section IS INTERSECTING: ${targetDesc}`, entry.target);
          } else {
            // console.log(`ScrollToNextSection: Section NOT INTERSECTING: ${targetDesc}`);
          }
        });
      }, observerOptions);
      
      sectionElements.forEach(section => {
        const sectionDesc = section.id ? `id="${section.id}"` : `class="${section.className || '[no class]'}"`;
        console.log(`ScrollToNextSection: Observing element: ${sectionDesc}`, section);
        observer!.observe(section);
      });

      console.log(`ScrollToNextSection: Successfully started observing ${sectionElements.length} section elements.`);
    };

    // Attempt to initialize the observer after a short delay to allow other components to render.
    const initTimeoutId = setTimeout(initObserver, 100); // 100ms delay

    return () => {
      console.log('ScrollToNextSection: Cleanup function running.');
      clearTimeout(initTimeoutId); 
      if (observer) {
        console.log('ScrollToNextSection: Disconnecting IntersectionObserver.');
        observer.disconnect();
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return null; // This component does not render anything
}

export default ScrollToNextSection;
