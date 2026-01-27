"use client"
import React, { useEffect } from "react"
import Image from "next/image"
import ApplicationMarquee from "@/shared/ApplicationMarquee"

const HeroBanner = ({ announcements, pageType = "admissions" }) => {
  // Preload critical banner images for LCP optimization
  useEffect(() => {
    const preloadLinks = []

    // Function to create and add preload link
    const addPreloadLink = (href, as = "image", type = "image/webp") => {
      // Check if link already exists
      const existingLink = document.querySelector(`link[rel="preload"][href="${href}"]`)
      if (existingLink) return null

      const link = document.createElement("link")
      link.rel = "preload"
      link.href = href
      link.as = as
      link.type = type
      link.fetchPriority = "high"
      document.head.appendChild(link)
      return link
    }

    // Preload banner images - preload both and let CSS/Image component handle which one displays
    const desktopLink = addPreloadLink("/admission-process/hero-banner.webp")
    const mobileLink = addPreloadLink("/admission-process/mobile-banner-new1.webp")

    // Store links for cleanup
    if (desktopLink) preloadLinks.push(desktopLink)
    if (mobileLink) preloadLinks.push(mobileLink)

    // Cleanup function
    return () => {
      preloadLinks.forEach((link) => {
        if (link && link.parentNode) {
          link.parentNode.removeChild(link)
        }
      })
    }
  }, []) // Empty dependency array - only run once on mount
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <Image
          src="/admission-process/hero-banner.webp"
          alt="Admission Process Hero Banner"
          fill
          priority
          fetchPriority="high"
          quality={90}
          className="hidden md:block object-cover object-top"
          sizes="100vw"
        />

        {/* Background Image - Mobile */}
        <Image
          src="/admission-process/mobile-banner-new1.webp"
          alt="Admission Process Hero Banner"
          fill
          priority
          fetchPriority="high"
          quality={90}
          className="md:hidden object-cover object-top"
          sizes="100vw"
        />

        {/* Gradient Overlay - Figma Design */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

        {/* Bottom Content Container */}
        <div className="absolute left-0 right-0 px-4 lg:px-0 bottom-12 md:bottom-15 lg:mx-10 mx-0">
          <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-4">
              <div className="flex items-center">
                <div className="text-center md:text-center lg:text-left">
                  {/* Hero Text */}
                  <h1 className="text-white text-4xl leading-tight">
                    <span className="playfair-500 text-4xl md:text-[60px]">
                      Your Goal. <br className="block md:hidden" />
                      Your AIM. <br className="block md:hidden md:inline" />
                      Your Future.
                    </span>
                  </h1>
                  <h5 className="playfair-300 text-[#C9FFF4] text-3xl md:text-[50px] leading-tight  -mt-2 md:-mt-4">
                    Admissions Process at <br /> AIMS Institutes
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Empower Image*/}
        <div className="absolute top-5 left-0 right-0 lg:mx-10 mx-0">
          <div className="container mx-auto py-4 px-4 md:px-0 lg:px-0 ">
            <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4 ">
              <div className="flex items-center">
                <Image
                  src="/white-empower.svg"
                  alt="Recruiters"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default HeroBanner
