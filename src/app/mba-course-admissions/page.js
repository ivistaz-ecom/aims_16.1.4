import MBALandingPage from "@/components/MbaLandingPage"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <div>
      <SeoMetadata
        title="Career-Focused MBA Program | AIMS Institutes Bangalore"
        description="Earn an MBA that employers trust - 85%+ placements, live industry projects, CEO-mentorship, and dual specialisations with top corporate recruiters."
        path="/mba-course-admissions"
        metaImage="/images/aims-logo.png"
      />
      <MBALandingPage />
    </div>
  )
}

export default page
