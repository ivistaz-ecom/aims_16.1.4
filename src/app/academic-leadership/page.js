import React from "react"
import AcademicLeadershipPage from "../../components/AcademicLeadership"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const Page = () => (
  <>
    <SeoMetadata
      title="Leadership at AIMS Institutes | Vision of AIMS Institutes leadership"
      description="Discover the vision of AIMS Institutes leadership. Meet the Principal of AIMS, Founder of AIMS, Executive Director, and CEO who shape the future with strong leadership."
      path="/leadership"
      metaImage="/images/aims-logo.png"
      // schemaType="Organization"
    />
    <div>
      <AcademicLeadershipPage />
    </div>
  </>
)

export default Page
