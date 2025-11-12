import Image from 'next/image'
import React from 'react'

const EceGoals = () => {
    return (
        <>
            {/* OUR OBJECTIVES */}
            <div className='justify-center items-center mb-10 flex flex-col relative overflow-hidden'>
                <div className='px-4 lg:px-8'>
                    <div className='container mx-auto'>
                        <div className='flex flex-col bg-transparent relative z-10'>
                            {/* Our Goals */}
                            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>

                                <div className='flex flex-col order-2 md:order-1 justify-center'>
                                    <h3 className='text-start text-[32px] lg:text-[56px] playfair-300 text-[#A22877]'>
                                        Goals of AEEC
                                    </h3>
                                    <div>
                                        <ul className='list-none text-start monser-400 text-lg lg:text-[20px] flex flex-col gap-4'>
                                            <li className='flex items-start gap-3'>
                                                <span className='text-black'>•</span>
                                                <span>Build an Entrepreneurial Eco System at AIMS</span>
                                            </li>
                                            <li className='flex items-start gap-3'>
                                                <span className='text-black'>•</span>
                                                <span>Motivate, guide and inspire the younger generation in AIMS campus to become entrepreneurs</span>
                                            </li>
                                            <li className='flex items-start gap-3'>
                                                <span className='text-black'>•</span>
                                                <span>Disseminate knowledge on entrepreneurship and teaching success story of entrepreneurs</span>
                                            </li>
                                            <li className='flex items-start gap-3'>
                                                <span className='text-black'>•</span>
                                                <span>Conduct research in the field of entrepreneurship</span>
                                            </li>
                                            <li className='flex items-start gap-3'>
                                                <span className='text-black'>•</span>
                                                <span>Develop intrapreneurial skills in students to meet Industry requirements</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className='mt-4'>
                                        Whether you&apos;re launching your own venture or thinking like an innovator within a company, AEEC helps you AIM forward.
                                    </p>
                                </div>
                                <div className='flex flex-col gap-4 order-1 md:order-2'>
                                    <Image
                                        src="/entrepreneurship-excellence-centre/goals-of-aeec.webp"
                                        alt="Our Goals and Objectives"
                                        width={500}
                                        height={500}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EceGoals
