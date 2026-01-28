"use client"
import React, { useState } from "react"
import Image from "next/image"

const NirfRankings = () => {
  const [expandedYear, setExpandedYear] = useState("2024")

  const nirfYears = [
    {
      year: "2024",
      description: [
        {
          text: "You can download and view our submitted information using this link",
          download: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/nirf/NIRF_AIMS_2024.pdf",
        },
      ],
    },
    {
      year: "2023",
      description: [
        {
          text: "You can download and view our submitted information using this link",
          download: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/nirf/NIRF_AIMS_2023.pdf",
        },
      ],
    },
    {
      year: "2022",
      description: [
        {
          text: "You can download and view our submitted information using this link",
          download: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/nirf/NIRF_AIMS_2022.pdf",
        },
      ],
    },
    {
      year: "2021",
      description: [
        {
          text: "You can download and view our submitted information using this link",
          download: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/nirf/NIRF_AIMS_2021.pdf",
        },
      ],
    },
    {
      year: "2020",
      description: [
        {
          text: "You can download and view our submitted information using this link",
          download: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/nirf/NIRF_AIMS_2020.pdf",
        },
      ],
    },
  ]

  const handleYearClick = (year) => {
    setExpandedYear(expandedYear === year ? null : year)
  }

  const NirfYearItem = ({ year, description }) => {
    const isExpanded = expandedYear === year

    return (
      <div className="border-b border-black">
        <div
          className="flex items-center justify-between cursor-pointer transition-colors duration-200"
          onClick={() => handleYearClick(year)}
        >
          <div className="flex-1">
            <h5 className="monser-500 text-2xl md:text-[36px]">NIRF {year}</h5>
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
                  <li key={index} className="relative">
                    <span>
                      {point.text} -{" "}
                      <a
                        href={point.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#A22877] underline cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Download
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
    <div className="bg-[#E0F8F3] py-6 md:py-10 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {nirfYears.map((item, index) => (
          <NirfYearItem
            key={index}
            year={item.year}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default NirfRankings
