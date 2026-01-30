"use client"
import React, { useRef } from "react"
import dynamic from "next/dynamic"
import "react-multi-carousel/lib/styles.css"

// Fallback component while carousel loads
const CarouselFallback = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="bg-[#A22978] rounded-2xl p-6 text-white min-h-[200px] animate-pulse" />
    ))}
  </div>
)

// Dynamically import Carousel with SSR disabled
const Carousel = dynamic(() => import("react-multi-carousel"), {
  ssr: false,
  loading: () => <CarouselFallback />,
})

const LearningApproach = () => {
  const carouselRef = useRef(null)

  const approaches = [
    {
      id: 1,
      title: "Case-Based Learning",
      description: "Real business cases from Harvard & Ivy League schools",
    },
    {
      id: 2,
      title: "Experiential Learning",
      description: "Live projects, simulations, internships & applied business assignments",
    },
    {
      id: 3,
      title: "Industry Interaction",
      description: "Guest lectures, workshops & industrial visits led by professionals",
    },
    {
      id: 4,
      title: "Collaborative Learning",
      description: "Teamwork, presentations & peer-driven classroom engagement",
    },
    {
      id: 5,
      title: "Global \n Exposure",
      description: "International programs & cross-cultural academic experiences",
    },
    {
      id: 6,
      title: "Outcome-Based Learning",
      description: "A structured approach focused on application & skill development",
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
    <section className="py-12 px-4" style={{ backgroundColor: "#E8F5F2" }}>
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-[#531675] text-3xl md:text-4xl lg:text-5xl playfair-600 text-center mb-10">
          Learning Approach at<br />AIMS Institutes
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
            {approaches.map((approach) => (
              <div
                key={approach.id}
                className="bg-[#A22978] rounded-2xl p-6 text-white min-h-[200px] flex flex-col justify-start h-full"
              >
                <h3 className="monser-700 text-xl mb-3 text-white !text-[24px] whitespace-pre-line">
                  {approach.title}
                </h3>
                <p className="monser-400 text-sm leading-relaxed">
                  {approach.description}
                </p>
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

export default LearningApproach
