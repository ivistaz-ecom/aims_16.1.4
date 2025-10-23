"use client"
import React from "react"

const CfcCurrentAssignments = () => {
  const currentAssignmentsData = [
    {
      company: "CRISIL",
      website: "www.crisil.com",
      assignments: "Due diligence for a power plant in Nigeria",
    },
    {
      company: "Viddyarth Academic Services Pvt Ltd",
      website: "www.viddyarth.com",
      assignments:
        "Work has been done for them on pro-bono basis in field of Linked In technical inputs and social media marketing",
    },
    {
      company: "Gururaj Associates",
      website: "www.gururajassociates.com",
      assignments:
        "We are assisting them in Marketing, Governance and Financial strategic advice",
    },
    {
      company: "Superseva Pvt Ltd",
      website: "www.superseva.com",
      assignments: "Consulting in Marketing Strategy and Financial Areas",
    },
    {
      company: "Green Essence",
      website: "www.greenessencestore.com",
      assignments:
        "Governance, Systems Definition, Strategic Marketing and Top Consulting work",
    },
    {
      company: "Metamorph Learning",
      website: "www.metamorphskills.com",
      assignments:
        "Development of eLearning material, Strategic Marketing and Top Consulting work",
    },
    {
      company: "Bangalore Whiteboard",
      website: "www.whiteboardindia.org",
      assignments: "Helping in Whiteboard Theory of Change working with NGO's",
    },
    {
      company: "Town Essentials Pvt Ltd",
      website: "www.towness.co.in",
      assignments: "-",
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <div className="px-4 lg:px-8 w-full">
        <div className="container mx-auto">
          <h4 className="text-2xl lg:text-3xl monser-600 text-[#0C2165] mb-6">
            Current Assignments
          </h4>

          {/* Table with scroll for mobile */}
          <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
            <table className="w-full min-w-[800px] border-collapse">
              {/* Table Head */}
              <thead className="bg-[#531675] text-white">
                <tr>
                  <th className="px-4 py-3 text-center text-sm lg:text-base monser-600 border-r border-gray-300">
                    Company
                  </th>
                  <th className="px-4 py-3 text-center text-sm lg:text-base monser-600 border-r border-gray-300">
                    Website
                  </th>
                  <th className="px-4 py-3 text-center text-sm lg:text-base monser-600">
                    Completed Assignments
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {currentAssignmentsData.map((assignment, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 transition-colors duration-200 
                    ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100`}
                  >
                    {/* Company */}
                    <td className="px-4 py-3 text-sm lg:text-base monser-500 text-[#0C2165] border-r border-gray-200 align-top bg-[#E1F9F4]">
                      {assignment.company}
                    </td>

                    {/* Website */}
                    <td className="px-4 py-3 text-sm lg:text-base monser-400 border-r border-gray-200 align-top bg-[#C7E7E0]">
                      <a
                        href={`https://${assignment.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-blue-900 underline"
                      >
                        {assignment.website}
                      </a>
                    </td>

                    {/* Assignments */}
                    <td className="px-4 py-3 text-sm lg:text-base monser-400  align-top bg-[#E1F9F4]">
                      {assignment.assignments}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CfcCurrentAssignments
