import React from "react"
import EnvironmentSustainabilityPolicyReport from "@/components/EnvironmentSustainabilityPolicyReport"
import Seo from "@/components/shared/Seo/Seo"

const page = () => {
  const seoField = {
    title: "Green Campus Initiatives in Bangalore | AIMS",
    description:
      "Explore green campus initiatives in Bangalore at AIMS. Learn about environmental sustainability education in Bangalore and how to create a sustainable college campus.",
    path: "/environment-sustainability-policy-report",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <EnvironmentSustainabilityPolicyReport />
    </>
  )
}

export default page
