import UniversityRankHolders from "@/components/UniversityRankHolders";
import React from "react";
import Seo from "@/components/shared/Seo/Seo";

const page = () => {
  const seoField = {
    title: "Top Rank Holders | Best Business School in Bangalore",
    description:
      "Among leading management colleges in India for career growth, AIMS shines as the Best business school in Bangalore with strong campus placements for MBA achievers.",
    path: "/student-university-rank-holders",
    metaImage: "/university-rank-holders/banner-01.webp",
  };

  return (
    <>
      <Seo {...seoField} />
      <div>
        <UniversityRankHolders />
      </div>
    </>
  );
};

export default page;
