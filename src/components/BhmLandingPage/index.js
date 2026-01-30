import React from "react"
import HeroBanner from "./HeroBanner"
import HeroEnquiryForm from "./HeroEnquiryForm"
import AccreditationSection from "./AccreditationSection"
import ProgramOverview from "./ProgramOverview"
import PlacementHighlights from "./PlacementHighlights"
import ValueAddedPrograms from "./ValueAddedPrograms"
import ExclusiveAccess from "./ExclusiveAccess"
import EligibilityAndDates from "./EligibilityAndDates"
import FastTrackCareer from "./FastTrackCareer"
import StudentTestimonial from "./StudentTestimonial"

const index = () => {
  return (
    <div>
      <HeroBanner />
      <section
        id="mobile-enquiry-section"
        className="block lg:hidden px-4 pt-6 pb-4"
      >
        <HeroEnquiryForm includeId={false} />
      </section>
      {/* <AccreditationSection /> */}
      <ProgramOverview />
      <ExclusiveAccess />
      <PlacementHighlights />
      <ValueAddedPrograms />
      <EligibilityAndDates />
      <StudentTestimonial />
      <FastTrackCareer />
    </div>
  )
}

export default index
