"use client"
import React, { lazy, Suspense } from 'react'
import SchoolOfBusinessFaculty from './SchoolOfBusinessFaculty'

// Lazy load components that are below the fold to improve LCP
const SchoolOfFinanceCommerceFaculty = lazy(() => import('./SchoolOfFinanceCommerceFaculty'))
const ScoolOfInformatioTechFacluty = lazy(() => import('./ScoolOfInformatioTechFacluty'))
const SchoolOfHospitalityTourismFaculty = lazy(() => import('./SchoolOfHospitalityTourismFaculty'))
const SchoolOfBusinessFacultyTable = lazy(() => import('./SchoolOfBusinessFacultyTable'))
const SchoolOfCommerceFacultyTable = lazy(() => import('./SchoolOfCommerceFacultyTable'))
const SchoolOfInformationTechnologyFacultyTable = lazy(() => import('./SchoolOfInformationTechnologyFacultyTable'))
const SchoolOfHospitalityTourismFacultyTable = lazy(() => import('./SchoolOfHospitalityTourismFacultyTable'))

// Loading fallback component
const SectionLoader = () => (
    <div className="flex items-center justify-center py-16">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#0C2165]"></div>
    </div>
)

const index = () => {
    return (
        <>
            {/* First component loads immediately - critical for LCP */}
            <SchoolOfBusinessFaculty />
            
            {/* Lazy loaded components with Suspense boundaries */}
            <Suspense fallback={<SectionLoader />}>
                <SchoolOfFinanceCommerceFaculty />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <ScoolOfInformatioTechFacluty />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <SchoolOfHospitalityTourismFaculty />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <SchoolOfBusinessFacultyTable />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <SchoolOfCommerceFacultyTable />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <SchoolOfInformationTechnologyFacultyTable />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <SchoolOfHospitalityTourismFacultyTable />
            </Suspense>
        </>
    )
}

export default index
