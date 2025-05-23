"use client";

import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Package,
  RotateCw,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "./ui/button";
import "../styles/card-flip.css";

// Story props interface
export interface StoryProps {
  name: string;
  sector: string;
  innovation: string;
  country: string;
  flag: string;
  image: string;
  story: string;
  video: string;
}

const StoryCard: React.FC<{ story: StoryProps }> = ({ story }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [manualFlip, setManualFlip] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useIsMobile();

  // Determine if card should be flipped based on hover state (desktop) or manual flip (mobile)
  const isFlipped = isMobile ? manualFlip : isHovering;

  // Mobile-specific animation hints
  const [showMobileHint, setShowMobileHint] = useState(true);

  // Hide the mobile hint after the component mounts
  React.useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        setShowMobileHint(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  return (
    <>
      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .story-card-container:hover .flip-hint {
          opacity: 1;
        }
        .story-card-container:hover .front-card {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transform: translateY(-4px);
        }
        .front-card,
        .back-card {
          transition: all 0.3s ease;
        }

        /* Mobile card flip animation */
        @keyframes mobile-card-hint {
          0% {
            transform: rotateY(0deg);
          }
          25% {
            transform: rotateY(10deg);
          }
          75% {
            transform: rotateY(-10deg);
          }
          100% {
            transform: rotateY(0deg);
          }
        }

        .mobile-card-hint-animation {
          animation: mobile-card-hint 1.5s ease-in-out;
        }
      `}</style>{" "}
      <div
        className="story-card-container h-[500px] w-full sm:w-1/2 lg:w-3/10 flex-shrink-0 flex-grow-0 group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => isMobile && setManualFlip(!manualFlip)}
        onTouchEnd={(e) => {
          if (isMobile) {
            e.preventDefault();
            setManualFlip(!manualFlip);
          }
        }}
      >
        <div
          className={`card-inner ${
            isMobile && showMobileHint ? "mobile-card-hint-animation" : ""
          }`}
          style={{
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front of the card - Avatar, Name, Country Flag, Sector & Innovation */}
          <Card
            className="absolute w-full h-full flex flex-col justify-between p-6 shadow-lg rounded-lg cursor-pointer front-card"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex justify-between space-x-3 relative">
              <div className="flex justify-end absolute top-0 -right-4">
                <Image
                  src={story.flag}
                  alt={story.country}
                  width={1000}
                  height={1000}
                  className="w-12 object-cover"
                />
              </div>
              <div className="flex space-x-3">
                <Avatar className="bg-brand-blue h-16 w-16">
                  <AvatarImage
                    src={story.image}
                    alt={story.name}
                    className="w-full aspect-square h-full object-cover"
                    width={1000}
                    height={1000}
                  />
                </Avatar>
                <div className="flex flex-col min-h-[90px]">
                  <h4 className="text-2xl lg:text-3xl font-bold w-5/6">
                    {story.name}
                  </h4>
                </div>
              </div>
            </div>

            <div className="mt-8 flex-grow">
              {!isMobile && (
                <div className="flex justify-end mb-2">
                  <span className="text-xs text-gray-500 italic flex items-center flip-hint opacity-70 transition-opacity duration-300">
                    <RotateCw className="mr-1 h-3 w-3 animate-spin-slow" />
                    Hover to flip
                  </span>
                </div>
              )}
              <Badge className="bg-brand-orange rounded-full text-sm text-white">
                <Package className="mr-1" />
                Sector
              </Badge>
              <p className="my-2 text-md">{story.sector}</p>
              <Badge className="bg-brand-orange rounded-full text-md text-white">
                <Lightbulb className="mr-1" />
                Innovation
              </Badge>
              <p className="my-2 text-md">{story.innovation}</p>
            </div>

            <div className="mt-auto space-y-4">
              {isMobile && (
                <div className="space-y-2">
                  <div className="text-xs text-center text-gray-500 mb-1">
                    Tap card to flip
                  </div>
                  <Button
                    className="flex items-center justify-center bg-brand-blue text-white rounded-full font-medium w-full"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the card's onClick from triggering
                      setManualFlip(true);
                    }}
                  >
                    <span>Read Their Story</span>
                    <RotateCw className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}

              <Link
                target="_blank"
                href={story.video}
                className="bg-brand-red py-2 text-white w-full rounded-md flex items-center justify-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
                    fill="white"
                  />
                </svg>
                <span className="ml-2">Watch Their Story</span>
              </Link>
            </div>
          </Card>

          {/* Back of the card - Story */}
          <Card
            className="absolute w-full h-full flex flex-col justify-between p-6 bg-brand-blue text-white shadow-lg rounded-lg"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="flex justify-between items-start">
              <h4 className="text-2xl font-bold mb-4">{story.name}'s Story</h4>
              <Image
                src={story.flag}
                alt={story.country}
                width={1000}
                height={1000}
                className="w-8 object-cover"
              />
            </div>

            <div className="story-content flex-grow overflow-auto pr-2 my-4">
              {isMobile ? (
                <div>
                  <div
                    className="transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: isExpanded ? "1000px" : "120px",
                      overflow: "hidden",
                    }}
                  >
                    <p className="leading-7 italic">{story.story}</p>
                  </div>
                  <Button
                    variant="ghost"
                    className="flex items-center text-white mt-2 rounded-full text-sm font-medium cursor-pointer hover:bg-brand-blue/80 w-full justify-center transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the card's onClick from triggering
                      setIsExpanded(!isExpanded);
                    }}
                  >
                    {isExpanded ? (
                      <>
                        <span>Read less</span>
                        <ChevronUp className="ml-1 h-4 w-4 animate-pulse" />
                      </>
                    ) : (
                      <>
                        <span>Read more</span>
                        <ChevronDown className="ml-1 h-4 w-4 animate-bounce" />
                      </>
                    )}
                  </Button>
                </div>
              ) : (
                <p className="leading-7 italic">{story.story}</p>
              )}
            </div>

            <div className="flex justify-between mt-auto">
              {isMobile && (
                <div className="space-y-2">
                  <div className="text-xs text-center text-gray-500 mb-1">
                    Tap card to flip back
                  </div>
                  <Button
                    className="bg-white text-brand-blue hover:bg-gray-100"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the card's onClick from triggering
                      setManualFlip(false);
                    }}
                  >
                    <RotateCw className="mr-2 h-4 w-4" />
                    <span>Flip Back</span>
                  </Button>
                </div>
              )}

              <Link
                target="_blank"
                href={story.video}
                className="bg-brand-red py-2 px-4 text-white rounded-md flex items-center justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
                    fill="white"
                  />
                </svg>
                <span className="ml-1 text-sm">Watch</span>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default StoryCard;
