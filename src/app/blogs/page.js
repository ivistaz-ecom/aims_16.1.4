import React from 'react'
import Blogs from '@/components/Blogs'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => (
    <>
        <SeoMetadata
            title="Top B School in India | Best Business School in Bangalore"
            description="Explore insights, updates, and success stories from AIMS, Top B School in India and the Best Business School in Bangalore, guiding your career forward."
            path="/blogs"
            metaImage="/images/aims-logo.png"
            schemaType="WebSite"
        />
        <Blogs />
    </>
)

export default page