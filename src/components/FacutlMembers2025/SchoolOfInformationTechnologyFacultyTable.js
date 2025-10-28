"use client"
import React from "react"

const SchoolOfInformationTechnologyFacultyTable = () => {
    // Faculty data
    const facultyData = [
        { sno: 1, name: "Ms. Rekha C", gender: "Female", designation: "Associate Professor & IT Dean", department: "IT & Sciences", qualification: "B.Sc, MCA, B.Ed, M.Phil, KSET, (Ph.D)" },
        { sno: 2, name: "Dr. Govindaraj Padith T G", gender: "Male", designation: "Associate Professor", department: "IT & Sciences", qualification: "B.Sc, M.Sc, Ph.D" },
        { sno: 3, name: "Mr. S. Sunil Kumar", gender: "Male", designation: "Assistant Professor", department: "IT & Sciences", qualification: "B.Sc, MCA" },
        { sno: 4, name: "Ms. B Seethalakshmi", gender: "Female", designation: "Assistant Professor", department: "IT & Sciences", qualification: "BE, M.Sc" },
        { sno: 5, name: "Ms. Nisha D", gender: "Female", designation: "Assistant Professor", department: "IT & Sciences", qualification: "BCA, MCA" },
        { sno: 6, name: "Dr. Madhumita", gender: "Female", designation: "Assistant Professor", department: "IT & Sciences", qualification: "BCA, MCA" },
        { sno: 7, name: "Mr. Sreenivasa H V", gender: "Male", designation: "Assistant Professor", department: "IT & Sciences", qualification: "B.Sc, MCA, M.Phil, M.Tech" },
        { sno: 8, name: "Mr. Manjunatha H N", gender: "Male", designation: "Assistant Professor", department: "IT & Sciences", qualification: "B.Sc, M.Sc, B.Ed" },
        { sno: 9, name: "Ms. Chaitra M", gender: "Female", designation: "Assistant Professor", department: "IT & Sciences", qualification: "B.Sc, M.Sc" },
        { sno: 10, name: "Mr. Syed Tabrez", gender: "Male", designation: "Assistant Professor", department: "IT & Sciences", qualification: "BCA, MCA" },
        { sno: 11, name: "Ms. Bidisha Pal", gender: "Female", designation: "Assistant Professor", department: "IT & Sciences", qualification: "DEE, PDCA, AMIE, M.Tech" },
    ]

    const headers = ["S.No", "Name of the Staff", "Gender", "Designation/Position", "Department", "Qualification"]

    return (
        <div className="py-6 md:py-10 px-4 md:px-8 lg:px-8 bg-white">
            <div className="container mx-auto">
                {/* Title */}
                <h2
                    className="text-2xl md:text-4xl mb-4 monser-400 font-bold text-center"
                    style={{ color: '#0C2165' }}
                >
                    SCHOOL OF INFORMATION TECHNOLOGY
                </h2>

                {/* Academic Year */}
                <div
                    className="text-lg md:text-xl mb-6 monser-400 text-center"
                    style={{ color: '#0C2165' }}
                >
                    Academic Year: 2024 - 2025
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-[#808080]">
                        {/* Header */}
                        <thead>
                            <tr>
                                {headers.map((header, index) => (
                                    <th
                                        key={index}
                                        className={`bg-[#531675] text-white text-xs md:text-sm lg:text-[20px] py-3 px-2 md:px-3 text-left border border-[#808080] monser-600 ${index === 0 ? "rounded-tl-lg" : index === headers.length - 1 ? "rounded-tr-lg" : ""
                                            }`}
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        {/* Body */}
                        <tbody>
                            {facultyData.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="hover:bg-gray-50"
                                >
                                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-left border border-[#808080] bg-white" style={{ fontSize: '16px' }}>
                                        {row.sno}
                                    </td>
                                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-left border border-[#808080] bg-white" style={{ fontSize: '16px' }}>
                                        {row.name}
                                    </td>
                                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-left border border-[#808080] bg-white" style={{ fontSize: '16px' }}>
                                        {row.gender}
                                    </td>
                                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-left border border-[#808080] bg-white" style={{ fontSize: '16px' }}>
                                        {row.designation}
                                    </td>
                                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-left border border-[#808080] bg-white" style={{ fontSize: '16px' }}>
                                        {row.department}
                                    </td>
                                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-left border border-[#808080] bg-white" style={{ fontSize: '16px' }}>
                                        {row.qualification}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SchoolOfInformationTechnologyFacultyTable

