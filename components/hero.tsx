import { bebasNeue } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-brand-orange">
      <div className="px-[60px] pt-36 text-center flex flex-col items-center w-full h-full">
        <h1 className={cn(bebasNeue.className, 'text-6xl lg:text-[76px] text-center text-white')}>
          Africa Skills Revolution</h1>
        <p className='text-muted text-3xl font-light'>
          Putting youth at the centre of the TVET revolution across the continent
        </p>
        <div className="flex items-center justify-center mt-10">
          <Button className='bg-brand-blue text-white text-2xl px-20 py-2.5 font-light rounded-sm'>Introduction</Button>
        </div>
        <div className="overflow-hidden">
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
