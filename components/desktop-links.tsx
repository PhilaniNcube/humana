'use client';


import Link from 'next/link';
import React from 'react'
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';


gsap.registerPlugin( ScrollTrigger, ScrollToPlugin);





const DesktopLinks = () => {





  const [currentHref, setCurrentHref] = React.useState<string | null>(null);

  // write a function to scroll to the section when the link is clicked
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

  }





  const links = [
  {
    name: 'The Initiative',
    href: '/#initiative',
    isActie: currentHref?.includes('/#initiative'),
    id: 'initiative',
  },
  {
    name: 'Youth Voices',
    href: '/#youth',
    isActie: currentHref?.includes('/#youth'),
    id: 'youth',
  },
  {
    name: 'Youth Call To Policymakers',
    href: '/#policymakers',
    isActie: currentHref?.includes('/#policymakers'),
    id: 'policymakers',
  },
  {
    name: 'Resources',
    href: '/#resources',
    isActie: currentHref?.includes('/#resources'),
    id: 'resources',
  },
]

  
  return (
    <nav className='flex gap-3 items-center'>
      {links.map((link) => (
        <Link
          onClick={() => {

            setCurrentHref(link.href);
            scrollToSection(`#${link.id}`);
          }}
          key={link.name}
          href={link.href}
          className={`uppercase ${link.isActie ? 'text-[#F9A800]' : 'text-[#000]'} text-[16px] font-[500] hover:text-[#F9A800] transition-all duration-300`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default DesktopLinks
