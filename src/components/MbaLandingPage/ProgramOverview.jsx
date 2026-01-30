import React from "react"
import Image from "next/image"

const ProgramOverview = () => {
  const features = [
    {
      id: 1,
      icon: "/mba-landing/building.svg",
      text: "Recognised among India's best private business schools (Business Today 2024)",
      boldWords: ["best private business schools"],
    },
    {
      id: 2,
      icon: "/mba-landing/cap.svg",
      text: "Dual specialisations across Marketing, Finance, HR, Business Analytics, and Logistics",
      boldWords: ["Dual specialisations"],
    },
    {
      id: 3,
      icon: "/mba-landing/book.svg",
      text: "Industry-driven curriculum co-designed with leading corporates",
      boldWords: ["Industry-driven curriculum"],
    },
    {
      id: 4,
      icon: "/mba-landing/people.svg",
      text: "Strong alumni network across the country",
      boldWords: ["Strong alumni network"],
    },
    {
      id: 5,
      icon: "/mba-landing/calender.svg",
      text: "Duration:<br/>2 years (4 semesters)",
      boldWords: ["Duration:"],
    },
  ]

  return (
    <section className="py-10 px-4 bg-white">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-12">
        <h5 className="text-4xl md:text-5xl lg:text-6xl playfair-500 text-[#002561] mb-6">
        About AIMS School of Business
          </h5>
        <p className="text-lg md:text-xl lg:monser-500 monser-400 leading-relaxed max-w-6xl my-auto mt-5 mb-5">
        Established in 1998, the AIMS School of Business is part of AIMS Institutes, one of India’s premier higher education institutions. Ranked among the top 1% of business schools in the country, its programs hold IACBE (USA) accreditation and is NAAC ‘A’ Grade re-accredited (CGPA 3.25/4). <br />
        Students benefit from global exposure through international immersion programs, faculty and student exchanges, collaborative events, and guest lectures - bringing global perspectives into everyday learning.
          </p>
        </div>

      </div>
    </section>
  )
}

export default ProgramOverview
