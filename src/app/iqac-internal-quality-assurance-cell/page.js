import React from 'react'
import AimsJournalResearch from '@/components/AimsJournalResearch'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
    const seoField = {
        title: "IQAC | A Grade Colleges in Bangalore – AIMS Institute",
        description: "What is the ranking of AIMS Institute? As a Top Private Business School India, AIMS stands among A grade colleges in Bangalore with a strong IQAC framework.",
        path: "/iqac-internal-quality-assurance-cell",
        metaImage: "/aims-journal-of-research/banner-02.webp",
    }

    return (
        <>
            <Seo {...seoField} />
            <AimsJournalResearch />
        </>
    )
}

export default page
