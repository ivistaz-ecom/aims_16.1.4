import React from "react"
import AimsJournalOfResearch from "@/components/AimsJournalOfResearch"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="Top B School in India | AIMS Journal of Research"
        description="Explore AIMS Journal of Research from a Top B school in India. A leading business school with research center, driving innovation and academic excellence."
        path="/aims-journal-of-research"
        metaImage="/aims-journal-of-research/banner-02.webp"
        // schemaType="EducationalOrganization"
      />
      <AimsJournalOfResearch />
    </>
  )
}

export default page
