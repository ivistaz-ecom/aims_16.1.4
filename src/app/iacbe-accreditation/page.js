import React from "react";
import IacbeAccreditation from "@/components/IacbeAccreditation";
import Seo from "@/components/shared/Seo/Seo";

const page = () => {
  const seoField = {
    title: "Colleges with IACBE Accreditation & MBA Exposure in India",
    description:
      "Explore accredited MBA programs with global exposure in India at AIMS, among the best business schools in Bangalore with IACBE & ACBSP equivalent accreditations.",
    path: "/iacbe-accreditation",
    metaImage: "/iacbe/banner-03.webp",
  };

  return (
    <>
      <Seo {...seoField} />
      <div>
        <IacbeAccreditation />
      </div>
    </>
  );
};

export default page;
