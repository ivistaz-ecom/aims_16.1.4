"use client"
import React from "react"
import Link from "next/link"
import { GoArrowDownRight } from "react-icons/go"
import { QuickActionsButton } from "."

const FloatingButton = () => {
  return (
    <>
      {/* Main Floating Buttons */}
      <div className="fixed lg:right-4 right-3 md:top-[25%] top-[35%] flex flex-col z-[9999] -rotate-90 transform origin-right">
        {/* Enquire Now Button */}
        <div className="flex gap-4">
          {/* Apply Now Button */}
          <Link
            href="https://apply.theaims.ac.in/login"
            target="_blank"
            className="bg-[#9c2474] text-white font-semibold text-xs md:text-2xl px-3 md:px-4 py-1 rounded-tl-lg rounded-tr-lg shadow-lg transform origin-right hover:bg-[#FF7F02] transition-all duration-300 group flex items-center justify-center"
          >
            <span className="flex items-center justify-center gap-1 md:gap-2">
              Apply Now
              <GoArrowDownRight className="w-3 h-3 md:w-5 md:h-5 transition-all duration-300 ease-in-out group-hover:-rotate-90" />
            </span>
          </Link>

          {/* Enquire Now Button */}
          <Link
            href="/contact-us"
            className="bg-[#9c2474] text-white font-semibold text-xs md:text-2xl px-3 md:px-4 py-1 rounded-tl-lg rounded-tr-lg shadow-lg transform  origin-right hover:bg-[#FF7F02] transition-all duration-300 group flex items-center justify-center"
          >
            <span className="flex items-center justify-center gap-1 md:gap-2">
              Contact Us
              <GoArrowDownRight className="w-3 h-3 md:w-5 md:h-5 transition-all duration-300 ease-in-out group-hover:-rotate-90" />
            </span>
          </Link>
        </div>
      </div>
      <QuickActionsButton />
    </>
  )
}

export default FloatingButton
