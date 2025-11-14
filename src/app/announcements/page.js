import React from 'react'
import Announcements from '@/components/Announcements'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => {
    return (
        <>
            <SeoMetadata
                title="AIMS Institutes | Announcements"
                description="View AIMS Institutes’ announcements detailing institutional progress, performance, and key initiatives across each academic year."
                path="/announcements"
                metaImage="/images/aims-logo.png"
            />
            <Announcements />
        </>
    )
}

export default page
