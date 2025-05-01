'use client';


import Link from 'next/link';
import React from 'react'




const DesktopLinks = () => {



  const [currentHref, setCurrentHref] = React.useState<string | null>(null);



  const links = [
  {
    name: 'The Initiative',
    href: '/#initiative',
    isActie: currentHref?.includes('/#initiative'),
  },
  {
    name: 'Youth Voices',
    href: '/#youth-voices',
    isActie: currentHref?.includes('/#youth-voices'),
  },
  {
    name: 'Youth Call To Policymakers',
    href: '/#policymakers',
    isActie: currentHref?.includes('/#policymakers'),
  },
  {
    name: 'Resources',
    href: '/#resources',
    isActie: currentHref?.includes('/#resources'),
  },
]

  
  return (
    <nav className='flex gap-3 items-center'>
      {links.map((link) => (
        <Link
          onClick={() => setCurrentHref(link.href)}
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
