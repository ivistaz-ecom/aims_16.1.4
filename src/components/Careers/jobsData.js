// Utility function to generate slug from title
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// Job data with full descriptions
export const academicJobsData = [
  {
    id: 1,
    title: "Guest Faculty – MBA Program",
    slug: "guest-faculty-mba-program",
    department: "School of Business",
    experience: "2-5 years experience",
    location: "Bengaluru",
    institution: "AIMS Institutes, Bengaluru",
    summary: {
      type: "box",
      content:
        "AIMS Institutes invites applications for dynamic and qualified Guest Faculty members to teach core and elective courses in the MBA program. The faculty will be responsible for delivering high-quality academic instruction, engaging students through experiential learning, and contributing to the overall development of the program.",
    },
    sections: [
      {
        type: "heading",
        title: "Key Responsibilities:",
        items: [
          "Deliver lectures, tutorials, and case-based learning sessions for the assigned subject(s).",
          "Prepare and update course materials, lesson plans, and evaluation methods as per the MBA curriculum.",
          "Conduct assessments, quizzes, and examinations to evaluate student learning outcomes.",
          "Encourage interactive learning through projects, simulations, and group discussions.",
          "Provide academic guidance and mentoring to students.",
          "Collaborate with the program coordinator and other faculty members to ensure academic quality and consistency.",
          "Stay updated with current trends, practices, and research in the respective subject areas.",
        ],
      },
      {
        type: "heading",
        title: "Subject-Specific Expectations as per BU:",
        items: [
          "Legal Aspects and Intellectual Property Rights",
          "Project and Operations Management",
          "Team Dynamics at Work",
        ],
      },
      {
        type: "heading",
        title: "Qualifications & Experience:",
        items: [
          {
            bold: "Educational Qualification:",
            text: "MBA / PhD or equivalent in Management or related discipline from a recognized university.",
          },
          {
            bold: "Experience:",
            text: "Minimum 2-5 years of teaching or relevant industry experience in the respective subject area.",
          },
          "Candidates with prior teaching experience in MBA programs will be preferred.",
        ],
      },
      {
        type: "heading",
        title: "Skills & Attributes:",
        items: [
          "Strong communication and presentation skills.",
          "Updated knowledge in subject area and current industry practices.",
          "Ability to engage students and promote critical thinking.",
          "Commitment to academic excellence and continuous improvement.",
        ],
      },
    ],
    applicationEmail: "hr@theaims.ac.in",
  },
  {
    id: 2,
    title: "IQAC Manager",
    slug: "iqac-manager",
    department: "Internal Quality Assurance Cell (IQAC)",
    experience: "Minimum 5 years experience in academic quality",
    location: "Bengaluru",
    institution: "AIMS Institutes, Peenya, Bengaluru",
    summary: {
      type: "box",
      content:
        "The IQAC Manager plays a pivotal role in ensuring and enhancing the quality standards of academic and administrative processes at AIMS Institutes. This role focuses on planning, coordinating, and monitoring quality assurance and accreditation-related activities as per NAAC, NBA, and other regulatory requirements. The IQAC Manager works closely with the Principal, Deans, Heads of Departments, and faculty to implement institutional quality initiatives and sustain continuous improvement aligned with Outcome-Based Education (OBE) and institutional vision.",
    },
    sections: [
      {
        type: "heading",
        title: "Key Responsibilities:",
        items: [
          {
            parts: [
              "Develop, implement, and monitor ",
              {
                bold: "IQAC policies, systems, and quality assurance frameworks",
              },
              " as per NAAC guidelines.",
            ],
          },
          {
            parts: [
              "Coordinate ",
              { bold: "internal and external quality audits" },
              ", including preparation and submission of AQAR, SSR, and other accreditation reports.",
            ],
          },
          {
            parts: [
              "Facilitate the implementation of ",
              { bold: "Outcome-Based Education (OBE)" },
              " processes and support departments in defining Program Outcomes (POs), Course Outcomes (COs), and mapping mechanisms.",
            ],
          },
          {
            parts: [
              "Collaborate with academic and administrative units to ensure ",
              { bold: "compliance with regulatory bodies" },
              " such as UGC, AICTE, NAAC, and university norms.",
            ],
          },
          "Maintain documentation of all quality initiatives, best practices, and institutional performance indicators.",
          "Monitor and analyze academic data and performance metrics to drive evidence-based improvements.",
          {
            parts: [
              "Organize and conduct ",
              {
                bold: "workshops, training programs, and quality awareness sessions",
              },
              " for faculty and staff.",
            ],
          },
          "Prepare and maintain institutional data required for accreditation, audits, and rankings (NIRF, AISHE, etc.).",
          {
            parts: [
              "Liaise with the ",
              { bold: "Head of Institution and IQAC Committee" },
              " to plan and execute strategic quality enhancement measures.",
            ],
          },
          "Promote a culture of continuous improvement, innovation, and accountability within the institution.",
          "Support the compilation of reports, minutes, and annual quality plans for IQAC meetings.",
          "Coordinate with external experts, stakeholders, and auditors during quality assessments and inspections.",
        ],
      },
      {
        type: "heading",
        title: "Required Qualifications:",
        items: [
          {
            bold: "Educational Qualification:",
            text: "Master's Degree in any discipline (preferably Management, Education, or related field).",
          },
          {
            parts: [
              { bold: "Experience:" },
              " Minimum ",
              { bold: "5 years of experience" },
              " in academic administration or quality assurance within higher education.",
            ],
          },
          {
            parts: [
              "Strong understanding of ",
              { bold: "NAAC processes" },
              ", ",
              { bold: "OBE framework" },
              ", and ",
              { bold: "accreditation standards" },
              ".",
            ],
          },
          {
            parts: [
              "Experience in ",
              { bold: "documentation" },
              ", ",
              { bold: "report preparation" },
              ", and ",
              { bold: "data management" },
              " for quality and accreditation purposes.",
            ],
          },
          "Excellent organizational, communication, and stakeholder coordination skills.",
          "Proven ability to manage multiple tasks, deadlines, and quality improvement projects.",
          "Proficiency in MS Office, Google Workspace, and data management tools.",
          "Certifications or training in quality management, NAAC/OBE, or institutional assessment will be an advantage.",
        ],
      },
      {
        type: "heading",
        title: "Preferred Skills:",
        items: [
          {
            parts: [
              "Experience in ",
              { bold: "OBE implementation" },
              " and ",
              { bold: "NAAC accreditation cycles" },
              ".",
            ],
          },
          "Analytical ability to interpret academic data and identify improvement areas.",
          "Strong interpersonal skills with the ability to collaborate across departments.",
          "Commitment to institutional excellence and continuous learning.",
        ],
      },
    ],
    applicationEmail: "hr@theaims.ac.in",
  },
  {
    id: 3,
    title: "Faculty — Human Resource Management & Business Law",
    slug: "faculty-human-resource-business-law",
    department: "School of Business",
    experience: "2-5 years experience",
    location: "Bengaluru",
    institution: "AIMS Institutes, Peenya, Bengaluru",
    summary: {
      type: "box",
      content:
        "AIMS Institutes, Peenya, Bengaluru, is a premier institution dedicated to excellence in education, research, and innovation. We nurture future-ready professionals by blending academic rigor with practical exposure, driven by a commitment to quality and institutional values.",
    },
    sections: [
      {
        type: "heading",
        title: "Position Overview:",
        items: [
          {
            parts: [
              "We are inviting applications for a ",
              {
                bold: "Faculty position in Human Resource Management and Business Law",
              },
              ". The ideal candidate will possess strong academic credentials, industry insight, and experience in implementing ",
              { bold: "Outcome-Based Education (OBE)" },
              " and ",
              { bold: "NAAC quality assurance frameworks" },
              ".",
            ],
          },
        ],
      },
      {
        type: "heading",
        title: "Key Responsibilities:",
        items: [
          {
            parts: [
              "Deliver lectures and tutorials in ",
              { bold: "Human Resource Management" },
              " and ",
              { bold: "Business Law" },
              " for undergraduate and postgraduate programs.",
            ],
          },
          {
            parts: [
              "Design, develop, and review ",
              { bold: "Outcome-Based Education (OBE)" },
              " aligned course content, lesson plans, and assessments.",
            ],
          },
          {
            parts: [
              "Participate actively in ",
              { bold: "NAAC documentation" },
              ", quality audits, and institutional accreditation processes.",
            ],
          },
          "Mentor and guide students in academics, projects, and career progression.",
          {
            parts: [
              "Engage in ",
              { bold: "research, publications, and academic development" },
              " initiatives.",
            ],
          },
          "Collaborate with faculty teams to enhance the quality and relevance of the curriculum.",
          "Uphold institutional standards of discipline, integrity, and continuous improvement.",
        ],
      },
      {
        type: "heading",
        title: "Educational Qualification:",
        items: [
          {
            parts: [
              { bold: "Mandatory:" },
              " Master's Degree in ",
              { bold: "Business Law (MBL)" },
              " from a recognized university.",
            ],
          },
          {
            parts: [
              { bold: "Preferred:" },
              " Additional qualification in ",
              { bold: "Human Resource Management" },
              " or ",
              { bold: "Management Studies" },
              ".",
            ],
          },
          {
            parts: [{ bold: "Desirable:" }, " Ph.D. (awarded or pursuing)."],
          },
        ],
      },
      {
        type: "heading",
        title: "Experience:",
        items: [
          {
            parts: [
              {bold:"2–5 years"}, 
              " of relevant teaching experience in ",
              { bold: "HR and Business Law" },
              " at the undergraduate or postgraduate level.",
            ],
          },
          {
            parts: [
              "Hands-on experience with ",
              { bold: "Outcome-Based Education (OBE) frameworks" },
              " and ",
              { bold: "NAAC accreditation processes" },
              " is ",
              {bold:"mandatory."},
            ],
          },
          "Exposure to HR or corporate legal compliance in industry will be an added advantage.",
        ],
      },
      {
        type: "heading",
        title: "Skills & Attributes:",
        items: [
          {
            parts: [
              "Strong subject expertise in HR, Labour Laws, and Business Law."
              
            ],
          },
          {
            parts: [
              "Proven ability to integrate ",
              { bold: "OBE" },
              " and ",
              { bold: "quality assurance standards" },
              " in teaching.",
            ],
          },
          "Excellent communication, presentation, and mentoring skills.",
          "Research-oriented mindset with academic publications preferred.",
          "Collaborative and committed to institutional excellence.",
          "Immediate joiners preferred.",
        ],
      },
    ],
    applicationEmail: "hr@theaims.ac.in",
  },
  {
    id: 4,
    title: "Assistant Professor – Information Technology (MCA & BCA)",
    slug: "assistant-professor-information-technology-mca-bca",
    department: "School of Information Technology",
    experience: "2-5 years experience",
    location: "Bengaluru",
    institution: "AIMS Institutes, Peenya, Bengaluru",
    summary: {
      type: "box",
      content:
        "AIMS Institutes, Peenya, Bengaluru, is a premier educational institution dedicated to academic excellence, research, and innovation. Our vision is to nurture professionals equipped with the technical competence, ethical foundation, and leadership skills to thrive in a dynamic digital world.",
    },
    sections: [
      {
        type: "heading",
        title: "Position Overview:",
        items: [
          {
            parts: [
              "We are seeking a qualified and dynamic ",
              { bold: "Assistant Professor in Information Technology" },
              " to teach courses in ",
              { bold: "MCA and BCA programs" },
              ". The ideal candidate should possess strong subject expertise, research orientation, and hands-on experience with ",
              { bold: "Outcome-Based Education (OBE)" },
              " and ",
              { bold: "NAAC quality assurance processes" },
              ".",
            ],
          },
        ],
      },
      {
        type: "heading",
        title: "Key Responsibilities:",
        items: [
          {
            parts: [
              "Deliver engaging lectures and practical sessions in ",
              { bold: "Information Technology" },
              ", ",
              { bold: "Computer Applications" },
              ", and related subjects for ",
              { bold: "MCA & BCA programs" },
              ".",
            ],
          },
          {
            parts: [
              "Design and implement ",
              { bold: "Outcome-Based Education (OBE)" },
              "-aligned course content, lesson plans, and assessments.",
            ],
          },
          {
            parts: [
              "Contribute actively to ",
              { bold: "NAAC documentation" },
              ", departmental audits, and institutional quality initiatives.",
            ],
          },
          "Guide students in academic projects, internships, and research activities.",
          "Stay updated with emerging technologies, tools, and pedagogical trends.",
          {
            parts: [
              "Engage in academic research, publications, and professional development activities.",
            ],
          },
          "Support departmental events, seminars, and collaborative initiatives.",
        ],
      },
      {
        type: "heading",
        title: "Educational Qualification:",
        items: [
          {
            parts: [
              { bold: "Mandatory:" },
              " Master's Degree in ",
              { bold: "Computer Applications (MCA)" },
              " or ",
              { bold: "Information Technology/Computer Science" },
              " from a recognized university and ",
              { bold: "Ph.D. (awarded or pursuing)" },
              " in a relevant discipline.",
            ],
          },
          {
            parts: [
              "Certifications in emerging technologies (",
              { bold: "AI" },
              ", ",
              { bold: "ML" },
              ", ",
              { bold: "Cloud" },
              ", ",
              { bold: "Cybersecurity" },
              ", etc.) will be an added advantage.",
            ],
          },
        ],
      },
      {
        type: "heading",
        title: "Experience:",
        items: [
          {
            parts: [
              "Minimum ",
              { bold: "2–5 years "},
              "of teaching experience",
              " at the undergraduate or postgraduate level.",
            ],
          },
          {
            parts: [
              "Proven experience in implementing ",
              { bold: "Outcome-Based Education (OBE)" },
              " and contributing to ",
              { bold: "NAAC accreditation processes" },
              " is ",
              {bold:"mandatory."},
            ],
          },
          "Exposure to IT project development, software training, or industry collaboration will be preferred.",
        ],
      },
      {
        type: "heading",
        title: "Skills & Attributes:",
        items: [
          {
            parts: [
              "Strong knowledge of ",
              { bold: "programming languages" },
              ", ",
              { bold: "databases" },
              ", ",
              { bold: "web technologies" },
              ", and ",
              { bold: "software development methodologies" },
              ".",
            ],
          },
          {
            parts: [
              "Familiarity with ",
              { bold: "OBE frameworks" },
              " and ",
              { bold: "academic quality assurance" },
              ".",
            ],
          },
          "Excellent communication and classroom management skills.",
          "Research aptitude and publication record desirable.",
          "Commitment to teamwork, innovation, and continuous improvement.",
        ],
      },
    ],
    applicationEmail: "hr@theaims.ac.in",
  },
]

export const nonTeachingJobsData = [
  {
    id: 1,
    title: "Placement Manager/Officer",
    slug: "placement-manager-officer",
    department: "Placement & Corporate Relations",
    experience: "7-12 years experience",
    location: "Bengaluru",
    institution: "AIMS Institutes, Bengaluru",
    summary: {
      type: "box",
      content:
        "AIMS Institutes is seeking a highly networked and result-oriented Placement Manager to lead student placement and internship initiatives across multiple schools including Business, IT, Hotel Management (BHM), and Commerce. The ideal candidate will have strong industry connects, proven experience in driving campus recruitment, and the ability to individually contribute towards building corporate relations, securing internships, and ensuring successful student placements.",
    },
    sections: [
      {
        type: "heading",
        title: "Placement & Internship Coordination:",
        items: [
          "Develop and implement effective strategies for student placements and internships across all schools.",
          "Secure opportunities with top companies, corporates, startups, and industry leaders.",
          "Organize campus recruitment drives, job fairs, and internship programs.",
          "Monitor and track student placement records, offer letters, and internship completion.",
        ],
      },
      {
        type: "heading",
        title: "Industry Networking & Corporate Relations:",
        items: [
          "Leverage personal and professional networks to create strong industry partnerships.",
          "Establish and maintain long-term relationships with HR leaders, recruiters, and industry bodies.",
          "Conduct regular corporate visits, industry meets, and networking events to enhance employer engagement.",
        ],
      },
      {
        type: "heading",
        title: "Student Development & Training:",
        items: [
          "Collaborate with faculty and trainers to identify industry-specific skill requirements.",
          "Organize workshops, mock interviews, resume-building sessions, and soft-skills training.",
          "Guide students in career counseling, interview preparation, and industry readiness.",
        ],
      },
      {
        type: "heading",
        title: "Institutional Branding:",
        items: [
          "Promote AIMS Institutes as a preferred destination for talent among corporate partners.",
          "Ensure high visibility of the institute's programs and student competencies to recruiters.",
          "Collaborate with marketing and academic teams for employer branding initiatives.",
        ],
      },
      {
        type: "heading",
        title: "Reporting & Compliance:",
        items: [
          "Maintain placement statistics, dashboards, and reports for management review.",
          "Ensure compliance with institutional policies and placement guidelines.",
          "Provide insights on market trends and emerging industry needs.",
        ],
      },
      {
        type: "heading",
        title: "Qualifications & Experience:",
        items: [
          "Master's degree in Business Administration, HR, or related field.",
          {
            parts: [
              "7–12 years of experience in ",
              { bold: "placement" },
              ", ",
              { bold: "corporate relations" },
              ", or ",
              { bold: "talent acquisition" },
              " roles.",
            ],
          },
          "Proven track record of student placements and industry tie-ups in education sector.",
          {
            parts: [
              "Excellent corporate network across ",
              { bold: "Business" },
              ", ",
              { bold: "IT" },
              ", ",
              { bold: "Hospitality" },
              ", and ",
              { bold: "Commerce" },
              " sectors.",
            ],
          },
          "Strong negotiation, relationship-building, and presentation skills.",
        ],
      },
      {
        type: "heading",
        title: "Key Competencies:",
        items: [
          "Highly proactive, target-driven, and result-oriented.",
          "Excellent communication and networking abilities.",
          "Strong organizational and event-management skills.",
          "Ability to work independently as well as in collaboration with academic departments.",
          "Passion for student success and employability.",
        ],
      },
    ],
    applicationEmail: "hr@theaims.ac.in",
  },
  {
    id: 2,
    title: "Placement Executive",
    slug: "placement-executive",
    department: "C & PR",
    experience: "2-5 years experience",
    location: "Bengaluru",
    institution: "AIMS Institutes, Peenya, Bengaluru",
    summary: {
      type: "box",
      content:
        "The Placement Executive at AIMS Institutes plays a key role in building and maintaining strong industry connections to facilitate student placements, internships, and corporate engagements. The position requires an energetic and result-oriented individual with excellent communication skills, an understanding of the education sector, and a strong professional network across industries.",
    },
    sections: [
      {
        type: "heading",
        title: "Key Responsibilities:",
        items: [
          {
            parts: [
              "Develop and strengthen ",
              { bold: "industry linkages" },
              " and ",
              { bold: "corporate relations" },
              " to secure placements and internships for students.",
            ],
          },
          "Coordinate and manage campus recruitment drives, interviews, and employer interactions.",
          "Identify potential recruiters and expand the institute's placement network across diverse sectors.",
          "Maintain regular communication with companies, HR professionals, and industry leaders for long-term engagement.",
          {
            parts: [
              "Collaborate with academic departments to align ",
              { bold: "student skills" },
              " with ",
              { bold: "market and industry requirements" },
              ".",
            ],
          },
          "Assist in organizing training programs, soft skills workshops, and pre-placement talks to enhance student employability.",
          "Track and maintain placement records, offer letters, and performance analytics of students.",
          "Support in designing and executing strategies for career guidance, internship mapping, and industry exposure programs.",
          "Represent AIMS Institutes at external events, job fairs, and networking forums to promote the institution's brand.",
          "Coordinate with alumni for referrals, mentorship programs, and collaborative opportunities.",
        ],
      },
      {
        type: "heading",
        title: "Required Qualifications:",
        items: [
          "Bachelor's or Master's Degree in Management, HR, Marketing, or any related discipline.",
          {
            parts: [
              "Minimum ",
              { bold: "2–5 years of experience" },
              " in placement, corporate relations, or career services (preferably in the education sector).",
            ],
          },
          {
            parts: [
              "Strong industry network across various domains including ",
              { bold: "IT" },
              ", ",
              { bold: "BFSI" },
              ", ",
              { bold: "Healthcare" },
              ", ",
              { bold: "Hospitality" },
              ", ",
              { bold: "Retail" },
              ", and ",
              { bold: "Management" },
              ".",
            ],
          },
          "Excellent communication, interpersonal, and negotiation skills.",
          "Good understanding of academic programs, student profiles, and employer expectations.",
          "Proficiency in MS Office tools, CRM/placement management software, and digital communication platforms.",
          "Ability to work under deadlines and achieve institutional placement targets.",
        ],
      },
      {
        type: "heading",
        title: "Preferred Skills:",
        items: [
          "Demonstrated success in corporate outreach and partnership development.",
          "Strong presentation and public speaking abilities.",
          "Ability to motivate and guide students throughout the placement process.",
          "High degree of professionalism, initiative, and organizational ability.",
        ],
      },
    ],
    applicationEmail: "hr@theaims.ac.in",
  },
  {
    id: 3,
    title: "Accounts Executive",
    slug: "accounts-executive",
    department: "Accounts & Finance Department",
    experience: "2-5 years experience",
    location: "Bengaluru",
    institution: "AIMS Institutes, Peenya, Bengaluru",
    summary: {
      type: "box",
      content:
        "AIMS Institutes, Peenya, Bengaluru, is one of the city's leading educational institutions, known for its commitment to academic excellence, research, and institutional integrity. The institute maintains strong administrative and financial systems that support transparent and efficient operations.",
    },
    sections: [
      {
        type: "heading",
        title: "Position Overview:",
        items: [
          {
            parts: [
              "We are seeking a dedicated and detail-oriented ",
              { bold: "Accounts Executive" },
              " to join our ",
              { bold: "Accounts & Finance team" },
              ". The ideal candidate will have a strong background in ",
              { bold: "accounting" },
              ", ",
              { bold: "GST" },
              ", ",
              { bold: "TDS" },
              ", and ",
              { bold: "banking operations" },
              ", along with excellent record-keeping and compliance skills.",
            ],
          },
        ],
      },
      {
        type: "heading",
        title: "Key Responsibilities:",
        items: [
          "Handle day-to-day accounting operations and maintain accurate financial records.",
          "Prepare and process vouchers, invoices, journal entries, and ledgers.",
          {
            parts: [
              "Manage ",
              { bold: "GST filings" },
              ", ",
              { bold: "TDS returns" },
              ", and ensure timely statutory compliance.",
            ],
          },
          "Reconcile bank accounts, vendor statements, and financial ledgers on a regular basis.",
          "Support the preparation of monthly and annual financial statements.",
          "Coordinate with internal departments for expense tracking and fund allocation.",
          {
            parts: [
              "Assist in audits, documentation, and financial reporting for ",
              { bold: "NAAC" },
              " and statutory purposes.",
            ],
          },
          "Maintain digital and physical records in accordance with institutional policies.",
        ],
      },
      {
        type: "heading",
        title: "Educational Qualification:",
        items: [
          {
            parts: [
              { bold: "Mandatory:" },
              " Bachelor's Degree in ",
              { bold: "Commerce / Accounting / Finance (B.Com)" },
              " or equivalent.",
            ],
          },
          {
            parts: [
              { bold: "Preferred:" },
              " Master's Degree in ",
              { bold: "Commerce (M.Com)" },
              " or ",
              { bold: "MBA in Finance" },
              ".",
            ],
          },
          "Certification in Tally ERP, GST, or Accounting Software will be an added advantage.",
        ],
      },
      {
        type: "heading",
        title: "Experience:",
        items: [
          {
            parts: [
              "2–5 years of relevant experience in accounts, preferably in an ",
              { bold: "educational institution" },
              " or ",
              { bold: "corporate setup" },
              ".",
            ],
          },
          {
            parts: [
              "Proven experience in ",
              { bold: "GST" },
              ", ",
              { bold: "TDS" },
              ", and ",
              { bold: "banking operations" },
              " is mandatory.",
            ],
          },
          "Exposure to audit processes and institutional record maintenance preferred.",
        ],
      },
      {
        type: "heading",
        title: "Skills & Attributes:",
        items: [
          {
            parts: [
              "Proficiency in ",
              { bold: "Tally ERP" },
              " / ",
              { bold: "Accounting Software" },
              ", ",
              { bold: "MS Excel" },
              ", and financial reporting tools.",
            ],
          },
          {
            parts: [
              "Sound knowledge of ",
              { bold: "GST" },
              ", ",
              { bold: "TDS" },
              ", and ",
              { bold: "statutory compliance" },
              ".",
            ],
          },
          "Strong analytical, organizational, and record-keeping skills.",
          "High level of integrity, confidentiality, and attention to detail.",
          "Ability to manage timelines and coordinate effectively with internal teams.",
        ],
      },
    ],
    applicationEmail: "hr@theaims.ac.in",
  },
]

// Get job by slug
export const getJobBySlug = (slug, type = "academic") => {
  const jobs = type === "academic" ? academicJobsData : nonTeachingJobsData
  return jobs.find((job) => job.slug === slug)
}

// Get all jobs for listing
export const getAllJobs = (type = "academic") => {
  const jobs = type === "academic" ? academicJobsData : nonTeachingJobsData
  return jobs.map(({ sections, summary, applicationEmail, ...rest }) => rest)
}
