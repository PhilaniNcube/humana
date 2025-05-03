'use client';

import { bebasNeue } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother, ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import Africa from './africa';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, ScrollSmoother);


const Initiative = () => {

  const container = useRef<HTMLElement>(null);






  return (
    <section id='initiative' ref={container}>
      <div className='px-[60px] pt-12 container mx-auto'>
        <h2 className='text-5xl text-center font-bold text-brand-blue uppercase'>The Initiative</h2>
        <svg className='text-center w-fit mx-auto mt-4' width="112" height="9" viewBox="0 0 112 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="112" height="9" fill="#F38E22" />
        </svg>
        <p className='text-5xl max-w-5xl mx-auto text-balance leading-16 font-light text-center mt-4'>
          Africa Skills Revolution is an initiative focused on promoting youth-led dialogue on skills development and TVET in Africa, spotlighting the voices and talents of a generation ready to lead.
        </p>


        <ChevronDown className='text-brand-orange w-16 h-16 duration-500 mx-auto mt-12 animate-bounce ease-in-out' />

        <div className='flex items-center justify-end translate-y-0 lg:translate-y-[-100px]'>
          <svg id='triangles' width="451" height="400" viewBox="0 0 451 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M152.5 253.499L0 310.999L183.5 366.499L152.5 253.499Z" fill="#D9D9D9" />
            <path d="M434.5 144.999L162.5 217.499L349 302.499L434.5 144.999Z" fill="#F38E22" />
            <path d="M364.715 140.308L450.172 0.683103L308.449 38.1447L364.715 140.308Z" fill="#00651B" />
            <path d="M231 399.499L221 315.499L278.5 363.499L231 399.499Z" fill="#00B6CC" />
          </svg>


        </div>

        <p className='text-3xl max-w-5xl mx-auto text-balance font-light text-center leading-10'>
          AUDA-NEPAD, in partnership with Humana People to People, launched the campaign to spotlight the power of Technical and Vocational Education and Training (TVET) — not just as a pathway to employment, but as a driver of inclusive growth, innovation, and youth-led development.
        </p>
        <div className="max-w-5xl mx-auto ">
          <ChevronDown className='text-brand-orange w-16 h-16 duration-500 mx-auto mt-12 animate-bounce ease-in-out' />
        </div>

        <p className='text-3xl max-w-5xl mx-auto text-balance font-light text-center mt-12 leading-10'>
          This pan-African initiative took shape across months of virtual events, youth-led dialogues, social media storytelling, data collection, and a continent-wide competition. It was created in the spirit of the African Union’s 2024 theme: Educate an African fit for the 21st Century.
        </p>
        <ChevronDown className='text-brand-orange w-16 h-16 duration-500 mx-auto mt-12 animate-bounce ease-in-out' />

        <div className='flex items-center justify-center flex-col mt-12'>
          <svg id='triangles' width="74" height="60" viewBox="0 0 74 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-2.83525e-05 45.4653L73.1006 0.188728L52.9243 59.4549L-2.83525e-05 45.4653Z" fill="#F38E22" />
          </svg>
          <p className='text-3xl max-w-5xl mx-auto text-balance font-light text-center mt-12 leading-10'>
            We are proud to present the outcome — a comprehensive report that weaves together the motivations, experiences, challenges, and aspirations of young people enrolled in or graduated from TVET institutions. We hope these insights will inspire others to collectively shape the future of skills development systems across the continent.
          </p>
          <ChevronDown className='text-brand-orange w-16 h-16 duration-500 mx-auto mt-12 animate-bounce ease-in-out' />
        </div>

        <div>
          <h2 className={cn(bebasNeue.className, 'text-5xl text-center font-bold text-brand-blue uppercase mt-12')}>The campaign’s approach was anchored on three tenets</h2>
          <h3 className='text-3xl max-w-5xl mx-auto text-balance font-bold text-center mt-12 leading-10'>
            Engage <span className='text-brand-orange font-extrabold'>|</span> Elevate <span className='text-brand-orange font-extrabold'>|</span> Connect
          </h3>
          <p className='text-xl max-w-5xl mx-auto text-balance text-center leading-10'>
            These pillars drove dialogues, competitions, and surveys, creating a platform to engage with Africa’s youth.
          </p>
        </div>

        <div className='mt-16'>
          <div className='grid grid-cols-2 lg:grid-cols-5 gap-6'>
            <div className='col-span-2 flex space-x-4'>
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
                The Youth Advocacy Campaign aimed to inform and engage young people across Africa to reshape the perception of TVET by providing accurate, data-driven information and highlighting the role of TVET in building practical skills, supporting career development, and contributing to broader societal progress.

              </p>
              <p className='text-balance font-light py-4'>

                To reach a diverse youth audience, a multilingual social media toolkit was developed in English, French, and Portuguese with advocacy messages, inspiring success stories and spotlighting TVET initiatives.

              </p>
              <p className='text-balance font-light'>

                With over 31,000 engagements and wide partner participation, the campaign amplified youth voices and tackled stigma — showing that TVET is not just a pathway to work, but a gateway to opportunity.
              </p>
            </div>
          </div>


          <div className='grid grid-cols-2 lg:grid-cols-5 gap-6 mt-24'>
            <div className='col-span-2 flex space-x-4'>
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
                In order to celebrate youth innovation and recognize the incredible ways African TVET graduates are using their skills to make a difference in their communities, we launched the Africa Skills Revolution Competition for young graduates across Africa.
              </p>
              <p className='text-balance font-light py-4'>
                With 490 entries from 36 countries, the competition highlighted many youth-led innovations in sectors like agriculture, health, tech, and fashion. The ten winning projects were awarded during the Africa Skills Week Conference hosted by the African Union in Accra, Ghana— each recognised for creativity, impact, and alignment with Africa’s development goals.</p>
              <p className='text-balance font-light'>
                More than a contest, it was a celebration of youth vision, showing that with the right skills, young people don’t just imagine change, they lead it.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-5 gap-6 mt-24'>
            <div className='col-span-2 flex space-x-4'>
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
                Listening to youth perspectives was central to the campaign. The “Make Yourself Heard” survey, conducted
                from August to October 2024, gathered over 300 responses from young Africans engaged in or aspiring
                to join TVET education. This initiative focused on bringing the calls and needs of youth to the centre of
                the conversation about TVET in Africa, ensuring their voices shape the future of skills development across
                the continent.
              </p>
              <p className='text-balance font-light py-4'>
                The survey data will contribute to evidence-based recommendations for improving TVET systems, aligning
                them with the aspirations and priorities of Africa’s youth. It also provides a foundation for actionable
                strategies to address structural gaps, expand access, and foster equity within TVET.
              </p>
              <p className='text-balance font-light py-4'>
                By amplifying youth voices, the survey emphasises the importance of designing TVET systems that are
                inclusive, responsive, and capable of meeting the continent’s socio-economic needs. These insights are
                integral to placing young people at the heart of discussions on TVET, reinforcing their role in shaping a
                prosperous future for Africa.
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className='mt-16 bg-brand-blue px-[60px] py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-3 container mx-auto'>
          <div className='col-span-1 flex justify-center'>
            <svg className='min-w-[240px]' width="272" height="308" viewBox="0 0 272 308" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_46_255)">
                <path d="M183.509 69.2193C191.818 88.7583 198.463 101.092 210.88 118.41C219.149 129.938 227.458 141.625 239.122 150.191C267.616 171.145 264.723 143.158 259.756 123.064C251.381 89.1285 220.999 35.35 192.307 14.8592C162.506 -6.41153 170.63 32.5739 175.267 48.874C177.407 56.3961 180.643 62.4508 183.523 69.2193M271.235 136.958V151.473C265.053 172.599 248.514 168.646 234.208 157.925C203.099 134.605 160.815 60.8115 161.766 21.6543C162.229 2.73662 174.976 -5.63156 191.792 4.07183C228.066 24.9857 253.362 77.8255 266.612 116.19L271.222 136.958H271.235Z" fill="#335353" />
                <path d="M234.222 157.925C208.291 157.184 182.598 161.388 157.579 167.826C150.379 169.677 142.44 171.647 136.826 174.859C132.256 177.477 111.332 184.51 105.44 186.149C105.07 186.255 99.5485 186.109 98.2011 186.956C85.9293 171.568 74.384 154.792 67.6206 136.152C90.5263 124.333 115.347 91.4156 130.248 70.2902C141.384 54.4925 151.119 37.7561 161.779 21.6543C160.828 60.8116 203.113 134.618 234.222 157.925Z" fill="#B1E0E7" />
                <path d="M210.88 118.411C225.173 107.491 225.569 86.0088 211.699 74.4546C203.271 67.4349 193.892 67.4217 183.522 69.2196C180.643 62.451 177.393 56.3963 175.266 48.8742C170.63 32.5741 162.519 -6.41129 192.307 14.8595C221.012 35.3503 251.381 89.1287 259.756 123.064C264.723 143.158 267.616 171.132 239.122 150.178C227.458 141.612 219.149 129.925 210.88 118.397" fill="#0AB3CA" />
                <path d="M210.88 118.41C198.463 101.092 191.818 88.7581 183.509 69.2191C193.879 67.4212 203.271 67.4344 211.686 74.4542C225.569 86.0083 225.16 107.491 210.867 118.41" fill="#E97927" />
                <path d="M113.577 307.957C176.304 307.957 227.154 257.067 227.154 194.292C227.154 131.517 176.304 80.6279 113.577 80.6279C50.8502 80.6279 0 131.517 0 194.292C0 257.067 50.8502 307.957 113.577 307.957Z" fill="#E6E7E8" />
                <mask id="mask0_46_255" maskUnits="userSpaceOnUse" x="0" y="80" width="228" height="228">
                  <path d="M113.577 307.957C176.304 307.957 227.154 257.067 227.154 194.292C227.154 131.517 176.304 80.6279 113.577 80.6279C50.8502 80.6279 0 131.517 0 194.292C0 257.067 50.8502 307.957 113.577 307.957Z" fill="white" />
                </mask>
                <g mask="url(#mask0_46_255)">
                  <path d="M234.221 157.924C208.29 157.184 182.597 161.388 157.578 167.826C150.379 169.677 142.44 171.646 136.826 174.859C132.255 177.476 111.331 184.509 105.44 186.149C105.07 186.254 99.548 186.109 98.2006 186.955C85.9288 171.567 74.3835 154.791 67.6201 136.151C90.5258 124.333 115.347 91.4151 130.247 70.2897C141.383 54.492 151.119 37.7556 161.779 21.6538C160.828 60.8111 203.112 134.618 234.221 157.924Z" fill="#B1E0E7" />
                  <path d="M35.415 276.85V339.354L106.127 257.364L82.6134 233.78L35.415 276.85Z" fill="#E97927" />
                  <path d="M142.454 186.955C148.451 186.876 146.813 190.67 148.53 193.366C149.111 194.292 150.868 194.781 151.753 195.786C153.84 198.139 157.896 206.005 159.547 207.736C160.287 208.516 162.202 208.331 163.298 210.01C164.884 212.43 163.629 215.245 164.184 216.792C155.267 222.186 147.064 228.954 138.821 235.353C137.843 236.106 137.315 237.362 136.813 237.746C131.278 242.055 116.14 253.186 109.205 252.116C105.955 251.613 92.2566 235.525 88.0824 232.881C86.4179 229.126 92.8907 222.292 94.4759 219.132C95.9818 216.118 96.6951 212.35 98.3199 209.27C100.592 204.934 104.832 199.686 108.637 196.632C108.676 196.711 109.799 196.473 110.248 197.213C111.569 199.395 114.396 206.11 116.932 205.41L140.089 187.391C140.816 186.889 141.608 186.968 142.44 186.955" fill="#7A5841" />
                  <path d="M67.6073 136.151C74.3706 154.791 85.9159 171.567 98.1878 186.955C98.0821 187.021 98.1217 188.462 96.9064 189.255C77.1975 202.105 63.5519 206.824 50.0515 183.161C45.5338 175.229 38.4534 157.329 45.4414 149.82C51.4386 143.369 60.157 139.985 67.6073 136.138" fill="#0AB3CA" />
                  <path d="M164.197 216.779C164.342 217.202 169.097 221.895 170.035 223.429C171.528 225.888 173.932 230.092 172.651 232.881C171.33 235.723 148.873 249.34 146.099 249.075C143.986 248.877 139.244 239.451 136.839 237.746C137.341 237.349 137.883 236.107 138.847 235.34C147.09 228.942 155.293 222.173 164.21 216.779" fill="#E97927" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_46_255">
                  <rect width="271.235" height="307.944" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className='flex items-start space-x-10'>

            <div className='text-white'>
              <h3 className={cn(bebasNeue.className, 'text-6xl')}>A generation <br />
                ready to lead</h3>
              <h4 className='text-brand-green text-2xl font-bold'>
                it&apos;s time to put their voices
                at the center.
              </h4>
              <p className='mt-8'><strong>Explore the voices behind the Africa Skills Revolution.</strong></p>
              <p className='mt-6'>


                Use the map to discover where our youth survey respondents and competition winners come from. From rural communities to refugee camps, these young people are reimagining vocational education — and using their skills to respond to Africa’s evolving challenges and opportunities.

              </p>
            </div>
          </div>

          <div className='flex items-start justify-center space-x-10'>
            <Africa />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Initiative
