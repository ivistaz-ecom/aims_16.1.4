import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="px-4 lg:px-8">
        <div className="container mx-auto flex flex-col py-10 space-y-4">
          <div>
            <h2 className="text-2xl text-bold monser-600">
              In case of any further clarification or help, Contact
            </h2>
            <ul className="list-none list-outside py-5">
              <li className="text-[18px]">
                <span className="monser-500 text-bold">Prof. Rekha C</span>
              </li>
              <li className="text-[18px]">Director- School of IT</li>
              <li className="text-[18px]">Single Point of Contact (SPoC)</li>
              <li className="text-[18px]">
                AIMS - NPTEL Local Chapter / LC ID – 4715
              </li>
              <li className="text-[18px]">
                e-mail: {""}
                <Link
                  href="mailto:nptel@theaims.ac.in"
                  target="_blank"
                  noopener
                  noreferrer
                >
                  <span className="text-bold underline text-[#A22877]">
                    nptel@theaims.ac.in
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
