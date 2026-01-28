import Link from 'next/link'
import React from 'react'

const AccualAccounts = () => {
    return (
        <>
            <div>
                <div className="px-4 lg:px-8 bg-[#E1F9F4]">
                    <div className='container mx-auto flex flex-col items-center justify-center px-4 lg:px-0'>
                        <div className='text-center lg:w-[80%] py-10'>
                            <h1 className='text-4xl font-bold text-[#0C2165]'>
                                Annual Accounts
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 lg:px-8">
                <div className='container mx-auto flex flex-col py-10 space-y-4'>
                    <div>
                        <ul className='list-disc list-inside space-y-2'>
                            <li className='text-[18px] text-[#A22877] underline underline-offset-2'>
                                <Link href="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/annual-accounts/Annual%20Audit%202024-25.pdf" target='_blank' noopener noreferrer>
                                    Annual Audit 2024-2025
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877] underline underline-offset-2'>
                                <Link href="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/annual-accounts/Annual%20Audit%202023-2024.pdf" target='_blank' noopener noreferrer>
                                    Annual Audit 2023-2024
                                </Link>
                            </li>
                            <li className='text-[18px] text-[#A22877]   underline underline-offset-2'>
                                <Link href="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/annual-accounts/Annual%20Audit%202022-2023.pdf" target='_blank' noopener noreferrer>
                                    Annual Audit 2022-2023
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccualAccounts
