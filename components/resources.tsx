"use client";

import type React from "react";
import {
  FileText,
  Download,
  BarChart,
  FileCheck,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useIsMobile } from "@/hooks/use-mobile";
import { scrollToElement } from "@/lib/scroll-utils";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  quote?: string;
  downloadUrl: string;
  imageSrc: string;
  btnText?: string;
  main: boolean;
}

function ResourceCard({
  icon,
  title,
  description,
  quote,
  downloadUrl,
  main,
  imageSrc,
  btnText = "Download Report",
}: ResourceCardProps) {
  return (
    <Card
      className={`resource-card overflow-hidden h-full grid grid-rows-[300px_auto_1fr_auto] pt-0 ${
        main ? "bg-brand-orange" : ""
      }`}
    >
      <img
        src={imageSrc}
        alt={`${title} image`}
        className="h-full w-full object-cover"
      />
      <CardHeader
        className={`grid grid-rows-subgrid row-span-2 ${
          main ? "text-white" : ""
        }`}
      >
        <CardTitle
          className={`text-xl ${main ? "text-white" : "text-brand-blue"}`}
        >
          {title}
        </CardTitle>

        <CardDescription className={`text-base ${main ? "text-white" : ""}`}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* {quote && (
          <blockquote className="border-l-4 border-brand-orange pl-4 italic text-gray-600 my-4">
            "{quote}"
          </blockquote>
        )} */}
      </CardContent>
      <CardFooter>
        <Link
          href={downloadUrl!}
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
          className="w-full cursor-pointer"
        >
          <Button
            className={`w-full py-6 ${
              main
                ? "bg-white text-brand-orange hover:bg-gray-100"
                : "bg-brand-green hover:bg-green-900 text-white"
            }`}
          >
            <Download className="mr-2 h-4 w-4" /> {btnText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default function YouthResources() {
  const resourcesRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useGSAP(() => {
    // Skip animations on mobile devices
    if (isMobile) return;

    const resourcesSection = resourcesRef.current;

    if (resourcesSection) {
      const heading = resourcesSection.querySelector("h2");
      const cardElements = cardsRef.current?.querySelectorAll(".resource-card");
      const cards = cardElements ? Array.from(cardElements) : [];

      if (heading && cards.length > 0) {
        // Set initial state (invisible)
        gsap.set(cards, {
          opacity: 0,
          y: 50,
        });

        // Create animation that triggers when the h2 comes into viewport
        ScrollTrigger.create({
          trigger: resourcesSection,
          start: "top 10%", // When the section reaches 80% from the top of viewport
          end: "bottom 20%", // When the section bottom passes 20% from the bottom of viewport
          toggleActions: "play reverse restart reverse", // play on enter, reverse on leave, restart on enter back, reverse on leave back
          onEnter: () => {
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power2.out",
            });
          },
          onLeave: () => {
            gsap.to(cards, {
              opacity: 0,
              y: 50,
              duration: 0.6,
              stagger: 0.1,
              ease: "power1.in",
              reversed: true,
            });
          },
          onEnterBack: () => {
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(cards, {
              opacity: 0,
              y: 50,
              duration: 0.6,
              stagger: 0.1,
              ease: "power1.in",
            });
          },
        });
      }
    }
  }, [isMobile]); // Add isMobile as a dependency so the effect reruns if mobile status changes

  return (
    <section
      id="resources"
      className="bg-stone-100 pt-16 pb-24 relative isolate"
    >
      <ChevronDown
        className="text-white absolute top-10 right-10 bg-brand-blue h-12 w-12 rounded-full"
        onClick={() => scrollToElement("initiative")}
      />
      <div className="container mx-auto px-4 lg:px-[40px]" ref={resourcesRef}>
        <h2 className="text-5xl text-center font-bold text-brand-blue uppercase">
          Resources
        </h2>
        <svg
          className="text-center w-fit mx-auto mt-4 mb-8"
          width="112"
          height="9"
          viewBox="0 0 112 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="112" height="9" fill="#F38E22" />
        </svg>
        <p className="text-xl lg:text-3xl text-brand-green mx-auto text-balance font-light text-center lg:leading-10 mt-10">
          <strong>Want to know more?</strong>
          <br />
          Download below the full Youth Voices Report, which captures critical
          insights, youth-led recommendations, and powerful evidence to inform
          policy, practice, and future programming. Whether you're a
          policymaker, educator, or development partner, this report is designed
          to support more inclusive, responsive, and impactful TVET systems
          across Africa.
        </p>
        <div
          className={`grid lg:grid-cols-3 gap-6 mt-10 ${
            isMobile ? "opacity-100" : ""
          }`}
          ref={cardsRef}
        >
          <div className="lg:transform lg:translate-y-20">
            {" "}
            <ResourceCard
              icon={<FileCheck className="h-8 w-8 text-brand-orange" />}
              imageSrc="/images/call-to-policy-makers.png"
              title="Youth Call to Policymakers"
              description="A concise summary of key policy recommendations, highlighting youth calls to action for policymakers to strengthen TVET systems across Africa and position young people as co-creators of a more equitable, innovative, and resilient future."
              quote="Put us, the youth, at the centre of the TVET revolution in Africa."
              downloadUrl="https://drive.google.com/file/d/1oUVUzY4Dh9gX11BHomssO75IuiSbeeOK/view?usp=sharing"
              btnText="Download Policy Brief"
              main={false}
            />{" "}
          </div>
          <ResourceCard
            icon={<FileText className="h-8 w-8 text-brand-orange" />}
            imageSrc="/images/skills-revolution.png"
            title="Youth Voices Report"
            description="This flagship report brings together powerful stories, data, and policy insights from the 2024 Africa Skills Revolution Initiative. It highlights the lived experiences of young people across the continent who are using TVET to build careers, solve local challenges, and drive social change.
            Through in-depth survey findings, youth profiles, and clear recommendations, the report offers a holistic view of what's working — and what must change — to make skills development more inclusive, impactful, and future-ready."
            quote="It's more than a report — it's a youth-led roadmap for reimagining the future of work in Africa."
            downloadUrl="https://drive.google.com/file/d/1eHXSITwpUvmOt0Cj_pDEpUWLSeX4Iaz5/view?usp=sharing"
            btnText="Download Full Report"
            main={true}
          />

          <div className="lg:transform lg:translate-y-20">
            <ResourceCard
              icon={<BarChart className="h-8 w-8 text-brand-orange" />}
              imageSrc="/images/tvet-in-africa.png"
              title="Youth Voices Snapshot"
              description="This one-page visual summary distills key data and insights from the Make Yourself Heard survey responses. It highlights youth priorities, valued skills, common challenges to access vocational education, as well as career barriers and enablers."
              quote="Explore the numbers. Understand the need. Join the revolution."
              downloadUrl="https://drive.google.com/file/d/1n0k1CNJLUhmb1t2H5DRxGNA-iBSfyoyE/view?usp=sharing"
              btnText="Download Infographic"
              main={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
