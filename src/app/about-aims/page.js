import React from "react"
import AboutAims from "../../components/AboutAims"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="Best Business School in India | AIMS Bangalore"
        description="Discover AIMS, the Best business school in Bangalore and among the top business schools in India for postgraduate studies. Shape your career with us."
        path="/about-aims"
        metaImage="/about-aims/About-banner.webp"
        // schemaType="EducationalOrganization"
      />
      <AboutAims />
    </>
  )
}

export default page
