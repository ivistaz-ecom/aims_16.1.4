"use client"

import React from "react"

const CfcWhyItMatters = () => {
  return (
    <div
      className="
        relative w-full overflow-hidden bg-cover bg-center bg-no-repeat
        bg-[url('/centre-for-consulting/cfc-why-its-matter-mobile.webp')]
        md:bg-[url('/centre-for-consulting/cfc-why-its-matter-tab.webp')]
        lg:bg-[url('/centre-for-consulting/cfc-why-its-matter-n.webp')]
        min-h-[90vh] md:min-h-[100vh] lg:min-h-[70vh]
        flex items-center justify-center
      "
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(179deg, rgba(12, 33, 101, 0) 11%, #08101D 99%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center w-full px-4 lg:px-8 ">
        <div className="container mx-auto py-4 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Empty Column (desktop alignment) */}
            <div className="flex-1 hidden lg:block"></div>

            {/* Right Content */}
            <div className="flex-1 flex flex-col gap-4 mt-96 lg:mt-0 md:mt-[50vh]">
              <h3 className="text-white playfair-300 text-2xl lg:text-3xl">
                Why It Matters
              </h3>
              <p className="text-white">
                Too often, there&apos;s a disconnect between classroom learning
                and practical implementation. ACC was created to change that.
                Through structured business consulting services in academic
                institutions in Bangalore, the centre:
              </p>
              <ul className="list-disc monser-400 flex flex-col gap-4 text-white md:pl-6 pl-4 ">
                <li>
                  Helps students develop practical skills through corporate
                  projects
                </li>
                <li>
                  Exposes faculty to the operational and strategic realities of
                  the industries they teach about
                </li>
                <li>
                  Ensures the application of book knowledge in real-time
                  settings
                </li>
                <li>
                  Enhances the long-term industry readiness of AIMS students
                </li>
              </ul>
              <p className="text-white">
                Each partnership adds depth to our college-level fundraising for
                social causes in Bangalore and strengthens student volunteering
                and collaboration with NGOs in Bangalore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CfcWhyItMatters
