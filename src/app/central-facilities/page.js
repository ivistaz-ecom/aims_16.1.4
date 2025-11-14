import React from "react"
import CentralFacilities from "@/components/CentralFacilities"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="AIMS Institutes Central Facilities | Campus Life & Events"
        description="Explore AIMS Institutes central facilities showcasing campus life, events, student activities, and facilities. Get a glimpse of life at Bangalore's premier educational institution."
        path="/central-facilities"
        metaImage="/images/aims-logo.png"
        // schemaType="EducationalOrganization"
      />
      <div>
        <CentralFacilities />
      </div>
    </>
  )
}

export default page
