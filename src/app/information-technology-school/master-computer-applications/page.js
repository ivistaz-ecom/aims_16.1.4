import React from "react"
import McaComponents from "@/components/Mca"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => (
  <>
    <SeoMetadata
      title="Top Colleges for MCA in Bangalore | AIMS Institutes"
      description="Pursue MCA at AIMS Institutes, Bengaluru. A career-focused program with advanced IT training, global exposure, and placement support."
      path="/information-technology-school/master-computer-applications"
      metaImage="/images/aims-logo.png"
      // schemaType="EducationalOrganization"
    />
    <McaComponents />
  </>
)

export default page
