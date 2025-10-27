import React from 'react'
import Recruiters from '@/components/Recruiters'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
  const seoField = {
    title: "Top Recruiters at AIMS Institutes Placements",
    description: "AIMS Institutes connects students with 200+ recruiters. Explore top hiring partners and placement opportunities across industries in Bengaluru.",
    path: "/recruiters",
    metaImage: "/recruiters/banner02.webp",
  }

  return (
    <>
      <Seo {...seoField} />
      <div>
        <Recruiters />
      </div>
    </>
  )
}

export default page
