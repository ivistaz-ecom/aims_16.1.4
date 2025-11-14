import React from 'react'
import SwayamNPTEL from '@/components/SwayamNPTEL'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => {
    return (
        <>
            <SeoMetadata
                title="AIMS Institutes | Swayam NPTEL"
                description="View AIMS Institutes’ Swayam NPTEL detailing institutional progress, performance, and key initiatives across each academic year."
                path="/swayam-nptel"
                metaImage="/images/aims-logo.png"
            />
            <SwayamNPTEL />
        </>
    )
}

export default page
