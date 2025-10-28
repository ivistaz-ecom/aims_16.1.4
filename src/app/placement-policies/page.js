import React from "react"
import PlacementPolicies from "@/components/PlacementPolicies"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => (
  <>
    <SeoMetadata
      title="Placement Policies at AIMS Institutes Bengaluru"
      description="Understand AIMS Institutes' placement policies. Learn about recruiter engagement, student eligibility, and guidelines for 100% placement support."
      path="/placement-policies"
      metaImage="/placement-policies/banner.webp"
      // schemaType="EducationalOrganization"
    />
    <div>
      <PlacementPolicies />
    </div>
  </>
)

export default page
