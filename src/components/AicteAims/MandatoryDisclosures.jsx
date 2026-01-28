"use client"
import React, { useState } from "react"
import Image from "next/image"

const MandatoryDisclosures = () => {
  const [expandedProgram, setExpandedProgram] = useState("MBA")

  const programs = [
    {
      name: "MBA",
      description: [
        {
          text: "MBA Mandatory Disclosures 2022",
          download: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/mandatory-disclosures/2022/MBA/MBA-2022.pdf",
          hasView: true,
        },
      ],
      hasDownload: true,
    },
    {
      name: "MCA",
      description: [
        {
          text: "MCA Mandatory Disclosures 2022",
          download: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/mandatory-disclosures/2022/MCA/MCA-2022.pdf",
          hasView: true,
        },
      ],
    },
    {
      name: "BHM",
      description: [
        {
          text: "BHM Mandatory Disclosures 2022",
          download: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/aicte/mandatory-disclosures/2022/BHM/BHM-2022.pdf",
          hasView: true,
        },
      ],
    },
  ]

  const handleProgramClick = (program) => {
    setExpandedProgram(expandedProgram === program ? null : program)
  }

  const ProgramItem = ({ program, description, hasDownload = false }) => {
    const isExpanded = expandedProgram === program

    return (
      <div className="border-b border-black">
        <div
          className="flex items-center justify-between py-2 md:py-2 cursor-pointer transition-colors duration-200"
          onClick={() => handleProgramClick(program)}
        >
          <div className="flex-1">
            <h5 className="monser-500 text-2xl md:text-[36px]">{program}</h5>
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
              <ul className="text-[16px] monser-400 leading-relaxed space-y-2 list-disc pl-3 md:pl-5">
                {description.map((point, index) => (
                  <li
                    key={index}
                    className="relative text-[18px] md:text-[20px]"
                  >
                    <span>
                      {point.text} -{" "}
                      <a
                        href={point.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#A22877] underline cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {point.hasView ? "View" : "Download"}
                      </a>
                    </span>
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
    <div className="px-4 md:px-8 lg:px-8 pb-6 md:pb-10">
      <div className="container mx-auto">
        <div className="mb-2">
          <h2 className="text-3xl md:text-6xl lg:text-6xl font-bold text-[#0C2165] playfair-300">
            Mandatory Disclosures
          </h2>
        </div>
        {programs.map((item, index) => (
          <ProgramItem
            key={index}
            program={item.name}
            description={item.description}
            hasDownload={item.hasDownload}
          />
        ))}
      </div>
    </div>
  )
}

export default MandatoryDisclosures
