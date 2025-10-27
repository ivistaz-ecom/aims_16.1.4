import React from "react"
import EventsFests from "@/components/EventsFests"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => (
  <>
    <SeoMetadata
      title="Events & Fests | Best Business School in Bangalore"
      description="Experience valuebased education business school life through vibrant events and fests, built on a global business trends curriculum in Bangalore."
      path="/events-fests"
      metaImage="/images/aims-logo.png"
      schemaType="EducationalOrganization"
    />
    <div>
      <EventsFests />
    </div>
  </>
)

export default page
