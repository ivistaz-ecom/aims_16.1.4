import React from "react"
import Image from "next/image"
import Button from "@/shared/Button"

const AlumiNetwork = () => {
  return (
    <div className="w-full py-10 lg:px-0 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Left Column - Image */}
          <div className="flex flex-col gap-4 col-span-1">
            <Image
              src="/alumni-association/alumni-netowrk.webp"
              alt="Alumni Network"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl lg:text-5xl playfair-300 text-[#0C2165] leading-tight">
              Why Join the AIMS <br className="hidden md:block" />
              Alumni Network?
            </h3>

            <div className="text-gray-800 leading-relaxed space-y-4">
              <p className="text-lg">
                Being part of the AIMS Alumni Association is more than just
                staying in touch, it&apos;s about building meaningful
                relationships, accessing opportunities, and giving back to the
                place that shaped your path. Here’s what you can look forward
                to:
              </p>
            </div>
            <div>
              <ul className="list-disc list-inside">
                <li className="flex items-start gap-3">
                  <span className="text-black">•</span>
                  Reconnect with your batchmates and professors
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black">•</span>
                  Access to exclusive events and workshops
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black">•</span>
                  Attend exclusive alumni events and reunions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black">•</span>
                  Share your success story or mentor a current student
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black">•</span>
                  Receive quarterly alumni newsletters
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black">•</span>
                  Collaborate for guest lectures, campus visits, or industry
                  talks
                </li>
              </ul>
            </div>
            <div>
              <Button
                variant="placement"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdvpoig1zb37eq9jVRuBSUu22hQdXEBVc8vsYWK7039QhtO-g/viewform"
                target="_blank"
                className="block w-[150px]"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlumiNetwork
