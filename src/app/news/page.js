import React from 'react'
import News from '@/components/News'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => (
    <>
        <SeoMetadata
            title="Top B School in India | Best Business School in Bangalore"
            description="Stay updated with AIMS Institutes, a Top B School in India and the Best Business School in Bangalore. Explore campus news, events, achievements, and more."
            path="/news"
            metaImage="/images/aims-logo.png"
            schemaType="WebSite"
        />
        <News />
    </>
)

export default page
