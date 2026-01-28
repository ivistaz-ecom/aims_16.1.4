import Link from 'next/link'
import React from 'react'

const AnnualReport = () => {
    return (
        <>
            <div>
                <div className="px-4 lg:px-8 bg-[#E1F9F4]">
                    <div className='container mx-auto flex flex-col items-center justify-center px-4 lg:px-0'>
                        <div className='text-center lg:w-[80%] py-10'>
                            <h1 className='text-4xl font-bold text-[#0C2165]'>
                                Annual Reports
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 lg:px-8">
                <div className='container mx-auto flex flex-col py-10 space-y-4'>
                    <div className='space-y-2'>
                        <p className='text-lg'>
                            AIMS Institutes publishes its annual academic and administrative report as per statutory requirements
                        </p>
                        <p>
                            The reports provide details on academic performance, governance, student activities, and institutional development.
                        </p>
                    </div>
                    <div>
                        <h4 className='text-2xl text-bold'>
                            Annual Report
                        </h4>
                        <ul className='list-disc list-inside space-y-2'>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/annual-reports/annual+report+2023.pdf" target='_blank' noopener noreferrer>
                                    Annual Report 2023-24 - <span className='text-bold underline'>Download</span>
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/annual-reports/Annual+Report+2020-21.pdf" target='_blank' noopener noreferrer>
                                    Annual Report 2020-21 - <span className='text-bold underline'>Download</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div >
            </div >
        </>
    )
}

export default AnnualReport
