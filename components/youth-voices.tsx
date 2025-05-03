import { bebasNeue } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { ChevronDown, Lightbulb, Package } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'


const youthVoices = [
  {
    title: 'PERCEPTIONS AND MOTIVATIONS BEHIND TVET',
    description: 'Understanding the motivations driving young Africans to pursue TVET is foundational to addressing barriers, enhancing accessibility, and designing systems that resonate with their aspirations.',
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
        image: '/images/martha.png',
        story: 'As a Somali refugee in Kenya’s Dadaab Camp, I faced limited access to education and technical training, leaving my community and me struggling to find solutions for everyday challenges. Despite these circumstances, I remained determined to make a difference. Through TVET, I learnt solar installation and electrical engineering skills, which enabled me to create solar-powered irrigation systems for sustainable farming in an arid environment. I also received support to train over 50 young people in the camp, ensuring the benefits of my learning reached others. TVET gave me not just knowledge but the confidence and resources to create meaningful change.',
        video: 'https://www.youtube.com/watch?si=HvG9Ezfc8zEZuPMt&v=wQiHYtc0DyM&feature=youtu.be',
      },
      {
        name: 'Huda Arbab',
        sector: 'Cultural Heritage and Entrepreneurship',
        innovation: 'Training women in traditional crafts and expanding global markets (based in Kenya’s Kakuma Camp)',
        country: 'Sudan',
        flag: "/images/south-sudan.png",
        image: '/images/martha.png',
        story: 'In Kenya’s Kakuma Refugee Camp, I saw talented women unable to earn a living due to a lack of market access and training. The skills were there, but the tools to turn them into income were not. Through TVET, I gained modern craft techniques and digital marketing skills, which enabled me to launch Craft for Life, an initiative that helps women transform their talents into marketable products now sold internationally.TVET also gave me the ability to teach financial literacy, empowering over 75 women to achieve economic independence.',
        video: 'https://www.youtube.com/watch?si=ln3-5_tA34ZDHKMY&v=nMI2srP33fQ&feature=youtu.be',
      },
      {
        name: 'Aline Niyomubyeyi',
        sector: 'Technology and Innovation',
        innovation: 'Public transport mobile app for efficiency and inclusion',
        country: 'Rwanda',
        flag: "/images/rwanda.png",
        image: '/images/martha.png',
        story: 'In Rwanda, I encountered gender stereotypes that made it difficult for women like me to succeed in technology. Many doubted my ability to lead or create innovative solutions, but I was determined to prove them wrong. TVET equipped me with automation and app development skills, enabling me to design Sot, a mobile app that improves public transport by letting commuters book tickets and track buses. My work has made transport more accessible, especially for communities with limited access to resources. More importantly, my success is encouraging other women to consider careers in technology.',
        video: 'https://www.youtube.com/watch?v=JxFih7STgNA',
      },
    ]
  },
  {
    title: 'CAREER DEVELOPMENT',
    description: 'The survey offers a multi-dimensional view of the enablers and barriers young Africans face when entering the job market after graduating from vocational education.',
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
        image: '/images/martha.png',
        story: 'Achieving my dream of transforming African fashion required more than creativity—it demanded access to training and resources to bridge the gap between my vision and reality. Through TVET, I gained the technical knowledge to combine upcycled materials with traditional African techniques, leading to the creation of EcoFusion, a sustainable fashion brand that celebrates heritage while reducing environmental impact. Mentorship opportunities during my training helped me refine my approach and scale my work, including training young designers to adopt sustainable practices.',
        video: 'https://www.youtube.com/watch?v=f4Q_EXCT_i8',
      },
      {
        name: 'Retiana Tiyamike Phiri',
        sector: 'Biomedical Engineering',
        innovation: 'Wearable devices for pain management (Zambia)',
        country: 'Zambia',
        flag: "/images/zambia.png",
        image: '/images/martha.png',
        story: 'When I recognised the challenge of chronic pain in my community, I knew addressing it required both innovation and expertise. However, creating practical solutions was impossible without specialised training and mentorship. Through TVET, I developed the skills to design wearable medical devices that provide real-time pain management, reducing dependency on opioids. Hands-on training and mentorship enabled me to refine my designs and ensure their effectiveness. Today, my devices are improving lives and setting an example for young innovators across Africa.',
        video: 'https://www.youtube.com/watch?v=6wWJamyTSSM',
      }
    ]
  },
  {
    title: 'YOUTH ARE HELPING RESHAPE THE TVET NARRATIVE',
    description: '',
    stats: [
      '86% of youth would recommend TVET to their peers',
      'Over 80% believe young people themselves have a key role to play in advocating for TVET and making it competitive with traditional higher education'
    ],
    stories: [
      {
        name: 'Adaugo Felix',
        sector: 'Sustainable Fashion',
        innovation: 'Circular economy in design (Nigeria)',
        country: 'Nigeria',
        flag: "/images/nigeria.png",
        image: '/images/martha.png',
        story: 'I saw the growing issue of textile waste in my community as both a challenge and an opportunity. I believed that vocational skills could help me transform this waste into something valuable while also raising awareness about sustainability. Through TVET, I learned eco-conscious design techniques and business management skills, which allowed me to launch Araverme Wardrobe. This initiative repurposes discarded materials into clothing and home décor, blending environmental responsibility with economic opportunity. By training others in these techniques, I am building a network of artisans committed to sustainable practices.',
        video: 'https://www.youtube.com/watch?v=pURv1n07QyM',
      },
      {
        name: 'Ochieng Benedict Onyando',
        sector: 'Fisheries',
        innovation: 'Bamboo cages for fish farming',
        country: 'Kenya',
        flag: "/images/kenya.png",
        image: '/images/martha.png',
        story: 'Growing up near Lake Victoria, I was deeply concerned about the environmental damage caused by unsustainable fishing practices. I wanted to develop methods that were both environmentally friendly and economically viable, but I needed specialised training to make my ideas a reality. Through TVET, I gained expertise in aquaculture and sustainable materials, enabling me to introduce bamboo cages for fish farming. These cages have reduced environmental degradation while increasing fish yields, providing a reliable food source for my community. My success demonstrates how TVET can deliver the knowledge and skills needed to address pressing issues like food security and sustainability.',
        video: 'https://www.youtube.com/watch?v=zz4qzDDu4sA',
      }
    ]
  }

]





const YouthVoices = () => {
  return (
    <section id='youth' className='mb-16'>
      <div className='px-[60px] pt-20 container mx-auto'>
        <h2 className='text-5xl text-center font-bold text-brand-blue uppercase'>Youth Voices</h2>
        <svg className='text-center w-fit mx-auto mt-4' width="112" height="9" viewBox="0 0 112 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="112" height="9" fill="#F38E22" />
        </svg>

        <p className='text-3xl max-w-5xl mx-auto text-balance  font-light text-center mt-4'>
          The Africa Skills Revolution stands as a powerful testament to the potential of young people when they are empowered with the right tools, opportunities, and platforms to lead.    </p>

          <ChevronDown className='text-brand-orange w-16 h-16 duration-500 mx-auto mt-12 animate-bounce ease-in-out' />

        <p className='text-3xl max-w-5xl mx-auto text-balance  font-light text-center mt-10'>
          Discover the insights gathered from the advocacy campaign, the competition, and the youth survey — now forming a powerful foundation for action. These findings reflect the real experiences, challenges, and aspirations of young people across Africa.
        </p>
        <p className='text-3xl max-w-5xl mx-auto text-balance  font-light text-center mt-10'>Their voices won’t be left behind, they’re being brought to the heart of the conversation on TVET and skills development. </p>

       <ChevronDown className='text-brand-orange w-16 h-16 duration-500 mx-auto mt-12 animate-bounce ease-in-out' />

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
      <ChevronDown className='text-brand-orange w-16 h-16 duration-500 mx-auto mt-12 animate-bounce ease-in-out' />
        <div>
          <h4 className='text-center uppercase text-6xl mt-16 font-bold'>Stories</h4>
          <div className='h-1 rounded-full max-w-3xl mx-auto bg-brand-orange gap-6 my-10' />

          {youthVoices.map((item) => {

            return (
              <div key={item.title}>
                <h3 className='text-center text-4xl font-bold my-3'>{item.title}</h3>
                <p className='text-center text-2xl font-light mt-4'>{item.description}</p>
                <div className='bg-brand-orange text-white  rounded-2xl p-3 my-4 font-medium '>
                  {item.stats.map((stat, index) => (
                    <p key={index} className='text-center my-2 max-w-4xl mx-auto'>{stat}</p>
                  ))}
                </div>
                <div className='grid lg:grid-cols-3 gap-4'>
                  {item.stories.map((story) => (
                    <Card className=' flex flex-col justify-between isolate' key={story.name}>
                      <CardHeader className=''>

                        
                        <div className=' flex justify-between space-x-3 relative isolate z-[-2]'>
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

                          <div className='bg-brand-blue text-white rounded-2xl p-3'>
                            <p className='leading-7 italic'>{story.story}</p>
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
                  ))}
                </div>
              </div>
            )
          })}



        </div>
      </div>
    </section>
  )
}

export default YouthVoices
