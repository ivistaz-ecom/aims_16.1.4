"use client"
import React, { useState } from "react"
import Image from "next/image"

const PreUniversityTab = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="py-16 bg-[#E1F9F4] lg:px-8 px-4">
      <div className="container mx-auto">
        <div className="mx-auto">

          {/* Buttons Row */}
          <div className="flex flex-wrap justify-center gap-1 mb-12">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-3 px-10 py-2 transition-all duration-300 ${activeTab === index
                    ? "bg-white/20 text-[#A22877] border border-black"
                    : "bg-[#A22877] text-white hover:bg-[#8B1F5F]"
                  }`}
              >
                <span className="font-semibold text-sm md:text-[18px] monser-400">
                  {tab.title}
                </span>
                <Image
                  src={
                    activeTab === index
                      ? "/admission-process/up-arrow.svg"
                      : "/admission-process/down-arrow.svg"
                  }
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-2xl p-8 mx-auto">
            <div>
              {/* Heading */}
              {tabsData[activeTab].heading && (
                <h5 className="text-2xl md:text-[24px] mb-2 monser-600 text-[#A22877]">
                  {tabsData[activeTab].heading}
                </h5>
              )}

              {/* Sub Heading */}
              {tabsData[activeTab].subHeading && (
                <div className="mb-6 space-y-3">
                  {Array.isArray(tabsData[activeTab].subHeading) ? (
                    tabsData[activeTab].subHeading.map((line, i) => (
                      <h6
                        key={i}
                        className="text-lg md:text-xl monser-500 text-gray-700"
                        dangerouslySetInnerHTML={{ __html: line }}
                      />
                    ))
                  ) : (
                    <h6
                      className="text-lg md:text-xl monser-500 text-gray-700"
                      dangerouslySetInnerHTML={{ __html: tabsData[activeTab].subHeading }}
                    />
                  )}
                </div>
              )}


              {/* Point Groups */}
              {tabsData[activeTab].pointGroups?.length > 0 && (
                <div className="space-y-6 monser-400">
                  {tabsData[activeTab].pointGroups.map((group, gIndex) => (
                    <div key={gIndex}>
                      {/* Group Heading */}
                      {group.heading && (
                        <h6 className="text-xl font-semibold text-gray-800 mb-3" style={{ fontWeight: "500" }}>
                          {group.heading}
                        </h6>
                      )}

                      {/* Points List */}
                      <div className="space-y-3">
                        {group.points
                          .filter(point => point?.trim())
                          .map((point, pIndex) => {
                            // Check if point should have a bullet
                            const isBreakOrHtmlBlock =
                              /^<br\s*\/?>$/i.test(point.trim()) ||
                              point.trim().startsWith("<br")

                            return (
                              <div key={pIndex}>
                                {isBreakOrHtmlBlock ? (
                                  // Render without bullet
                                  <div
                                    className="text-[22px] leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: point }}
                                  />
                                ) : (
                                  // Render with bullet
                                  <div className="flex items-start space-x-3 text-[20px]">
                                    <span className="text-3xl leading-[1]">•</span>
                                    <p
                                      className="text-[22px] leading-relaxed"
                                      dangerouslySetInnerHTML={{ __html: point }}
                                    />
                                  </div>
                                )}
                              </div>
                            )
                          })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Conclusion */}
              {tabsData[activeTab].conclusion && (
                <div className="mt-6 space-y-3">
                  {Array.isArray(tabsData[activeTab].conclusion) ? (
                    tabsData[activeTab].conclusion.map((line, i) => (
                      <p
                        key={i}
                        className="text-base md:text-lg monser-400"
                        dangerouslySetInnerHTML={{ __html: line }}
                      />
                    ))
                  ) : (
                    <p
                      className="text-base md:text-lg monser-400"
                      dangerouslySetInnerHTML={{
                        __html: tabsData[activeTab].conclusion,
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreUniversityTab
