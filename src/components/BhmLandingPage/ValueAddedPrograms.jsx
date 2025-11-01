"use client"
import Image from "next/image"
import React from "react"

const InternshipSection = () => {
  return (
    <section className="bg-[#f5f0f5] flex flex-col items-center justify-center py-0 ">
      {/* Image */}
      <div className="relative w-full min-h-[550px] md:min-h-[500px]">
        <Image
          src="/bhm-landing/internship.webp" // replace with your image path
          alt="Internship"
          width={1200}
          height={600}
          className="w-full h-full object-cover"
        />

        {/* Overlay Box */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -bottom-4 md:bottom-6 lg:bottom-12 lg:top-auto lg:translate-y-0 shadow-md text-center w-[90%] md:w-[60%] lg:w-[50%] px-6 py-6"
          style={{
            borderRadius: "16px",
            background:
              "linear-gradient(103deg, #D0B6E2 13.3%, #FEDFFB 100.27%)",
          }}
        >
          <h5 className="text-4xl md:text-5xl lg:text-6xl playfair-500 text-[#002561] mb-6 text-center">
            Internship
          </h5>
          <p className="text-sm md:text-base text-[#222] font-medium monser-400">
            <strong className="monser-600">
              Guaranteed paid internship with the Taj Group of Hotels,
            </strong>{" "}
            offering hands-on experience in five-star operations and guest
            service excellence.
          </p>

          <div className="mt-4 flex justify-center">
            <div className="bg-white rounded-md p-3 shadow-sm">
              <Image
                src="/bhm-landing/Taj-01.svg" 
                alt="Taj Logo"
                width={150}
                height={150}
                className="object-contain lg:w-24 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InternshipSection
