"use client"

import React from "react"
import Button from "@/shared/Button"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="Thank You | AIMS Institutes Bangalore"
        description="Thank you for contacting AIMS Institutes. We'll get back to you shortly."
        path="/mba-thankyou"
        metaImage="/images/aims-logo.png"
      />
      <div className="h-[60vh] flex items-center justify-center px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Thank you for contacting us.
          </h1>
          <div className="text-lg md:text-xl lg:text-3xl text-gray-600 mb-8">
            We'll get back to you shortly.
          </div>
          <Button
            className="w-fit mx-auto"
            variant="placement"
            href="/"
            showReadMore={false}
          >
            know More
          </Button>
        </div>
      </div>
    </>
  )
}

export default page
