import React from "react"
import BbaAviationComponents from "@/components/BbaAviationComponents"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="Best BBA Aviation Colleges in Bangalore - AIMS"
        description="Best colleges for BBA aviation in Bangalore. India's best college for BBA in Aviation delivers industry-ready graduates with placement excellence."
        path="/business-school/bachelor-business-administration-aviation-management"
        metaImage="/images/aims-logo.png"
        // schemaType="EducationalOrganization"
      />
      <div>
        <BbaAviationComponents />
      </div>
    </>
  )
}

export default page
