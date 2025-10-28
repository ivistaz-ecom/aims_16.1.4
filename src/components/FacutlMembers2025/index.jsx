"use client"
import React from 'react'
import SchoolOfBusinessFaculty from './SchoolOfBusinessFaculty'
import SchoolOfFinanceCommerceFaculty from './SchoolOfFinanceCommerceFaculty'
import ScoolOfInformatioTechFacluty from './ScoolOfInformatioTechFacluty'
import SchoolOfHospitalityTourismFaculty from './SchoolOfHospitalityTourismFaculty'
import SchoolOfBusinessFacultyTable from './SchoolOfBusinessFacultyTable'
import SchoolOfCommerceFacultyTable from './SchoolOfCommerceFacultyTable'
import SchoolOfInformationTechnologyFacultyTable from './SchoolOfInformationTechnologyFacultyTable'
import SchoolOfHospitalityTourismFacultyTable from './SchoolOfHospitalityTourismFacultyTable'

const index = () => {
    return (
        <>
            <SchoolOfBusinessFaculty />
            <SchoolOfFinanceCommerceFaculty />
            <ScoolOfInformatioTechFacluty />
            <SchoolOfHospitalityTourismFaculty />
            <SchoolOfBusinessFacultyTable />
            <SchoolOfCommerceFacultyTable />
            <SchoolOfInformationTechnologyFacultyTable />
            <SchoolOfHospitalityTourismFacultyTable />
        </>
    )
}

export default index
