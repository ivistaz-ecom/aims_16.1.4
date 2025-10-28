import React from "react"
import CampusFacilities from "@/components/CampusFacilities"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => (
  <>
    <SeoMetadata
      title="Consulting Center Business School & Campus Facilities"
      description="Explore campus facilities at one of the leading institutes with entrepreneurship development centres in Karnataka and discover the benefits of studying from a private college with good infrastructure."
      path="/campus-facilities"
      metaImage="/images/aims-logo.png"
      // schemaType="EducationalOrganization"
    />
    <CampusFacilities />
  </>
)

export default page
