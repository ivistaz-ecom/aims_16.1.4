import React from 'react'
import InfrastructuresGallery from './InfrastructuresGallery'
import Banner from './Banner'
import CampusAndEventGallery from './HostelDetailsGallery'

const index = () => {
  return (
    <div>
      <Banner />
      <CampusAndEventGallery />
    </div>
  )
}

export default index