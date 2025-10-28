import React from "react"
import PlacementsMBA from "@/components/PlacementsMBA"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => (
  <>
    <SeoMetadata
      title="MBA & PGDM Placements at AIMS Institutes"
      description="Discover AIMS Institutes MBA and PGDM placement highlights. Top recruiters, ₹27 LPA highest CTC, and career opportunities with global exposure."
      path="/placements-mba/pgdm"
      metaImage="/placements-mba/pgdm/banner.webp"
      // schemaType="EducationalOrganization"
    />
    <PlacementsMBA />
  </>
)

export default page
