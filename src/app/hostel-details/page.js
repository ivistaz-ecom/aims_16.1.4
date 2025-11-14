import React from "react"
import HostelDetails from "@/components/HostelDetails"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="AIMS Institutes Sports Facilities | Campus Life & Events"
        description="Explore AIMS Institutes gallery showcasing campus life, events, student activities, and facilities. Get a glimpse of life at Bangalore's premier educational institution."
        path="/gallery"
        metaImage="/images/aims-logo.png"
        // schemaType="EducationalOrganization"
      />
      <div>
        <HostelDetails />
      </div>
    </>
  )
}

export default page
