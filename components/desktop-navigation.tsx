import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DesktopLinks from './desktop-links'

const DesktopNavigation = () => {
  return (
    <header className="bg-white z-50 sticky top-0 left-0 right-0 shadow-md">
      <div className="py-5 px-[60px] flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/nepad-logo.png"
            alt="logo"
            width={100}
            height={100}
            className="w-[247px] object-cover"
          />
          <span className="sr-only">AUDA-Nepad</span>
        </Link>
        <DesktopLinks />
        <Link href="/" className="flex items-center">
          <Image
            src="/images/humana-logo.png"
            alt="logo"
            width={100}
            height={100}
            className="w-[160px]  object-cover"
          />
          <span className="sr-only">AUDA-Nepad</span>
        </Link>
      </div>

    </header>
  )
}

export default DesktopNavigation
