import React from "react"
import AdmissionTabs from "../shared/Admission/AdmissionTabs"

const AdmissionTabsSection = () => {
  const tabsData = [
    {
      title: "MBA Admission",
      heading: "MBA Admission: A Clear Path to Your Next Step",
      description:
        "Our MBA admissions process focuses on helping you align your career goals with the right foundation. If you're applying to the MBA program (non-PGCET), you'll go through the structured AIMS Selection Process.",
      eligibility: {
        title: "Eligibility Criteria",
        subtitle: "To apply, you must have:",
        requirements: [
          "A recognised bachelor's degree with a minimum of 60% (or 45% for SC/ST/CAT-1)",
          {
            main: "A valid test score:",
            sub: [
              "CAT: 65 percentile & above",
              "MAT/XAT/CMAT/ATMA: 70 percentile & above",
            ],
          },
          "Final-year students may apply provisionally. Offer letters will require submission of final mark sheets before confirmation.",
        ],
      },
      selection: {
        title: "Selection Process",
        subtitle:
          "The MBA selection process is designed to go beyond academic merit and assess a candidate's self-awareness, communication, professional readiness, and fitment into the MBA ecosystem.",
        description: "The process includes the following stages:",
        steps: [
          {
            title: "Step 1: Application Form Submission",
            description:
              "Applicants must fill out a detailed online application form capturing personal, academic, and professional details. The form is reviewed to determine eligibility and completeness.",
          },
          {
            title: "Step 2: AI-Based Interview",
            description:
              "This interview serves as an elimination round. An automated video interview using AI tools will assess behavioral traits, emotional intelligence, and cognitive reasoning. The AI will generate a candidate profile for further review.",
          },
          {
            title: "Step 3: SWOC Presentation by the Applicant",
            description:
              "Applicants are required to submit a 3–5-minute video or give a live 3-5-minute self-assessment presentation explaining their personal SWOC (Strengths, Weaknesses, Opportunities, and Challenges). This stage assesses their self-awareness, confidence, and communication skills.",
          },
          {
            title: "Step 4: Final Panel Interview",
            description:
              "A personal interview will be conducted by industry leaders, alumni in senior roles, or recruiters. The panel will evaluate the candidate's industry readiness, leadership potential, and cultural fit for the institution.",
          },
          {
            title: "Step 5: Issue of Offer Letter",
            description:
              "On completion of Selection Rounds, selected aspirants would receive Offer letters, notifying the admission Status.",
          },
        ],
        note: "Presentations and/or Personal Interview will take place on a single day at various locations with 2-3 panel members (Faculty + Alumni + Any industry expert from those locations).",
        evaluation: {
          title: "Final Evaluation Framework",
          table: [
            { component: "Application Form + SOP", weightage: "10%" },
            { component: "AI-Based Interview", weightage: "25%" },
            { component: "SWOC Presentation", weightage: "30%" },
            { component: "Panel Interview", weightage: "35%" },
          ],
        },
      },
      afterSelection: {
        title: "Once selected:",
        steps: [
          "An Offer Letter will be sent via email",
          "Your seat will be blocked upon payment of the first fee instalment",
          "Final confirmation requires:",
          "Submission of original documents",
          "Entrance exam scores",
          "Payment of the second instalment",
        ],
      },
    },
    {
      title: "Postgraduate (Non-MBA) Admission",
      heading: "Postgraduate (Non-MBA) Admission",
      description:
        "If you're applying to any other PG program, here's a step-by-step admission process:",
      points: [
        "Submit your application online via the Apply Now link",
        "Our admissions team will contact you",
        "You may be invited for a selection round/interview, after which an offer will be extended",
      ],
      conclusion:
        "This is a streamlined process suited to both full-time students and working professionals.",
    },
    {
      title: "Undergraduate Admission",
      heading: "Undergraduate Admission",
      description: "For UG applicants, the steps are similar:",
      points: [
        "Apply online through the Apply Now portal",
        "Our admissions office will reach out",
        "If applicable, attend an interview/selection round",
        "You'll receive an offer and further instructions on confirming your seat",
      ],
      conclusion:
        "This process applies across BBA, B.Com, BCA, and other undergraduate streams.",
    },
    {
      title: "PUC",
      heading: "Pre-University (PU) Admission",
      description:
        "Students seeking PU admission at AIMS will follow the same online process:",
      points: [
        "Submit your application via Apply Now",
        "Our team will get in touch",
        "Appear for an interview, if required",
      ],
      conclusion:
        "PU programs at AIMS are structured to offer a smooth transition into your future undergraduate goals.",
    },
  ]

  return <AdmissionTabs tabsData={tabsData} />
}

export default AdmissionTabsSection
