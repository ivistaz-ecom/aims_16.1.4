import React from "react"
import BhmComponent from "@/components/BhmComponent"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => (
  <>
    <SeoMetadata
      title="Hotel Management Colleges in Bangalore | AIMS"
      description="Join AIMS Institutes' Bachelor of Hotel Management in Bengaluru. Build expertise in hospitality with international exposure and career pathways."
      path="/hospitality-tourism-school/bachelor-hotel-management"
      metaImage="/images/aims-logo.png"
      // schemaType="EducationalOrganization"
    />
    <div>
      <BhmComponent />
    </div>
  </>
)

export default page
