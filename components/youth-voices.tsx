import { bebasNeue } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Lightbulb, Package } from 'lucide-react'
import { Button } from './ui/button'

const YouthVoices = () => {
  return (
    <section id='youth' className='mb-16'>
      <div className='px-[60px] pt-20 max-w-7xl mx-auto'>
        <h2 className='text-5xl text-center font-bold text-brand-blue uppercase'>Youth Voices</h2>
        <svg className='text-center w-fit mx-auto mt-4' width="112" height="9" viewBox="0 0 112 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="112" height="9" fill="#F38E22" />
        </svg>

        <p className='text-3xl max-w-5xl mx-auto text-balance  font-light text-center mt-4'>
          The Africa Skills Revolution stands as a powerful testament to the potential of young people when they are empowered with the right tools, opportunities, and platforms to lead.    </p>

        <svg className='w-fit mx-auto mt-12' width="141" height="89" viewBox="0 0 141 89" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M34.4526 26.1583L70.5001 62.2058L106.548 26.1583" stroke="#F38E22" strokeWidth="3.19005" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <p className='text-3xl max-w-5xl mx-auto text-balance  font-light text-center mt-10'>
          Discover the insights gathered from the advocacy campaign, the competition, and the youth survey — now forming a powerful foundation for action. These findings reflect the real experiences, challenges, and aspirations of young people across Africa.
        </p>
        <p className='text-3xl max-w-5xl mx-auto text-balance  font-light text-center mt-10'>Their voices won’t be left behind, they’re being brought to the heart of the conversation on TVET and skills development. </p>

        <svg className='w-fit mx-auto mt-12' width="141" height="89" viewBox="0 0 141 89" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M34.4526 26.1583L70.5001 62.2058L106.548 26.1583" stroke="#F38E22" strokeWidth="3.19005" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div className='w-full grid lg:grid-cols-2 gap-10  mx-auto'>
          <div className='flex flex-col justify-center'>
            <h3 className={cn(bebasNeue.className, 'text-brand-blue text-6xl text-balance')}>PERCEPTIONS AND MOTIVATIONS BEHIND TVET</h3>
            <p className='leading-7 mt-8 max-w-xl'>
              Understanding the motivations driving young Africans to pursue TVET is foundational to addressing barriers, enhancing accessibility, and designing systems that resonate with their aspirations.
            </p>

          </div>
          <div className='flex justify-end'>
            <Image
              src="/images/vocational.png"
              alt="Vocational"
              width={1000}
              height={1000}
              className="w-full object-cover object-bottom mt-10"
            />
          </div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
          <Image
            src="/images/job-stat.png"
            alt="Jobs"
            width={784}
            height={302}
            className="w-full object-cover object-bottom mt-10 self-end"
          />
          <Image
            src="/images/practical-training.png"
            alt="Jobs"
            width={476}
            height={180}
            className="w-full object-cover object-bottom mt-10 self-end"
          />
          <Image
            src="/images/tvet-1.png"
            alt="Jobs"
            width={522}
            height={316}
            className="w-full object-cover object-bottom mt-10 self-end"
          />
          <Image
            src="/images/tvet-1.png"
            alt="Jobs"
            width={522}
            height={316}
            className="w-full object-cover object-bottom mt-10 self-end"
          />
        </div>
        <svg className='w-fit mx-auto mt-12' width="141" height="89" viewBox="0 0 141 89" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M34.4526 26.1583L70.5001 62.2058L106.548 26.1583" stroke="#F38E22" strokeWidth="3.19005" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div>
          <h4 className='text-center uppercase text-4xl mt-16 font-bold'>Stories</h4>
          <div className='h-1 rounded-full max-w-3xl mx-auto bg-brand-orange gap-6 my-10' />

          <div className='grid lg:grid-cols-3 gap-8'>
            <Card className='relative'>
              <CardHeader>
                <div className='relative flex space-x-3 items-center'>
                  <Avatar className='bg-brand-blue h-12 w-12'>
                    <AvatarImage
                      src="/images/raina.png"
                      alt="Young People"
                      className='w-full aspect-square h-full object-cover translate-y-1.5'
                      width={1000}
                      height={1000}
                    />
                  </Avatar>
                  <svg className="absolute top-0 right-0 w-10 h-10 object-cover rounded-full" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_46_604)">
                      <path d="M0 47.7953V0H71.693L0 47.7953Z" fill="#003580" />
                      <path d="M71.693 0V47.7953H0L71.693 0Z" fill="#009543" />
                      <mask id="mask0_46_604" maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="48">
                        <path d="M0 0.000976562H71.693V47.7963H0V0.000976562Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_46_604)">
                        <path d="M0 47.7963L71.693 0.000976562" stroke="white" strokeWidth="16.9275" />
                        <path d="M0 47.7963L71.693 0.000976562" stroke="#D21034" strokeWidth="12.6956" />
                      </g>
                      <path d="M14.3384 5.05176L15.5756 8.40141L18.3214 6.11919L17.7184 9.63852L21.2369 9.0347L18.9555 11.7813L22.3043 13.0176L18.9555 14.2547L21.2369 17.0006L17.7184 16.3976L18.3214 19.9169L15.5756 17.6347L14.3384 20.9835L13.1013 17.6347L10.3555 19.9169L10.9585 16.3976L7.43999 17.0006L9.72142 14.2547L6.37256 13.0176L9.72142 11.7813L7.43999 9.0347L10.9585 9.63852L10.3555 6.11919L13.1013 8.40141L14.3384 5.05176Z" fill="#FFCE00" />
                      <path d="M14.3388 17.3982C16.7585 17.3982 18.72 15.4367 18.72 13.017C18.72 10.5973 16.7585 8.63574 14.3388 8.63574C11.9191 8.63574 9.95752 10.5973 9.95752 13.017C9.95752 15.4367 11.9191 17.3982 14.3388 17.3982Z" stroke="#003580" strokeWidth="0.846376" />
                    </g>
                    <defs>
                      <clipPath id="clip0_46_604">
                        <rect width="48" height="48" rx="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>


                  <div className='flex flex-col'>
                    <h4 className='text-4xl font-bold'>Raina <br /> Augustus</h4>

                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle>
                  {""}
                </CardTitle>
                <div>
                  <Badge className='bg-brand-orange rounded-full text-sm text-white'>
                    <Package className='mr-1' />
                    Sector
                  </Badge>
                  <p className='my-4'>Digital Technology</p>
                  <Badge className='bg-brand-orange rounded-full text-sm text-white'>
                    <Lightbulb className='mr-1' />
                    Innovation
                  </Badge>
                  <p className='my-4'>SILA-EB Platform For Digital Inclusion</p>
                  <div className='bg-brand-blue text-white relative rounded-2xl p-3 mt-16 '>

                    <svg className='absolute -top-9 -left-4'  width="58" height="49" viewBox="0 0 58 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M21.0296 1.00325C8.63549 8.96288 1.75003 18.2273 0.373179 28.7963C-1.77027 45.2499 12.9438 53.3034 20.3993 46.0674C27.8547 38.8313 23.3856 29.6467 17.9871 27.1362C12.5886 24.6255 9.28724 25.4999 9.86312 22.1448C10.439 18.79 18.1194 9.48806 24.867 5.15607C25.3147 4.77539 25.485 4.03673 25.054 3.47633C24.7704 3.10783 24.2143 2.38506 23.3856 1.30798C22.661 0.366115 21.9667 0.40137 21.0296 1.00325Z" fill="#F38E22" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M53.6594 1.00325C41.2655 8.96288 34.38 18.2273 33.003 28.7963C30.8597 45.2499 45.5738 53.3034 53.0292 46.0674C60.4847 38.8313 56.0156 29.6467 50.6171 27.1362C45.2186 24.6255 41.917 25.4999 42.4931 22.1448C43.069 18.79 50.7494 9.48806 57.497 5.15607C57.9447 4.77539 58.115 4.03673 57.6838 3.47633C57.4004 3.10783 56.8443 2.38506 56.0156 1.30798C55.2909 0.366115 54.5967 0.40137 53.6594 1.00325Z" fill="#F38E22" />
                    </svg>


                    <p className='text-md leading-7 italic'>Growing up in Namibia’s remote Rola community, I experienced firsthand the challenges of limited access to technology. Determined to change this, I turned to TVET to gain the skills needed to address these gaps.</p>
                  </div>

                  <Button className='bg-brand-red text-white w-full mt-4 rounded-md flex items-center justify-center'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" fill="white" />
                    </svg>
                    <span className='ml-2'>Watch Their Story</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

              <Card className='relative'>
              <CardHeader>
                <div className='relative flex space-x-3 items-center'>
                  <Avatar className='bg-brand-blue h-12 w-12'>
                    <AvatarImage
                      src="/images/raina.png"
                      alt="Young People"
                      className='w-full aspect-square h-full object-cover translate-y-1.5'
                      width={1000}
                      height={1000}
                    />
                  </Avatar>
                  <svg className="absolute top-0 right-0 w-10 h-10 object-cover rounded-full" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_46_604)">
                      <path d="M0 47.7953V0H71.693L0 47.7953Z" fill="#003580" />
                      <path d="M71.693 0V47.7953H0L71.693 0Z" fill="#009543" />
                      <mask id="mask0_46_604" maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="48">
                        <path d="M0 0.000976562H71.693V47.7963H0V0.000976562Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_46_604)">
                        <path d="M0 47.7963L71.693 0.000976562" stroke="white" strokeWidth="16.9275" />
                        <path d="M0 47.7963L71.693 0.000976562" stroke="#D21034" strokeWidth="12.6956" />
                      </g>
                      <path d="M14.3384 5.05176L15.5756 8.40141L18.3214 6.11919L17.7184 9.63852L21.2369 9.0347L18.9555 11.7813L22.3043 13.0176L18.9555 14.2547L21.2369 17.0006L17.7184 16.3976L18.3214 19.9169L15.5756 17.6347L14.3384 20.9835L13.1013 17.6347L10.3555 19.9169L10.9585 16.3976L7.43999 17.0006L9.72142 14.2547L6.37256 13.0176L9.72142 11.7813L7.43999 9.0347L10.9585 9.63852L10.3555 6.11919L13.1013 8.40141L14.3384 5.05176Z" fill="#FFCE00" />
                      <path d="M14.3388 17.3982C16.7585 17.3982 18.72 15.4367 18.72 13.017C18.72 10.5973 16.7585 8.63574 14.3388 8.63574C11.9191 8.63574 9.95752 10.5973 9.95752 13.017C9.95752 15.4367 11.9191 17.3982 14.3388 17.3982Z" stroke="#003580" strokeWidth="0.846376" />
                    </g>
                    <defs>
                      <clipPath id="clip0_46_604">
                        <rect width="48" height="48" rx="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>


                  <div className='flex flex-col'>
                    <h4 className='text-4xl font-bold'>Raina <br /> Augustus</h4>

                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle>
                  {""}
                </CardTitle>
                <div>
                  <Badge className='bg-brand-orange rounded-full text-sm text-white'>
                    <Package className='mr-1' />
                    Sector
                  </Badge>
                  <p className='my-4'>Digital Technology</p>
                  <Badge className='bg-brand-orange rounded-full text-sm text-white'>
                    <Lightbulb className='mr-1' />
                    Innovation
                  </Badge>
                  <p className='my-4'>SILA-EB Platform For Digital Inclusion</p>
                  <div className='bg-brand-blue text-white relative rounded-2xl p-3 mt-16 '>

                    <svg className='absolute -top-9 -left-4'  width="58" height="49" viewBox="0 0 58 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M21.0296 1.00325C8.63549 8.96288 1.75003 18.2273 0.373179 28.7963C-1.77027 45.2499 12.9438 53.3034 20.3993 46.0674C27.8547 38.8313 23.3856 29.6467 17.9871 27.1362C12.5886 24.6255 9.28724 25.4999 9.86312 22.1448C10.439 18.79 18.1194 9.48806 24.867 5.15607C25.3147 4.77539 25.485 4.03673 25.054 3.47633C24.7704 3.10783 24.2143 2.38506 23.3856 1.30798C22.661 0.366115 21.9667 0.40137 21.0296 1.00325Z" fill="#F38E22" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M53.6594 1.00325C41.2655 8.96288 34.38 18.2273 33.003 28.7963C30.8597 45.2499 45.5738 53.3034 53.0292 46.0674C60.4847 38.8313 56.0156 29.6467 50.6171 27.1362C45.2186 24.6255 41.917 25.4999 42.4931 22.1448C43.069 18.79 50.7494 9.48806 57.497 5.15607C57.9447 4.77539 58.115 4.03673 57.6838 3.47633C57.4004 3.10783 56.8443 2.38506 56.0156 1.30798C55.2909 0.366115 54.5967 0.40137 53.6594 1.00325Z" fill="#F38E22" />
                    </svg>


                    <p className='text-md leading-7 italic'>Growing up in Namibia’s remote Rola community, I experienced firsthand the challenges of limited access to technology. Determined to change this, I turned to TVET to gain the skills needed to address these gaps.</p>
                  </div>

                  <Button className='bg-brand-red text-white w-full mt-4 rounded-md flex items-center justify-center'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" fill="white" />
                    </svg>
                    <span className='ml-2'>Watch Their Story</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className='relative'>
              <CardHeader>
                <div className='relative flex space-x-3 items-center'>
                  <Avatar className='bg-brand-blue h-12 w-12'>
                    <AvatarImage
                      src="/images/raina.png"
                      alt="Young People"
                      className='w-full aspect-square h-full object-cover translate-y-1.5'
                      width={1000}
                      height={1000}
                    />
                  </Avatar>
                  <svg className="absolute top-0 right-0 w-10 h-10 object-cover rounded-full" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_46_604)">
                      <path d="M0 47.7953V0H71.693L0 47.7953Z" fill="#003580" />
                      <path d="M71.693 0V47.7953H0L71.693 0Z" fill="#009543" />
                      <mask id="mask0_46_604" maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="48">
                        <path d="M0 0.000976562H71.693V47.7963H0V0.000976562Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_46_604)">
                        <path d="M0 47.7963L71.693 0.000976562" stroke="white" strokeWidth="16.9275" />
                        <path d="M0 47.7963L71.693 0.000976562" stroke="#D21034" strokeWidth="12.6956" />
                      </g>
                      <path d="M14.3384 5.05176L15.5756 8.40141L18.3214 6.11919L17.7184 9.63852L21.2369 9.0347L18.9555 11.7813L22.3043 13.0176L18.9555 14.2547L21.2369 17.0006L17.7184 16.3976L18.3214 19.9169L15.5756 17.6347L14.3384 20.9835L13.1013 17.6347L10.3555 19.9169L10.9585 16.3976L7.43999 17.0006L9.72142 14.2547L6.37256 13.0176L9.72142 11.7813L7.43999 9.0347L10.9585 9.63852L10.3555 6.11919L13.1013 8.40141L14.3384 5.05176Z" fill="#FFCE00" />
                      <path d="M14.3388 17.3982C16.7585 17.3982 18.72 15.4367 18.72 13.017C18.72 10.5973 16.7585 8.63574 14.3388 8.63574C11.9191 8.63574 9.95752 10.5973 9.95752 13.017C9.95752 15.4367 11.9191 17.3982 14.3388 17.3982Z" stroke="#003580" strokeWidth="0.846376" />
                    </g>
                    <defs>
                      <clipPath id="clip0_46_604">
                        <rect width="48" height="48" rx="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>


                  <div className='flex flex-col'>
                    <h4 className='text-4xl font-bold'>Raina <br /> Augustus</h4>

                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle>
                  {""}
                </CardTitle>
                <div>
                  <Badge className='bg-brand-orange rounded-full text-sm text-white'>
                    <Package className='mr-1' />
                    Sector
                  </Badge>
                  <p className='my-4'>Digital Technology</p>
                  <Badge className='bg-brand-orange rounded-full text-sm text-white'>
                    <Lightbulb className='mr-1' />
                    Innovation
                  </Badge>
                  <p className='my-4'>SILA-EB Platform For Digital Inclusion</p>
                  <div className='bg-brand-blue text-white relative rounded-2xl p-3 mt-16 '>

                    <svg className='absolute -top-9 -left-4'  width="58" height="49" viewBox="0 0 58 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M21.0296 1.00325C8.63549 8.96288 1.75003 18.2273 0.373179 28.7963C-1.77027 45.2499 12.9438 53.3034 20.3993 46.0674C27.8547 38.8313 23.3856 29.6467 17.9871 27.1362C12.5886 24.6255 9.28724 25.4999 9.86312 22.1448C10.439 18.79 18.1194 9.48806 24.867 5.15607C25.3147 4.77539 25.485 4.03673 25.054 3.47633C24.7704 3.10783 24.2143 2.38506 23.3856 1.30798C22.661 0.366115 21.9667 0.40137 21.0296 1.00325Z" fill="#F38E22" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M53.6594 1.00325C41.2655 8.96288 34.38 18.2273 33.003 28.7963C30.8597 45.2499 45.5738 53.3034 53.0292 46.0674C60.4847 38.8313 56.0156 29.6467 50.6171 27.1362C45.2186 24.6255 41.917 25.4999 42.4931 22.1448C43.069 18.79 50.7494 9.48806 57.497 5.15607C57.9447 4.77539 58.115 4.03673 57.6838 3.47633C57.4004 3.10783 56.8443 2.38506 56.0156 1.30798C55.2909 0.366115 54.5967 0.40137 53.6594 1.00325Z" fill="#F38E22" />
                    </svg>


                    <p className='text-md leading-7 italic'>Growing up in Namibia’s remote Rola community, I experienced firsthand the challenges of limited access to technology. Determined to change this, I turned to TVET to gain the skills needed to address these gaps.</p>
                  </div>

                  <Button className='bg-brand-red text-white w-full mt-4 rounded-md flex items-center justify-center'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" fill="white" />
                    </svg>
                    <span className='ml-2'>Watch Their Story</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}

export default YouthVoices
