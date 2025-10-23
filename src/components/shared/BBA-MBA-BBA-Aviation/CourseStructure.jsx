"use client"
import React from "react"
import TabCourseStructure from "../../Tab/TabCourseStructure"

const CourseStructure = ({ programKey = "mba" }) => {
  const courseData = {
    mba: [
      {
        key: "first-year",
        title: "First Year",
        tabs: [
          {
            key: "semester-1",
            label: "SEMESTER 1",
            image: "/MBA/first-year.svg",
            courses: [
              "Economics for Managers",
              "Organizational Behavior",
              "Accounting for Managers",
              "Statistics for Management",
              "Marketing for Customer Value",
              "Legal Aspects and IPR",
              "Managerial Skills - 1",
            ],
          },
          {
            key: "semester-2",
            label: "SEMESTER 2",
            image: "/MBA/first-year.svg",
            courses: [
              "Technology for Management",
              "Management Research Methods",
              "Entrepreneurship & Ethics",
              "Human Capital Management",
              "Financial Management",
              "Quantitative Techniques",
              "Managerial Skills - 1",
            ],
          },
        ],
      },
      {
        key: "second-year",
        title: "Second Year",
        tabs: [
          {
            key: "semester-3",
            label: "SEMESTER 3",
            image: "/MBA/first-year.svg",
            courses: [
              "Strategic Management & Governance",
              "Project & Operations Management",
            ],
          },
          {
            key: "semester-4",
            label: "SEMESTER 4",
            image: "/MBA/first-year.svg",
            courses: ["International Business"],
          },
        ],
      },
      {
        key: "specialization-tracks",
        title: "Specialisation Tracks",
        tabs: [
          {
            key: "finance",
            label: "FINANCE",
            image: "/MBA/first-year.svg",
            courses: [
              { type: "subheading", text: "SEMESTER 3" },
              "Business Valuation",
              "Indian Financial System",
              "Investment Analysis",
              "Analytics using Excel",
              { type: "subheading", text: "SEMESTER 4" },
              "Strategic Financial Decision",
              "International Finance",
              "Risk & Derivatives",
              "Tableau for Data Analysis",
            ],
          },
          {
            key: "marketing",
            label: "MARKETING",
            image: "/MBA/first-year.svg",
            courses: [
              { type: "subheading", text: "SEMESTER 3" },
              "Retail & Services",
              "Consumer Behavior",
              "Rural Marketing",
              "Analytics using Excel",
              { type: "subheading", text: "SEMESTER 4" },
              "Brand Management",
              "Marketing Metrics",
              "Digital Marketing",
              "Tableau for Marketing",
            ],
          },
          {
            key: "human-resources",
            label: "HUMAN RESOURCES",
            image: "/MBA/first-year.svg",
            courses: [
              { type: "subheading", text: "SEMESTER 3" },
              "Learning and Development",
              "Team Dynamics at Work",
              "Performance Management Systems",
              "Business Analytics using Excel",
              { type: "subheading", text: "SEMESTER 4" },
              "Strategic HRM",
              "International HRM",
              "Talent and Knowledge Management",
              "Data Analysis and Visualization using Tableau",
            ],
          },
          {
            key: "business-analytics",
            label: "BUSINESS ANALYTICS",
            image: "/MBA/first-year.svg",
            courses: [
              { type: "subheading", text: "SEMESTER 3" },
              "Data Science using R and Python",
              "Advanced Statistical Methods for Business Decision Making",
              "Analytics for Decision Making",
              "Business Analytics using Excel",
              { type: "subheading", text: "SEMESTER 4" },
              "Data Visualization",
              "Business Forecasting",
              "Data Warehousing and Data Mining",
              "Data Analysis and Visualization using Tableau",
            ],
          },
          {
            key: "logistics-supply-chain",
            label: "LOGISTICS & SUPPLY CHAIN MANAGEMENT",
            image: "/MBA/first-year.svg",
            courses: [
              { type: "subheading", text: "SEMESTER 3" },
              "Inventory Management",
              "Supply Chain Management",
              "Logistics Management Systems and Practices",
              "Business Analytics using Excel",
              { type: "subheading", text: "SEMESTER 4" },
              "Supply Chain Planning and Strategies",
              "Global Procurement and Sourcing",
              "Vendor Management",
              "Data Analysis and Visualization using Tableau",
            ],
          },
        ],
      },
    ],
    bba: [
      {
        key: "first-year",
        title: "First Year",
        tabs: [
          {
            key: "semester-1",
            label: "SEMESTER 1",
            image: "/bba/first-year.svg",
            courses: [
              "Language 1 - Kannada/Additional English/Hindi/Urdu/Sanskrit/Tamil/<br/>Malayalam/Marathi/Telugu",
              "Language 2 - English",
              "Management Innovation",
              "Fundamentals of Accountancy",
              "Marketing Management",
              "Digital Fluency/Spreadsheet for Business",
              "Business organization/Office organization & Management/Tourism & Travel Management/Event Management",
            ],
          },
          {
            key: "semester-2",
            label: "SEMESTER 2",
            image: "/bba/first-year.svg",
            courses: [
              "Language 1 - Kannada/Additional English/Hindi/Urdu/Sanskrit/Tamil/<br/>Malayalam/Marathi/Telugu",
              "Language 2 - English",
              "Financial Accounting & Reporting",
              "Human Resource Management",
              "Business Environment",
              "Retail Management/Management of Non Government organizations",
              "Digital Fluency/Spreadsheet for Business or Environment Studies",
            ],
          },
        ],
      },
      {
        key: "second-year",
        title: "Second Year",
        tabs: [
          {
            key: "semester-3",
            label: "SEMESTER 3",
            image: "/bba/first-year.svg",
            courses: [
              "Language 1 - Kannada/Additional English/Hindi/Urdu/Sanskrit/Tamil/<br/>Malayalam/Marathi/Telugu",
              "Language 2 - English",
              "Elements of Cost Accounting",
              "Organizational Behavior",
              "Artificial Intelligence",
              "Sports",
              "NCC/NSS/others (if any)",
              "Rural Marketing OR Social Media Marketing",
            ],
          },
          {
            key: "semester-4",
            label: "SEMESTER 4",
            image: "/bba/first-year.svg",
            courses: [
              "Language 1 - Kannada/Additional English/Hindi/Urdu/Sanskrit/Tamil/<br/>Malayalam/Marathi/Telugu",
              "Language 2 - English",
              "Management Accounting & Financial Management (Managerial Finance and Accounting Or) Financial and Managerial Accounting Systems",
              "Business Analytics OR Indian Financial System",
              "Managerial Economics or Business Economics",
              "Constitution of India",
              "Sports",
              "NCC/NSS/others (if any)",
              "Business Leadership Skills OR Personal Health Management",
            ],
          },
        ],
      },
      {
        key: "third-year",
        title: "Third Year",
        tabs: [
          {
            key: "semester-5",
            label: "SEMESTER 5",
            image: "/bba/first-year.svg",
            courses: [
              "Production and Operations Management",
              "Income Tax-I",
              "Banking Law and Practice",
              "Elective -1 (FN1\\MK1\\HRM1\\DA1\\RM1\\LSCM1)",
              "Elective-2 (FN1\\MK1\\HRM1\\DA1\\RM1\\LSCM1)",
              "Information Technology for Business (Excel & DBMS) Digital Marketing",
              "Cyber Security/Employability skills",
            ],
          },
          {
            key: "semester-6",
            label: "SEMESTER 6",
            image: "/bba/first-year.svg",
            courses: [
              "Business Law",
              "Income Tax-II",
              "International Business",
              "Elective -1 (FN2\\MK2\\HRM2\\DA2\\RM2\\LSCM2)",
              "Elective -2 (FN2\\MK2\\HRM2\\DA2\\RM2\\LSCM2)",
              "Goods and Services Tax ERP Application",
              "Internship",
            ],
          },
        ],
      },
    ],
    "bba-aviation": [
      {
        key: "first-year",
        title: "First Year",
        tabs: [
          {
            key: "semester-1",
            label: "SEMESTER 1",
            image: "/bba/first-year.svg",
            courses: [
              "Language 1 - Kannada/Additional English/Hindi/Urdu/Sanskrit/Tamil/<br/>Malayalam/Marathi/Telugu",
              "Language 2 - English",
              "Introduction to Airline Industry",
              "Fundamentals of Accountancy",
              "Principles of Airline and Airport Management",
              "Digital Fluency/Spreadsheet for Business",
              "Air Ticketing and Fare Construction",
            ],
          },
          {
            key: "semester-2",
            label: "SEMESTER 2",
            image: "/bba/first-year.svg",
            courses: [
              "Language 1 - Kannada/Additional English/Hindi/Urdu/Sanskrit/Tamil/<br/>Malayalam/Marathi/Telugu",
              "Language 2 - English",
              "Financial Accounting & Reporting",
              "Airport Safety & Security Management",
              "Airport Operations Management",
              "Logistics & Air Cargo Management",
              "Digital Fluency/Spreadsheet for Business or Environment Studies",
            ],
          },
        ],
      },
      {
        key: "second-year",
        title: "Second Year",
        tabs: [
          {
            key: "semester-3",
            label: "SEMESTER 3",
            image: "/bba/first-year.svg",
            courses: [
              "Language 1 - Kannada/Additional English/Hindi/Urdu/Sanskrit/Tamil/<br/>Malayalam/Marathi/Telugu",
              "Language 2 - English",
              "Airline Accounting",
              "Air Traffic Control",
              "Ground Handling Operations",
              "Artificial Intelligence",
              "Airport Customs Process",
            ],
          },
          {
            key: "semester-4",
            label: "SEMESTER 4",
            image: "/bba/first-year.svg",
            courses: [
              "Language 1 - Kannada/Additional English/Hindi/Urdu/Sanskrit/Tamil/<br/>Malayalam/Marathi/Telugu",
              "Language 2 - English",
              "Elements and Methods of costing",
              "Airline Marketing",
              "Airline Finance",
              "Constitution of India",
              "Cold Chain Logistics",
            ],
          },
        ],
      },
      {
        key: "third-year",
        title: "Third Year",
        tabs: [
          {
            key: "semester-5",
            label: "SEMESTER 5",
            image: "/bba/first-year.svg",
            courses: ["Operation Research", "Income Tax Law and Practice"],
          },
          {
            key: "semester-6",
            label: "SEMESTER 6",
            image: "/bba/first-year.svg",
            courses: [
              "Entrepreneurship Management",
              "GST Law and Practice – Quantitative Mathematics",
            ],
          },
        ],
      },
    ],
  }

  const getProgramTitle = (programKey) => {
    const titles = {
      mba: "MBA Program",
      bba: "BBA Program",
      "bba-aviation": "BBA Aviation Program",
    }
    return titles[programKey] || "Program"
  }

  const getProgramDescription = (programKey) => {
    const descriptions = {
      mba: "Comprehensive two-year curriculum with specialisation options",
      bba: "Foundation program that builds strong business fundamentals and prepares students for diverse career opportunities.",
      "bba-aviation":
        "Specialised program combining business management with aviation industry knowledge for future aviation leaders.",
    }
    return descriptions[programKey] || "Program description"
  }

  const sampleCourseData = courseData[programKey] || courseData.mba

  return (
    <>
      <div className="bg-white px-4 md:px-8 lg:px-8">
        <div className="container mx-auto ">
          <h3 className="mb-2">
            <span className="mba-program-text text-4xl md:text-6xl">
              {getProgramTitle(programKey)}
            </span>{" "}
            <br />
            <span className="text-4xl md:text-6xl text-[#0C2165] playfair-300">
              Course Structure
            </span>
          </h3>
          <p className="text-sm md:text-base lg:text-lg mb-4">
            {getProgramDescription(programKey)}
          </p>
        </div>
      </div>
      <TabCourseStructure courseData={sampleCourseData} />
    </>
  )
}

export default CourseStructure
