import React from "react";
import SeoMetadata from "@/components/shared/Seo/SeoMetadata";
import ActsandStatues from "@/components/ActsandStatues";

const page = () => {
  return (
    <>
      <SeoMetadata
        title="AIMS Institutes | Statutory Policies & Guidelines"
        description="Access AIMS Institutes’ official Acts and Statutes, including institutional policies, anti-ragging measures, code of conduct, and compliance guidelines for higher education."
        path="/acts-and-statutes-moa"
        metaImage="/images/aims-logo.png"
      />
      <ActsandStatues />
    </>
  );
};

export default page;
