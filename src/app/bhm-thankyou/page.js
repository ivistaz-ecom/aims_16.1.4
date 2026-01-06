"use client"

import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  const router = useRouter()

  useEffect(() => {
    // Redirect to bhm-course-admissions page after 5 seconds
    const timer = setTimeout(() => {
      router.push("/bhm-course-admissions")
    }, 5000)

    // Cleanup timer on component unmount
    return () => clearTimeout(timer)
  }, [router])

  return (
    <>
      <SeoMetadata
        title="Thank You | AIMS Institutes Bangalore"
        description="Thank you for contacting AIMS Institutes. We'll get back to you shortly."
        path="/bhm-thankyou"
        metaImage="/images/aims-logo.png"
      />
      <div
        className="h-[60vh]
       flex items-center justify-center px-4 py-16"
      >
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Thank you for contacting us.
          </h1>
          <div className="text-lg md:text-xl lg:text-3xl text-gray-600">
            We'll get back to you shortly.
          </div>
        </div>
      </div>
    </>
  )
}

export default page
