"use client";

import Link from "next/link";
import React from "react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const DesktopLinks = () => {
  const [currentHref, setCurrentHref] = React.useState<string | null>(null);
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Set up scroll triggers for each section
    links.forEach((link) => {
      ScrollTrigger.create({
        trigger: `#${link.id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(link.id),
        onEnterBack: () => setActiveSection(link.id),
      });
    });

    return () => {
      // Clean up scroll triggers when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // write a function to scroll to the section when the link is clicked
  const scrollToSection = (id: string) => {
    gsap.to(window, {
      scrollTo: {
        y: id,
        autoKill: false,
        offsetY: 100,
      },
      duration: 1,
      ease: "power2.inOut",
    });
  };

  const links = [
    {
      name: "The Initiative",
      href: "/#initiative",
      id: "initiative",
    },
    {
      name: "Youth Voices",
      href: "/#youth",
      id: "youth",
    },
    {
      name: "Youth Call To Policymakers",
      href: "/#policymakers",
      id: "policymakers",
    },
    {
      name: "Resources",
      href: "/#resources",
      id: "resources",
    },
  ];

  return (
    <nav className="flex gap-3 items-center">
      {links.map((link) => (
        <Link
          onClick={() => {
            setCurrentHref(link.href);
            scrollToSection(`#${link.id}`);
          }}
          key={link.name}
          href={link.href}
          className={`
            text-[14px] lg:text-[16px] transition-all uppercase duration-300 px-3 py-1 rounded-md
            ${
              activeSection === link.id
                ? "bg-brand-orange text-white rounded-none"
                : "text-[#000] hover:text-[#F9A800]"
            }
          `}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopLinks;
