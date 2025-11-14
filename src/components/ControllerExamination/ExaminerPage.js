"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/shared/Button";
import Link from "next/link";

const ExaminerData = [
  {
    title: "Professor",
    titles: ["About  Founder", " Founder’s Message"],
    name: "Dr. B A Karunakara Reddy",
    study: "B.Com, M.Com, MBA, Ph.D",
    designation: "COE, AIMS Institutes.",
    image: "/controller-of-examination/karunakara.png",
  },
];

const ExaminerPage = () => {
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
    <>
      <div>
        <div className="px-4 lg:px-8 bg-[#E1F9F4]">
          <div className="container mx-auto flex flex-col items-center justify-center px-4 lg:px-0">
            <div className="text-center lg:w-[80%] py-10">
              <h1 className="text-4xl font-bold text-[#0C2165]">
                Controller of Examination
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8">
        <div className="container mx-auto flex flex-col py-10 space-y-4">
          <div className="space-y-2">
            <p className="text-lg">
              The Controller of Examination manages all examination-related
              processes, ensuring fairness, accuracy, and timely conduct of
              assessments at AIMS Institutes.
            </p>
          </div>
          <div>
            <h4 className="text-2xl text-bold">Controller of Examination</h4>
          </div>
        </div>
      </div>

      <section className="bg-white text-gray-800 pb-10 px-6 lg:px-20 space-y-20">
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


              <div>
              <div className="-mt-5 text-[20px] md:text-[20px] lg:text-[20px] text-black !font-regular whitespace-pre-line">
                {item.study}
              </div>
              <div className="mt-3 text-[20px] md:text-[20px] lg:text-[28px] text-[#0C2165] !font-semibold whitespace-pre-line">
                {item.title}
              </div>
                <div className="-mt-1 text-[20px] md:text-[20px] lg:text-[20px] text-black !font-regular whitespace-pre-line">
                  {item.designation}
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
    </>
  );
};

export default ExaminerPage;
