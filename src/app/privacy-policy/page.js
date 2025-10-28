import React from "react"
import PrivacyPolicy from "@/components/PrivacyPolicy"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const PrivacyPolicyPage = () => (
  <>
    <SeoMetadata
      title="Privacy Policy | Top B School in India – AIMS"
      description="Read AIMS Institutes' privacy policy. As a Top B school in India and among A grade colleges in Bangalore, we ensure transparency and protect your information."
      path="/privacy-policy"
      metaImage="/images/aims-logo.png"
      // schemaType="WebSite"
    />
    <div className="w-full">
      <PrivacyPolicy />
    </div>
  </>
)

export default PrivacyPolicyPage
