import React from 'react'
import ChiefVigilanceOfficer from '@/components/ChiefVigilanceOfficer'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => {
    return (
        <>
            <SeoMetadata
                title="AIMS Institutes | Chief Vigilance Officer"
                description="View AIMS Institutes’ chief vigilance officer detailing institutional progress, performance, and key initiatives across each academic year."
                path="/chief-vigilance-officer"
                metaImage="/images/aims-logo.png"
            />
            <ChiefVigilanceOfficer />
        </>
    )
}

export default page
