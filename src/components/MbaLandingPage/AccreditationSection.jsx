"use client"
import React, { useRef } from "react"
import dynamic from "next/dynamic"
import "react-multi-carousel/lib/styles.css"

// Fallback component while carousel loads
const CarouselFallback = () => (
  <div className="flex gap-4 max-w-4xl mx-auto">
    {[1, 2].map((i) => (
      <div key={i} className="bg-[#531675] rounded-2xl p-5 min-h-[160px] flex-1 animate-pulse" />
    ))}
  </div>
)

// Dynamically import Carousel with SSR disabled
const Carousel = dynamic(() => import("react-multi-carousel"), {
  ssr: false,
  loading: () => <CarouselFallback />,
})

const AccreditationSection = () => {
  const carouselRef = useRef(null)

  // Desktop data with line breaks
  const rankingsDesktop = [
    {
      id: 1,
      highlight: "TITANIUM BRAND",
      description: "for Outcome Based Learning",
      source: "(India Academia Ranking 2025)",
    },
    {
      id: 2,
      highlight: "5th\n",
      description: 'Best Private Institution for BBA in India under',
      source: '"SUPER EXCELLENCE"(GHRDC, 2025)',
    },
    {
      id: 3,
      highlight: "13th\n",
      description: "Best Private Business School in South India",
      source: "(THE WEEK,\n 2025)",
    },
    {
      id: 4,
      highlight: "36th\n",
      description: "Best Private Business School in India for Future Orientation",
      source: "(Business Today, 2025)",
    },
    {
      id: 5,
      highlight: "ET NOW\nBRAND",
      description: "Recognised as one of the Best Education Brands 2025 by ET Now!",
      source: "",
    },
  ]

  // Mobile/Tablet data without line breaks
  const rankingsMobile = [
    {
      id: 1,
      highlight: "TITANIUM BRAND",
      description: "for Outcome Based Learning",
      source: "(India Academia Ranking 2025)",
    },
    {
      id: 2,
      highlight: "5th",
      description: 'Best Private Institution for BBA in India under',
      source: '"SUPER EXCELLENCE" (GHRDC, 2025)',
    },
    {
      id: 3,
      highlight: "13th",
      description: "Best Private Business School in South India",
      source: "(THE WEEK, 2025)",
    },
    {
      id: 4,
      highlight: "36th",
      description: "Best Private Business School in India for Future Orientation",
      source: "(Business Today, 2025)",
    },
    {
      id: 5,
      highlight: "ET NOW BRAND",
      description: "Recognised as one of the Best Education Brands 2025 by ET Now!",
      source: "",
    },
  ]

  return (
    
    <section className="py-10 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-[#0C2165] text-3xl md:text-4xl lg:text-5xl playfair-600 text-center mb-12">
          Accreditation and Recognition
        </h2>

        {/* Desktop Ranking Cards - Hidden on mobile/tablet */}
        <div className="hidden lg:grid grid-cols-5 gap-4 max-w-7xl mx-auto">
          {rankingsDesktop.map((ranking) => (
            <div
              key={ranking.id}
              className="bg-[#531675] rounded-2xl p-4 text-white aspect-square flex items-start justify-between"
            >
              <div className="text-center w-full">
                <h3 
                  className={`monser-700 mb-2 mt-10 whitespace-pre-line ${
                    [2, 3, 4].includes(ranking.id) ? '!text-[32px]' : '!text-[24px] leading-tight'
                  }`}
                  style={[2, 3, 4].includes(ranking.id) ? { lineHeight: 1.85 } : {}}
                >
                  {ranking.highlight}
                </h3>
                <p className="text-sm monser-400 mb-1 leading-snug !text-[18px]">
                  {ranking.description}
                </p>
                {ranking.source && (
                  <p className="text-sm monser-600 whitespace-pre-line">
                    {ranking.source}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel - Hidden on desktop */}
        <div className="max-w-4xl mx-auto lg:hidden">
          <Carousel
            ref={carouselRef}
            responsive={{
              tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
              mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
            }}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            arrows={false}
            showDots={false}
            pauseOnHover={true}
            swipeable={true}
            draggable={true}
            className="pb-4"
            itemClass="px-2"
          >
            {rankingsMobile.map((ranking) => (
              <div
                key={ranking.id}
                className="bg-[#531675] rounded-2xl p-5 text-white flex flex-col justify-center text-center min-h-[180px] h-full"
              >
                <h3 
                  className={`monser-700 mb-2 ${
                    [2, 3, 4].includes(ranking.id) ? '!text-[32px]' : 'text-xl leading-tight'
                  }`}
                  style={[2, 3, 4].includes(ranking.id) ? { lineHeight: 1.85 } : {}}
                >
                  {ranking.highlight}
                </h3>
                <p className="text-sm monser-400 mb-1 leading-snug">
                  {ranking.description}
                </p>
                {ranking.source && (
                  <p className="text-xs monser-600 mt-1">
                    {ranking.source}
                  </p>
                )}
              </div>
            ))}
          </Carousel>

          {/* Custom Arrows Below Carousel */}
          <div className="flex justify-center items-center gap-4 mt-6">
            {/* Left Arrow */}
            <button
              onClick={() => carouselRef.current?.previous()}
              className="w-10 h-10 rounded-full border-2 border-[#531675] flex items-center justify-center cursor-pointer hover:bg-[#531675] hover:text-white text-[#531675] transition-colors duration-300 bg-transparent"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 17"
                fill="none"
                className="rotate-180"
              >
                <path
                  d="M0.125 8.5H18.875M18.875 8.5L11.375 1M18.875 8.5L11.375 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => carouselRef.current?.next()}
              className="w-10 h-10 rounded-full border-2 border-[#531675] flex items-center justify-center cursor-pointer hover:bg-[#531675] hover:text-white text-[#531675] transition-colors duration-300 bg-transparent"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 17"
                fill="none"
              >
                <path
                  d="M0.125 8.5H18.875M18.875 8.5L11.375 1M18.875 8.5L11.375 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </section>
    
      
  )
}

export default AccreditationSection
