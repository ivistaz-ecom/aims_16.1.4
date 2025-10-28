import React from "react"
import GrievanceRedressal from "@/components/GrievanceRedressal"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const GrievanceRedressalPage = () => (
  <>
    <SeoMetadata
      title="Top Business Colleges in Bangalore | Student Empowerment"
      description="Explore how a college with student well-being initiatives in Bangalore empowers learners. AIMS ensures student empowerment through clear grievance redressal."
      path="/grievance-redressal"
      metaImage="/images/aims-logo.png"
      // schemaType="EducationalOrganization"
    />
    <div className="w-full">
      <GrievanceRedressal />
    </div>
  </>
)

export default GrievanceRedressalPage
