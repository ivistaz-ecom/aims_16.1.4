import React from "react";
import ArticlesPublications from "@/components/ArticlesPublications";
import SeoMetadata from "@/components/shared/Seo/SeoMetadata";

const ArticlesPublicationsPage = () => (
  <>
    <SeoMetadata
      title="Articles & Publications | Top MBA Colleges in Bangalore"
      description="Explore insights from one of the few colleges with IACBE and ACBSP equivalent accreditations in India. AIMS ranks among the Top MBA Colleges in Bangalore."
      path="/articles-publications"
      metaImage="/images/aims-logo.png"
      schemaType="EducationalOrganization"
    />
    <ArticlesPublications />
  </>
);

export default ArticlesPublicationsPage;
