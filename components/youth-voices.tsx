'use client'

import { bebasNeue } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import React, { useRef } from 'react' // Added useRef
import StoryCard from './story-card'
import { Card, CardContent } from './ui/card'
import SurveyDashboard from './survey-dashboard'
import Africa from './africa'
import { useGSAP } from '@gsap/react' // Added useGSAP
import gsap from 'gsap' // Added gsap
import { ScrollTrigger } from 'gsap/ScrollTrigger' // Added ScrollTrigger

gsap.registerPlugin(useGSAP, ScrollTrigger); // Register ScrollTrigger

const youthVoices = [
  {
    title: 'PERCEPTIONS AND MOTIVATIONS BEHIND TVET',
    description: 'Understanding the motivations driving young Africans to pursue TVET is foundational to addressing barriers, enhancing accessibility, and designing systems that resonate with their aspirations.',
    text: [
      'Across Africa, TVET is seen by young people as a launchpad to entrepreneurship, positive purpose and economic progress. Nearly half enrolled to secure a relevant job (42%) or gain hands-on training (41%). These choices reflect a growing demand for learning that leads directly to opportunity. Notably, 38% are motivated by a desire to make a positive impact on society, underscoring their belief in TVET’s transformative potential.',
      'A strong majority of people who have experienced TVET (80%) believe it is vital to their country’s socioeconomic development, with 72% agreeing that it aligns with real-world job markets. Vocational education isn’t just seen as training programmes — they’re launchpads for livelihoods, dignity, and sustainable development and growth.'
    ],
    data: [{
      value: 42,
      label: 'secured a relevant job'
    },
    {
      value: 41,
      label: 'sought more practical training'
    },
    {
      value: 72,
      label: 'aligned with labor market needs'
    },
    {
      value: 80,
      label: 'socioeconomic development'
    },
    ],
    icons: [
      '/images/stats/42_relevant_job.png',
      '/images/stats/72_per_relevant.svg',
      '/images/stats/41_practical_training.png',
    ],
    stats: [
      '42% of young people chose TVET to secure a relevant job, and 41% sought more practical training',
      '72% agree that TVET is aligned with labor market needs, and 80% believe it plays a major role in their country’s socioeconomic development'
    ],
    stories: [
      {
        name: "Raina Augustus",
        sector: "Digital Technology",
        innovation: "SILA-EB Platform For Digital Inclusion",
        country: 'Namibia',
        flag: "/images/namibia.png",
        image: "/images/raina.png",
        story: "Growing up in Namibia’s remote Rola community, I experienced firsthand the challenges of limited access to technology. This lack of connectivity meant young people in my area struggled to access vital information and opportunities. Determined to change this, I turned to TVET to gain the skills to address these gaps. Through my training in digital platform development, I created SILA-EB, a system designed to connect underserved communities with essential resources. TVET also gave me the confidence to involve women and youth in using these tools, inspiring them to embrace technology to improve their livelihoods.",
        video: "https://www.youtube.com/watch?v=uWd8d6CfuyU",
      },
      {
        name: 'Célio Monteiro José',
        sector: 'Agriculture',
        innovation: 'Climate-smart farming practices',
        country: 'Mozambique',
        flag: "/images/mozambique.png",
        image: '/images/celio.png',
        story: 'Growing up in Mozambique, I was deeply troubled by the effects of deforestation and environmental degradation in my community. I wanted to show that farming could be both productive and sustainable. Through TVET, I learned climate-smart agricultural techniques, which I now use to train local farmers in practices that preserve the environment while boosting yields. TVET also equipped me with the tools to develop solutions tailored to my community’s needs, enabling me to make a meaningful difference in their lives.',
        video: 'https://www.youtube.com/watch?si=FcEIBLQp91-2TfHB&v=p_S4ltwYMeQ&feature=youtu.be',
      },
      {
        name: 'Jonathan Shauri Kalibatha',
        sector: 'Sustainable Manufacturing',
        innovation: 'Re-banatex for eco-friendly textiles',
        country: 'Rwanda',
        flag: "/images/rwanda.png",
        image: '/images/jonathan.png',
        story: 'In Rwanda, I saw potential where others saw waste. Discarded banana stems, often left to rot, inspired me to explore how agricultural waste could be transformed into valuable products. Through TVET, I mastered fibre extraction and textile production, which enabled me to launch Re-banatex. This initiative produces eco-friendly textiles while creating additional income streams for local farmers. My education also connected me with mentors who supported me in scaling my efforts, turning my vision of sustainability into reality.',
        video: 'https://www.youtube.com/watch?si=yTkZxtUelgJfaXWx&v=SukDvlF7HQs&feature=youtu.be',
      },
    ]
  },
  {
    title: 'TVET PROGRAMMES',
    description: 'Addressing the barriers that prevent African youth from accessing TVET is crucial to advancing inclusive systems, ensuring equitable access, and strengthening the continent’s young workforce.',
    subtitle: 'Challenges in accessing TVET Programmes',
    text: [
      'Access to TVET remains uneven. For most young people (72%), the biggest barrier is financial — many simply can’t afford it. Others struggle with a lack of information (54%) or live too far from training centres (38%), especially in rural areas.',
      'But their ambitions are clear: today’s youth want more than technical know-how. They’re calling for digital skills (68%), entrepreneurship training (70%), and soft skills (66%) that prepare them for a fast-changing economy — and for life. They view vocational education as a launchpad for self-sufficiency and entrepreneurship, not merely a pathway to employment.'
    ],
    data: [
      {
        value: 72,
        label: 'financial constraints'
      },
      {
        value: 54,
        label: 'lack of information'
      },
      {
        value: 38,
        label: 'poor rural accessibility'
      },
      {
        value: 68,
        label: 'digital literacy'
      },
      {
        value: 66,
        label: 'soft skills training'
      },
      {
        value: 70,
        label: 'entrepreneurship training'
      },

    ],
    icons: [
      '/images/stats/72_financial_barriers.svg',
      '/images/stats/54_lack_of_information.svg',
      '/images/stats/38_rural_accessibility.svg',
    ],
    stats: [
      '72% of youth cite financial constraints as the top barrier to accessing TVET programmes',
      '54% point to a lack of information, and 38% to poor rural accessibility',
      'Youth also call for more digital literacy (68%), soft skills (66%), and entrepreneurship (70%), indicating a desire for TVET programmes to evolve and stay relevant to today’s economy'
    ],
    stories: [
      {
        name: 'Malak Abshir Omar',
        sector: 'Electrical Engineering',
        innovation: 'Solar-powered irrigation systems (based in Kenya’s Dadaab Camp)',
        country: 'Somalia',
        flag: "/images/somalia.png",
        image: '/images/omar.png',
        story: 'As a Somali refugee in Kenya’s Dadaab Camp, I faced limited access to education and technical training, leaving my community and me struggling to find solutions for everyday challenges. Despite these circumstances, I remained determined to make a difference. Through TVET, I learnt solar installation and electrical engineering skills, which enabled me to create solar-powered irrigation systems for sustainable farming in an arid environment. I also received support to train over 50 young people in the camp, ensuring the benefits of my learning reached others. TVET gave me not just knowledge but the confidence and resources to create meaningful change.',
        video: 'https://www.youtube.com/watch?si=HvG9Ezfc8zEZuPMt&v=wQiHYtc0DyM&feature=youtu.be',
      },
      {
        name: 'Huda Arbab',
        sector: 'Cultural Heritage and Entrepreneurship',
        innovation: 'Training women in traditional crafts and expanding global markets (based in Kenya’s Kakuma Camp)',
        country: 'Sudan',
        flag: "/images/south-sudan.png",
        image: '/images/huda.png',
        story: 'In Kenya’s Kakuma Refugee Camp, I saw talented women unable to earn a living due to a lack of market access and training. The skills were there, but the tools to turn them into income were not. Through TVET, I gained modern craft techniques and digital marketing skills, which enabled me to launch Craft for Life, an initiative that helps women transform their talents into marketable products now sold internationally.TVET also gave me the ability to teach financial literacy, empowering over 75 women to achieve economic independence.',
        video: 'https://www.youtube.com/watch?si=ln3-5_tA34ZDHKMY&v=nMI2srP33fQ&feature=youtu.be',
      },
      {
        name: 'Aline Niyomubyeyi',
        sector: 'Technology and Innovation',
        innovation: 'Public transport mobile app for efficiency and inclusion',
        country: 'Rwanda',
        flag: "/images/rwanda.png",
        image: '/images/aline.png',
        story: 'In Rwanda, I encountered gender stereotypes that made it difficult for women like me to succeed in technology. Many doubted my ability to lead or create innovative solutions, but I was determined to prove them wrong. TVET equipped me with automation and app development skills, enabling me to design Sot, a mobile app that improves public transport by letting commuters book tickets and track buses. My work has made transport more accessible, especially for communities with limited access to resources. More importantly, my success is encouraging other women to consider careers in technology.',
        video: 'https://www.youtube.com/watch?v=JxFih7STgNA',
      },
    ]
  },
  {
    title: 'CAREER DEVELOPMENT',
    description: 'The survey offers a multi-dimensional view of the enablers and barriers young Africans face when entering the job market after graduating from vocational education.',
    subtitle: 'Effective Support for Career Development',
    text: [
      'For young Africans, financial support remains the biggest game-changer — nearly half say scholarships or funding (46%) are key to building a career after TVET. But money isn’t everything. Many also call for job placement opportunities (19%), and stronger networking opportunities (19%).',
      'These responses point to a clear message: success after training depends not only on skills but also on the systems that connect youth to real-world work and support students after graduation as they transition into the labor market.'
    ],
    data: [
      {
        value: 46,
        label: 'financial support or scholarships'
      },
      {
        value: 19,
        label: 'job placement assistance and internships'
      },
      {
        value: 16,
        label: 'networking opportunities'
      }
    ],
    icons: [
      '/images/stats/46_financial_support.png',
      '/images/stats/job_placement.png',
      '/images/stats/networking_opportunities.png',
    ],
    stats: [
      '46% say financial support or scholarships are the most important enabler of career success after graduating',
      'This is followed by job placement assistance and internships (19%) and networking opportunities (16%).'
    ],
    stories: [
      {
        name: 'Naleh Befii Victory',
        sector: 'Creative Arts',
        innovation: 'EcoFusion sustainable fashion',
        country: 'Ghana',
        flag: "/images/ghana.png",
        image: '/images/victory.png',
        story: 'Achieving my dream of transforming African fashion required more than creativity—it demanded access to training and resources to bridge the gap between my vision and reality. Through TVET, I gained the technical knowledge to combine upcycled materials with traditional African techniques, leading to the creation of EcoFusion, a sustainable fashion brand that celebrates heritage while reducing environmental impact. Mentorship opportunities during my training helped me refine my approach and scale my work, including training young designers to adopt sustainable practices.',
        video: 'https://www.youtube.com/watch?v=f4Q_EXCT_i8',
      },
      {
        name: 'Retiana Tiyamike Phiri',
        sector: 'Biomedical Engineering',
        innovation: 'Wearable devices for pain management (Zambia)',
        country: 'Zambia',
        flag: "/images/zambia.png",
        image: '/images/retiana.png',
        story: 'When I recognised the challenge of chronic pain in my community, I knew addressing it required both innovation and expertise. However, creating practical solutions was impossible without specialised training and mentorship. Through TVET, I developed the skills to design wearable medical devices that provide real-time pain management, reducing dependency on opioids. Hands-on training and mentorship enabled me to refine my designs and ensure their effectiveness. Today, my devices are improving lives and setting an example for young innovators across Africa.',
        video: 'https://www.youtube.com/watch?v=6wWJamyTSSM',
      }
    ]
  },
  {
    title: 'YOUTH ARE HELPING RESHAPE THE TVET NARRATIVE',
    description: 'Advocating for TVET and making it competitive with traditional higher education',
    subtitle: 'The role of young people in shaping TVET',
    text: [
      'Young Africans are not just participating in vocational education — they’re transforming it. Over 80% of young people see themselves as key actors in shaping and advocating for TVET, helping it compete with traditional higher education pathways. Young people do not want to be just beneficiaries, but active agents and co-designers of TVET strategies.',
      'They also recognize that changing perceptions requires them to lead by example. In fact, 86% of youth say they would recommend TVET to their peers.'
    ],
    data: [
      {
        value: 86,
        label: 'recommend TVET to their peers'
      },
      {
        value: 80,
        label: 'advocating for TVET'
      }, {
        value: 62,
        label: 'leads to likley career success'
      }
    ],
    icons: [
      '/images/stats/demanded_skills.png',
    ],
    stats: [
      '86% of youth would recommend TVET to their peers',
      'Over 80% believe young people themselves have a key role to play in advocating for TVET and making it competitive with traditional higher education',
      '62% believe that TVET likely leads to career success,'
    ],
    stories: [
      {
        name: 'Adaugo Felix',
        sector: 'Sustainable Fashion',
        innovation: 'Circular economy in design (Nigeria)',
        country: 'Nigeria',
        flag: "/images/nigeria.png",
        image: '/images/felix.png',
        story: 'I saw the growing issue of textile waste in my community as both a challenge and an opportunity. I believed that vocational skills could help me transform this waste into something valuable while also raising awareness about sustainability. Through TVET, I learned eco-conscious design techniques and business management skills, which allowed me to launch Araverme Wardrobe. This initiative repurposes discarded materials into clothing and home décor, blending environmental responsibility with economic opportunity. By training others in these techniques, I am building a network of artisans committed to sustainable practices.',
        video: 'https://www.youtube.com/watch?v=pURv1n07QyM',
      },
      {
        name: 'Ochieng Benedict Onyando',
        sector: 'Fisheries',
        innovation: 'Bamboo cages for fish farming',
        country: 'Kenya',
        flag: "/images/kenya.png",
        image: '/images/benedict.png',
        story: 'Growing up near Lake Victoria, I was deeply concerned about the environmental damage caused by unsustainable fishing practices. I wanted to develop methods that were both environmentally friendly and economically viable, but I needed specialised training to make my ideas a reality. Through TVET, I gained expertise in aquaculture and sustainable materials, enabling me to introduce bamboo cages for fish farming. These cages have reduced environmental degradation while increasing fish yields, providing a reliable food source for my community. My success demonstrates how TVET can deliver the knowledge and skills needed to address pressing issues like food security and sustainability.',
        video: 'https://www.youtube.com/watch?v=zz4qzDDu4sA',
      }
    ]
  }

]





const YouthVoices = () => {
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  iconRefs.current = []; // Initialize as an empty array

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  };

  useGSAP(() => {
    iconRefs.current.forEach((iconContainer) => {
      if (iconContainer) {
        const icons = iconContainer.querySelectorAll('img');
        gsap.fromTo(
          icons,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.2,
            scrollTrigger: {
              trigger: iconContainer,
              start: 'top 80%', // When the top of the trigger hits 80% of the viewport height
              end: 'bottom 20%', // When the bottom of the trigger hits 20% of the viewport height
              toggleActions: 'play reverse play reverse', // Play on enter, reverse on leave, play on re-enter, reverse on re-leave
            },
          }
        );
      }
    });
  }, { scope: iconRefs });

  return (
    <section id='youth' className='mb-16'>
      <div className='pt-20 container mx-auto'>
        <h2 className='text-5xl text-center font-bold text-brand-blue uppercase'>Youth Voices</h2>
        <svg className='text-center w-fit mx-auto mt-4' width="112" height="9" viewBox="0 0 112 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="112" height="9" fill="#F38E22" />
        </svg>

        <div className='mt-16 bg-brand-blue px-4 lg:px-[40px] py-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 container mx-auto'>


            <div className='flex items-start space-x-10'>
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
              <div className='text-white'>
                <h3 className={cn(bebasNeue.className, 'text-6xl')}>A generation <br />
                  ready to lead</h3>
                <h4 className='text-brand-green text-2xl font-bold'>
                  it&apos;s time to put their voices
                  at the center.
                </h4>
                <p className='mt-8'><strong>Meet the changemakers of the Africa Skills Revolution.</strong></p>
                <p className='mt-6'>
                  Use the map to explore where our competition winners come from. From bustling cities to rural towns and refugee communities, these young innovators are redefining what vocational education can achieve — using their skills to tackle Africa’s most pressing challenges and unlock new opportunities.
                  Each dot marks a story of vision, resilience, and impact. Discover how these trailblazers are shaping the future of work through TVET.
                </p>
              </div>
            </div>

            <div className='flex items-start justify-center space-x-10'>
              <Africa />
            </div>
          </div>

        </div>
        <div className="lg:px-[40px] px-4 container mx-auto py-8 ">
          <SurveyDashboard />


        </div>


        <div className='lg:px-[40px] px-4'>
          <div className='grid md:grid-cols-2  mx-auto gap-x-8'>
            <div className='col-span-1 flex flex-col justify-center'>
              <p className='text-xl  mx-auto font-light'>
                The Africa Skills Revolution stands as a powerful testament to the potential of young people when they are empowered with the right tools, opportunities, and platforms to lead.
              </p>
              <p className='text-xl my-3  mx-auto font-light'>
                Discover the insights gathered from the advocacy campaign, the competition, and the youth survey — now forming a powerful foundation for action. These findings reflect the real experiences, challenges, and aspirations of young people across Africa.
              </p>
              <p className='text-xl mx-auto font-light'>Their voices won’t be left behind, they’re being brought to the heart of the conversation on TVET and skills development.
              </p>

            </div>
            <div className='flex items-center justify-center '>
              <img src="/images/vocational.png" alt="Africa Skills Revolution" className='w-full object-cover' />
            </div>
          </div>



          <div>


            {youthVoices.map((item) => {

              return (
                <div key={item.title}>
                  <div className='w-full bg-brand-orange p-4 rounded-lg' >
                    <h3 className='text-center text-2xl lg:text-4xl  font-bold my-3'>{item.title}</h3>
                    <p className='text-center text-xl lg:text-2xl text-white font-light mt-4'>{item.description}</p>
                  </div>
                  {/* Data Visualization */}
                  <div className='mt-10 mb-12'>
                    {item.data && item.data.length > 0 ? (
                      <Card className="p-6 border-brand-blue border-2 rounded-lg">
                        {item.subtitle && <h4 className='text-center text-xl  text-brand-orange font-bold my-3'>{item.subtitle}</h4>}
                        <div ref={addToRefs} className='mt-6 flex flex-row gap-4 justify-center items-center'>
                          {item.icons && item.icons.map((stat, index) => (
                            <img key={index} src={stat} alt={`Stat ${index}`} className="max-w-sm mx-auto mb-2" />
                          ))}
                        </div>
                      </Card>
                    ) : (
                      <div className='flex flex-col lg:flex-row gap-4 justify-center items-center'>

                        {item.stats.map((stat, index) => (
                          <Card key={index} className='flex items-center gap-2'>
                            <CardContent>
                              <div className='h-20 w-20 text-brand-orange mx-auto text-center flex items-center justify-center text-4xl font-bold'>
                                {stat.match(/\d+%/)?.[0] || ""}
                              </div>
                              <p>{stat}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </div>
                  {item.text.map((text, index) => (
                    <p key={index} className='text-center text-md max-w-4xl mx-auto font-light mt-4 '>{text}</p>
                  ))}
                  <div className='flex flex-wrap justify-center gap-5 mt-12 pb-16'>
                    {item.stories.map((story) => (
                      <StoryCard key={story.name} story={story} />
                    ))}
                  </div>
                </div>
              )
            })}



          </div>
        </div>
      </div>
    </section>
  )
}

export default YouthVoices
