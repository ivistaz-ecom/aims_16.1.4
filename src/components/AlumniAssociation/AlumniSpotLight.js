"use client"
import React from "react"
import Button from "@/shared/Button"

const AlumniSpotLight = () => {
  return (
    <div className="w-full bg-[#531675] py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          {/* Main Title */}
          <h2 className="text-4xl lg:text-6xl playfair-300 text-white mb-8 leading-tight">
            Alumni Spotlight:
            <br />
            AIMers Who Inspire
          </h2>

          {/* Descriptive Paragraphs */}
          <div className="mb-8 space-y-4">
            <p className="text-lg lg:text-xl text-white leading-relaxed">
              Meet some of our alumni who&apos;ve gone on to do incredible
              things across industries—from business and hospitality to tech and
              the arts.
            </p>
            <p className="text-lg lg:text-xl text-white leading-relaxed">
              These stories highlight how an education at AIMS helped them shape
              their goals and AIM for the future—with clarity, confidence, and
              community.
            </p>
          </div>

          {/* Quote */}
          <div className="mb-8">
            <blockquote className="text-2xl lg:text-3xl text-white monser-600 leading-relaxed">
              &quot;AIMS gave me structure, confidence, and the mindset to keep
              growing. I still return for the people, and the purpose.&quot;
            </blockquote>
          </div>

          {/* Quote Attribution */}
          <div className="mb-8">
            <p className="text-lg text-white">— Ananya J., Batch of 2018</p>
          </div>

          {/* Call to Action Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <p className="text-lg text-white">Want to be featured?</p>
            <Button
              variant="placement"
              onClick={() => {}}
              className="flex items-center gap-2 hover:bg-[#531675]/80"
            >
              Share Your Story
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlumniSpotLight
