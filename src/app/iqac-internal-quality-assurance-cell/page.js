import React from "react"
import AimsJournalResearch from "@/components/AimsJournalResearch"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => (
  <>
    <SeoMetadata
      title="IQAC | A Grade Colleges in Bangalore – AIMS Institute"
      description="What is the ranking of AIMS Institute? As a Top Private Business School India, AIMS stands among A grade colleges in Bangalore with a strong IQAC framework."
      path="/iqac-internal-quality-assurance-cell"
      metaImage="/aims-journal-of-research/banner-02.webp"
      // schemaType="EducationalOrganization"
    />
    <AimsJournalResearch />
  </>
)

export default page
