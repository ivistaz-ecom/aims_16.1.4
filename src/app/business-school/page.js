import React from "react"
import SchoolOfBusiness from "@/components/SchoolOfBusiness"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="Top B Schools in Bangalore | AIMS School of Business"
        description="Among leading PGDM colleges Bangalore, AIMS guides you on how to choose the best MBA college in Bangalore with placement and future-focused learning."
        path="/business-school"
        metaImage="/images/aims-logo.png"
        // schemaType="EducationalOrganization"
      />
      <SchoolOfBusiness />
    </>
  )
}

export default page
