import React from "react"
import SportsRecreation from "@/components/SportsRecreation"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => (
  <>
    <SeoMetadata
      title="Dynamic Student Community at AIMS | Sports & Recreation"
      description="Dynamic student community business education with sports & recreation. Among colleges in India with international accreditation, AIMS fosters balance."
      path="/sports-recreation"
      metaImage="/images/aims-logo.png"
      schemaType="EducationalOrganization"
    />
    <SportsRecreation />
  </>
)

export default page
