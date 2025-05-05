'use client';

import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';
import { Avatar, AvatarImage } from './ui/avatar';
import { ChevronDown, ChevronUp, Lightbulb, Package } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from './ui/button';

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
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();
  
  // Define the story content with conditional rendering
  const storyContent = () => {
    if (!isMobile || isExpanded) {
      return story.story;
    } else {
      // Show only first 100 characters on mobile when collapsed
      return story.story.slice(0, 100) + '...';
    }
  };

  return (
    <Card className='flex flex-col justify-between isolate'>
      <CardHeader className=''>
        <div className='flex justify-between space-x-3 relative isolate z-[-2]'>
          <div className='flex justify-end absolute top-0 -right-4 '>
            <Image
              src={story.flag}
              alt={story.name}
              width={1000}
              height={1000}
              className='w-12 object-cover'
            />
          </div>
          <div className='flex space-x-3'>
            <Avatar className='bg-brand-blue h-16 w-16'>
              <AvatarImage
                src={story.image}
                alt={story.name}
                className='w-full aspect-square h-full object-cover '
                width={1000}
                height={1000}
              />
            </Avatar>

            <div className='flex flex-col min-h-[90px]'>
              <h4 className='text-2xl lg:text-3xl font-bold w-5/6'>
                {story.name}
              </h4>
            </div>
          </div>
        </div>
        <div className='md:min-h-[150px] '>
          <Badge className='bg-brand-orange mt-3 rounded-full text-sm text-white'>
            <Package className='mr-1' />
            Sector
          </Badge>
          <p className='my-2 text-md'>{story.sector}</p>
          <Badge className='bg-brand-orange rounded-full text-md text-white'>
            <Lightbulb className='mr-1' />
            Innovation
          </Badge>
          <p className='my-2 text-md'>
            {story.innovation}
          </p>
        </div>
      </CardHeader>
      <CardContent className='flex flex-col justify-between h-full'>
        <div className='flex flex-col h-full flex-1 '>
          <div className='lg:bg-brand-blue lg:text-white rounded-2xl lg:p-3 text-sm lg:text-md overflow-hidden'>
            <div 
              className='transition-all duration-500 ease-in-out'
              style={{ 
                maxHeight: (!isMobile || isExpanded) ? '1000px' : '100px',
                overflow: 'hidden'
              }}
            >
              <p className='leading-7 italic'>{story.story}</p>
            </div>
            {isMobile && (
              <Button 
                className='flex items-center bg-brand-blue text-white mt-2 rounded-full text-sm font-medium cursor-pointer hover:underline'
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <>
                    <span>Read less</span>
                    <ChevronUp className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    <span>Read more</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </div>
          <div className='flex flex-1 z-[2] h-full flex-col justify-end'>
            <Link target='_blank' href={story.video} className='bg-brand-red py-2 place-self cursor-pointer text-white w-full mt-4 rounded-md flex items-center justify-center'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" fill="white" />
              </svg>
              <span className='ml-2'>Watch Their Story</span>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
