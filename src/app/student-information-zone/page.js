import React from "react"
import StudentHandbook from "@/components/StudentHandbook"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const StudentInformationZone = () => (
  <>
    <SeoMetadata
      title="Innovative Business Curriculum Bangalore | AIMS"
      description="Explore AIMS' innovative business curriculum Bangalore. Among affordable private MBA colleges in Bangalore with hostel, we're one of the top management colleges near Peenya."
      path="/student-information-zone"
      metaImage="/images/aims-logo.png"
      // schemaType="EducationalOrganization"
    />
    <div className="w-full">
      <StudentHandbook />
    </div>
  </>
)

export default StudentInformationZone
