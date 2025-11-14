import React from 'react'
import PlacementBanner from './Banner'
import PlacementGallery from './PlacementGallery'
import LogoSection from './LogoSection'
import FunctionSectorWise from './FunctionSectorWise'
import RecruitersBySectors from './RecruitersBySectors'
import PlacementStatsTable from './PlacementStatsTable'
const index = () => {
  return (
    <div>
      <PlacementBanner />
      <PlacementGallery />
      <LogoSection />
      <FunctionSectorWise />
      <RecruitersBySectors />
      <PlacementStatsTable />
    </div>
  )
}

export default index