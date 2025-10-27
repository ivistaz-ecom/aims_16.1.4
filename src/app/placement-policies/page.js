import React from "react";
import PlacementPolicies from "@/components/PlacementPolicies";
import Seo from "@/components/shared/Seo/Seo";

const page = () => {
  const seoField = {
    title: "Placement Policies at AIMS Institutes Bengaluru",
    description: "Understand AIMS Institutes' placement policies. Learn about recruiter engagement, student eligibility, and guidelines for 100% placement support.",
    path: "/placement-policies",
    metaImage: "/placement-policies/banner.webp",
  };

  return (
    <>
      <Seo {...seoField} />
      <div>
        <PlacementPolicies />
      </div>
    </>
  );
};

export default page;
