import React from "react"
import Bca from "@/components/Bca"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => (
  <>
    <SeoMetadata
      title="Best Colleges for BCA in Bangalore | AIMS Institutes"
      description="AIMS Institutes offers one of the best BCA programs in Bengaluru. Gain industry-relevant IT skills, internships, and strong placement pathways."
      path="/information-technology-school/bachelor-computer-applications"
      metaImage="/images/aims-logo.png"
      // schemaType="EducationalOrganization"
    />
    <Bca />
  </>
)

export default page
