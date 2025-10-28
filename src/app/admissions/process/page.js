import React from "react"
import AdmissionProcess from "@/components/AdmissionProcess"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="Admission Process for UG & PG Courses | AIMS Institutes"
        description="Complete guide to AIMS Institutes admission process. Learn about eligibility criteria, application steps, required documents, and important dates for UG & PG programs."
        path="/admissions/process"
        metaImage="/images/aims-logo.png"
        // schemaType="WebSite"
      />
      <AdmissionProcess />
    </>
  )
}

export default page
