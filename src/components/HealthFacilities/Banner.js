import React from 'react'
import Image from 'next/image'
import ApplicationMarquee from '@/shared/ApplicationMarquee'

const HealthFacilitiesBanner = ({ announcements, pageType = 'phd' }) => {
    return (
        <>
           <div>
        <div className="px-4 lg:px-8 bg-[#E1F9F4]">
          <div className="container mx-auto flex flex-col items-center justify-center px-4 lg:px-0">
            <div className="text-center lg:w-[80%] py-10">
              <h1 className="text-4xl font-bold text-[#0C2165]">Health Facilities</h1> 
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default HealthFacilitiesBanner
