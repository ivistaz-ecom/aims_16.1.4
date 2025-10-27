import React from 'react'
import PlacementsMBA from '@/components/PlacementsMBA'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
  const seoField = {
    title: "MBA & PGDM Placements at AIMS Institutes",
    description: "Discover AIMS Institutes MBA and PGDM placement highlights. Top recruiters, ₹27 LPA highest CTC, and career opportunities with global exposure.",
    path: "/placements-mba/pgdm",
    metaImage: "/placements-mba/pgdm/banner.webp",
  }

  return (
    <>
      <Seo {...seoField} />
      <PlacementsMBA />
    </>
  )
}

export default page
