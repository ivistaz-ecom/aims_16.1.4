"use client"
import React, { useRef } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import "react-multi-carousel/lib/styles.css"

// Fallback component while carousel loads
const CarouselFallback = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="rounded-2xl overflow-hidden animate-pulse">
        <div className="h-[200px] bg-gray-200"></div>
        <div className="bg-[#D4EDEA] p-4 min-h-[180px]"></div>
      </div>
    ))}
  </div>
)

// Dynamically import Carousel with SSR disabled
const Carousel = dynamic(() => import("react-multi-carousel"), {
  ssr: false,
  loading: () => <CarouselFallback />,
})

const DualSpecialisationTracks = () => {
  const carouselRef = useRef(null)

  const specialisations = [
    {
      id: 1,
      title: "Finance",
      description: "Valuation, investment analysis, risk & international finance, with analytics using Excel & Tableau",
      image: "/mba-landing/Finance.webp",
    },
    {
      id: 2,
      title: "Marketing",
      description: "Consumer behaviour, brand management, digital marketing, and marketing analytics using Excel & Tableau",
      image: "/mba-landing/Marketing.webp",
    },
    {
      id: 3,
      title: "Human Resources",
      description: "Talent management, performance systems, learning & development & strategic HRM with analytics-driven insights.",
      image: "/mba-landing/Human_Resources.webp",
    },
    {
      id: 4,
      title: "Business Analytics",
      description: "Python, R, forecasting, data mining & advanced analytics with strong data visualisation.",
      image: "/mba-landing/business_analytics.webp",
    },
    {
      id: 5,
      title: "Logistics & Supply Chain Management",
      description: "Inventory, procurement, vendor management, global sourcing & supply chain strategy.",
      image: "/mba-landing/Logistics_Supply_Chain_Management.webp",
    },
  ]

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
  }

  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.previous()
    }
  }

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next()
    }
  }

  return (
    <section className="py-12 px-4" style={{ backgroundColor: "#ffffff" }}>
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-[#531675] text-3xl md:text-4xl lg:text-5xl playfair-600 text-center mb-10">
          Dual Specialisation Tracks
        </h2>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            ref={carouselRef}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            arrows={false}
            showDots={false}
            pauseOnHover={true}
            swipeable={true}
            draggable={true}
            className="pb-4"
            itemClass="px-3"
          >
            {specialisations.map((spec) => (
              <div
                key={spec.id}
                className="rounded-2xl overflow-hidden h-full"
              >
                {/* Image Section */}
                <div className="relative h-[200px] w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={spec.image}
                    alt={spec.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Content Section */}
                <div className="bg-[#D4EDEA] p-4 rounded-b-2xl min-h-[180px]">
                  <h3 className="monser-700 text-[#0C2165] mb-2 !text-[20px]">
                    {spec.title}
                  </h3>
                  <p className="monser-400 text-[#333333] leading-relaxed !text-[14px]">
                    {spec.description}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>

          {/* Custom Arrows Below Carousel */}
          <div className="flex justify-center items-center gap-4 mt-8">
            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full border-2 border-[#531675] flex items-center justify-center cursor-pointer hover:bg-[#531675] hover:text-white text-[#531675] transition-colors duration-300 bg-transparent"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              onClick={handleNext}
              className="w-12 h-12 rounded-full border-2 border-[#531675] flex items-center justify-center cursor-pointer hover:bg-[#531675] hover:text-white text-[#531675] transition-colors duration-300 bg-transparent"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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

export default DualSpecialisationTracks

