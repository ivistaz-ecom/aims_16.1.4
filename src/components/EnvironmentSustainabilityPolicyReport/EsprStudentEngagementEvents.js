"use client"
import Image from "next/image"
import React, { useState } from "react"
import Button from "../../shared/Button"

const EsprStudentEngagementEvents = () => {
  const [selectedParticipant, setSelectedParticipant] = useState(
    "professional-presence-integrity"
  )

  const participantsData = {
    "professional-presence-integrity": {
      name: "COMPLIANCE AND CONFORMANCE",
      testimonial:
        "AIMS will comply with all applicable Environmental and Sustainability (E&S) laws, regulations, best practices, and internal policies. This includes any other requirements the organisation subscribes to, based on identified E&S aspects and impacts. AIMS will conduct periodic audits and implement practices to ensure compliance and conformance to these requirements.",
    },
    "campus-culture-collegiality": {
      name: "CONTINUOUS IMPROVEMENT",
      testimonial:
        "AIMS will establish achievable E&S goals, objectives and targets in conjunction with the interests of our students, infrastructure, and other related entities and continually improve our performance and will report our progress as and when required. We aim to establish policies and controls that promote a positive E&S culture.",
    },
    "resource-class-management": {
      name: "OPERATIONAL INTEGRATION",
      testimonial:
        "AIMS will integrate E&S into operational decisions to proactively ensure that we consistently promote environmentally sustainable practices. Specifically, AIMS requires that an E&S evaluation be integrated into vital decision-making processes such as changes to infrastructure, student-related activities, etc. Processes and services that will reduce E&S risks, improve E&S performance of our operations, activities and interaction with the immediate external community will also be considered.",
    },
    "communication-reputation-management": {
      name: "ENVIRONMENT AND CLIMATE CHANGE",
      testimonial:
        "AIMS will minimise waste and emissions, reuse and recycle materials, promote renewable energy use, reduce greenhouse gas emissions, and conserve energy and water wherever feasible, to minimise our impact on the environment.",
    },
    "institutional-loyalty-neutrality": {
      name: "COMMUNICATION AND EDUCATION",
      testimonial:
        "AIMS E&S will communicate this policy to employees, customers, shareholders, suppliers, the community and other stakeholders. AIMS E&S Standards, Procedures and other resources enable us to implement this policy and share best practices throughout AIMS in order to promote continuous improvement and enhance E&S performance.",
    },
  }

  const participants = [
    {
      id: "professional-presence-integrity",
      name: "Compliance and Conformance",
    },
    { id: "campus-culture-collegiality", name: "Continuous Improvement" },
    { id: "resource-class-management", name: "Operational Integration" },
    {
      id: "communication-reputation-management",
      name: "Environment and Climate Change",
    },
    {
      id: "institutional-loyalty-neutrality",
      name: "Communication and Education",
    },
  ]

  return (
    <>
      <div className="w-full bg-[#E1F9F4] py-10 lg:px-8 px-4">
        <div className="justify-center items-center flex flex-col relative overflow-hidden">
          <div className="absolute top-[0%] right-0 md:block hidden rotate-180">
            <Image
              src="/school-circle.svg"
              alt="School Circle Background"
              width={80}
              height={80}
              className="rotate-180"
            />
          </div>
        </div>

        <div className="justify-center items-center flex flex-col lg:px-0 px-4 relative overflow-hidden">
          <div className="container mx-auto">
            <div className="flex flex-col bg-transparent relative z-10">
              {/* Participant Voices Section */}
              <h3 className="text-[#0C2165] text-start text-[32px] lg:text-[56px] playfair-300 mb-4">
                Student Engagement <br className="hidden md:block" /> and Events
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Left Column - Participant Names */}
                <div className="lg:col-span-2 lg:border-r-1 border-black">
                  {/* Mobile Tabs - Visible only on mobile */}
                  <div className="lg:hidden">
                    <div className="flex flex-col gap-3">
                      <div className="">
                        {participants.map((participant) => (
                          <button
                            key={participant.id}
                            onClick={() =>
                              setSelectedParticipant(participant.id)
                            }
                            className={`text-left px-4 py-[0.5] rounded-lg transition-all block duration-300 mb-3 lg:border-[1px]  ${
                              selectedParticipant === participant.id
                                ? "bg-[#A22877] text-white border-[#A22877]"
                                : "bg-white text-gray-700 border-gray-300 hover:border-[#A22877]"
                            }`}
                          >
                            <span className="font-semibold text-lg">
                              {participant.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Desktop Tabs - Visible only on desktop */}
                  <div className="hidden lg:flex flex-col gap-4 ">
                    <div className="">
                      {participants.map((participant) => (
                        <button
                          key={participant.id}
                          onClick={() => setSelectedParticipant(participant.id)}
                          className={`text-left px-4 py-[0.5] rounded-2xl transition-all block duration-300 mb-3 border-[1px] ${
                            selectedParticipant === participant.id
                              ? "bg-[#A22877] text-white border-[#A22877]"
                              : "bg-white text-gray-700 border-black hover:border-[#A22877]"
                          }`}
                        >
                          <span className="font-semibold text-lg">
                            {participant.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Participant Details */}
                <div className="lg:col-span-3 lg:pl-8 bg">
                  <div className="mb-6">
                    <h5 className="text-2xl lg:text-3xl monser-600 text-[#0C2165] mb-2">
                      {participantsData[selectedParticipant].name}
                    </h5>
                  </div>

                  <div className="bg-[#A22877] text-white p-6 rounded-lg">
                    <p className="text-lg monser-400 leading-relaxed">
                      {participantsData[selectedParticipant].testimonial}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Report Banner */}
      <div className="bg-[#A22877] relative overflow-hidden py-10 px-4 lg:px-8 ">
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between relative z-10">
          <div className="flex flex-col gap-6 text-white">
            <h3 className="text-4xl lg:text-6xl playfair-300 leading-tight">
              AIMS Environmental and
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              Sustainability Audit Report
            </h3>
            <div className="flex justify-start">
              <Button
                variant="secondary"
                onClick={() =>
                  window.open(
                    "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/environment-sustainability-policy-report/AIMS+Sustainability+report+-Final+Dec2022.pdf",
                    "_blank"
                  )
                }
              >
                Click to View
              </Button>
            </div>
          </div>
          <div className="hidden lg:block py-10">
            <Image
              src="/environment-sustainability-policy-report/arrow.svg"
              alt="Abstract Arrow Design"
              width={200}
              height={200}
              className="opacity-80"
            />
          </div>
        </div>
      </div>

      {/* GRI Report */}
      <div className="px-4 lg:px-8">
        <div className=" relative overflow-hidden py-10 ">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
            <div className="flex flex-col gap-4 ">
              <h3 className="text-4xl lg:text-6xl playfair-300 text-[#A22877]">
                GRI Report
              </h3>
              <p>
                AIMS Institutes is among the leading institutes in terms of
                social and environmental initiatives and environmental
                initiatives. This report for AIMS Institutes has been prepared
                in accordance with the Global Reporting Initiative (GRI)
                Standards: Core option.
              </p>
              <p>
                In line with GRI requirements, this report presents the
                significant environmental and social impacts and our
                contributions to the field of education and society at large.
                The content of this report is shaped by the four reporting
                principles established by the GRI standards: stakeholder
                inclusiveness, sustainability context, materiality, and
                completeness
              </p>
              <p>
                You can download and view our submitted information using this{" "}
                <a
                  href="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/environment-sustainability-policy-report/AIMS+Environment+&+Sustainability+Audit+Report.pdf"
                  target="_blank"
                  className="text-[#A22877] hover:underline"
                >
                  link
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EsprStudentEngagementEvents
