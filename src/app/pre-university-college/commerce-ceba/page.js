import React from "react"
import CommerceCeba from "@/components/CommerceCeba"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="Commerce CEBA Courses | AIMS Pre-University College"
        description="Explore Commerce CEBA courses at AIMS Pre-University College. Comprehensive business education foundation with expert guidance and modern learning facilities."
        path="/pre-university-college/commerce-ceba"
        metaImage="/images/aims-logo.png"
        // schemaType="EducationalOrganization"
      />
      <div>
        <CommerceCeba />
      </div>
    </>
  )
}

export default page
