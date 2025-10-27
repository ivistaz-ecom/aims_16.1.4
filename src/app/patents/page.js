import React from 'react'
import Patents from '@/components/Patents'
import SeoMetadata from '@/components/shared/Seo/SeoMetadata'

const page = () => (
    <>
        <SeoMetadata
            title="Patents | Best Business School in India"
            description="Among top colleges in Bangalore with global exposure, AIMS stands out as one of the best colleges in Bangalore for entrepreneurship and innovation."
            path="/patents"
            metaImage="/images/aims-logo.png"
            schemaType="EducationalOrganization"
        />
        <Patents />
    </>
)

export default page
