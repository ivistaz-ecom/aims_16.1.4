import React from "react"
import AicteAims from "@/components/AicteAims"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="Reputed Business Institutions in Bangalore | AIMS"
        description="AIMS ranks among the top 10 B schools in Bangalore and is one of the few private colleges with DELNET and NLIST access, shaping career-ready professionals."
        path="/aicte-aims"
        metaImage="/images/aims-logo.png"
        // schemaType="EducationalOrganization"
      />
      <AicteAims />
    </>
  )
}

export default page
