"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/shared/Button";

const ExaminerData = [
  {
    title: "Associate Director",
    titles: ["About  Founder", " Founder’s Message"],
    name: "Dr. Kalpana Venugopal",
    study: "BBM, MBA, MHRM, PhD",
    department: "School of Business and School of Commerce",
    email: "associate.dean@theaims.ac.in",
    image: "/academic-leadership/kalpana.png",
  },
  {
    title: "Director",
    titles: ["About  Founder", " Founder’s Message"],
    name: "Dr. Indrajit Chaudhury",
    study: "BHM, MA(HTM), PhD",
    department: "School of Hospitality and Tourism Management",
    email: "director.hospitality@theaims.ac.in",
    image: "/academic-leadership/indrajit.png",
  },
  {
    title: "Director",
    titles: ["About  Founder", " Founder’s Message"],
    name: "Ms. Rekha C",
    study: "B.Sc, MCA, B.Ed, M.Phil, KSET, (Ph.D)",
    department: "School of Information Technology",
    email: "director.it@theaims.a.cin",
    image: "/academic-leadership/rekha.png",
  },
];

const AcademicLeadershipPage = () => {
  const [activeTabs, setActiveTabs] = useState(ExaminerData.map(() => 0)); // 0 = first tab (About)
  const [showFullAbout, setShowFullAbout] = useState(
    ExaminerData.map(() => false)
  );

  const handleTabClick = (index, tabIndex) => {
    const updatedTabs = [...activeTabs];
    updatedTabs[index] = tabIndex;
    setActiveTabs(updatedTabs);
  };

  const toggleReadMore = (index) => {
    const updated = [...showFullAbout];
    updated[index] = !updated[index];
    setShowFullAbout(updated);
  };

  return (
    <section className="bg-white text-gray-800 py-10 px-6 lg:px-20 space-y-20">
      {ExaminerData.map((item, index) => (
        <div
          key={index}
          className={`container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="relative flex-shrink-0">
            <div className="relative w-64 h-64 lg:w-[370px] lg:h-[370px] flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={500}
                className="rounded-full object-cover relative z-10"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-2/3 space-y-5 text-center lg:text-left">
            <div className="text-[#000] lg:text-[36px] text-[24px] monser-500">
            {item.name}
            </div>

            <div className="-mt-5 text-[20px] md:text-[20px] lg:text-[20px] text-black !font-regular whitespace-pre-line">
                {item.study}
              </div>
            <div>
              <div className="sm:-mt-2 -mt-6 text-[20px] md:text-[20px] lg:text-[28px] text-[#0C2165] !font-semibold whitespace-pre-line">
                {item.title}
              </div>
             
              <div className="-mt-1 text-[20px] md:text-[20px] lg:text-[20px] text-black !font-regular whitespace-pre-line">
                {item.department}
              </div>
              <div className="-mt-1 text-[20px] md:text-[20px] lg:text-[20px] text-black !font-semibold whitespace-pre-line">
                <a
                  href={`mailto:${item.email}`}
                  className="text-[#A12876] underline"
                >
                  {item.email}
                </a>
              </div>
            </div>

            {/* Tabs */}
            {/* <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              {item.titles.map((tabTitle, tabIndex) => (
                <Button
                  key={tabIndex}
                  variant="placement"
                  className={`px-6 py-2 rounded-full font-medium transition ${
                    activeTabs[index] === tabIndex
                      ? "bg-[#A12876] text-black"
                      : "bg-white !text-[#A12876] border border-[#A12876] hover:bg-[#A12876] hover:!text-white"
                  }`}
                  onClick={() => handleTabClick(index, tabIndex)}
                  cursor="pointer"
                >
                  {tabTitle}
                </Button>
              ))}
            </div> */}

            {/* Content */}
            <div className="mt-4 text-left">
              {activeTabs[index] === 0 ? (
                <>
                  <p
                    className={`leading-relaxed text-base  whitespace-pre-line text-black  ${
                      !showFullAbout[index] ? "line-clamp-3" : ""
                    }`}
                  >
                    {item.about}
                  </p>
                  <button
                    className="text-black !font-semibold hover:text-[#A12876] mt-2 transition text-[18px]"
                    onClick={() => toggleReadMore(index)}
                  >
                    {showFullAbout[index] ? "" : ""}
                  </button>
                </>
              ) : (
                <p className="leading-relaxed text-base text-black whitespace-pre-line">
                  {item.message}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AcademicLeadershipPage;
