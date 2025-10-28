import React from "react"
import UgcPreparation from "@/components/UgcPreparation"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const UgcPreparationPage = () => {
  return (
    <>
      <SeoMetadata
        title="UGC Preparation & Academic Excellence | AIMS Institutes"
        description="Prepare for UGC NET and other academic examinations with AIMS Institutes. Comprehensive guidance, study materials, and expert faculty support for academic success."
        path="/ugc-preparation"
        metaImage="/images/aims-logo.png"
        // schemaType="EducationalOrganization"
      />
      <div>
        <UgcPreparation />
      </div>
    </>
  )
}

export default UgcPreparationPage
