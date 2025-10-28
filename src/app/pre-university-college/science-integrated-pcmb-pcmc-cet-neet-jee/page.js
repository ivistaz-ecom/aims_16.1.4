import React from "react"
import ScienceIntegratedPcmbPcmcCetNeetJee from "@/components/ScienceIntegratedPcmbPcmcCetNeetJee"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="Integrated Science PCMB/PCMC with CET/NEET/JEE | AIMS Pre-University"
        description="Comprehensive integrated science program combining PCMB/PCMC with CET, NEET, and JEE preparation at AIMS Pre-University College. Expert coaching and modern facilities."
        path="/pre-university-college/science-integrated-pcmb-pcmc-cet-neet-jee"
        metaImage="/images/aims-logo.png"
        // schemaType="EducationalOrganization"
      />
      <div>
        <ScienceIntegratedPcmbPcmcCetNeetJee />
      </div>
    </>
  )
}

export default page
