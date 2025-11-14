import React from 'react'
import CircularsAndNotices from '@/components/CircularsAndNotices'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => {
    return (
        <>
            <SeoMetadata
                title="AIMS Institutes | Circulars and Notices"
                description="View AIMS Institutes’ circulars and notices detailing institutional progress, performance, and key initiatives across each academic year."
                path="/circular-and-notices"
                metaImage="/images/aims-logo.png"
            />
            <CircularsAndNotices />
        </>
    )
}

export default page
