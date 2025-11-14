import Link from "next/link";
import React from "react";

const GoverningCouncilMembers = () => {
  return (
    <>
      <div>
        <div className="px-4 lg:px-8 bg-[#E1F9F4]">
          <div className="container mx-auto flex flex-col items-center justify-center px-4 lg:px-0">
            <div className="text-center lg:w-[80%] py-10">
              <h1 className="text-4xl font-bold text-[#0C2165]">
                Governing Council of AIMS Institutes
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8">
        <div className="container mx-auto flex flex-col py-10 space-y-4">
          <div className="space-y-2">
            <p className="text-lg">
              The Governing Council provides strategic direction and oversees
              academic and institutional policies to ensure excellence at AIMS.
            </p>
          </div>
          <div>
            <h4 className="text-2xl text-bold">Governing Council Members</h4>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-[18px] text-[#A22877]">
                <Link
                  href="/pdf/governing-council/2024-25.pdf"
                  target="_blank"
                  noopener
                  noreferrer
                >
                  <span className="text-bold underline">2024-25</span>
                </Link>
              </li>
              <li className="text-[18px] text-[#A22877]">
                <Link
                  href="/pdf/governing-council/2023-24.pdf"
                  target="_blank"
                  noopener
                  noreferrer
                >
                  <span className="text-bold underline">2023-24</span>
                </Link>
              </li>
              <li className="text-[18px] text-[#A22877]">
                <Link
                  href="/pdf/governing-council/2022-23.pdf"
                  target="_blank"
                  noopener
                  noreferrer
                >
                  <span className="text-bold underline">2022-23</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoverningCouncilMembers;
