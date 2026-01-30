"use client"
import React, { useState } from "react"

const ApplicationMarquee = ({ announcements, pageType = "admissions" }) => {
  // Page-specific announcements with links
  const pageAnnouncements = {
    admissions: [
      {
        text: "DEADLINE FOR MBA ADMISSIONS JANUARY 31, 2026",
        link: "/business-school/master-business-administration",
      },
      {
        text: "APPLY NOW FOR MBA SELECTION PROCESS 2026-27",
        link: "/business-school/master-business-administration",
      },
    ],

    // business: [
    //   {
    //     text: "APPLY NOW FOR MBA SELECTION PROCESS 2025-26",
    //     link: "/apply/mba",
    //   },
    //   {
    //     text: "APPLY NOW FOR BBA SELECTION PROCESS 2025-26",
    //     link: "/apply/bba",
    //   },
    //   {
    //     text: "APPLY NOW FOR BBA AVIATION SELECTION PROCESS 2025-26",
    //     link: "/apply/bba-aviation",
    //   },
    // ],
    // finance: [
    //   {
    //     text: "APPLY NOW FOR MCOM SELECTION PROCESS 2025-26",
    //     link: "/apply/mcom",
    //   },
    //   {
    //     text: "APPLY NOW FOR BCOM SELECTION PROCESS 2025-26",
    //     link: "/apply/bcom",
    //   },
    //   {
    //     text: "APPLY NOW FOR BCOM AVIATION SELECTION PROCESS 2025-26",
    //     link: "/apply/bcom-aviation",
    //   },
    // ],
    // engineering: [
    //   {
    //     text: "APPLY NOW FOR BBA ADMISSION 2025-26",
    //     link: "https://apply.theaims.ac.in/login",
    //   },
    //   {
    //     text: "APPLY NOW FOR MBA SELECTION PROCESS 2025-26",
    //     link: "https://apply.theaims.ac.in/login",
    //   },
    // ],
    // medical: [
    //   { text: "APPLY NOW FOR MBBS ADMISSION 2025-26", link: "/apply/mbbs" },
    //   {
    //     text: "APPLY NOW FOR BDS SELECTION PROCESS 2025-26",
    //     link: "/apply/bds",
    //   },
    //   {
    //     text: "APPLY NOW FOR NURSING ADMISSION 2025-26",
    //     link: "/apply/nursing",
    //   },
    // ],
    // home: [
    //   {
    //     text: "ADMISSIONS OPEN FOR 2025-26 ACADEMIC YEAR",
    //     link: "/admissions",
    //   },
    //   { text: "APPLY NOW FOR ALL COURSES", link: "/apply" },
    //   { text: "LIMITED SEATS AVAILABLE - APPLY TODAY", link: "/apply" },
    // ],
    // aboutAims: [
    //   {
    //     text: "DISCOVER AIMS - EMPOWERING MINDS SINCE 1994",
    //     link: "/about-aims",
    //   },
    //   {
    //     text: "IACBE ACCREDITED • NAAC 'A' GRADE • VET BY EHL",
    //     link: "/accreditation",
    //   },
    //   {
    //     text: "QUALITY EDUCATION • PROFESSIONAL EXCELLENCE",
    //     link: "/about-aims",
    //   },
    // ],
    // phd: [
    //   {
    //     text: "APPLY NOW FOR PhD SELECTION PROCESS 2025-26",
    //     link: "/about-aims",
    //   },
    //   {
    //     text: "APPLY NOW FOR PhD in Management 2025-26",
    //     link: "/accreditation",
    //   },
    //   {
    //     text: "APPLY NOW FOR Phd in Commerce 2025-26",
    //     link: "/about-aims",
    //   },
    // ],
    // centreForSustainability: [
    //   {
    //     text: "APPLY NOW FOR PhD SELECTION PROCESS 2025-26",
    //     link: "/apply/centre-for-sustainability",
    //   },
    //   {
    //     text: "APPLY NOW FOR MBA SELECTION PROCESS 2025-26",
    //     link: "/apply/mba",
    //   },
    //   {
    //     text: "APPLY NOW FOR BHM SELECTION PROCESS 2025-26",
    //     link: "/apply/bhm",
    //   },
    // ],
    // bca: [
    //   {
    //     text: "APPLY NOW FOR BCA SELECTION PROCESS 2025-26",
    //     link: "/apply/bca",
    //   },
    //   {
    //     text: "APPLY NOW FOR BCA WITH AI & ML SELECTION PROCESS 2025-26",
    //     link: "/apply/bca-ai-ml",
    //   },
    //   {
    //     text: "APPLY NOW FOR BCA SELECTION PROCESS 2025-26",
    //     link: "/apply/bca",
    //   },
    // ],
    // centreForInternationalLiaison: [
    //   {
    //     text: "APPLY NOW FOR BHM SELECTION PROCESS 2025-26",
    //     link: "/apply/bhm",
    //   },
    //   {
    //     text: "APPLY NOW FOR BHM SELECTION PROCESS 2025-26",
    //     link: "/apply/bhm",
    //   },
    //   {
    //     text: "APPLY NOW FOR BHM SELECTION PROCESS 2025-26",
    //     link: "/apply/bhm",
    //   },
    // ],
  }

  // Convert announcements to objects if they're strings
  const formatAnnouncements = (items) => {
    if (!items) return null
    return items.map((item) =>
      typeof item === "string" ? { text: item, link: "/apply" } : item
    )
  }

  const displayAnnouncements =
    formatAnnouncements(announcements) ||
    pageAnnouncements[pageType] ||
    pageAnnouncements.admissions

  // Duplicate announcements multiple times (12 times) for seamless continuous loop
  const duplicateCount = 12
  const duplicatedAnnouncements = Array(duplicateCount)
    .fill(displayAnnouncements)
    .flat()

  const [isPaused, setIsPaused] = useState(false)

  // Calculate animation duration based on number of announcements
  // Move by 1/duplicateCount to show one complete set before looping
  const animationDuration = displayAnnouncements.length * 8
  const animationPercentage = (100 / duplicateCount).toFixed(2)

  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-${animationPercentage}%, 0, 0);
          }
        }
        .marquee-content {
          display: inline-flex;
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
          transform: translateZ(0);
          animation: marquee-scroll ${animationDuration}s linear infinite;
          animation-play-state: ${isPaused ? "paused" : "running"};
        }
        .marquee-content:hover {
          animation-play-state: paused;
        }
        .marquee-wrapper {
          display: flex;
          width: 100%;
          overflow: hidden;
          position: relative;
          transform: translateZ(0);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
      <div
        className="h-[7vh] overflow-hidden shadow-lg flex items-center w-full relative"
        style={{ backgroundColor: "#A22877" }}
      >
        <div className="marquee-wrapper">
          <div className="marquee-content whitespace-nowrap">
            {duplicatedAnnouncements.map((announcement, index) => (
              <span key={`marquee-${index}`} className="inline-flex items-center mx-8 flex-shrink-0">
                <a
                  href={announcement.link}
                  className="text-white font-semibold text-[16px] tracking-wide hover:text-yellow-300 transition-colors duration-200 cursor-pointer"
                  style={{ textDecoration: "none" }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {announcement.text}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplicationMarquee
