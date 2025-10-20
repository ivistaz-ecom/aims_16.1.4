import React from "react"
import Image from "next/image"

const NirfContent = () => {
  return (
    <>
      <div className="relative px-4 md:px-6 lg:px-8 py-6 md:py-10">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-start ">
            <h2 className="text-3xl md:text-6xl text-[#0C2165] playfair-300 mb-3 md:mb-4 lg:mb-6 ">
              National Institutional <br className="hidden md:block" /> Ranking
              Framework (NIRF)
            </h2>
            <p className="monser-400 text-base md:text-[24px] leading-relaxed md:max-w-5xl">
              AIMS Institutes has been actively participating in the National
              Institutional Ranking Framework (NIRF) ranking. <br /> Following
              is the data submitted by us for respective years.
            </p>
          </div>
        </div>
        <div className="absolute md:top-[0%] right-0 md:hidden lg:block hidden">
          <Image
            src="/student-handbook/semi-circle.svg"
            alt="School Circle Background"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default NirfContent
