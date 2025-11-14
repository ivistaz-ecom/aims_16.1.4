import Image from "next/image";
import React from "react";

const FunctionSectorWise = () => {
  return (
    <>
      <div className="container mx-auto py-10 lg:px-0 px-5">
        <h2 className="text-[#8A1D64] lg:text-3xl text-2xl monser-600">
          Function wise Placements Details
        </h2>

        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="lg:w-1/2">
            <Image
              src="/placement/function-wise.svg"
              alt="Function Sector Wise"
              width={500}
              height={500}
              className="py-10"
            />
          </div>
          <div className="lg:w-1/2 px-5 lg:px-0">
            <ul className="list-disc">
              <li className="text-xl wb-marker-purple">Marketing</li>
              <li className="text-xl wb-marker-purple-secondary">Finance</li>
              <li className="text-xl wb-marker-orange">HR</li>
              <li className="text-xl wb-marker-light-pink">
                Business Analytics & Supply chain
              </li>
            </ul>
          </div>
        </div>
        <h2 className="text-[#8A1D64] lg:text-3xl text-2xl monser-600 mt-20">
          Sector wise Placements Details
        </h2>
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="lg:w-1/2">
            <Image
              src="/placement/sector-wise.svg"
              alt="Function Sector Wise"
              width={500}
              height={500}
              className="py-10"
            />
          </div>
          <div className="lg:w-1/2 px-5 lg:px-0">
            <ul className="list-disc">
              <li className="text-xl wb-marker-blue">BSFI</li>
              <li className="text-xl wb-marker-purple">EdTech</li>
              <li className="text-xl wb-marker-orange">
                E-commerce and retail
              </li>
              <li className="text-xl wb-marker-light-pink-secondary">
                IT & Technology
              </li>
              <li className="text-xl wb-marker-purple-secondary-fill">
                Consulting
              </li>
              <li className="text-xl wb-marker-light-pink">FMCG</li>
              <li className="text-xl wb-marker-purple-secondary-fill-2">
                Manufacturing & Operations
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-[#8A1D64] lg:text-3xl text-2xl monser-600">
            Profiles Offered
          </h2>
          <p className="pt-5">Senior Sales Associate</p>
          <p>Relationship Manager</p>
          <p>Assistant Manager</p>
          <p>Talent Acquisition-Trainee</p>
          <p>CSA Role</p>
          <p>Business Analyst</p>
          <p>BDE,BDA,B2B</p>
          <p>Customer Success Associate</p>
          <p>Investment Analyst</p>
        </div>
      </div>
    </>
  );
};

export default FunctionSectorWise;
