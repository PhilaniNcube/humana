"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface PolicyAreaProps {
  title: string
  summary: string
  points: string[]
  isOpen: boolean
  toggleOpen: () => void
}

function PolicyArea({ title, summary, points, isOpen, toggleOpen }: PolicyAreaProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggleOpen}
        className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
      >
        <div>
          <h3 className="text-xl font-semibold text-brand-orange">{title}</h3>
          <p className="">{summary}</p>
        </div>
        <ChevronDown className={cn("h-5 w-5 text-orange-500 transition-transform", isOpen && "rotate-180")} />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0",
        )}
      >
        <ul className="ml-6 space-y-2 list-disc text-gray-700">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function YouthPolicyCall() {
  const [openSection, setOpenSection] = useState<number | null>(null)

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index)
  }

  const policyAreas = [
    {
      title: "Expand Access",
      summary: "Increase accessibility of TVET education for all youth",
      points: [
        "Invest in new TVET centers in rural areas with modern facilities and technology.",
        "Develop scholarship programs and financial aid for marginalised groups (women, refugees, persons with disabilities).",
        "Provide subsidized transport or boarding facilities to support rural youth attending training centers.",
      ],
    },
    {
      title: "Modernise and Ensure Curriculum Relevance",
      summary: "Align training with current market needs and future trends",
      points: [
        "Revise curricula in collaboration with industry stakeholders to meet market needs (e.g., renewable energy, healthcare, digital tech).",
        "Integrate work-based learning and apprenticeships for hands-on experience.",
        "Embed soft skills training to improve overall employability.",
        "Anticipate evolving skills needs through strong mechanisms to align with labor market demands.",
      ],
    },
    {
      title: "Promote Entrepreneurship",
      summary: "Equip youth with business skills and startup support",
      points: [
        "Introduce entrepreneurship modules in TVET curricula, including business planning and financial management.",
        "Create incubation programs and seed funding to support graduates' businesses, especially in rural areas.",
        "Partner with financial institutions to develop tailored loan schemes for young entrepreneurs.",
      ],
    },
    {
      title: "Promote Gender Inclusivity",
      summary: "Create equal opportunities across all genders and backgrounds",
      points: [
        "Encourage women in male-dominated fields (e.g., STEM) through outreach campaigns and financial incentives.",
        "Provide childcare and flexible class schedules to support students with caregiving responsibilities.",
        "Create safe, inclusive environments and offer support for female students.",
        "Design programs for marginalized groups, including financial support and recognition of prior learning.",
      ],
    },
    {
      title: "Leverage Digital Platforms",
      summary: "Utilize technology to expand reach and enhance learning",
      points: [
        "Develop online and hybrid TVET programs to accommodate remote learners.",
        "Incorporate digital literacy training to equip students for the modern workforce.",
        "Use digital tools for mentorship and networking across regions.",
      ],
    },
    {
      title: "Amplify Youth Voices",
      summary: "Ensure youth participation in policy and program development",
      points: [
        "Establish youth advisory councils to incorporate young people's perspectives into TVET policy and curriculum.",
        "Conduct surveys and focus groups to gather actionable insights from youth about TVET.",
      ],
    },
    {
      title: "Strengthen Partnerships",
      summary: "Foster collaboration between education, government and industry",
      points: [
        "Create collaborations between governments, private sector, and educational institutions to co-create TVET programs.",
        "Encourage private sector investment in infrastructure and equipment to ensure industry standards.",
        "Create internships and apprenticeships to transition students into employment.",
        "Complement TVET with career guidance and job counseling to help youth navigate the labor market.",
      ],
    },
    {
      title: "Reshape TVET Narratives",
      summary: "Change perceptions about technical and vocational education",
      points: [
        "Launch nationwide campaigns highlighting diverse success stories of TVET graduates.",
        "Engage media and influential figures to shift perceptions of TVET as a valuable career pathway.",
        "Encourage family support through targeted awareness campaigns.",
      ],
    },
    {
      title: "Align with Agenda 2063",
      summary: "Connect TVET programs with Africa's development goals",
      points: [
        "Integrate climate-smart and sustainable practices like renewable energy and sustainable agriculture into TVET training.",
        "Support initiatives addressing key challenges like waste management and water conservation.",
        "Track alignment of TVET programs with Agenda 2063 goals for continuous improvement and relevance to Africa's development priorities.",
      ],
    },
  ]

  return (
    <div className="container mx-auto py-12 px-[60px]" id='policymakers'>
      <h2 className='text-5xl text-center font-bold text-brand-blue uppercase'>YOUTH CALL TO POLICYMAKERS</h2>
      <svg className='text-center w-fit mx-auto mt-4' width="112" height="9" viewBox="0 0 112 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="112" height="9" fill="#F38E22" />
      </svg>
      <div className="bg-white rounded-lg shadow-lg max-w-5xl mx-auto p-6">
        <div className="space-y-1">
          {policyAreas.map((area, index) => (
            <PolicyArea
              key={index}
              title={area.title}
              summary={area.summary}
              points={area.points}
              isOpen={openSection === index}
              toggleOpen={() => toggleSection(index)}
            />
          )          )}
        </div>
      </div>
      
      <ChevronDown 
        className='text-brand-orange w-16 h-16 duration-500 mx-auto mt-12 animate-bounce ease-in-out' 
      />
    </div>
  )
}
