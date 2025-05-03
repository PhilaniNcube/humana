'use client'

import type React from "react"
import { FileText, Download, BarChart, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(useGSAP, ScrollTrigger)

interface ResourceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  quote?: string
  downloadUrl?: string
}

function ResourceCard({ icon, title, description, quote, downloadUrl }: ResourceCardProps) {
  return (
    <Card className="resource-card h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          {icon}
          <CardTitle className="text-xl text-brand-blue">{title}</CardTitle>
        </div>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {quote && (
          <blockquote className="border-l-4 border-brand-orange pl-4 italic text-gray-600 my-4">"{quote}"</blockquote>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-brand-green hover:bg-green-900 text-white">
          <Download className="mr-2 h-4 w-4" /> Download Report
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function YouthResources() {
  const resourcesRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    const resourcesSection = resourcesRef.current
    
    if (resourcesSection) {
      const heading = resourcesSection.querySelector('h2')
      const cardElements = cardsRef.current?.querySelectorAll('.resource-card')
      const cards = cardElements ? Array.from(cardElements) : []
      
      if (heading && cards.length > 0) {
        // Set initial state (invisible)
        gsap.set(cards, { 
          opacity: 0,
          y: 50
        })
        
        // Create animation that triggers when the h2 comes into viewport
        ScrollTrigger.create({
          trigger: resourcesSection,
          start: "top 80%", // When the section reaches 80% from the top of viewport
          end: "bottom 20%", // When the section bottom passes 20% from the bottom of viewport
          toggleActions: "play reverse restart reverse", // play on enter, reverse on leave, restart on enter back, reverse on leave back
          onEnter: () => {
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power2.out"
            })
          },
          onLeave: () => {
            gsap.to(cards, {
              opacity: 0,
              y: 50,
              duration: 0.6,
              stagger: 0.1,
              ease: "power1.in",
              reversed: true
            })
          },
          onEnterBack: () => {
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power2.out"
            })
          },
          onLeaveBack: () => {
            gsap.to(cards, {
              opacity: 0,
              y: 50,
              duration: 0.6,
              stagger: 0.1,
              ease: "power1.in"
            })
          }
        })
      }
    }
  }, [])

  return (
    <div className="container mx-auto py-12 px-[60px]" id='resources' ref={resourcesRef}>
      <h2 className='text-5xl text-center font-bold text-brand-blue uppercase'>Resources</h2>
      <svg className='text-center w-fit mx-auto mt-4' width="112" height="9" viewBox="0 0 112 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="112" height="9" fill="#F38E22" />
      </svg>
      <div className="mt-8 text-center max-w-3xl mx-auto">
        <p className="">
          Want to know more? Download here the full reports of the Africa Skills Revolution Campaign. Each resource
          captures critical insights, youth-led recommendations, and powerful evidence to inform policy, practice, and
          future programming.
        </p>
        <p className=" mt-4">
          Whether you're a policymaker, educator, or development partner, these tools are designed to support more
          inclusive, responsive, and impactful TVET systems across Africa.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10" ref={cardsRef}>
        <ResourceCard
          icon={<FileText className="h-8 w-8 text-brand-orange" />}
          title="Hearing the Voices of Young People"
          description="This flagship report brings together powerful stories, data, and policy insights from the 2024 Africa Skills Revolution Campaign. It highlights the lived experiences of young people across the continent who are using TVET to build careers, solve local challenges, and drive social change."
          quote="It's more than a report — it's a youth-led roadmap for reimagining the future of work in Africa."
          downloadUrl="#"
        />

        <ResourceCard
          icon={<FileCheck className="h-8 w-8 text-brand-orange" />}
          title="Youth Call to Policymakers"
          description="This policy brief captures the voices of over 350 young Africans who shared their insights through the Make Yourself Heard survey. It highlights what youth want from TVET: education that is inclusive, practical, and aligned with the realities of their lives and future industries."
          quote="Put us, the youth, at the centre of the TVET revolution in Africa."
          downloadUrl="#"
        />

        <ResourceCard
          icon={<BarChart className="h-8 w-8 text-brand-orange" />}
          title="How the Youth View TVET in Africa"
          description="This one-pager offers a snapshot of the Make Yourself Heard survey findings — spotlighting the priorities, challenges, and aspirations of young Africans in TVET. It captures where participants came from, what skills they value most, and the barriers they face."
          quote="Explore the numbers. Understand the need. Join the revolution."
          downloadUrl="#"
        />
      </div>
    </div>
  )
}
