"use client"
import React, { useState } from "react"
import Image from "next/image"

const NaacSSR = () => {
  const [expandedItem, setExpandedItem] = useState("Self Study Report")

  const criteriaItems = [
    {
      name: "Self Study Report",
      type: "header",
      links: [
        {
          text: "NAAC SSR - View",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/naac/Self-Study-Report/naac-ssr.pdf",
        },
        {
          text: "IIQA - View",
          link: "/naac/Self-Study-Report/NAAC-IIQA.pdf",
        },
      ],
    },
    {
      name: "Extended Profile",
      type: "header",
      links: [
        {
          text: "2.2 Seats earmarked for reserved category as per GOI/State Govt rule year-wise during the last five years - View",
          link: "",
        },
        {
          text: "3.2 Number of sanctioned posts year-wise during last five years - View",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/naac/Extended-Profile/NAAC-3.2-Sanctioned-Posts.pdf",
        },
      ],
    },
    {
      name: "Criteria - 1 Curricular Aspects",
      type: "header",
      links: [
        {
          text: "1.1.1- The Institution ensures effective curriculum delivery through a well planned and documented process. - View",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/naac/Criteria-1-Curricular-Aspects/NAAC-1.1.1.pdf",
        },
        {
          text: "1.1.2- The institution adheres to the academic calendar, including for the conduct of CIE. - View",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/naac/Criteria-1-Curricular-Aspects/NAAC-1.1.2.pdf",
        },
        {
          text: "1.1.3 -Teachers participation in curriculum development, assessment and academic bodies of the affiliating University during the last five years. - View",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/naac/Criteria-1-Curricular-Aspects/NAAC-1.1.3.pdf",
        },
        {
          text: "1.2.1 - Programs with CBCS/elective course system (Additional document). - View",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/naac/Criteria-1-Curricular-Aspects/NAAC-1.2.1-Additional-Document.pdf",
        },
        {
          text: "1.2.1 - Programs with CBCS/elective course system (Syllabus). - View",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/naac/Criteria-1-Curricular-Aspects/NAAC-1.2.1-Syllabus.pdf",
        },
        {
          text: "1.2.2 - Add-on / Certificate Programs offered during the last 5 years. - View",
          link: "/naac-documents/criteria-1-curricular-aspects.pdf",
        },
        {
          text: "1.2.3 - Average percentage of students enrolled in Certificate/ Add-on programs as against the total number of students during the last five years. - View",
          link: "/naac-documents/criteria-1-curricular-aspects.pdf",
        },
        {
          text: "1.3.1- Institution integrates cross-cutting issues relevant to Professional Ethics, Gender, Human Value, Environment and Sustainability into the Curriculum. - View",
          link: "/naac-documents/criteria-1-curricular-aspects.pdf",
        },
        {
          text: "1.3.2- Average percentage of courses that include experiential learning through project work/field work/internship during last five years. - View",
          link: "/naac-documents/criteria-1-curricular-aspects.pdf",
        },
        {
          text: "1.3.3- Percentage of students undertaking project work/field work/ internships (Data for the latest completed academic year. - View",
          link: "/naac-documents/criteria-1-curricular-aspects.pdf",
        },
      ],
    },
    {
      name: "Criteria - 2 Teaching Learning and Evaluation",
      type: "header",
      links: [
        {
          text: "2.1.1- Average Enrolment percentage (Average of last five years). - View",
          link: "/naac-documents/criteria-2-teaching-learning-evaluation.pdf",
        },
        {
          text: "2.1.2- Average percentage of seats filled against seats reserved for various categories (SC, ST, OBC, Divyangjan, etc. as per applicable reservation policy during the last five years. - View",
          link: "/naac-documents/criteria-2-teaching-learning-evaluation.pdf",
        },
        {
          text: "2.2.1- The institution assesses the learning levels of the students and organises special Programmes for advanced learners and slow learners. - View",
          link: "/naac-documents/criteria-2-teaching-learning-evaluation.pdf",
        },
        {
          text: "2.3.1- Student centric methods, such as experiential learning, participative learning and problem solving methodologies are used for enhancing learning experiences. - View",
          link: "/naac-documents/criteria-2-teaching-learning-evaluation.pdf",
        },
        {
          text: "2.3.2- Teachers use ICT enabled tools for effective teaching-learning process. - View",
          link: "/naac-documents/criteria-2-teaching-learning-evaluation.pdf",
        },
        {
          text: "2.3.3- Ratio of students to mentor for academic and other related issues (Data for the latest completed academic year). - View",
          link: "/naac-documents/criteria-2-teaching-learning-evaluation.pdf",
        },
        {
          text: "2.4.1- Average percentage of full time teachers against sanctioned posts during the last five years. - View",
          link: "/naac-documents/criteria-2-teaching-learning-evaluation.pdf",
        },
        {
          text: "2.4.2- Average percentage of full time teachers with Ph. D. / D.M. / M.Ch. / D.N.B Superspeciality / D.Sc. / D.Litt. during the last five years (Addl. Info). - View",
          link: "/naac-documents/criteria-2-teaching-learning-evaluation.pdf",
        },
        {
          text: "2.5.1- Mechanism of Internal Assessment is transparent and robust in terms of frequency and Mode. - View",
          link: "/naac-documents/criteria-2-teaching-learning-evaluation.pdf",
        },
        {
          text: "2.5.2- Mechanism to deal with Internal and external examination related Grievance is transparent, time bound and efficient. - View",
          link: "/naac-documents/criteria-2-teaching-learning-evaluation.pdf",
        },
        {
          text: "2.6.1- Programme and course outcomes for all Programmes. - View",
          link: "/naac-documents/criteria-2-teaching-learning-evaluation.pdf",
        },
        {
          text: "2.6.2- Attainment of programme outcomes and course outcomes are evaluated by the institution. - View",
          link: "/naac-documents/criteria-2-teaching-learning-evaluation.pdf",
        },
        {
          text: "2.6.3- The average pass percentage of Students during the last five years. - View",
          link: "/naac-documents/criteria-2-teaching-learning-evaluation.pdf",
        },
        {
          text: "2.7.1- Online student satisfaction survey regarding teaching learning process. - View",
          link: "/naac-documents/criteria-2-teaching-learning-evaluation.pdf",
        },
      ],
    },
    {
      name: "Criteria - 3 Research, Consultancy and Extension",
      type: "header",
      links: [
        {
          text: "3.2.2- Number of workshops/seminars conducted on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship during the last five years. - View",
          link: "/naac-documents/criteria-3-research-consultancy-extension.pdf",
        },
        {
          text: "3.4.3- Number of extension and outreach programs conducted by the institution through NSS/NCC/Red cross/YRC etc., during the last five years. - View",
          link: "/naac-documents/criteria-3-research-consultancy-extension.pdf",
        },
        {
          text: "3.5.1- Number of Collaborative activities for research, Faculty exchange, Student exchange/ internship per year. - View",
          link: "/naac-documents/criteria-3-research-consultancy-extension.pdf",
        },
        {
          text: "3.5.2- Number of functional MoUs with institutions, other universities, industries, corporate houses. - View",
          link: "/naac-documents/criteria-3-research-consultancy-extension.pdf",
        },
      ],
    },
    {
      name: "Criteria - 4 Infrastructure and Learning Resources",
      type: "header",
      links: [
        {
          text: "4.1.1- The Institution has adequate infrastructure and physical facilities for teaching- learning. viz., classrooms, laboratories, computing equipment etc. - View",
          link: "/naac-documents/criteria-4-infrastructure-learning-resources.pdf",
        },
        {
          text: "4.1.3- Percentage of classrooms and seminar halls with ICT- enabled facilities such as smart class, LMS, etc. - View",
          link: "/naac-documents/criteria-4-infrastructure-learning-resources.pdf",
        },
        {
          text: "4.2.2- The institution has a subscription for the following e-resources (data template). - View",
          link: "/naac-documents/criteria-4-infrastructure-learning-resources.pdf",
        },
        {
          text: "4.2.3- Average annual expenditure for the purchase of books/e-books and subscription to journals/e- journals during the last five years (data template). - View",
          link: "/naac-documents/criteria-4-infrastructure-learning-resources.pdf",
        },
        {
          text: "4.2.3- Average annual expenditure for purchase of books/e-books and subscription to journals/e- journals during the last five years (Additional information). - View",
          link: "/naac-documents/criteria-4-infrastructure-learning-resources.pdf",
        },
        {
          text: "4.3.1- Institution frequently updates its IT facilities including Wi-Fi. - View",
          link: "/naac-documents/criteria-4-infrastructure-learning-resources.pdf",
        },
        {
          text: "4.3.2- Student – Computer ratio. - View",
          link: "/naac-documents/criteria-4-infrastructure-learning-resources.pdf",
        },
      ],
    },
    {
      name: "Criteria - 5 Student Support and Progression",
      type: "header",
      links: [
        {
          text: "5.1.1- Average percentage of students benefited by scholarships and freeships provided by the Government during the last five years. - View",
          link: "/naac-documents/criteria-5-student-support-progression.pdf",
        },
        {
          text: "5.1.2- Average percentage of students benefited by scholarships, freeships etc. provided by the institution / non- government agencies during the last five years. - View",
          link: "/naac-documents/criteria-5-student-support-progression.pdf",
        },
        {
          text: "5.1.3- Capacity building and skills enhancement initiatives by the institution. - View",
          link: "/naac-documents/criteria-5-student-support-progression.pdf",
        },
        {
          text: "5.1.4- Average percentage of students benefited by guidance for competitive examinations and career counselling offered by the Institution during the last five years. - View",
          link: "/naac-documents/criteria-5-student-support-progression.pdf",
        },
        {
          text: "5.1.4- Students benefited by guidance for competitive examinations and career counselling offered by the institution. - View",
          link: "/naac-documents/criteria-5-student-support-progression.pdf",
        },
        {
          text: "5.2.1- Placement of outgoing students during the last five years. - View",
          link: "/naac-documents/criteria-5-student-support-progression.pdf",
        },
        {
          text: "5.2.1- Average percentage of placement of outgoing students during the last five years. - View",
          link: "/naac-documents/criteria-5-student-support-progression.pdf",
        },
        {
          text: "5.2.2- Average percentage of students progressing to higher education during the last five years (Supporting document). - View",
          link: "/naac-documents/criteria-5-student-support-progression.pdf",
        },
        {
          text: "5.3.1-Number of awards/medals won by students for outstanding performance in sports/cultural activities during the last five years. - View",
          link: "/naac-documents/criteria-5-student-support-progression.pdf",
        },
        {
          text: "5.3.3-Number of sports and cultural events/competitions in which students of the Institution participated year-wise during last five years. - View",
          link: "/naac-documents/criteria-5-student-support-progression.pdf",
        },
      ],
    },
    {
      name: "Criteria - 6 Governance, Leadership and Management",
      type: "header",
      links: [
        {
          text: "6.2.1- The institutional Strategic / Perspective plan is effectively deployed. - View",
          link: "/naac-documents/criteria-6-governance-leadership-management.pdf",
        },
        {
          text: "6.2.2- The functioning of the institutional bodies is effective and efficient as visible from policies, administrative setup, appointment and service rules, procedures, etc. - View",
          link: "/naac-documents/criteria-6-governance-leadership-management.pdf",
        },
        {
          text: "6.3.2- Average percentage of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies during the last five years. - View",
          link: "/naac-documents/criteria-6-governance-leadership-management.pdf",
        },
        {
          text: "6.3.3- Average number of professional development /administrative training programs organized by the institution for teaching and non-teaching staff during the last five years. - View",
          link: "/naac-documents/criteria-6-governance-leadership-management.pdf",
        },
        {
          text: "6.3.4- Average percentage of teachers undergoing online / face-to-face Faculty Development Programmes (FDP) during the last five years. - View",
          link: "/naac-documents/criteria-6-governance-leadership-management.pdf",
        },
        {
          text: "6.3.4- Average percentage of teachers undergoing online / face-to-face Faculty Development Programmes (FDP) during the last five years. - View",
          link: "/naac-documents/criteria-6-governance-leadership-management.pdf",
        },
        {
          text: "6.5.3- Quality assurance initiatives of the institution. - View",
          link: "/naac-documents/criteria-6-governance-leadership-management.pdf",
        },
      ],
    },
    {
      name: "Criteria - 7 Innovations and Best Practices",
      type: "header",
      links: [
        {
          text: "7.1.1 - Measures initiated by the Institution for the promotion of gender equity during the last five years. - View",
          link: "/naac-documents/criteria-7-innovations-best-practices.pdf",
        },
        {
          text: "7.1.3 - Describe the facilities in the Institution for the management of the following types of degradable and non-degradable waste (within 500 words). - View",
          link: "/naac-documents/criteria-7-innovations-best-practices.pdf",
        },
        {
          text: "7.1.6 - Quality audits on environment and energy are regularly undertaken by the institution. - View",
          link: "/naac-documents/criteria-7-innovations-best-practices.pdf",
        },
        {
          text: "7.1.7 - Disabled-friendly barrier free environment. - View",
          link: "/naac-documents/criteria-7-innovations-best-practices.pdf",
        },
        {
          text: "7.1.8 - Institutional efforts/initiatives in providing an inclusive environment i.e., tolerance and harmony towards cultural, regional, linguistic, communal socio-economic and other diversities (within 500 words). - View",
          link: "/naac-documents/criteria-7-innovations-best-practices.pdf",
        },
        {
          text: "7.1.9 - Sensitization of students and employees of the Institution to the constitutional obligations: values, rights, duties, and responsibilities of citizens (Supporting Documents). - View",
          link: "/naac-documents/criteria-7-innovations-best-practices.pdf",
        },
        {
          text: "7.1.9 - Sensitization of students and employees of the Institution to the constitutional obligations (Other Relevant Information). - View",
          link: "/naac-documents/criteria-7-innovations-best-practices.pdf",
        },
        {
          text: "7.2.1 - Describe two best practices successfully implemented by the Institution as per NAAC format provided in the Manual. - View",
          link: "/naac-documents/criteria-7-innovations-best-practices.pdf",
        },
        {
          text: "7.1.11 - Institution celebrates/organizes national and international commemorative days, events and festivals. - View",
          link: "/naac-documents/criteria-7-innovations-best-practices.pdf",
        },
        {
          text: "7.3.1 - Portray the performance of the Institution in one area distinctive to its priority and thrust within 1000 words. - View",
          link: "/naac-documents/criteria-7-innovations-best-practices.pdf",
        },
      ],
    },
  ]

  const handleItemClick = (item) => {
    setExpandedItem(expandedItem === item ? null : item)
  }

  const CriteriaItem = ({ item, link, type, links }) => {
    const isExpanded = expandedItem === item

    return (
      <div className="border-b border-black">
        <div
          className="flex items-center justify-between py-2 md:py-4 cursor-pointer transition-colors duration-200"
          onClick={() => handleItemClick(item)}
        >
          <div className="flex-1 pr-3 md:pr-4 lg:pr-6">
            <h5 className="monser-500 text-lg md:text-3xl leading-tight break-words">
              {item}
            </h5>
          </div>
          <Image
            src="/nirf/arrow.svg"
            alt="Arrow"
            width={31}
            height={31}
            className={`w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 flex-shrink-0 transition-transform duration-200 ${
              isExpanded ? "rotate-90" : ""
            }`}
          />
        </div>

        {isExpanded && (
          <div className="px-2 md:px-4 lg:px-6 pb-3 md:pb-4 lg:pb-6">
            <div>
              {type === "header" ? (
                <div className="space-y-2 md:space-y-3">
                  {(item === "Extended Profile" ||
                    item === "Criteria - 1 Curricular Aspects" ||
                    item === "Criteria - 2 Teaching Learning and Evaluation" ||
                    item ===
                      "Criteria - 3 Research, Consultancy and Extension" ||
                    item ===
                      "Criteria - 4 Infrastructure and Learning Resources") && (
                    <h6 className="text-base md:text-lg  monser-500 mb-2 md:mb-3">
                      Serial Number and Parameter
                    </h6>
                  )}
                  {links.map((linkItem, index) => (
                    <div key={index} className="flex items-start">
                      <span className="mr-2 md:mr-3 mt-1 text-sm md:text-base flex-shrink-0">
                        •
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className="monser-400 text-[18px] md:text-lg break-words">
                          {linkItem.text.includes(" - View") ? (
                            <>
                              {linkItem.text.replace(" - View", "")} -{" "}
                              <a
                                href={linkItem.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline cursor-pointer"
                                onClick={(e) => e.stopPropagation()}
                              >
                                View
                              </a>
                            </>
                          ) : (
                            <a
                              href={linkItem.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline cursor-pointer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {linkItem.text}
                            </a>
                          )}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline cursor-pointer text-sm md:text-base lg:text-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Document
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="py-6 md:py-10 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-6">
          <h2 className="text-3xl md:text-6xl lg:text-6xl font-bold text-[#0C2165] playfair-300 mb-2 md:mb-3">
            NAAC SSR
          </h2>
        </div>
        {criteriaItems.map((item, index) => (
          <CriteriaItem
            key={index}
            item={item.name}
            link={item.link}
            type={item.type}
            links={item.links}
          />
        ))}
      </div>
    </div>
  )
}

export default NaacSSR
