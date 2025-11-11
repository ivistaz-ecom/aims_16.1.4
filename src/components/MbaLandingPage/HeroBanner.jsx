"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import HeroEnquiryForm from "./HeroEnquiryForm"

const HeroBanner = () => {
  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined") {
      return
    }

    const clickHandler = (event) => {
      const trigger = event.target.closest(
        'a[href="#hero-header"], a[href="#hero-enquiry-form"]'
      )

      if (!trigger) return

      const href = trigger.getAttribute("href")

      if (href === "#hero-header") {
        event.preventDefault()
        const header = document.querySelector("header")
        const headerHeight = header ? header.offsetHeight : 0

        if (window.innerWidth < 1024) {
          const mobileSection = document.getElementById(
            "mobile-enquiry-section"
          )
          if (mobileSection) {
            const offset = mobileSection.offsetTop - headerHeight - 20
            window.scrollTo({ top: Math.max(0, offset), behavior: "smooth" })
          }
        } else if (header) {
          const offset = Math.max(0, header.offsetTop - 40)
          window.scrollTo({ top: offset, behavior: "smooth" })
        }
        return
      }

      if (href === "#hero-enquiry-form" && window.innerWidth >= 1024) {
        event.preventDefault()
        const section = document.getElementById("hero-enquiry-form")
        const header = document.querySelector("header")
        const headerHeight = header ? header.offsetHeight : 0

        if (section) {
          const offset = section.offsetTop - headerHeight - 20
          window.scrollTo({ top: Math.max(0, offset), behavior: "smooth" })
        }
        return
      }

      if (window.innerWidth >= 1024) return
    }

    document.addEventListener("click", clickHandler)
    return () => {
      document.removeEventListener("click", clickHandler)
    }
  }, [])

  return (
    <>
      <div
        id="hero-banner"
        className="relative w-full h-[88vh] lg:h-[88vh] overflow-hidden"
      >
        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/mba-landing/MBA_Banner_Desktop.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/mba-landing/MBA_Banner_Mobile.webp')]" />

        {/* Gradient Overlay */}
        {/* <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div> */}

        <div className="absolute inset-0 px-4 lg:px-10">
          <div className="relative flex h-full w-full flex-col justify-end gap-10 pb-0 pt-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:pb-12 lg:pt-20">
            {/* Hero Copy */}
            <div className="order-1 max-w-[650px] text-center text-white lg:order-none lg:text-left">
              <h5 className="text-3xl md:text-5xl lg:text-6xl playfair-500 mb-5 tracking-wide">
                An MBA That Helps You Get Hired
              </h5>
              <p className="text-lg md:text-xl lg:text-2xl monser-400 mb-6 lg:mb-8 leading-relaxed">
                Among the top MBA Colleges in India, AIMS Institutes offers{" "}
                <span className="monser-700">
                  dual specialisations, global accreditations
                </span>
                , and 85%+ placements, to launch your career with confidence.
              </p>
            </div>

            {/* Desktop Form */}
            <div className="hidden lg:flex lg:w-full lg:max-w-[520px] lg:justify-end lg:flex-shrink-0">
              <HeroEnquiryForm />
            </div>
          </div>
        </div>

        {/* Empower Image - Top Left */}
        <div className="absolute top-5 left-0 lg:mx-10 mx-2">
          <div className="container mx-auto md:py-4 py-0">
            <div className="flex items-end justify-end pb-10 md:pb-0 lg:pb-0">
              <Image
                src="/white-empower.svg"
                alt="Empowering Minds"
                width={200}
                height={200}
                className="md:hidden"
              />
              <Image
                src="/black-empower.svg"
                alt="Empowering Minds"
                width={200}
                height={200}
                className="hidden md:block"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroBanner
