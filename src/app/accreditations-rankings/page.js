import React from "react"
import AccreditationsRankings from "../../components/AccreditationsRankings"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="NAAC A Grade College | AIMS Institutes Latest Rankings"
        description="Explore AIMS Institutes latest rankings as a NAAC A Grade College, recognized as a Top Private Business School in South India for excellence and career success"
        path="/accreditations-rankings"
        metaImage="/images/aims-logo.png"
        // schemaType="EducationalOrganization"
      />
      <div>
        <AccreditationsRankings />
      </div>
    </>
  )
}

export default page
