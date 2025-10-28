import React from "react"
import WelFareCommittees from "@/components/WelFareCommittees"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="Student Development & Dynamic Community | AIMS"
        description="Discover student development in business education at AIMS. Join a dynamic student community in one of the top colleges in Bangalore for growth & opportunity."
        path="/cells-committees-antiragging-sexual-harassment-grievances-equal-opportunity"
        metaImage="/welfare-committees/banner-01.webp"
        // schemaType="EducationalOrganization"
      />
      <WelFareCommittees />
    </>
  )
}

export default page
