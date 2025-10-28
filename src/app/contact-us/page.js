import React from "react"
import ContactUs from "@/components/ContactUs"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="Contact AIMS Institutes Bangalore | Get in Touch"
        description="Contact AIMS Institutes Bangalore for admissions, course information, and campus visits. Find our address, phone numbers, and email for all inquiries."
        path="/contact-us"
        metaImage="/images/aims-logo.png"
        // schemaType="EducationalOrganization"
      />
      <div>
        <ContactUs />
      </div>
    </>
  )
}

export default page
