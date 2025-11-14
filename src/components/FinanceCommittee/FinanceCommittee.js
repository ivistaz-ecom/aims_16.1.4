import Link from "next/link";
import React from "react";

const FinanceCommittee = () => {
  return (
    <>
      <div>
        <div className="px-4 lg:px-8 bg-[#E1F9F4]">
          <div className="container mx-auto flex flex-col items-center justify-center px-4 lg:px-0">
            <div className="text-center lg:w-[80%] py-10">
              <h1 className="text-4xl font-bold text-[#0C2165]">
                Finance Committee
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8">
        <div className="container mx-auto flex flex-col py-10 space-y-4">
          <div className="space-y-2">
            <p className="text-lg">
              The Finance Committee oversees budgeting, financial planning, and
              expenditure to maintain transparency and efficient resource
              management
            </p>
          </div>
          <div>
            {/* <h4 className="text-2xl text-bold">Finance Committee</h4> */}
            <ul className="list-disc list-inside space-y-2">
              <li className="text-[18px] text-[#A22877]">
                <Link
                  href="/pdf/finance-committee/Finance-committee.pdf"
                  target="_blank"
                  noopener
                  noreferrer
                >
                  Finance Committee -{" "}
                  <span className="text-bold underline">View</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinanceCommittee;
