import React from "react"
import MBA from "@/components/Mba"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="Top MBA Colleges in India | Best MBA in Bangalore"
        description="Discover AIMS - one of the Top MBA colleges in India. Among the best colleges for MBA in Bangalore, offering MBA programs with placements in Bangalore."
        path="/business-school/master-business-administration"
        metaImage="/images/aims-logo.png"
        // schemaType="EducationalOrganization"
      />
      <MBA />
    </>
  )
}

export default page
