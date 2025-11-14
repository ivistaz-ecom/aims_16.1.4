import React from 'react'
import ManagementCouncil from '@/components/ManagementCouncil'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => {
    return (
        <>
            <SeoMetadata
                title="AIMS Institutes | Management Council Members"
                description="View AIMS Institutes’ management council members detailing institutional progress, performance, and key initiatives across each academic year."
                path="/management-council-members"
                metaImage="/images/aims-logo.png"
            />
            <ManagementCouncil />
        </>
    )
}

export default page
