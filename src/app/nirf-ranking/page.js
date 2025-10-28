import React from "react"
import NirfRanking from "@/components/NirfRanking"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const NirfRankingPage = () => (
  <>
    <SeoMetadata
      title="Top Private Business School in South India | AIMS"
      description="Recognized as a Top private business school in South India, AIMS ranks among the Best business school in Bangalore with leading entrepreneurship development centres in Karnataka."
      path="/nirf-ranking"
      metaImage="/images/aims-logo.png"
      // schemaType="EducationalOrganization"
    />
    <NirfRanking />
  </>
)

export default NirfRankingPage
