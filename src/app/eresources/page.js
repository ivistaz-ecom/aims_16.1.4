import React from "react"
import Eresources from "@/components/Eresources"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const EresourcesPage = () => {
  return (
    <>
      <SeoMetadata
        title="E-Resources & Digital Library | AIMS Institutes"
        description="Access comprehensive e-resources and digital library at AIMS Institutes. Explore online databases, journals, and digital learning materials for academic excellence."
        path="/eresources"
        metaImage="/images/aims-logo.png"
        // schemaType="EducationalOrganization"
      />
      <Eresources />
    </>
  )
}

export default EresourcesPage
