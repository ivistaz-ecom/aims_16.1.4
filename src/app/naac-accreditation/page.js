import React from "react"
import NaacAccreditation from "@/components/NaacAccreditation"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const NaacAccreditationPage = () => (
  <>
    <SeoMetadata
      title="A Grade NAAC Accredited B School | AIMS Institute"
      description="An A grade NAAC accredited B school, AIMS ranks among the top 10 business schools in Bangalore. Find out what is the ranking of AIMS Institute?"
      path="/naac-accreditation"
      metaImage="/images/aims-logo.png"
      // schemaType="EducationalOrganization"
    />
    <NaacAccreditation />
  </>
)

export default NaacAccreditationPage
