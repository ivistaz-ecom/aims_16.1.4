import React from "react"
import Image from "next/image"

const AimAheadSection = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-[80vh] lg:h-[75vh] overflow-hidden">
      {/* Desktop Background Image */}
      <Image
        src="/admission-process/student-new1.webp"
        alt="Aim Ahead with Confidence"
        fill
        className="hidden lg:block object-cover"
        priority
      />

      {/* Tablet Background Image */}
      <Image
        src="/admission-process/mobile-student-new.webp"
        alt="Aim Ahead with Confidence"
        fill
        className="hidden md:block lg:hidden object-cover object-top"
        priority
      />

      {/* Mobile Background Image */}
      <Image
        src="/admission-process/mobile-student-new.webp"
        alt="Aim Ahead with Confidence"
        fill
        className="block md:hidden object-cover"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center mt-30 md:mt-70 lg:mt-0">
        <div className="container mx-auto px-4 md:px-0 lg:px-0">
          <div className="flex lg:justify-start md:justify-center">
            <div className="w-full md:max-w-2xl">
              <h2
                className="text-white text-3xl md:text-5xl lg:text-6xl playfair-300 leading-tight mb-3 md:mb-6 tracking-wider text-center md:text-center lg:text-left"
                dangerouslySetInnerHTML={{
                  __html: "AIM Ahead with Confidence",
                }}
              />
              <p className="text-white text-sm md:text-lg lg:text-lg max-w-lg text-center md:text-center lg:text-left ml-0 md:ml-15 lg:ml-0">
                Whether you're a first-time applicant or seeking a career shift,
                our process is designed to support your ambition. From
                step-by-step guidance for UG and PG admissions in Bangalore to
                support with document submission, we're here to help you choose
                your goal and aim for the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AimAheadSection
