import React from "react"
import RotaractClub from "@/components/RotaractClub"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => (
  <>
    <SeoMetadata
      title="Civic-Minded Students | AIMS Rotaract Club, Bangalore"
      description="Colleges for civic responsibility development in Bangalore: Student-led social initiatives, community service & skills development through consulting in Bangalore."
      path="/rotaract-club"
      metaImage="/images/aims-logo.png"
      // schemaType="EducationalOrganization"
    />
    <RotaractClub />
  </>
)

export default page
