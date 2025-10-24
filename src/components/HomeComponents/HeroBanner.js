"use client";
import React from "react";
import ApplicationMarquee from "../../shared/ApplicationMarquee";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HeroBannerSoB = ({ announcements, pageType = "engineering" }) => {
  // You can add as many banner slides as you want here
  const banners = [
    {
      desktop: "/home/banner-003.webp",
      tablet: "/home/home-banner-tab-02.webp",
      mobile: "/home/mobile-mask.webp",
      logo: "/white-empower.svg",
    },
    {
      desktop: "/home/banner-004.webp",
      tablet: "/home/home-banner-tab-03.webp",
      mobile: "/home/mobile-carousel-02.webp",
      logo: "/white-empower.svg",
    },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        arrows={true}
        showDots={false}
        pauseOnHover={false}
        swipeable={true}
        draggable={true}
        className="relative"
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className="relative w-full h-[83vh] md:h-[100vh] overflow-hidden"
          >
            {/* Background Image - Desktop */}
            <div
              className="hidden lg:block w-full h-full bg-cover bg-top bg-no-repeat"
              style={{ backgroundImage: `url(${banner.desktop})` }}
            />

            {/* Background Image - Tablet */}
            <div
              className="hidden md:block lg:hidden w-full h-full bg-cover bg-top bg-no-repeat"
              style={{ backgroundImage: `url(${banner.tablet})` }}
            />

            {/* Background Image - Mobile */}
            <div
              className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat"
              style={{ backgroundImage: `url(${banner.mobile})` }}
            />

            {/* Top Logo Section */}
            <div className="absolute lg:top-10 top-0 lg:right-0 -right-5">
              <div className="container mx-auto py-4 px-6 lg:px-8">
                <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4">
                  <div className="flex items-center">
                    <Image
                      src={banner.logo}
                      alt="Empower Logo"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-10 left-0 right-0 px-4 lg:px-0">
              <div className="container mx-auto">
                <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-4">
                  <div className="flex items-center"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  );
};

export default HeroBannerSoB;
