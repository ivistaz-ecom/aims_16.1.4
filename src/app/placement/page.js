import React from "react"
import Placement from "@/components/Placement"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="AIMS Institutes Health Facilities | Campus Life & Events"
        description="Explore AIMS Institutes gallery showcasing campus life, events, student activities, and facilities. Get a glimpse of life at Bangalore's premier educational institution."
        path="/health-facilities"
        metaImage="/images/aims-logo.png"
        // schemaType="EducationalOrganization"
      />
      <div>
        <Placement />
      </div>
    </>
  )
}

export default page
