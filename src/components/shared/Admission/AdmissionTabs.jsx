"use client"
import React, { useState } from "react"
import Image from "next/image"
import Button from "@/shared/Button"
import { motion, AnimatePresence } from "framer-motion"

const AdmissionTabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0)

  // Helper function to make specific text portions bold
  const renderBoldText = (text) => {
    if (typeof text !== "string") return text

    // Make specific portions bold using monser-600 class
    if (text.includes("bachelor's degree with a minimum of 60%")) {
      const parts = text.split(
        /(A recognised )(bachelor's degree with a minimum of 60%)(.*)/
      )
      return (
        <>
          {parts[1]}
          <span className="monser-600">{parts[2]}</span>
          {parts[3]}
        </>
      )
    }

    // For other text, make specific portions bold
    const parts = text.split(/(\d+ percentile & above)/)

    return parts.map((part, index) => {
      if (part.match(/\d+ percentile & above/)) {
        return (
          <span key={index} className="monser-600">
            {part}
          </span>
        )
      }
      return part
    })
  }

  return (
    <div className="py-6 md:py-10 bg-[#E1F9F4] lg:px-10 px-4">
      <div className="container mx-auto">
        {" "}
        {/* Reduced width for better centering */}
        {/* Buttons Row */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-flow-col lg:auto-cols-auto gap-1 mb-12"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(auto, max-content))",
          }}
        >
          {tabsData.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 px-4 sm:px-11 py-3 sm:py-2 transition-all duration-300 cursor-pointer w-full sm:w-auto ${
                activeTab === index
                  ? "bg-white/20 text-[#A22877] border border-black"
                  : "bg-[#A22877] text-white hover:bg-[#8B1F5F]"
              }`}
            >
              <span className="font-semibold text-base sm:text-sm md:text-[18px] monser-400 text-center sm:text-left">
                {tab.title}
              </span>
              <Image
                src={
                  activeTab === index
                    ? "/admission-process/up-arrow.svg"
                    : "/admission-process/down-arrow.svg"
                }
                alt={tab.title}
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
              />
            </button>
          ))}
        </div>
        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              type: "tween",
              ease: "easeOut",
              duration: 0.5,
            }}
            className="bg-white rounded-2xl"
          >
            <div className="px-4 md:px-10 md:py-10 lg:px-10 lg:py-10 py-6">
              {/* Heading */}
              <h5 className="text-2xl md:text-[24px] mb-6 monser-600 text-[#A22877]">
                {tabsData[activeTab].heading}
              </h5>

              {/* Description */}
              {tabsData[activeTab].description && (
                <div className="mb-6">
                  <p className="text-base md:text-lg monser-400 md:px-4 lg:px-4 px-0">
                    {tabsData[activeTab].description}
                  </p>
                </div>
              )}

              {/* MBA Admission Special Structure */}
              {tabsData[activeTab].eligibility && (
                <div className="space-y-6 md:px-4 lg:px-4 px-0">
                  {/* Eligibility Criteria */}
                  <div className="space-y-4">
                    <h6 className="text-xl md:text-[22px] monser-600 text-[#A22877]">
                      {tabsData[activeTab].eligibility.title}
                    </h6>
                    <p className="text-base md:text-lg monser-400 mb-3">
                      {tabsData[activeTab].eligibility.subtitle}
                    </p>
                    <ul className="list-disc px-4 md:pl-8 lg:px-8 font-monser-400 text-base sm:text-lg md:text-[18px] space-y-3 sm:space-y-4 md:space-y-4 leading-relaxed">
                      {tabsData[activeTab].eligibility.requirements.map(
                        (req, index) => (
                          <li key={index} className="mb-2">
                            {typeof req === "string" ? (
                              renderBoldText(req)
                            ) : (
                              <div>
                                <div className="font-medium mb-1">
                                  {req.main}
                                </div>
                                <ul className="list-disc ml-6 space-y-1">
                                  {req.sub.map((subReq, subIndex) => (
                                    <li key={subIndex} className="text-sm">
                                      {renderBoldText(subReq)}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Selection Process */}
                  <div className="space-y-4">
                    <h6 className="text-xl md:text-[22px] monser-600 text-[#A22877]">
                      {tabsData[activeTab].selection.title}
                    </h6>
                    <p className="text-base md:text-lg monser-400 mb-3">
                      {tabsData[activeTab].selection.subtitle}
                    </p>

                    {/* New steps structure */}
                    {tabsData[activeTab].selection.description && (
                      <p className="text-base md:text-lg monser-400 mb-4">
                        {tabsData[activeTab].selection.description}
                      </p>
                    )}

                    {tabsData[activeTab].selection.steps ? (
                      <div className="space-y-4">
                        {tabsData[activeTab].selection.steps.map(
                          (step, index) => (
                            <div key={index} className="space-y-2">
                              <h5 className="text-lg md:text-xl monser-600 text-[#A22877]">
                                {step.title}
                              </h5>
                              <p className="text-base md:text-lg monser-400 ml-0">
                                {step.description}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      /* Fallback for old rounds structure */
                      tabsData[activeTab].selection.rounds && (
                        <ul className="list-disc px-4 md:pl-8 lg:px-8 font-monser-400 text-base sm:text-lg md:text-[18px] space-y-3 sm:space-y-4 md:space-y-4 leading-relaxed">
                          {tabsData[activeTab].selection.rounds.map(
                            (round, index) => (
                              <li key={index} className="mb-2">
                                {round}
                              </li>
                            )
                          )}
                        </ul>
                      )
                    )}

                    {tabsData[activeTab].selection.note && (
                      <p className="text-sm md:text-base monser-400 italic bg-black/10 p-3 rounded-lg">
                        {tabsData[activeTab].selection.note}
                      </p>
                    )}

                    {/* Evaluation Framework Table */}
                    {tabsData[activeTab].selection.evaluation && (
                      <div className="space-y-4 mt-6">
                        <h5 className="text-lg md:text-xl monser-600 text-[#A22877] font-semibold">
                          {tabsData[activeTab].selection.evaluation.title}
                        </h5>
                        <div className="overflow-x-auto w-full">
                          <table className="w-full min-w-[600px] border-collapse border border-gray-300 rounded-2xl overflow-hidden">
                            <thead>
                              <tr className="bg-[#A22877] text-white">
                                <th className="border border-gray-300 px-4 py-3 text-left monser-600">
                                  Component
                                </th>
                                <th className="border border-gray-300 px-4 py-3 text-left monser-600">
                                  Weightage
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {tabsData[
                                activeTab
                              ].selection.evaluation.table.map((row, index) => (
                                <tr
                                  key={index}
                                  className={`border border-gray-300 transition-colors duration-200 bg-white hover:bg-blue-50 ${
                                    index === 0 ? "rounded-t-lg" : ""
                                  } ${
                                    index ===
                                    tabsData[activeTab].selection.evaluation
                                      .table.length -
                                      1
                                      ? "rounded-b-lg"
                                      : ""
                                  }`}
                                >
                                  <td className="border border-gray-300 px-4 py-3 monser-400">
                                    {row.component}
                                  </td>
                                  <td className="border border-gray-300 px-4 py-3 monser-400 font-semibold">
                                    {row.weightage}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* After Selection */}
                  <div className="space-y-4">
                    <h6 className="text-xl md:text-[22px] monser-600 text-[#A22877]">
                      {tabsData[activeTab].afterSelection.title}
                    </h6>
                    <ul className="list-disc px-4 md:pl-8 lg:px-8 font-monser-400 text-base sm:text-lg md:text-[18px] space-y-3 sm:space-y-4 md:space-y-4 leading-relaxed">
                      {tabsData[activeTab].afterSelection.steps.map(
                        (step, index) => (
                          <li key={index} className="mb-2">
                            {step}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}

              {/* Regular Points Structure for other tabs */}
              {tabsData[activeTab].points &&
                !tabsData[activeTab].eligibility && (
                  <div className="space-y-4 md:px-4 lg:px-4 px-0">
                    <ol className="list-decimal pl-6 space-y-3 monser-400 text-base md:text-lg lg:text-xl">
                      {tabsData[activeTab].points
                        .filter((point) => point?.trim())
                        .map((point, index) => (
                          <li key={index} className="leading-relaxed">
                            {typeof point === "string" ? (
                              point.includes("Apply Now") ? (
                                <span>
                                  {point.split("Apply Now")[0]}
                                  <a
                                    href={
                                      tabsData[activeTab].title === "PUC"
                                        ? "https://www.iesonline.co.in/aims-pu-application/"
                                        : "https://apply.theaims.ac.in/login"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#A22877] hover:text-[#8B1F5F] underline font-semibold"
                                  >
                                    Apply Now
                                  </a>
                                  {point.split("Apply Now")[1]}
                                </span>
                              ) : (
                                point
                              )
                            ) : (
                              point
                            )}
                          </li>
                        ))}
                    </ol>
                  </div>
                )}

              {/* Conclusion */}
              {tabsData[activeTab].conclusion && (
                <div className="mt-6 md:px-4 lg:px-4 px-0">
                  <p className="text-base md:text-lg monser-400">
                    {tabsData[activeTab].conclusion}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default AdmissionTabs
