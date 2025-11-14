import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <>
      <div className="px-4 lg:px-8">
        <div className="container mx-auto flex flex-col py-10 space-y-4">
          <div className="space-y-5">
            <p className="text-lg">
              Local Chapter for NPTEL (National Programme on Technology Enhanced
              Learning) has been established by Acharya Institute of Management
              and Sciences from January 2022, a project initiated and funded by
              Ministry of Education, Government of India. NPTEL is a joint
              initiative between IITs, IIMs and IISc to offer online courses and
              certification in humanities, basic sciences, computer science and
              management.
            </p>
            <p className="text-lg">
              This allows students to join in the NPTEL Courses and the
              certification exam through which the student gets an opportunity
              to earn a certificate from the Institutions of National Importance
              such as IIT’s, IIM’s NIT’s. The main objective of Local Chapter is
              to provide wider dissemination of the NPTEL initiatives and
              integrate MOOCs to mainstream education. The Local Chapter acts as
              an extended arm of NPTEL. Students are encouraged to enroll in the
              courses provided in SWAYAM platform under the college local
              chapter.
            </p>
            <p className="text-lg">
              This will facilitate our students and faculties to use NPTEL
              Videos and Web Contents at our campus and also avail the
              scholarships for certification exams. Some of the courses offered
              by NPTEL are leadership, financial accounting, python for data
              science, operations research, stress management, cloud computing,
              human resource development, consumer psychology, population
              studies, etc..,
            </p>
            <p className="text-lg">Instructions for Course Enrollment:</p>
          </div>
          <div>
            <h4 className="text-2xl text-bold">Governing Council Members</h4>
            <ul className="list-decimal list-outside px-5 space-y-2">
              <li className="text-[18px]">
                Visit the NPTEL course portal{" "}
                <Link
                  href="https://nptel.ac.in/"
                  target="_blank"
                  noopener
                  noreferrer
                >
                  <span className="text-bold underline text-[#A22877]">
                    https://nptel.ac.in/
                  </span>
                </Link>
              </li>
              <li className="text-[18px]">
                Choose the course you want to enroll.
              </li>
              <li className="text-[18px]">
                All registrants have to use their email id while filling their
                profile.
              </li>
              <li className="text-[18px]">
                While filling the Profile, tick &apos;Yes&apos; in Are you a
                part of an NPTEL local chapter and choose our College name
                correctly from the drop down menu.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
