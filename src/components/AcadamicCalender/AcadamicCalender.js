import Link from 'next/link'
import React from 'react'

const AcadamicCalender = () => {
    return (
        <>
            <div>
                <div className="px-4 lg:px-8 bg-[#E1F9F4]">
                    <div className='container mx-auto flex flex-col items-center justify-center px-4 lg:px-0'>
                        <div className='text-center lg:w-[80%] py-10'>
                            <h1 className='text-4xl font-bold text-[#0C2165]'>
                                Academic Calendar
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 lg:px-8">
                <div className='container mx-auto flex flex-col py-10 space-y-4'>
                    <div>
                        <h4 className='text-2xl text-bold'>
                            Stay on track with Important Dates and Key Academic Milestones:
                        </h4>
                        <ul className='list-disc list-inside space-y-2'>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/academic-calender/2023-2024/Academic%20Calender-(2023-2024).pdf" target='_blank' noopener noreferrer>
                                    Academic Year 2023-24 - <span className='text-bold underline'>View</span>
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/academic-calender/2022-2023/Academic%20Calender-(2022-2023).pdf" target='_blank' noopener noreferrer>
                                    Academic Year 2022-23 - <span className='text-bold underline'>View</span>
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/academic-calender/2021-2022/Academic%20Calender-(2021-2022).pdf" target='_blank' noopener noreferrer>
                                    Academic Year 2021-22 - <span className='text-bold underline'>View</span>
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]'>
                                <Link href="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/academic-calender/2020-2021/Academic%20Calendar-(2020-2021).pdf" target='_blank' noopener noreferrer>
                                    Academic Year 2020-21 - <span className='text-bold underline'>View</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div >
            </div >
        </>
    )
}

export default AcadamicCalender
