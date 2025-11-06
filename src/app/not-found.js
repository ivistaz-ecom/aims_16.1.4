"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Lottie from "lottie-react"

const NotFound = () => {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    // Fetch the Lottie JSON file from public folder
    fetch("/404%20error.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading animation:", err))
  }, [])

  return (
    <div className="flex flex-col items-center justify-start h-screen px-4 pt-8 pb-4 overflow-hidden">
      {/* Old: <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16"> */}
      {/* Old: <div className="text-center max-w-2xl mx-auto"> */}
      <div className="text-center max-w-5xl mx-auto flex flex-col items-center justify-start h-full">
        {/* Lottie Animation */}
        {/* Old: <div className="w-full max-w-4xl mx-auto mb-6"> */}
        {animationData && (
          <div className="w-full max-w-2xl mx-auto mb-2 flex-shrink-0 pointer-events-none">
            {/* Old: style={{ width: "100%", height: "100%" }} */}
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ width: "100%", height: "auto", maxHeight: "50vh" }}
              className="mb-10"
            />
          </div>
        )}

        {/* Old: Error Message */}
        {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2> */}

        {/* Old: <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto"> */}
        {/* <p className="text-base text-gray-600 mb-3 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been
          moved, deleted, or you entered the wrong URL.
        </p> */}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
          <Link
            href="/"
            className="px-8 py-3 bg-[#6e3299] text-white font-semibold rounded-lg hover:bg-[#5a2877] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
          >
            Go to Homepage
          </Link>

          {/* <Link
            href="/contact-us"
            className="px-8 py-3 bg-white text-[#6e3299] font-semibold rounded-lg border-2 border-[#6e3299] hover:bg-[#6e3299] hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Contact Us
          </Link> */}
        </div>

        {/* Old: Quick Links */}
        {/* <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about-aims"
              className="text-[#6e3299] hover:text-[#ff853a] transition-colors duration-200 text-sm font-medium"
            >
              About AIMS
            </Link>
            <Link
              href="/contact-us"
              className="text-[#6e3299] hover:text-[#ff853a] transition-colors duration-200 text-sm font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div> */}
      </div>
      {/* Old closing div */}
    </div>
  )
}

export default NotFound
