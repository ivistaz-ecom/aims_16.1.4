"use client"
import { usePathname } from "next/navigation"
import Header from "./Header"
import Footer from "./Footer"
import FloatingButton from "./FloatingButton"
import LandingPageHeader from "./HeaderForLandingPage/Header"

const ConditionalLayout = ({ children }) => {
  const pathname = usePathname()

  // Check if current path is a landing page (course admissions or enquiry pages)
  const isMBACourseAdmissions = pathname === "/mba-course-admissions"
  const isBHMCourseAdmissions = pathname === "/bhm-course-admissions"
  const isMBAEnquiryNow = pathname === "/mba-enquiry-now"
  const isBHMEnquiryNow = pathname === "/bhm-enquiry-now"
  const isLandingPage =
    isMBACourseAdmissions ||
    isBHMCourseAdmissions ||
    isMBAEnquiryNow ||
    isBHMEnquiryNow

  return (
    <>
      {/* Conditional Header */}
      {isLandingPage ? <LandingPageHeader /> : <Header />}

      {/* Page Content */}
      {children}

      {/* Conditional Footer and Floating Button */}
      {!isLandingPage && (
        <>
          <Footer />
          <FloatingButton />
        </>
      )}
    </>
  )
}

export default ConditionalLayout
