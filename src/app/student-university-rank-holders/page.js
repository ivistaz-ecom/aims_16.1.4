import React from "react"
import UniversityRankHolders from "@/components/UniversityRankHolders"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => (
  <>
    <SeoMetadata
      title="Top Rank Holders | Best Business School in Bangalore"
      description="Among leading management colleges in India for career growth, AIMS shines as the Best business school in Bangalore with strong campus placements for MBA achievers."
      path="/student-university-rank-holders"
      metaImage="/university-rank-holders/banner-01.webp"
      // schemaType="EducationalOrganization"
    />
    <div>
      <UniversityRankHolders />
    </div>
  </>
)

export default page
