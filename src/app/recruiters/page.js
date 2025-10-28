import React from "react"
import Recruiters from "@/components/Recruiters"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => (
  <>
    <SeoMetadata
      title="Top Recruiters at AIMS Institutes Placements"
      description="AIMS Institutes connects students with 200+ recruiters. Explore top hiring partners and placement opportunities across industries in Bengaluru."
      path="/recruiters"
      metaImage="/recruiters/banner02.webp"
      // schemaType="EducationalOrganization"
    />
    <div>
      <Recruiters />
    </div>
  </>
)

export default page
