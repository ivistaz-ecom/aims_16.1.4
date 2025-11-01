"use client"
import Image from "next/image"
import React from "react"

const ProgramOverview = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-12">
      {/* Title and Description */}
      <div className="text-center max-w-4xl mx-auto lg:mb-16 mb-10">
        <h5 className="text-4xl md:text-5xl lg:text-6xl playfair-500 text-[#002561] mb-6">
          Program Overview
        </h5>
        <p className="text-gray-700 text-lg leading-relaxed">
          The Hospitality program at AIMS Institutes integrates culinary arts,
          front office operations, marketing, and entrepreneurship to equip
          graduates for global success in the service economy.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="w-full h-full">
            <Image
              src="/bhm-landing/section02.webp"
              alt="AIMS Hospitality Students"
              width={1500}
              height={1400}
              className=" w-full h-full"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2">
          <div className="text-[24px]  monser-600 mb-4">
            Powered by AIMSENRICH & VET by EHL
          </div>
          <div className="text-gray-700 leading-relaxed">
            Our curriculum is enhanced through
            <span className="monser-600 px-1">AIMSENRICH</span>, a hands-on
            skill development platform offering globally benchmarked training
            programs in partnership with
            <span className="monser-600 px-1">
              EHL (École hôtelière de Lausanne)
            </span>
            , the world’s No.1 hospitality management school.
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramOverview
