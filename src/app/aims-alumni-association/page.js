import React from "react"
import AlumniAssociation from "@/components/AlumniAssociation"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => (
  <>
    <SeoMetadata
      title="AIMS Institutes Alumni Network Bengaluru"
      description="Join the AIMS Institutes alumni community. A strong network of graduates creating impact across industries, with mentorship and career support."
      path="/aims-alumni-association"
      metaImage="/images/aims-logo.png"
      // schemaType="EducationalOrganization"
    />
    <AlumniAssociation />
  </>
)

export default page
