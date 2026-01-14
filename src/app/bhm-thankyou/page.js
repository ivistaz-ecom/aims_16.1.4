"use client"

import React, { useEffect } from "react"
import Button from "@/shared/Button"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  useEffect(() => {
    // Event snippet for Submit lead form-BHM conversion page
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17707682486/9kIHCIDe89wbELaV1_tB",
      })
    }
  }, [])

  return (
    <>
      <SeoMetadata
        title="Thank You | AIMS Institutes Bangalore"
        description="Thank you for contacting AIMS Institutes. We'll get back to you shortly."
        path="/bhm-thankyou"
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
            Visit Our Website
          </Button>
        </div>
      </div>
    </>
  )
}

export default page
