import React from "react"
import CodeOfConduct from "@/components/CodeOfConduct"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => (
  <>
    <SeoMetadata
      title="Code of Conduct | Top MBA Colleges in Bangalore"
      description="As one of the highly ranked management colleges in India, AIMS sets standards for faculty & staff conduct, reinforcing trust as among the best colleges for Masters in Business Studies."
      path="/code-of-conduct-ethics"
      metaImage="/images/aims-logo.png"
      // schemaType="EducationalOrganization"
    />
    <CodeOfConduct />
  </>
)

export default page
