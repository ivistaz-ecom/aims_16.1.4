import React from "react";
import Image from "next/image";
const LogoSection = () => {
  return (
    <>
      <div className="bg-[#E1F9F4] lg:py-20 py-10">
        <div className="container mx-auto flex lg:flex-row flex-col-reverse justify-center items-center gap-0 lg:space-x-20 space-x-0">
          <div className="flex lg:flex-col flex-row items-center justify-center lg:w-[30%] px-5 lg:px-0 lg:mt-0 mt-5">
            <div className="flex flex-col items-center justify-center">
              <h2 className="bg-[#FF6C02] text-white px-4 py-2 rounded-lg monser-600 lg:text-2xl text-sm text-center">
                Highest Package
              </h2>
              <Image
                src="/placement/highest-package.svg"
                alt="Highest Package"
                width={300}
                height={300}
                className="py-3 lg:mt-3 mt-0"
              />
            </div>
            <div className="flex flex-col items-center justify-center lg:mt-10">
              <h2 className="bg-[#FF6C02] text-white px-4 py-2 rounded-lg monser-600 lg:text-2xl text-sm text-center">
                Average Package
              </h2>
              <Image
                src="/placement/average-package.svg"
                alt="Average Package"
                width={300}
                height={300}
                className="py-3 lg:mt-3 mt-0"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center lg:w-1/2">
            <h2 className="bg-[#FF6C02] text-white px-4 py-2 rounded-lg monser-600 lg:text-2xl text-xl">
              Placements & Top Recruiters
            </h2>
            <Image
              src="/placement/logos.png"
              alt="Highest Package"
              width={1000}
              height={1000}
              className="py-3 w-full h-full object-cover lg:mt-5 mt-0 lg:px-0 px-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoSection;
