'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DesktopLinks from './desktop-links'
import { useIsMobile } from '@/hooks/use-mobile'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import { Slot } from '@radix-ui/react-slot'
import MobileLinks from './mobile-links'

const DesktopNavigation = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="py-5 px-4 md:px-4 lg:px-[40px] flex items-center justify-between container mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/nepad-logo.png"
            alt="logo"
            width={1037}
            height={240}
            className="w-[120px] md:w-[180px] lg:w-[247px] object-cover"
          />
          <span className="sr-only">AUDA-Nepad</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <DesktopLinks />
        </div>
        
        {/* Mobile Navigation */}
        <div className="block md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button aria-label="Toggle menu" className="p-2">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="!w-full !max-w-full sm:!max-w-full"
            >
              <div className="py-6">
                <Link href="/" className="flex items-center justify-center mb-6">
                  <Image
                    src="/images/nepad-logo.png"
                    alt="logo"
                    width={1037}
                    height={240}
                    className="w-[180px] object-cover"
                  />
                </Link>
                <MobileLinks onClose={() => setIsOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <Link href="/" className="flex items-center">
          <Image
            src="/images/humana-logo.png"
            alt="logo"
            width={668}
            height={285}
            className="w-[100px] md:w-[130px] lg:w-[160px] object-cover"
          />
          <span className="sr-only">AUDA-Nepad</span>
        </Link>
      </div>
    </header>
  )
}

export default DesktopNavigation
