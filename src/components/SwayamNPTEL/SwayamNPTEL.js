import Image from "next/image";
import Link from "next/link";
import React from "react";

const SwayamNPTEL = () => {
  return (
    <>
      <div>
        <div className="px-4 lg:px-8 bg-[#E1F9F4]">
          <div className="container mx-auto flex flex-col items-center justify-center px-4 lg:px-0">
            <div className="text-center lg:w-[80%] py-10">
              <h1 className="text-4xl font-bold text-[#0C2165]">
                Swayam NPTEL
              </h1>

              <div className="flex items-center justify-center">
                <Image
                  src="/swayam-nptel/logo.svg"
                  alt="Swayam NPTEL"
                  width={300}
                  height={300}
                />
              </div>
              <h2 className="text-3xl font-bold text-[#000] monser-500 mt-5">
                Local Chapter - 4715
              </h2>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default SwayamNPTEL;
