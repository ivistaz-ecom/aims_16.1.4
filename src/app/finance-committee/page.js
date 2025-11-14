import React from 'react'
import FinanceCommittee from '@/components/FinanceCommittee'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => {
    return (
        <>
            <SeoMetadata
                title="AIMS Institutes | Finance Committee"
                description="View AIMS Institutes’ management council members detailing institutional progress, performance, and key initiatives across each academic year."
                path="/management-council-members"
                metaImage="/images/aims-logo.png"
            />
            <FinanceCommittee />
        </>
    )
}

export default page
