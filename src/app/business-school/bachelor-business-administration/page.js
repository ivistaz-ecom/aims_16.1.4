import React from "react"
import BbaComponents from "../../../components/BbaComponents"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="Best Colleges for BBA in Bangalore - AIMS Institutes"
        description="Explore one of the best colleges for BBA in Bangalore, offering BBA programs with CA and ACCA options and proven placement success in Bangalore."
        path="/business-school/bachelor-business-administration"
        metaImage="/images/aims-logo.png"
        // schemaType="EducationalOrganization"
      />
      <div>
        <BbaComponents />
      </div>
    </>
  )
}

export default page
