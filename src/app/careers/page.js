import React from 'react'
import Careers from '@/components/Careers'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => {
    return (
        <>
            <SeoMetadata
                title="AIMS Institutes | Careers"
                description="View AIMS Institutes’ careers detailing institutional progress, performance, and key initiatives across each academic year."
                path="/careers"
                metaImage="/images/aims-logo.png"
            />
            <Careers />
        </>
    )
}

export default page
