import AimsJournalOfResearch from '@/components/AimsJournalOfResearch'
import React from 'react'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
  const seoField = {
    title: "Top B School in India | AIMS Journal of Research",
    description: "Explore AIMS Journal of Research from a Top B school in India. A leading business school with research center, driving innovation and academic excellence.",
    path: "/aims-journal-of-research",
    metaImage: "/aims-journal-of-research/banner-02.webp",
  }

  return (
    <>
      <Seo {...seoField} />
      <AimsJournalOfResearch/>
    </>
  )
}

export default page
