"use client"
import React, { useState } from "react"
import Image from "next/image"

const AicteAccreditations = () => {
  const [expandedProgram, setExpandedProgram] = useState("MBA")

  const extensionOfApprovals = [
    {
      name: "MBA",
      years: [
        {
          year: "2021-2022",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/MBA/AICTE-MBA-EoA-2021-22.pdf",
        },
        {
          year: "2020-2021",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/MBA/AICTE-MBA-EOA-2020-21.pdf",
        },
        {
          year: "2019-2020",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/MBA/AICTE-MBA-EOA-2019-20.pdf",
        },
        {
          year: "2018-2019",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/MBA/AICTE-MBA-EOA-2018-19.pdf",
        },
        {
          year: "2017-2018",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/MBA/AICTE-MBA-EOA-2017-18.pdf",
        },
        {
          year: "2016-2017",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/MBA/AICTE-MBA-EOA-2016-17.pdf",
        },
        {
          year: "2015-2016",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/MBA/AICTE-MBA-2015-16.pdf",
        },
        {
          year: "2014-2015",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/MBA/AICTE-MBA-2014-15.pdf",
        },
      ],
    },
    {
      name: "MCA",
      years: [
        {
          year: "2021-2022",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/MCA/AICTE-MCA-EoA-2021-22.pdf",
        },
        {
          year: "2020-2021",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/MCA/AICTE-MCA-EOA-2020-21.pdf",
        },
        {
          year: "2019-2020",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/MCA/AICTE-MCA-EOA-2019-20.pdf",
        },
        {
          year: "2018-2019",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/MCA/AICTE-MCA-2018-19.pdf",
        },
        {
          year: "2017-2018",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/MCA/AICTE-MCA-2017-18.pdf",
        },
        {
          year: "2016-2017",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/MCA/AICTE-MCA-2016-17.pdf",
        },
        {
          year: "2015-2016",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/MCA/AICTE-MCA-2015-16.pdf",
        },
        {
          year: "2014-2015",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/MCA/AICTE-MCA-2014-15.pdf",
        },
      ],
    },
    {
      name: "BHM",
      years: [
        {
          year: "2021-2022",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/BHM/AICTE-BHM-EoA-2021-22.pdf",
        },
        {
          year: "2020-2021",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/BHM/AICTE-BHM-EOA-2020-21.pdf",
        },
        {
          year: "2019-2020",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/BHM/AICTE-BHM-EOA-2019-20.pdf",
        },
        {
          year: "2018-2019",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/BHM/AICTE-BHM-EOA-2018-19.pdf",
        },
        {
          year: "2017-2018",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/BHM/AICTE-BHM-EOA-2018-19.pdf",
        },
        {
          year: "2016-2017",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/BHM/AICTE-BHM-EOA-2016-17.pdf",
        },
        {
          year: "2015-2016",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/BHM/AICTE-BHM-2015-16.pdf",
        },
        {
          year: "2014-2015",
          link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/extension-of-approvals/BHM/AICTE-BHM-2014-15.pdf",
        },
      ],
    },
  ]

  const handleProgramClick = (program) => {
    setExpandedProgram(expandedProgram === program ? null : program)
  }

  const ProgramItem = ({ program, years }) => {
    const isExpanded = expandedProgram === program

    return (
      <div className="border-b border-black">
        <div
          className="flex items-center justify-between py-2 md:py-2 cursor-pointer transition-colors duration-200"
          onClick={() => handleProgramClick(program)}
        >
          <div className="flex-1">
            <h5 className="mb-2 monser-500 text-2xl md:text-[36px]">
              {program}
            </h5>
          </div>
          <Image
            src="/nirf/arrow.svg"
            alt="Arrow"
            width={31}
            height={31}
            className={`w-4 h-4 md:w-8 md:h-8 transition-transform duration-200 ${
              isExpanded ? "rotate-90" : ""
            }`}
          />
        </div>

        {isExpanded && (
          <div className="px-2 md:px-4 pb-4 md:pb-6">
            <div>
              <ul className="text-sm md:text-base monser-400 leading-relaxed space-y-2 list-disc pl-3 md:pl-5">
                {years.map((yearItem, index) => (
                  <li key={index} className="relative">
                    <a
                      href={yearItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[18px] md:text-[20px] monser-400 cursor-pointer text-[#A22877]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {yearItem.year}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-[#E0F8F3] py-6 md:py-10 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl md:text-6xl lg:text-6xl text-[#0C2165] playfair-300">
            Extension of Approvals (EoA)
          </h2>
        </div>
        {extensionOfApprovals.map((item, index) => (
          <ProgramItem key={index} program={item.name} years={item.years} />
        ))}
      </div>
    </div>
  )
}

export default AicteAccreditations
