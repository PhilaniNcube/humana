'use client';

import { bebasNeue } from '@/lib/fonts'
import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother, ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import Africa from './africa';
import { ArrowBigUpDashIcon, ChevronDown, EarIcon, Link } from 'lucide-react';
import { cn } from '@/lib/utils';
import SurveyDashboard from './survey-dashboard';
import { title } from 'process';
import { text } from 'stream/consumers';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, ScrollSmoother);

const initiativeCards = [
  {
    title: 'Engage',
    description: 'Dialogue and Youth-Centred Advocacy Campaign',
    icon: <EarIcon className='w-20 h-20 bg-brand-green p-6 rounded-md text-white' />,
    text: 'The Campaign engaged young people across Africa to reshape perceptions of TVET by sharing accurate, data-driven insights and showcasing its role in building skills, advancing careers, and driving societal progress.'
  },
  {
    title: 'Elevate',
    description: 'The 2024 Africa Skills Revolution Competition',
    icon: <ArrowBigUpDashIcon className='w-20 h-20 bg-brand-green p-6 rounded-md text-white' />,
    text: 'The competition was launched to celebrate youth innovation and spotlight how African TVET graduates are driving change in their communities. Open to young graduates across the continent, it drew 490 entries from 36 countries, showcasing youth-led solutions in agriculture, health, tech, fashion, and more.'
  },
  {
    title: 'Connect',
    description: 'The “Make Yourself Heard” Survey',
    icon: <Link className='w-20 h-20 bg-brand-green p-6 rounded-md text-white' />,
    text: 'The survey centred youth perspectives in TVET policy discussions across Africa, capturing their motivations, experiences, challenges, and aspirations as students or graduates of TVET institutions.'
  }
]


const Initiative = () => {

  const container = useRef<HTMLElement>(null);
  const dashedLineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (dashedLineRef.current) {
      // Initial state - line at 0 height
      gsap.set(dashedLineRef.current, {
        height: 0,
        opacity: 0.5
      });

      // Create the scroll trigger animation
      ScrollTrigger.create({
        trigger: dashedLineRef.current,
        start: "top 75%", // Start when the top of the line reaches 75% from the top of the viewport
        once: false, // Animation will run every time it enters viewport
        onEnter: () => {
          gsap.to(dashedLineRef.current, {
            height: "calc(340% - 120px)", // Final height matching the original
            opacity: 1,
            duration: 2.5, // Animation duration in seconds
            ease: "power2.out" // Easing function for smooth animation
          });
        }
      });
    }
  }, []);

  return (
    <section id='initiative' ref={container}>
      <div className='px-4 lg:px-[40px] pt-12 container mx-auto'>
        <h2 className='text-5xl text-center font-bold text-brand-blue uppercase'>The Initiative</h2>
        <svg className='text-center w-fit mx-auto mt-4' width="112" height="9" viewBox="0 0 112 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="112" height="9" fill="#F38E22" />
        </svg>
        <p className='text-2xl md:text-3xl lg:text-5xl max-w-5xl mx-auto text-balance lg:leading-16 font-light text-center mt-4'>
          Africa Skills Revolution is an initiative focused on promoting youth-led dialogue on skills development and TVET in Africa, spotlighting the voices and talents of a generation ready to lead.
        </p>



        <div className='mt-6 lg:mt-12'>
          <div className='grid md:grid-cols-2 lg:max-w-5xl mx-auto gap-8'>
            <p className='text-xl  mx-auto font-light  '>
              AUDA-NEPAD and Humana People to People launched the campaign to spotlight TVET as both a path to employment and a catalyst for inclusive growth, innovation, and youth-led development.
            </p>
            <svg className='rotate-45' id='triangles' width="200" height="200" viewBox="0 0 451 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M152.5 253.499L0 310.999L183.5 366.499L152.5 253.499Z" fill="#D9D9D9" />

              <path d="M364.715 140.308L450.172 0.683103L308.449 38.1447L364.715 140.308Z" fill="#00b8cc" />

            </svg>
          </div>
          <div className='grid md:grid-cols-2 lg:max-w-5xl mx-auto gap-8'>
            <svg className='rotate-45' id='triangles' width="200" height="200" viewBox="0 0 451 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M152.5 253.499L0 310.999L183.5 366.499L152.5 253.499Z" fill="#D9D9D9" />

              <path d="M364.715 140.308L450.172 0.683103L308.449 38.1447L364.715 140.308Z" fill="#00b8cc" />

            </svg>
            <p className='text-xl  mx-auto font-light  '>
              This pan-African initiative unfolded through months of virtual events, youth dialogues, storytelling, data collection, and a continent-wide competition.
            </p>

            <p className='text-xl  mx-auto font-light  '>
              We’re proud to share the outcome - a  report, capturing the motivations, challenges, and aspirations of TVET youth. We hope it sparks action to shape stronger skills systems across Africa.
            </p>
            <svg className='rotate-45' id='triangles' width="200" height="200" viewBox="0 0 451 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M152.5 253.499L0 310.999L183.5 366.499L152.5 253.499Z" fill="#D9D9D9" />

              <path d="M364.715 140.308L450.172 0.683103L308.449 38.1447L364.715 140.308Z" fill="#00b8cc" />

            </svg>
          </div>



        </div>




        <div>
          <p className='text-2xl md:text-3xl lg:text-5xl max-w-5xl mx-auto text-balance lg:leading-16 font-light text-center mt-4'>
            Anchored on three pillars — Engage, Elevate, and Connect — the campaign sparked dialogue, competitions, and surveys to actively involve Africa’s youth.
          </p>
          {/* <h3 className='text-xl lg:text-3xl max-w-5xl mx-auto text-balance font-bold text-center mt-12 leading-10'>
            Engage <span className='text-brand-orange font-extrabold'>|</span> Elevate <span className='text-brand-orange font-extrabold'>|</span> Connect
          </h3>
          <p className='text-lg lg:text-xl max-w-5xl mx-auto text-balance text-center lg:leading-10'>
            These pillars drove dialogues, competitions, and surveys, creating a platform to engage with Africa’s youth.
          </p> */}
        </div>

        {/* <div className='mt-16'>
          <div className='grid grid-cols-2 lg:grid-cols-5 gap-6 relative'>
            <div
              ref={dashedLineRef}
              className="hidden lg:block absolute left-[40px] top-[84px] bottom-0 border-l-2 border-dashed border-green-800 h-[calc(330%-120px)] z-[-1]"
            />
            <div className='col-span-2 flex flex-col lg:flex-row lg:space-x-4'>
              <div >
                <svg className='w-20 h-20 bg-brand-green p-6 rounded-md' width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_46_97" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
                    <path d="M33.875 0.125H0.125V33.875H33.875V0.125Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_46_97)">
                    <path d="M5.12655 21.9673C4.72917 21.4532 4.31809 20.9252 4.12625 20.4945C2.97521 17.9796 3.26297 14.8811 4.8525 12.3939C6.29129 10.143 8.52485 8.8647 10.9639 8.8647H20.1859C19.9119 9.28154 19.4049 9.75396 18.8568 10.2403C18.2401 10.7961 17.6098 11.3657 17.2261 11.9632C16.7739 12.6857 16.7739 13.3388 17.2261 13.9223C17.9935 14.8811 18.9527 14.4642 19.6104 13.964C20.1311 13.5611 21.4329 12.3245 22.488 11.2546C23.0087 10.7405 24.7216 9.01755 25.1463 8.40619C25.6671 7.65588 25.6396 6.91946 25.0641 6.14136C24.2009 4.97422 20.6929 1.54225 19.6104 0.680781C19.4186 0.52794 19.2541 0.444571 19.076 0.375098C18.9527 0.305625 18.8294 0.25005 18.706 0.166682L18.6512 0.125H18.2264C17.692 0.277841 17.2672 0.583518 17.0343 1.00036C16.815 1.4033 16.7739 1.87572 16.9247 2.37593C17.0069 2.66771 17.5687 3.19571 18.7197 4.27948C19.309 4.82137 19.9119 5.39105 20.1174 5.66895C20.1448 5.71063 20.1859 5.73842 20.2133 5.76621H10.1966C9.42923 5.76621 7.319 6.48873 6.56535 6.84999C4.63325 7.78093 3.07113 9.18428 1.9475 11.0184C0.892388 12.7413 0.262059 14.7838 0.111328 16.9514C0.111328 16.993 0.111328 17.0208 0.111328 17.0486C0.111328 17.0625 0.111328 17.0903 0.111328 17.1042V17.132V17.1598C0.220951 17.5905 0.262058 18.0351 0.31687 18.4937C0.357978 18.9244 0.412791 19.3551 0.508711 19.7998C0.769064 20.8974 1.4131 22.3564 2.09824 23.3707C2.24897 23.593 3.35889 25.0658 3.79738 25.2603C4.01662 25.3576 4.26328 25.4132 4.49623 25.4132C4.8662 25.4132 5.23617 25.2881 5.53764 25.0658C5.98983 24.7185 6.20908 24.1905 6.11316 23.6208C6.04464 23.2039 5.60615 22.6343 5.09915 21.9673" fill="white" />
                    <path d="M32.9844 12.5882C32.6693 11.8101 31.162 8.89228 29.5998 8.66996C29.1065 8.60049 28.6681 8.79502 28.2981 9.25354C27.9281 9.72595 27.8459 10.2401 28.0788 10.8097C28.2707 11.2821 28.6406 11.7268 28.9969 12.1436C29.2847 12.4771 29.545 12.7967 29.7095 13.1162C30.3946 14.3945 30.7098 15.8674 30.6276 17.368C30.5453 18.813 30.1068 20.2303 29.3669 21.4669C28.6955 22.5924 27.8048 23.5233 26.7634 24.1625C25.6534 24.8572 24.4202 25.2184 23.1047 25.2184H13.8827C14.1568 24.7877 14.6775 24.3153 15.2256 23.829C16.404 22.773 17.7469 21.5642 16.8973 20.272C16.6507 19.8968 16.3492 19.6745 15.9656 19.6189C15.3763 19.5216 14.8008 19.8412 14.4308 20.1469C13.3757 20.9667 9.77189 24.5376 8.96342 25.6075C8.3605 26.4134 8.3605 27.1359 8.96342 27.9557C9.67597 28.9144 13.4442 32.6937 14.4308 33.4163C14.8419 33.7219 15.2941 33.8748 15.7052 33.8748C16.0204 33.8748 16.3218 33.7914 16.5822 33.6108C17.144 33.2217 17.3495 32.4992 17.1166 31.7211C17.0344 31.4432 16.4726 30.9013 15.3215 29.8176C14.7323 29.2618 14.1294 28.706 13.9238 28.4281C13.8964 28.3864 13.8553 28.3586 13.8279 28.3308H23.9954C25.1464 28.3308 27.6815 27.1776 28.6269 26.5801C30.8879 25.1351 32.5733 22.9397 33.3544 20.397C34.1355 17.8682 33.9847 15.0893 32.957 12.5882" fill="white" />
                  </g>
                </svg>
              </div>
              <div>
                <h3 className='text-3xl lg:text-5xl font-bold text-brand-orange'>Engage</h3>
                <p className='text-balance font-bold leading-6 text-2xl text-brand-blue mt-4'>
                  Dialogue and Youth-Centred Advocacy Campaign
                </p>
              </div>

            </div>
            <div className='col-span-2 lg:col-span-3'>
              <p className='text-balance font-light'>
                The  Campaign engaged young people across Africa to reshape perceptions of TVET by sharing accurate, data-driven insights and showcasing its role in building skills, advancing careers, and driving societal progress.

              </p>
              <p className='text-balance font-light py-4'>

                To reach diverse audiences, a multilingual toolkit in English, French, and Portuguese featured advocacy messages, success stories, and TVET highlights. With over 31,000 engagements and strong partner support, the campaign amplified youth voices and challenged stigma — positioning TVET as a true gateway to opportunity.

              </p>
              <p className='text-balance font-light'>

                With over 31,000 engagements and wide partner participation, the campaign amplified youth voices and tackled stigma — showing that TVET is not just a pathway to work, but a gateway to opportunity.
              </p>
            </div>
          </div>


          <div className='grid grid-cols-2 lg:grid-cols-5 gap-6 mt-24'>
            <div className='col-span-2 flex flex-col lg:flex-row lg:space-x-4'>
              <div >
                <svg className='w-20 h-20 bg-brand-green p-6 rounded-md' width="35" height="38" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_46_108" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="38">
                    <path d="M35 0H0V37.7876H35V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_46_108)">
                    <path d="M29.5726 19.5671C27.3506 19.8903 27.3372 23.432 29.7208 23.7552C32.8585 24.1727 33.0605 19.0688 29.5726 19.5671ZM16.1059 5.33273C15.5673 5.8714 15.0286 6.41007 14.5169 6.9622C14.0186 7.50087 12.5776 9.29195 12.039 9.52088C10.6384 10.1134 9.41296 8.52434 10.3422 7.29887L16.8062 0.323112C17.2641 -0.0943566 17.7489 -0.12129 18.2202 0.309645C20.0921 2.46432 22.1929 4.44393 24.0782 6.5986C24.3341 6.89487 24.9132 7.47394 24.9805 7.83754C25.196 8.91488 24.4418 9.77675 23.3376 9.62861C22.8124 9.56128 22.1929 8.80714 21.8158 8.41661C21.0482 7.63554 20.3614 6.7602 19.5938 5.96567C19.4053 5.77713 19.1763 5.48086 18.9205 5.41353V15.15C18.9205 15.5674 19.1629 16.4158 19.3245 16.8198C20.2671 19.2034 22.7585 20.4963 25.2768 20.2135C26.4214 16.2408 31.7542 15.3789 34.1244 18.8264C35.8347 21.3043 34.9189 24.846 32.1987 26.1388C29.3706 27.4855 26.1656 25.9907 25.2229 23.0684C21.4253 23.3781 17.8431 21.1696 16.5773 17.574C16.4426 17.17 16.1194 16.1196 16.1194 15.7425V5.33273H16.1059Z" fill="white" />
                    <path d="M15.9847 31.2695C13.9782 33.3433 17.1563 36.2656 19.0686 34.2456C20.9944 32.2121 17.897 29.3033 15.9847 31.2695ZM4.53803 19.5669C2.04669 19.9574 2.49109 24.1186 5.3191 23.755C7.99898 23.4049 7.64885 19.0821 4.53803 19.5669ZM16.1059 21.1021L14.4495 22.1525C13.0086 22.9066 11.3657 23.1221 9.73619 23.1086C9.31872 24.6842 7.87778 26.0578 6.30217 26.4484C1.54842 27.6335 -1.95292 22.1525 1.17135 18.4357C3.7435 15.3653 8.63192 16.4561 9.77659 20.2133C11.4061 20.321 12.9682 19.9574 14.2206 18.8801C14.5169 18.6242 14.7862 18.2068 15.0286 17.9913C15.0959 17.9374 15.1094 17.897 15.2171 17.924C15.7827 19.9574 17.2506 21.6273 18.907 22.8528L18.9474 27.9971C22.9336 29.236 23.7954 34.6092 20.2672 36.939C16.3483 39.538 11.3791 35.7539 12.7393 31.2695C13.2241 29.6669 14.5438 28.5088 16.0925 27.9567V21.1021H16.1059Z" fill="white" />
                  </g>
                </svg>

              </div>
              <div>
                <h3 className='text-3xl lg:text-5xl font-bold text-brand-orange'>Elevate</h3>
                <p className='text-balance font-bold leading-6 text-2xl text-brand-blue mt-4'>
                  The 2024 Africa Skills Revolution Competition
                </p>
              </div>

            </div>
            <div className='col-span-2 lg:col-span-3'>
              <p className='text-balance font-light'>
                The competition was launched to celebrate youth innovation and spotlight how African TVET graduates are driving change in their communities. Open to young graduates across the continent, it drew 490 entries from 36 countries, showcasing youth-led solutions in agriculture, health, tech, fashion, and more.
              </p>
              <p className='text-balance font-light py-4'>
                Ten winning projects were honoured at the Africa Skills Week Conference in Accra, Ghana, recognised for their creativity, impact, and alignment with Africa’s development goals. More than a contest, it was a powerful reminder that with the right skills, youth don’t just imagine change — they lead it.
              </p>

            </div>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-5 gap-6 mt-24'>
            <div className='col-span-2 flex flex-col lg:flex-row lg:space-x-4'>
              <div >
                <svg className='w-20 h-20 bg-brand-green p-6 rounded-md' width="35" height="38" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_46_108" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="38">
                    <path d="M35 0H0V37.7876H35V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_46_108)">
                    <path d="M29.5726 19.5671C27.3506 19.8903 27.3372 23.432 29.7208 23.7552C32.8585 24.1727 33.0605 19.0688 29.5726 19.5671ZM16.1059 5.33273C15.5673 5.8714 15.0286 6.41007 14.5169 6.9622C14.0186 7.50087 12.5776 9.29195 12.039 9.52088C10.6384 10.1134 9.41296 8.52434 10.3422 7.29887L16.8062 0.323112C17.2641 -0.0943566 17.7489 -0.12129 18.2202 0.309645C20.0921 2.46432 22.1929 4.44393 24.0782 6.5986C24.3341 6.89487 24.9132 7.47394 24.9805 7.83754C25.196 8.91488 24.4418 9.77675 23.3376 9.62861C22.8124 9.56128 22.1929 8.80714 21.8158 8.41661C21.0482 7.63554 20.3614 6.7602 19.5938 5.96567C19.4053 5.77713 19.1763 5.48086 18.9205 5.41353V15.15C18.9205 15.5674 19.1629 16.4158 19.3245 16.8198C20.2671 19.2034 22.7585 20.4963 25.2768 20.2135C26.4214 16.2408 31.7542 15.3789 34.1244 18.8264C35.8347 21.3043 34.9189 24.846 32.1987 26.1388C29.3706 27.4855 26.1656 25.9907 25.2229 23.0684C21.4253 23.3781 17.8431 21.1696 16.5773 17.574C16.4426 17.17 16.1194 16.1196 16.1194 15.7425V5.33273H16.1059Z" fill="white" />
                    <path d="M15.9847 31.2695C13.9782 33.3433 17.1563 36.2656 19.0686 34.2456C20.9944 32.2121 17.897 29.3033 15.9847 31.2695ZM4.53803 19.5669C2.04669 19.9574 2.49109 24.1186 5.3191 23.755C7.99898 23.4049 7.64885 19.0821 4.53803 19.5669ZM16.1059 21.1021L14.4495 22.1525C13.0086 22.9066 11.3657 23.1221 9.73619 23.1086C9.31872 24.6842 7.87778 26.0578 6.30217 26.4484C1.54842 27.6335 -1.95292 22.1525 1.17135 18.4357C3.7435 15.3653 8.63192 16.4561 9.77659 20.2133C11.4061 20.321 12.9682 19.9574 14.2206 18.8801C14.5169 18.6242 14.7862 18.2068 15.0286 17.9913C15.0959 17.9374 15.1094 17.897 15.2171 17.924C15.7827 19.9574 17.2506 21.6273 18.907 22.8528L18.9474 27.9971C22.9336 29.236 23.7954 34.6092 20.2672 36.939C16.3483 39.538 11.3791 35.7539 12.7393 31.2695C13.2241 29.6669 14.5438 28.5088 16.0925 27.9567V21.1021H16.1059Z" fill="white" />
                  </g>
                </svg>

              </div>
              <div>
                <h3 className='text-3xl lg:text-5xl font-bold text-brand-orange'>Connect</h3>
                <p className='text-balance font-bold leading-6 text-2xl text-brand-blue mt-4'>
                  The “Make Yourself Heard” Survey
                </p>
              </div>

            </div>
            <div className='col-span-2 lg:col-span-3'>
              <p className='text-balance font-light'>
                The survey centred youth perspectives in TVET policy discussions across Africa, capturing their motivations, experiences, challenges, and aspirations as students or graduates of TVET institutions.
              </p>
              <p className='text-balance font-light py-4'>
                With over 350 responses from across the continent, the survey brought youth voices to the forefront, offering insights that inform evidence-based recommendations for more inclusive, relevant, and accessible skills systems.
              </p>

            </div>
          </div>

        </div> */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiativeCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-6">
                  <div className="flex justify-center mb-6">
                    <div className="rounded-md flex items-center justify-center">
                      {card.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-center mb-4">{card.description}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    </section>
  )
}

export default Initiative
