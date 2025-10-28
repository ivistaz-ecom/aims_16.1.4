import React from "react"
import HomeComponents from "@/components/HomeComponents"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const Home = () => (
  <>
    <SeoMetadata
      title="Top Colleges in Bangalore | AIMS Institutes"
      description="Looking for the top colleges in Bangalore? AIMS is a trusted choice, ranked among the best business colleges and best hospitality colleges in Bangalore."
      path="/"
      metaImage="/images/aims-logo.png"
      // schemaType="EducationalOrganization"
    />
    <HomeComponents />
  </>
)

export default Home
