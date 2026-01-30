import React from "react"
import Image from "next/image"
import OverviewTabs from "../shared/BBA-MBA-BBA-Aviation/OverviewTabs"

const Overview = () => {
  const eligibilityData = [
    {
      id: 1,
      heading:
        "The applicant must satisfy one of the following eligibility criteria for admissions into the MBA program:",
      items: [
        "A graduate degree under 10+2+3 or 10+2+4 pattern under any discipline, securing at least 50% marks in aggregate, from a recognised university",
        "An honors degree under 10+2+4 pattern from a recognised university under UGC Act with at least 50% marks in aggregate including languages",
        "Candidates who have passed Bachelor/Master degree through correspondence/Open University System from this university or from any other university recognised by law, are exempted from 10+2 pattern. The duration of the degree program must be 3 + 2 years",
      ],
    },
    {
      id: 2,
      heading: "Important:",
      items: [
        "Candidates who pass bachelor/master degree in any university system in single sitting pattern are not eligible for admission to the MBA program offered by AIMS Institutes, Bangalore",
        "In case of SC/ST/Category I candidates, there is a relaxation of 5% in the aggregate of marks obtained in the University Exams",
        "MBA admission criteria is based on a valid score in PGCET (MBA)/CAT/MAT/XAT/ATMA or any national admission test",
      ],
    },
  ]

  const selectionSteps = [
    {
      title: "Step 1: Application Form Submission",
      description:
        "Applicants must fill out a detailed online application form capturing personal, academic, and professional details. The form is reviewed to determine eligibility and completeness.",
    },
    {
      title: "Step 2: AI-Based Interview",
      description:
        "This interview serves as an elimination round. An automated video interview using AI tools will assess behavioral traits, emotional intelligence, and cognitive reasoning. The AI will generate a candidate profile for further review.",
    },
    {
      title: "Step 3: SWOC Presentation by the Applicant",
      description:
        "Applicants are required to submit a 3–5-minute video or give a live 3-5-minute self-assessment presentation explaining their personal SWOC (Strengths, Weaknesses, Opportunities, and Challenges). This stage assesses their self-awareness, confidence, and communication skills.",
    },
    {
      title: "Step 4: Final Panel Interview",
      description:
        "A personal interview will be conducted by industry leaders, alumni in senior roles, or recruiters. The panel will evaluate the candidate's industry readiness, leadership potential, and cultural fit for the institution.",
    },
    {
      title: "Step 5: Issue of Offer Letter",
      description:
        "On completion of Selection Rounds, selected aspirants would receive Offer letters, notifying the admission Status.",
    },
  ]

  const tabData = [
    {
      key: "eligibility",
      label: "Eligibility",
      content: (
        <>
          {eligibilityData.map((section) => (
            <div key={section.id} className="mb-8 sm:mb-10 md:mb-12">
              <h5 className="text-[#A22877] font-bold text-xl sm:text-2xl md:text-[24px] monser-600 leading-tight mb-4 sm:mb-6 md:mb-8">
                {section.heading}
              </h5>
              <ul className="list-disc px-4 md:pl-8 lg:px-8 font-monser-400 text-base sm:text-lg md:text-[18px] space-y-3 sm:space-y-4 md:space-y-4 leading-relaxed">
                {section.items.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-wider">
            Students seeking admission to MBA degree at AIMS Institutes must
            adhere to the guidelines of eligibility prior to submitting
            application form (online only) to us. All applications which do not
            meet our MBA selection criteria listed above will not be
            entertained.
          </p>
        </>
      ),
    },
    {
      key: "important-dates",
      label: "Important Dates",
      content: (
        <>
          <h5 className="text-[#A22877] monser-600 text-[24px] mb-4">
            Important Dates
          </h5>
          <div className="space-y-4 lg:px-4 px-0">
            <div className="bg-white p-4 rounded-lg border-l-4 border-[#A22877]">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                <span className="text-[#A22877] monser-500 text-[18px]">
                  Application Deadline:
                </span>{" "}
                <span className="monser-600 text-[18px]">February 2, 2026</span>
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-[#A22877]">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                <span className="text-[#A22877] monser-500 text-[18px]">
                  Online Interview Completion:
                </span>{" "}
                <span className="monser-600 text-[18px]">February 9, 2026</span>
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-[#A22877]">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                <span className="text-[#A22877] monser-500 text-[18px]">
                  SWOC & Personal Interviews:
                </span>{" "}
                <span className="monser-600 text-[18px] ">
                  February 28, 2026
                </span>
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      key: "selection-process",
      label: "Selection Process",
      content: (
        <>
          <h5 className="text-[#A22877] monser-600 text-[24px] mb-4 sm:mb-6">
            Selection Process
          </h5>
          <div className="space-y-6 lg:px-0 px-0">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-wider">
              The MBA selection process is designed to go beyond academic merit
              and assess a candidate's self-awareness, communication,
              professional readiness, and fitment into the MBA ecosystem.
            </p>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-wider">
              The process includes the following stages:
            </p>

            <div className="space-y-4">
              {selectionSteps.map((step, index) => (
                <div key={index} className="space-y-2">
                  <h5 className="text-lg md:text-xl monser-600 text-[#A22877] font-semibold">
                    {step.title}
                  </h5>
                  <p className="text-base md:text-lg monser-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-black/10 p-4 rounded-lg">
              <p className="text-sm md:text-base monser-400 italic">
                Presentations and/or Personal Interview will take place on a
                single day at various locations with 2-3 panel members (Faculty
                + Alumni + Any industry expert from those locations).
              </p>
            </div>

            {/* Evaluation Framework Table */}
            <div className="space-y-4 mt-6">
              <h5 className="text-lg md:text-xl monser-600 text-[#A22877] font-semibold">
                Final Evaluation Framework
              </h5>
              <div className="overflow-x-auto w-full">
                <table className="w-full min-w-[600px] border-collapse border border-gray-300 rounded-2xl overflow-hidden">
                  <thead>
                    <tr className="bg-[#A22877] text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left monser-600">
                        Component
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left monser-600">
                        Weightage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { component: "Application Form + SOP", weightage: "10%" },
                      { component: "AI-Based Interview", weightage: "25%" },
                      { component: "SWOC Presentation", weightage: "30%" },
                      { component: "Panel Interview", weightage: "35%" },
                    ].map((row, index) => (
                      <tr
                        key={index}
                        className={`border border-gray-300 transition-colors duration-200 bg-white hover:bg-blue-50 ${
                          index === 0 ? "rounded-t-lg" : ""
                        } ${index === 3 ? "rounded-b-lg" : ""}`}
                      >
                        <td className="border border-gray-300 px-4 py-3 monser-400">
                          {row.component}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 monser-400 font-semibold">
                          {row.weightage}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ]
  return (
    <div className="bg-[#E1F9F4] px-4 md:px-8 lg:px-8 py-6 md:py-10 lg:py-10 ">
      <div className="container mx-auto ">
        {/* MBA Program overview */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-8 justify-between ">
          <div className=" w-full max-w-2xl text-center md:text-left lg:text-left flex items-center justify-center md:justify-start lg:justify-start leading-relaxed tracking-wider ">
            <h2>
              <span className="mba-program-text text-5xl md:text-6xl lg:text-6xl">
                MBA Program
              </span>
              <br />
              <span className="text-5xl md:text-6xl lg:text-6xl text-[#0C2165] playfair-300">
                Overview
              </span>
            </h2>
          </div>

          <p className="monser-400 text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-left lg:text-left max-w-3xl leading-relaxed">
            Since 1998, the MBA program at AIMS Institutes has been equipping
            future leaders to aim sharp and solve complex business challenges.
            We train students to build strong conceptual and analytical
            foundations, essential for hitting the mark in today's business
            world. With a curriculum that sharpens skill and mindset, our
            graduates are prepared to lead with clarity, confidence, and
            competence.
          </p>
        </div>

        {/* Program Details */}
        <div className="flex justify-center py-6 md:py-8 lg:py-8 ">
          {/* Mobile Card Version */}
          <div className="block md:hidden w-full max-w-sm">
            <div className="rounded-2xl p-6 border border-[#A774CC]">
              {/* Affiliation & Recognition Section */}
              <div className="text-center mb-6">
                <div className="flex justify-center">
                  <Image
                    src="/MBA/trophy.svg"
                    alt="Trophy"
                    width={32}
                    height={32}
                    className="w-[130px] h-[130px] object-contain"
                  />
                </div>
                <h5 className="text-[#A22877] monser-600 text-[20px] mb-2">
                  Affiliation & Recognition
                </h5>
                <p className="text-sm monser-400 whitespace-nowrap">
                  Affiliated to Bangalore University
                </p>
                <p className="text-black text-sm">Recognised by AICTE</p>
              </div>

              <div className="border-t border-gray-500 mb-4"></div>

              {/* Accreditations Section */}
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/MBA/naac-iabce.svg"
                    alt="NAAC and IACBE"
                    width={96}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h5 className="text-[#A22877] monser-600 text-[20px] mb-2">
                  Accreditations
                </h5>
                <p className="text-sm monser-400">
                  <span className="monser-600">NAAC 'A'</span> Grade (3.25 on a
                  scale of 4)
                </p>
                <p className="text-sm monser-400">
                  <span className="monser-600">IACBE</span> Accredited
                </p>
              </div>

              <div className="border-t border-gray-500 mb-6"></div>

              {/* Duration Section */}
              <div className="text-center">
                <div className="flex justify-center">
                  <Image
                    src="/MBA/calender.svg"
                    alt="Calendar"
                    width={32}
                    height={32}
                    className="w-[130px] h-[130px] object-contain"
                  />
                </div>
                <h5 className="text-[#A22877] monser-600 text-[20px] mb-2">
                  Duration
                </h5>
                <p className="text-black text-sm">2 years (4 semesters)</p>
              </div>
            </div>
          </div>

          {/* Desktop Version */}
          <div className="hidden lg:block md:block">
            <Image
              src="/MBA/mba-program.svg"
              alt="MBA Program Overview"
              width={1000}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Buttons */}
        <OverviewTabs tabs={tabData} />
      </div>
    </div>
  )
}

export default Overview
