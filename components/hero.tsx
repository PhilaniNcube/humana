import { bebasNeue } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-brand-orange relative isolate">
   

      <div className="px-4 lg:px-[40px] pt-40 text-center flex flex-col items-center w-full h-full">
        <h1 className={cn(bebasNeue.className, 'text-6xl lg:text-[88px] text-center text-white')}>
          Africa Skills Revolution</h1>
        <p className='text-muted text-3xl md:text-4xl text-balance max-w-5xl mx-auto font-light'>
          Putting youth at the centre of the TVET revolution across the continent
        </p>
      
        <div className=" relative isolate">
          <svg className='absolute -top-24 left-40 z-[-1] rotate-45' id='triangles' width="451" height="400" viewBox="0 0 451 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M152.5 253.499L0 310.999L183.5 366.499L152.5 253.499Z" fill="#D9D9D9" />
            <path d="M434.5 144.999L162.5 217.499L349 302.499L434.5 144.999Z" fill="#F38E22" />
            <path d="M364.715 140.308L450.172 0.683103L308.449 38.1447L364.715 140.308Z" fill="#00651B" />
            <path d="M231 399.499L221 315.499L278.5 363.499L231 399.499Z" fill="#00B6CC" />
          </svg>
          <Image
            src="/images/humana-hero.png"
            alt="hero"
            width={2480}
            height={1469}
            className="w-[70vw] max-w-[1100px] mx-auto object-cover object-bottom"
          />
        </div>


      </div>
    </section>
  )
}

export default Hero
