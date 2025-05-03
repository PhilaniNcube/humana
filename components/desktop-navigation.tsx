import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DesktopLinks from './desktop-links'

const DesktopNavigation = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="py-5 px-[60px] flex items-center justify-between container mx-auto ">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/nepad-logo.png"
            alt="logo"
            width={1037}
            height={240}
            className="w-[247px] object-cover"
          />
          <span className="sr-only">AUDA-Nepad</span>
        </Link>
        <DesktopLinks />
        <Link href="/" className="flex items-center">
          <Image
            src="/images/humana-logo.png"
            alt="logo"
            width={668}
            height={285}
            className="w-[160px]  object-cover"
          />
          <span className="sr-only">AUDA-Nepad</span>
        </Link>
      </div>

    </header>
  )
}

export default DesktopNavigation
