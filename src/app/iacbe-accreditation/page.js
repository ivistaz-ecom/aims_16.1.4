import React from "react"
import IacbeAccreditation from "@/components/IacbeAccreditation"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => (
  <>
    <SeoMetadata
      title="Colleges with IACBE Accreditation & MBA Exposure in India"
      description="Explore accredited MBA programs with global exposure in India at AIMS, among the best business schools in Bangalore with IACBE & ACBSP equivalent accreditations."
      path="/iacbe-accreditation"
      metaImage="/iacbe/banner-03.webp"
      // schemaType="EducationalOrganization"
    />
    <div>
      <IacbeAccreditation />
    </div>
  </>
)

export default page
