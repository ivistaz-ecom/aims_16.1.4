import React from "react"
import Image from "next/image"

const WhyItMatters = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-[80vh] lg:h-[75vh] overflow-hidden mb-6 md:mb-0 ">
      {/* Desktop Background Image */}
      <Image
        src="/student-development/why-it-matters-new.webp"
        alt="Why It Matters"
        fill
        className="hidden lg:block object-cover"
        priority
      />

      {/* Tablet Background Image */}
      <Image
        src="/student-development/mobile-why-it-matters-new.webp"
        alt="Why It Matters"
        fill
        className="hidden md:block lg:hidden object-cover object-top"
        priority
      />

      {/* Mobile Background Image */}
      <Image
        src="/student-development/mobile-why-it-matters-new.webp"
        alt="Why It Matters"
        fill
        className="block md:hidden object-cover"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center mt-25 md:mt-60 lg:mt-0 ml-0 md:ml-0 lg:ml-20 mb-10 md:mb-0 lg:mb-0">
        <div className="container mx-auto px-4 md:px-0 lg:px-0">
          <div className="flex lg:justify-end md:justify-center mt-38 md:mt-0 lg:mt-0">
            <div className="w-full md:max-w-xl">
              <h2 className="text-white text-3xl md:text-5xl lg:text-6xl playfair-300 leading-tight mb-3 md:mb-6 tracking-wider text-center md:text-center lg:text-left">
                Why It Matters
              </h2>
              <p className="text-white text-sm md:text-lg lg:text-lg max-w-md text-center md:text-center lg:text-left ml-0 md:ml-15 lg:ml-0">
                In a world that demands more than academic excellence, ACSD
                provides a structured foundation for personality development,
                leadership training, and college workshops for employability
                skills in Bangalore. By building confidence and clarity early
                on, the centre plays a crucial role in helping students choose
                their goal and AIM for the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyItMatters
