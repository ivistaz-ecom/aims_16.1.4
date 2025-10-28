import React from "react"
import TermsAndConditions from "@/components/TermsAndConditions"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const TermsConditionsPage = () => (
  <>
    <SeoMetadata
      title="Terms & Conditions | Top B School in India"
      description="Review the Terms & Conditions of AIMS, among the Top B school in India and listed in A grade colleges in Bangalore, ensuring transparency and trust."
      path="/terms-conditions"
      metaImage="/images/aims-logo.png"
      // schemaType="WebSite"
    />
    <div className="w-full">
      <TermsAndConditions />
    </div>
  </>
)

export default TermsConditionsPage
