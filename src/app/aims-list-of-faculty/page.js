import React from "react"
import FacultyMemberDetails from "@/components/FacultyMemberDetails"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const FacultyMemberDetailsPage = () => (
  <>
    <SeoMetadata
      title="Faculty at AIMS | Top B School in India"
      description="Meet experienced faculty at the Top B School. Among schools with corporate interface and mentorship programs, AIMS offers practical business training in Bangalore."
      path="/aims-list-of-faculty"
      metaImage="/images/aims-logo.png"
      // schemaType="EducationalOrganization"
    />
    <FacultyMemberDetails />
  </>
)

export default FacultyMemberDetailsPage
