import React from "react"
import AimsNewsletters from "@/components/Newsletter"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <>
      <SeoMetadata
        title="Top B School in India | Best Business School in Bangalore"
        description="Explore AIMS Newsletter from the Top B School in India and Best Business School in Bangalore. Stay updated with insights, campus news, and student success stories."
        path="/aims-newsletters"
        metaImage="/images/aims-logo.png"
        // schemaType="WebSite"
      />
      <div>
        <AimsNewsletters />
      </div>
    </>
  )
}

export default page
