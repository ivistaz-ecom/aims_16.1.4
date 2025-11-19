import React from "react"

const ExaminationsHeader = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="px-4 lg:px-8 bg-[#E1F9F4]">
          <div className="container mx-auto flex flex-col items-center justify-center px-4 lg:px-0">
            <div className="text-center lg:w-[80%] py-10">
              <h5 className="text-5xl font-bold text-[#0C2165] lg:text-6xl">
                Examinations
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8 overflow-x-hidden">
        <div className="container mx-auto flex flex-col py-10 space-y-4 max-w-full">
          <div className="space-y-2">
            <h5 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C2165] break-words">
              Examinations
            </h5>
            <p className="break-words">
              We assess students through a structured, outcomes-based model that
              keeps your progress in focus.
            </p>
          </div>
          <div className="space-y-2">
            <h5 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0C2165] monser-500 break-words">
              Two-Part Evaluation System
            </h5>
            <h6 className="text-[18px] monser-600 break-words">
              Each semester is evaluated through:
            </h6>
            <ol className="list-decimal list-outside space-y-2 pl-6">
              <li className="text-[18px] monser-400 break-words">
                Continuous Internal Assessment (CIA)
              </li>
              <li className="text-[18px] monser-400 break-words">
                Semester-End University Examinations (UE)
              </li>
            </ol>
          </div>

          <div className="space-y-2">
            <h5 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0C2165] monser-500 break-words">
              Continuous Internal Assessment (CIA)
            </h5>
            <p className="break-words">
              This is an ongoing process that tracks how well you're hitting
              your academic targets. CIA is designed to measure how well
              students meet the Intended Learning Outcomes (ILOs) for each
              course.
            </p>
            <p className="break-words">
              Faculty regularly monitor performance and take corrective action
              when needed, helping you adjust your course and stay on target.
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0C2165] monser-500 break-words">
              CIA Includes:
            </h5>
            <h6 className="text-xl md:text-2xl lg:text-3xl monser-600 break-words">
              a. Formative Assessments (FA):
            </h6>
            <p className="break-words">
              These are short-term activities to assess learning progress,
              including:
            </p>
            <ul className="list-disc list-outside space-y-2 pl-6">
              <li className="text-[18px] monser-400 break-words">
                Unit/Monthly/Online Tests
              </li>
              <li className="text-[18px] monser-400 break-words">Quizzes</li>
              <li className="text-[18px] monser-400 break-words">
                Assignments & Presentations
              </li>
              <li className="text-[18px] monser-400 break-words">
                Projects & Research
              </li>
              <li className="text-[18px] monser-400 break-words">
                Case Studies
              </li>
              <li className="text-[18px] monser-400 break-words">Seminars</li>
              <li className="text-[18px] monser-400 break-words">
                Activities with professional bodies
              </li>
              <li className="text-[18px] monser-400 break-words">
                Co-curricular & extracurricular initiatives
              </li>
            </ul>
            <h6 className="text-xl md:text-2xl lg:text-3xl monser-600 break-words">
              b. Summative Assessments (SA):
            </h6>
            <p className="break-words">
              These are the sessional and pre-final examinations conducted by
              the department:
            </p>
            <ul className="list-disc list-outside space-y-2 pl-6">
              <li className="text-[18px] monser-400 break-words">
                UG Programs: Two sessional exams, class tests, and a pre-final
                exam
              </li>
              <li className="text-[18px] monser-400 break-words">
                PG Programs: Two sessional exams and/or pre-final exams
              </li>
            </ul>
            <p className="break-words">
              CIA results also form the basis of your Internal Assessment (IA)
              scores, which significantly impact your final semester results.
            </p>
            <p className="break-words">
              IA evaluation schemes are shared on departmental notice boards and
              explained during orientation sessions.
            </p>
          </div>

          <div className="space-y-2">
            <h6 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0C2165] monser-500 break-words">
              Semester-End University Examinations (UE)
            </h6>
            <p className="break-words">
              These final exams are conducted as per the Bangalore University's
              schedule and regulations.
            </p>
            <h6 className="text-xl md:text-2xl lg:text-3xl monser-600 break-words">
              Eligibility to appear for university exams is determined by the
              following criteria:
            </h6>
            <p className="break-words">
              To receive your hall ticket and appear for university exams, you
              must:
            </p>
            <ul className="list-disc list-outside space-y-2 pl-6">
              <li className="text-[18px] monser-400 break-words">
                Complete all CIA (Continuous Internal Assessment) requirements
              </li>
              <li className="text-[18px] monser-400 break-words">
                Clear all outstanding fees
              </li>
              <li className="text-[18px] monser-400 break-words">
                Avoid any form of cheating or malpractice, violations lead to
                disciplinary action
              </li>
              <li className="text-[18px] monser-400 break-words">
                Attend all class tests, sessional exams, and pre-final exams
              </li>
            </ul>

            <h6 className="text-xl md:text-2xl lg:text-3xl monser-600 break-words">
              Note: Failure to meet the above criteria may result in:
            </h6>
            <ul className="list-disc list-outside space-y-2 pl-6">
              <li className="text-[18px] monser-400 break-words">
                Denial of your hall ticket
              </li>
              <li className="text-[18px] monser-400 break-words">
                Disqualification from university examinations
              </li>
            </ul>
            <h6 className="text-xl md:text-2xl lg:text-3xl monser-600 break-words">
              Bangalore University Digital Evaluation Centre
            </h6>
            <p className="break-words">
              AIMS proudly serves as a preferred digital valuation centre for
              Bangalore University. In 2021–22, AIMS facilitated the digital
              evaluation of 1,95,397 answer scripts, earning recognition for
              excellence and efficiency.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExaminationsHeader
