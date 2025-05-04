'use client';

import Link from 'next/link';
import React from 'react';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { SheetClose } from './ui/sheet';
import { Slot } from '@radix-ui/react-slot';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const MobileLinks = ({ onClose }: { onClose: () => void }) => {
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Set up scroll triggers for each section
    links.forEach((link) => {
      ScrollTrigger.create({
        trigger: `#${link.id}`,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(link.id),
        onEnterBack: () => setActiveSection(link.id),
      });
    });

    return () => {
      // Clean up scroll triggers when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Function to scroll to the section when the link is clicked
  const scrollToSection = (id: string) => {
    gsap.to(window, {
      scrollTo: {
        y: id,
        autoKill: false,
        offsetY: 100,
      },
      duration: 1,
      ease: 'power2.inOut',
    });
  };

  const links = [
    {
      name: 'The Initiative',
      href: '/#initiative',
      id: 'initiative',
    },
    {
      name: 'Youth Voices',
      href: '/#youth',
      id: 'youth',
    },
    {
      name: 'Youth Call To Policymakers',
      href: '/#policymakers',
      id: 'policymakers',
    },
    {
      name: 'Resources',
      href: '/#resources',
      id: 'resources',
    },
  ];

  return (
    <nav className='flex flex-col space-y-4 p-4'>
      {links.map((link) => (
        <SheetClose asChild key={link.name}>
          <Link
            onClick={() => {
              scrollToSection(`#${link.id}`);
              onClose();
            }}
            href={link.href}
            className={`
              text-lg font-medium uppercase transition-all duration-300 px-3 py-3 rounded-md w-full block
              ${
                activeSection === link.id
                  ? 'bg-brand-orange text-white'
                  : 'text-[#000] hover:bg-gray-100'
              }
            `}
          >
            {link.name}
          </Link>
        </SheetClose>
      ))}
    </nav>
  );
};

export default MobileLinks;
