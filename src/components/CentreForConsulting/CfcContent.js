import React from "react"
import Image from "next/image"

const CfcContent = () => {
  return (
    <>
      <div className="justify-center items-center py-10 flex flex-col lg:px-0 px-4 relative overflow-hidden border-b border-gray-200">
        <div className="px-0 lg:px-8">
          <div className="container mx-auto">
            <div className="flex flex-col bg-transparent relative z-10">
              <h3 className="text-start text-[32px] lg:text-[56px] playfair-300 text-[#0C2165]">
                From Insight to Impact. <br className="hidden md:block" />
                AIM for Industry-Ready Thinking.
              </h3>
              <div className="lg:w-[75%] w-full ">
                <p className="text-start text-lg lg:text-[20px] monser-400">
                  Established to bridge the gap between theory and practice, the
                  AIMS Centre for Consulting (ACC) is designed to give students
                  and faculty hands-on exposure to the world of industry-led{" "}
                  <br className="md:hidden block" /> problem-solving.
                </p>
                <p className="text-start text-lg lg:text-[20px] monser-400">
                  The centre actively partners with corporates and NGOs to
                  provide management consulting services in Bangalore colleges,
                  allowing students and mentors alike to engage with real-world
                  challenges and make tangible contributions.
                </p>
                <p className="text-start text-lg lg:text-[20px] monser-400">
                  Our belief is simple: learning becomes transformational when
                  it is applied. That’s why ACC doesn’t just teach, it enables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CfcContent
