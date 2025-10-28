import React from "react"
import SciencePcmbPcmc from "@/components/SciencePcmbPcmc"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="Science PCMB & PCMC Courses | AIMS Pre-University College"
        description="Explore Science PCMB and PCMC courses at AIMS Pre-University College. Comprehensive preparation for competitive exams with expert faculty and modern facilities."
        path="/pre-university-college/science-pcmb-pcmc"
        metaImage="/images/aims-logo.png"
        // schemaType="EducationalOrganization"
      />
      <div>
        <SciencePcmbPcmc />
      </div>
    </>
  )
}

export default page
