import React from "react"
import Image from "next/image"
import Button from "@/shared/Button"

const ProvidingOpportunities = () => {
  return (
    <div className="w-full pb-10 lg:px-0 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Left Column - Image */}
          <div className="flex flex-col gap-4 col-span-1">
            <Image
              src="/alumni-association/give-back-the-aims-community.webp"
              alt="Give Back to the AIMS Community"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl lg:text-5xl playfair-300 text-[#0C2165] leading-tight">
              Give Back to the <br className="hidden md:block" />
              AIMS Community
            </h2>

            <div className="text-gray-800">
              <p>
                As an alumnus, you have the opportunity to shape the next
                generation of AIMers.
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="text-lg font-bold monser-600">
                Here&apos;s how you can contribute:
              </h5>
              <ul className="list-disc list-inside">
                <li className="flex items-start gap-3">
                  <span className="text-black">•</span>
                  Offer internships or job opportunities for students
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black">•</span>
                  Mentor current students through workshops or panels
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black">•</span>
                  Volunteer for admissions or career events
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black">•</span>
                  Sponsor scholarships or support infrastructure
                </li>
              </ul>
              <h5 className="text-lg font-bold monser-600">
                Every contribution, big or small, makes a lasting impact.
              </h5>
            </div>
            <div>
              <Button
                variant="placement"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdvpoig1zb37eq9jVRuBSUu22hQdXEBVc8vsYWK7039QhtO-g/viewform"
                target="_blank"
                className="block md:w-[240px]"
              >
                I Want to Give Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProvidingOpportunities
