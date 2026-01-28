import React from "react";

const PublicDisclosure = () => {
  return (
    <>
      <div className="lg:px-8 px-4">
        <div className="container mx-auto lg:px-0 px-4">
          <h1 className="text-[#002561]">
            Public Disclosures of <br className="lg:block hidden" /> Student
            Achievements
          </h1>

          <p className="lg:w-[75%] w-full">
            <ul className="list-disc px-5">
              <li>
                Public Disclosures of Student Achievements UG (2021-24); PG
                (2022-24); PhD (2020-24) -{" "}
                <a
                  target="_blank"
                  href="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/iacbe/Public-Disclosure-of-Student-Achievement-+2024.pdf"
                  className="text-[#002561] underline"
                >
                  View
                </a>
              </li>
              <li className="py-3">
                Public Disclosures of Student Achievements UG (2020-23); PG
                (2021-23); PhD (2019-23) -{" "}
                <a
                  target="_blank"
                  href="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/iacbe/Public-Disclosure-of-Student-Achievement+2022-23.pdf"
                  className="text-[#002561] underline"
                >
                  View
                </a>
              </li>
            </ul>
          </p>
          <h1 className="text-[#002561] pt-7">
            Public Notification of <br className="lg:block hidden" />{" "}
            Accreditation by IACBE, USA
          </h1>
          <div>
            <p className="lg:w-[75%] w-full pb-10">
              <ul className="list-disc px-5">
                <li>
                  AIMS School of Business at AIMS Institutes has received
                  specialised accreditation for its business programs through
                  the International Accreditation Council for Business Education
                  (IACBE) located at 11969, Quivira Road, Suite 300, Overland
                  Park, KS 66213 USA.
                </li>
                <li className="py-3">
                  For a listing of accredited programs,{" "}
                  <a
                    target="_blank"
                    href="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/iacbe/IACBE+Member+Status+Information+-+AIMSInstitute.pdf"
                    className="text-[#002561] underline"
                  >
                    Click Here.
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicDisclosure;
