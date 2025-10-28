import React from "react"
import RefundAndCancellations from "@/components/RefundAndCancellations"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const RefundCancellationsPage = () => (
  <>
    <SeoMetadata
      title="Refund & Cancellations | Top B School in India"
      description="Understand the Refund & Cancellations policy of a Top B School in India. A grade colleges in Bangalore like AIMS ensure clarity and student-first practices."
      path="/refund-cancellations"
      metaImage="/images/aims-logo.png"
      // schemaType="WebSite"
    />
    <RefundAndCancellations />
  </>
)

export default RefundCancellationsPage
