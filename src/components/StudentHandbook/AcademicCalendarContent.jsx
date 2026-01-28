import React from "react"

const AcademicCalendarContent = () => {
  const handleCalendarClick = (link) => {
    window.open(link, "_blank")
  }

  const academicYears = [
    {
      year: "2023-24",
      link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/academic-calender/2023-2024/Academic%20Calender-(2023-2024).pdf",
    },
    {
      year: "2022-23",
      link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/academic-calender/2022-2023/Academic%20Calender-(2022-2023).pdf",
    },
    {
      year: "2021-22",
      link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/academic-calender/2021-2022/Academic%20Calender-(2021-2022).pdf",
    },
    {
      year: "2020-21",
      link: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/academic-calender/2020-2021/Academic%20Calendar-(2020-2021).pdf",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Main Title */}
      <h2 className="text-2xl md:text-[36px] font-bold text-[#A22877] mb-4">
        Academic Calendar
      </h2>

      {/* Sub-Heading */}
      <h5 className="text-base sm:text-lg md:text-[28px] text-[#0C2165] monser-500 mb-3 px-2 sm:px-0">
        Stay on Track with Important Dates and Key Academic Milestones:
      </h5>

      {/* Academic Year Links */}
      <ul className="space-y-2 px-2 sm:px-0 list-disc pl-6">
        {academicYears.map((item, index) => (
          <li
            key={index}
            className="flex items-center cursor-pointer hover:text-[#A22877] transition-colors duration-200"
            onClick={() => handleCalendarClick(item.link)}
          >
            <span className="text-base md:text-lg text-gray-800">
              Academic Year {item.year} -{" "}
              <span className="text-sm text-[#A22877] font-medium">View</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AcademicCalendarContent
