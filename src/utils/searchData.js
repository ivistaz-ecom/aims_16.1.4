// Search data for all programs and pages
// This file contains searchable content for the site-wide search functionality
import MiniSearch from "minisearch"

export const searchResults = [
  // School of Business
  {
    id: 1,
    title: "PhD in Management",
    url: "/phd-doctoral-programs",
    type: "Program",
    keywords: [
      "phd",
      "phd in management",
      "doctoral program business research",
      "strategic business research phd",
      "aims phd program",
    ],
  },
  {
    id: 2,
    title: "MBA Program",
    url: "/business-school/master-business-administration",
    type: "Program",
    keywords: [
      "mba",
      "mba program",
      "iacbe accredited mba",
      "applied learning mba",
      "mba placement record",
    ],
  },
  {
    id: 3,
    title: "BBA General",
    url: "/business-school/bachelor-business-administration",
    type: "Program",
    keywords: [
      "bba",
      "bba general",
      "undergraduate business program",
      "business fundamentals bba",
      "finance marketing hr bba",
      "entrepreneurship bba program",
    ],
  },
  {
    id: 4,
    title: "BBA Aviation Management",
    url: "/business-school/bachelor-business-administration-aviation-management",
    type: "Program",
    keywords: [
      "bba aviation",
      "bba aviation management",
      "aviation management undergraduate",
      "airport management bba",
      "business aviation specialisation",
    ],
  },

  // School of Hospitality & Tourism
  {
    id: 5,
    title: "Bachelor of Hotel Management",
    url: "/hospitality-tourism-school/bachelor-hotel-management",
    type: "Program",
    keywords: [
      "bhm",
      "bachelor of hotel management",
      "bhm program aims",
      "hotel management degree",
      "hospitality and tourism program",
      "hotel resort airline careers",
    ],
  },
  {
    id: 6,
    title: "Vocational Certificate QSR by Chai Point",
    url: "/hospitality-tourism-school",
    type: "Program",
    keywords: [
      "vocational certificate qsr by chai point",
      "quick service restaurant training",
      "f&b vocational certificate",
      "chai point certification course",
    ],
  },
  {
    id: 7,
    title: "Swiss International Culinary Professional Diploma",
    url: "https://www.aimsenrich.com/swiss-international-culinary-professional-diploma",
    type: "Program",
    keywords: [
      "swiss international culinary professional diploma",
      "swiss culinary diploma",
      "ehl certified program",
      "professional chef training",
      "hospitality kitchen management course",
    ],
  },
  {
    id: 8,
    title: "Swiss International Food & Beverage Service Diploma",
    url: "https://www.aimsenrich.com/swiss-international-food-beverage-service-professional-diploma",
    type: "Program",
    keywords: [
      "swiss international food & beverage service diploma",
      "swiss hospitality diploma",
      "luxury hospitality f&b careers",
      "hotel service operations diploma",
    ],
  },
  {
    id: 9,
    title: "Swiss Professional Diploma in Rooms (CII-VET)",
    url: "https://www.aimsenrich.com/swiss-professional-diploma-rooms-cii-vet",
    type: "Program",
    keywords: [
      "swiss professional diploma in rooms (cii-vet)",
      "swiss vet hospitality program",
      "hotel operations professional training",
    ],
  },

  // School of Finance & Commerce
  {
    id: 10,
    title: "M.Com Program",
    url: "/finance-commerce-school/master-of-commerce",
    type: "Program",
    keywords: [
      "m.com",
      "mcom",
      "m.com program",
      "mcom program",
      "master of commerce aims",
      "postgraduate commerce program",
      "commerce postgraduate degree india",
      "aims m.com course details",
    ],
  },
  {
    id: 11,
    title: "B.Com Program",
    url: "/finance-commerce-school/bachelor-of-commerce",
    type: "Program",
    keywords: [
      "b.com",
      "bcom",
      "b.com program",
      "bcom program",
      "bachelor of commerce aims",
      "undergraduate commerce degree",
      "finance accounting taxation b.com",
      "specialised b.com program",
    ],
  },

  // School of Information & Technology
  {
    id: 12,
    title: "BCA Program",
    url: "/information-technology-school/bachelor-computer-applications",
    type: "Program",
    keywords: [
      "bca",
      "bca program",
      "bca course in bangalore",
      "top bca college in bangalore",
      "bca admission 2025 bangalore",
      "bca with placement support",
      "best bca degree colleges near me",
      "computer science undergraduate degree",
      "bca with ai & ml",
      "bca in ai and ml bangalore",
      "bca data science and ai course",
      "ai and ml specialization in bca",
      "ai-focused bca curriculum",
      "bca with python and machine learning",
    ],
  },
  {
    id: 13,
    title: "MCA Program",
    url: "/information-technology-school/master-computer-applications",
    type: "Program",
    keywords: [
      "mca",
      "mca program",
      "mca course in bangalore",
      "top mca college in bangalore",
      "postgraduate computer applications degree",
      "mca program with placement",
      "masters in computer applications bangalore",
    ],
  },

  // PUC (Pre-University Courses)
  {
    id: 14,
    title: "PCMC/PCMB Integrated",
    url: "/pre-university-college/science-integrated-pcmb-pcmc-cet-neet-jee",
    type: "Program",
    keywords: [
      "pcmc/pcmb integrated",
      "puc with coaching bangalore",
      "pcmb with neet preparation",
      "pcmc with cet and jee coaching",
      "best integrated science puc in bangalore",
      "science puc with entrance coaching",
    ],
  },
  {
    id: 15,
    title: "PCMC Program",
    url: "/pre-university-college/science-pcmb-pcmc",
    type: "Program",
    keywords: [
      "pcmc",
      "pcmc program",
      "science puc in bangalore",
      "pcmc course after 10th",
      "pcmc puc course bangalore",
      "best science college for puc students",
      "puc admission for science 2025",
    ],
  },
  {
    id: 16,
    title: "PCMB Program",
    url: "/pre-university-college/science-pcmb-pcmc",
    type: "Program",
    keywords: [
      "pcmb",
      "pcmb program",
      "science puc in bangalore",
      "pcmb puc course bangalore",
      "best science college for puc students",
      "puc admission for science 2025",
    ],
  },
  {
    id: 17,
    title: "CEBA Program",
    url: "/pre-university-college/commerce-ceba",
    type: "Program",
    keywords: [
      "ceba",
      "ceba course in bangalore",
      "best commerce puc in bangalore",
      "puc in commerce with computer applications",
      "11th 12th commerce with ceba subjects",
      "puc with economics and accounting",
    ],
  },

  /***************************************************** About AIMS *****************************************************/

  // Overview Page
  {
    id: 18,
    title: "About AIMS",
    url: "/aims-overview",
    type: "Page",
    keywords: [
      "aims",
      "aims institute",
      "aims institutes",
      "about aims institutes",
      "aims mba",
      "aims college overview",
      "aims history and mission",
      "who founded aims institutes",
      "aims vision and values",
      "best mba college in bangalore",
      "aims infrastructure and campus",
      "top b school in india",
      "best business school in india",
      "top mba colleges in bangalore",
      "leading management institutes in bangalore",
      "best mba colleges in karnataka",
      "colleges in bangalore with global exposure",
      "internationally accredited business school",
      "naac a grade colleges in bangalore",
      "iacbe accredited colleges in india",
      "colleges with good placements in bangalore",
      "best colleges for mba and bba",
      "affordable mba colleges in bangalore",
      "business schools with global programs",
      "top postgraduate colleges in bangalore",
      "colleges offering phd in management",
    ],
  },

  // Acts and Statutes MOA Page
  {
    id: 19,
    title: "Acts and Statutes MOA",
    url: "/acts-and-statutes-moa",
    type: "Page",
    keywords: [
      "acts and statutes",
      "aims policies and guidelines",
      "guidelines",
      "aims code of conduct",
      "code of conduct",
      "faculty code of conduct aims",
      "student code of ethics aims",
      "student code of conduct",
      "anti ragging policy aims",
      "anti-ragging",
      "sexual harassment prevention policy",
      "sexual harassment",
      "aims research policy",
      "aims hr policy",
      "aims environment policy",
      "aims sustainability initiatives",
      "aims admission policy",
      "aims admissions",
      "aims grievance redressal policy",
      "aims equity and inclusion policy",
      "library policies aims",
      "it policy aims college",
      "placement policy aims",
    ],
  },

  // Accreditations & Rankings Page
  {
    id: 20,
    title: "Accreditations & Rankings",
    url: "/accreditations-rankings",
    type: "Page",
    keywords: [
      "accreditations and rankings",
      "aims accreditations",
      "aims rankings",
      "aims naac accreditation",
      "aims iacbe accreditation",
      "aims nirf ranking",
      "top private b school india",
      "best mba college in bangalore",
      "aims recognition by naac",
      "aims iacbe certificate",
      "aims business school ranking",
      "best mba college with accreditation",
      "aims awards and rankings",
      "naac",
      "naac accreditation",
      "naac a grade",
      "naac certificate",
      "a grade college",
      "naac report",
      "accreditation certificate",
      "quality assessment",
      "naac reaccreditation",
      "naac grade",
      "naac score",
      "naac evaluation report",
      "naac self study report",
      "naac documents",
      "aicte and naac approvals",
      "accreditation details",
      "naac status",
      "nirf",
      "nirf ranking",
      "aims nirf ranking",
      "nirf rank",
      "nirf 2024",
      "nirf 2023",
      "college ranking",
      "aims nirf",
      "nirf score",
      "aims nirf score",
      "nirf data",
      "nirf parameters",
      "nirf report",
      "nirf submission",
      "nirf certificate",
      "nirf performance",
      "nirf ranking list",
      "nirf ranked college",
      "ranking details",
    ],
  },

  // Annual Reports Page
  {
    id: 21,
    title: "Annual Reports",
    url: "/annual-reports",
    type: "Page",
    keywords: [
      "annual report",
      "annual reports",
      "aims annual report",
      "aims annual reports",
      "aims yearly report",
      "aims institute annual report 2024",
      "aims academic performance report",
      "aims governance report",
      "aims administrative report",
      "aims institutional development report",
      "download aims annual report",
      "download aims annual reports",
    ],
  },

  // Annual Accounts Page
  {
    id: 22,
    title: "Annual Accounts",
    url: "/annual-accounts",
    type: "Page",
    keywords: [
      "annual account",
      "annual accounts",
      "aims annual account",
      "aims annual accounts",
      "aims financial report",
      "financial report",
      "annual audit",
      "aims annual audit",
      "budget report",
      "aims budget report",
      "aims financial transparency",
      "aims accounts 2023",
      "aims audit report download",
      "aims finance statements",
      "aims audit documents",
    ],
  },

  // Institutional Development Plan (IDP) Page
  {
    id: 23,
    title: "Institutional Development Plan (IDP)",
    url: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/institutional-development-plan/IDP.pdf",
    type: "PDF",
    keywords: [
      "institutional development plan",
      "aims idp",
      "aims institutional development",
      "idp strategic plan",
      "college development roadmap",
      "higher education development plan",
      "aims growth strategy",
      "institutional planning document",
      "academic and infrastructure development",
      "long term institutional plan",
      "aims institutional goals",
      "quality enhancement roadmap",
      "strategic initiatives aims",
      "institutional improvement plan",
      "campus development strategy",
    ],
  },

  // UGC 2(f) & 12B Page
  {
    id: 24,
    title: "UGC 2(f) & 12B",
    url: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/ugc/2f_and_12b_certificate.pdf",
    type: "PDF",
    keywords: [
      "ugc 2f and 12b",
      "aims ugc recognition",
      "ugc approved institution",
      "ugc 2f certificate",
      "ugc 12b certificate",
      "aims university grants commission",
      "higher education recognitions aims",
      "ugc accreditation status",
      "recognized college under ugc",
      "aims statutory recognition",
      "ugc eligibility certification",
      "aims regulatory approvals",
      "ugc listed institutions",
      "ugc compliance documents",
      "university grants commission approval",
    ],
  },

  /***************************************************** Administration *****************************************************/

  // Leadership Page
  {
    id: 25,
    title: "Leadership",
    url: "/leadership",
    type: "Page",
    keywords: [
      "leadership",
      "aims leadership",
      "institutional leadership",
      "college leadership team",
      "academic administration",
      "strategic leadership aims",
      "aims institute leaders",
      "college authority members",
      "senior leadership aims",
      "organisational leadership in education",
      "aims management team",
      "founder",
      "ceo",
      "principal",
      "executive director",
      "roja reddy meka",
      "roja reddy",
      "meka priyanandan reddy",
      "meka priyanandan",
      "meka",
      "priyanandan",
      "reddy",
      "reddy meka",
    ],
  },

  // Governing Council Members Page
  {
    id: 26,
    title: "Governing Council Members",
    url: "/governing-council-members",
    type: "Page",
    keywords: [
      "governing council members",
      "aims governing council",
      "institutional governance",
      "college governing body",
      "higher education governing council",
      "academic governance committee",
      "aims council profiles",
      "decision making body aims",
      "regulatory council members",
      "aims administration council",
    ],
  },

  // Management Council Members Page
  {
    id: 27,
    title: "Management Council Members",
    url: "/management-council-members",
    type: "Page",
    keywords: [
      "management council members",
      "aims management council",
      "institution management committee",
      "college executive council",
      "senior management aims",
      "academic management team",
      "university management structure",
      "aims internal management",
      "administration management council",
      "aims directors and managers",
    ],
  },

  // Finance Committee Page
  {
    id: 28,
    title: "Finance Committee",
    url: "/finance-committee",
    type: "Page",
    keywords: [
      "finance committee",
      "aims finance committee",
      "financial governance aims",
      "college finance board",
      "institutional finance oversight",
      "budget and finance committee",
      "aims financial administration",
      "higher education finance committee",
      "financial planning committee",
      "aims budgeting committee",
    ],
  },

  // Chief Vigilance Officer Page
  {
    id: 29,
    title: "Chief Vigilance Officer",
    url: "/chief-vigilance-officer",
    type: "Page",
    keywords: [
      "chief vigilance officer",
      "cvo",
      "aims cvo",
      "vigilance and compliance aims",
      "anti corruption officer college",
      "grievance and vigilance cell",
      "integrity officer aims",
      "college vigilance procedures",
      "compliance oversight aims",
      "vigilance department aims",
      "ethics and conduct committee",
      "shridhar r g",
      "shridhar",
      "g",
      "g shridhar",
      "shridhar g",
      "shridhar r",
      "r shridhar",
      "r g shridhar",
      "r g",
    ],
  },

  // Controller of Examination Page
  {
    id: 30,
    title: "Controller of Examination",
    url: "/controller-of-examination",
    type: "Page",
    keywords: [
      "controller of examination",
      "coe",
      "aims coe",
      "aims controller of exams",
      "exam administration aims",
      "university examination controller",
      "exam management office",
      "examination process aims",
      "exam regulations aims",
      "academic examination authority",
      "results and exam control",
      "exam cell aims institute",
    ],
  },

  // Academic Leadership Page
  {
    id: 31,
    title: "Academic Leadership",
    url: "/academic-leadership",
    type: "Page",
    keywords: [
      "academic leadership",
      "aims academic leaders",
      "academic administration aims",
      "program heads aims",
      "college academic governance",
      "academic leadership structure",
      "academic excellence committee",
      "department leadership aims",
      "senior faculty leadership",
      "academic oversight team",
    ],
  },

  // ***************************************************** Academics *****************************************************/

  // Academic Program Details Page
  {
    id: 32,
    title: "Academic Program Details",
    url: "/program-overview",
    type: "Page",
    keywords: [
      "academic program details",
      "program details",
      "programs",
      "aims program overview",
      "course structure aims",
      "curriculum overview",
      "academic offerings aims",
      "degree programs aims",
      "undergraduate programs aims",
      "postgraduate programs aims",
      "program information page",
      "course details and eligibility",
    ],
  },

  // Academic Calendar Page
  {
    id: 33,
    title: "Academic Calendar",
    url: "/aims-academic-calendar",
    type: "Page",
    keywords: [
      "academic calendar",
      "calendar",
      "aims academic calendar",
      "college academic schedule",
      "semester dates aims",
      "exam calendar aims",
      "academic year schedule",
      "session plan aims",
      "teaching and exam schedule",
      "academic planning timeline",
    ],
  },

  // Examinations Page
  {
    id: 34,
    title: "Examinations",
    url: "/examinations",
    type: "Page",
    keywords: [
      "examinations",
      "aims examinations",
      "exam process aims",
      "exam",
      "exam details",
      "university exam information",
      "exam schedule aims",
      "exam schedule",
      "assessment and evaluation system",
      "hall ticket information",
      "internal assessment details",
      "exam guidelines aims",
      "exam cell information",
    ],
  },

  // Faculty Details Page
  {
    id: 35,
    title: "Faculty Details",
    url: "/aims-list-of-faculty",
    type: "Page",
    keywords: [
      "faculty details",
      "faculty",
      "professors",
      "teachers",
      "aims faculty list",
      "teaching staff aims",
      "college faculty directory",
      "academic staff profiles",
      "department faculty aims",
      "faculty qualifications",
      "teaching and research faculty",
      "list of professors aims",
      "aims faculty information",
      "lecturers",
      "lecturer",
      "lecturer's",
      "lecturer's details",
      "lecturer's information",
      "lecturer's profile",
      "lecturer's contact details",
      "lecturer's contact information",
      "lecturer's contact details",
    ],
  },

  // Swayam NPTEL Page
  {
    id: 36,
    title: "Swayam NPTEL",
    url: "/swayam-nptel",
    type: "Page",
    keywords: [
      "swayam nptel",
      "swayam",
      "nptel",
      "aims swayam nptel",
      "online learning nptel",
      "swayam courses aims",
      "nptel certification programs",
      "moocs aims",
      "digital learning platforms",
      "nptel faculty mentors",
      "swayam online education",
      "government e-learning courses",
    ],
  },

  // Internal Quality Assurance Cell (IQAC) Page
  {
    id: 37,
    title: "Internal Quality Assurance Cell (IQAC)",
    url: "/iqac-internal-quality-assurance-cell",
    type: "Page",
    keywords: [
      "internal quality assurance cell",
      "iqac",
      "iqac aims",
      "quality assurance in education",
      "naac iqac aims",
      "institutional quality framework",
      "academic quality monitoring",
      "iqac reports aims",
      "quality enhancement cell",
      "aims accreditation support",
      "continuous improvement cell",
    ],
  },

  // Library & Information Centre Page
  {
    id: 38,
    title: "Library & Information Centre",
    url: "/library-and-information-centre",
    type: "Page",
    keywords: [
      "library and information centre",
      "library",
      "aims library",
      "questions paper",
      "previous year question paper",
      "ugc net question paper",
      "net question paper",
      "college digital library",
      "academic resources aims",
      "e-resources",
      "library services aims",
      "library catalog aims",
      "study resources aims",
      "information centre aims",
      "library membership and access",
    ],
  },

  // Academic Collaborations Page
  {
    id: 39,
    title: "Academic Collaborations",
    url: "/aims-academic-collaborations",
    type: "Page",
    keywords: [
      "academic collaborations",
      "aims academic partnerships",
      "university collaborations aims",
      "international academic ties",
      "institutional partnerships",
      "academic exchange programs",
      "collaborative education initiatives",
      "industry-academia collaborations",
      "partner institutions aims",
      "academic MoUs aims",
    ],
  },

  /***************************************************** Admissions & Fee *****************************************************/

  // Admissions Process & Guidelines Page
  {
    id: 40,
    title: "Admissions Process & Guidelines",
    url: "/admission-process",
    type: "Page",
    keywords: [
      "admissions process and guidelines",
      "admissions",
      "admission process",
      "admission guidelines",
      "aims admissions",
      "college admission procedure",
      "ug and pg admission process",
      "requirements for admission",
      "eligibility criteria aims",
      "application process aims",
      "admissions instructions",
      "college admission steps",
      "aims online application",
      "admission policy aims",
      "admission deadlines aims",
      "admission deadlines",
    ],
  },

  // Fee Refund Policy Page
  {
    id: 41,
    title: "Fee Refund Policy",
    url: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/fee-refund-policy/fee-payment-terms-and-conditions.pdf",
    type: "PDF",
    keywords: [
      "fee refund policy",
      "fees",
      "fee refund",
      "aims fee refund",
      "fee payment terms and conditions",
      "refund rules aims",
      "college fee refund guidelines",
      "fee cancellation policy",
      "tuition refund procedure",
      "aims payment policy",
      "refund eligibility aims",
      "fee regulations aims",
    ],
  },

  // Scholarships Page
  {
    id: 42,
    title: "Scholarships",
    url: "/scholarships",
    type: "Page",
    keywords: [
      "scholarships",
      "aims scholarships",
      "merit scholarships aims",
      "fee concession aims",
      "student financial aid",
      "sports scholarships aims",
      "performing arts scholarship",
      "entrepreneurship scholarship aims",
      "scholarship eligibility",
      "aims scholarship programs",
      "tuition fee waiver aims",
    ],
  },

  // Education Loans Page
  {
    id: 43,
    title: "Education Loans",
    url: "/education-loans",
    type: "Page",
    keywords: [
      "education loans",
      "loans",
      "aims education loan support",
      "student loan assistance",
      "college loan information",
      "loan eligibility guidance",
      "bank loan for higher education",
      "educational financing aims",
      "study loan process",
      "aims loan support services",
      "student financial assistance aims",
    ],
  },

  // FAQ Page
  {
    id: 44,
    title: "FAQ",
    url: "/faqs",
    type: "Page",
    keywords: [
      "faqs",
      "faq",
      "aims faqs",
      "frequently asked questions",
      "admission questions aims",
      "course queries aims",
      "general inquiries aims",
      "college information questions",
      "student support questions",
      "program-related faqs",
      "aims help and support",
    ],
  },

  /***************************************************** Research *****************************************************/

  // Research & Development Cell Page
  {
    id: 45,
    title: "Research & Development",
    url: "/centre-for-research",
    type: "Page",
    keywords: [
      "research and development cell",
      "research",
      "aims centre for research",
      "r&d cell aims",
      "institutional research initiatives",
      "academic research aims",
      "research activities aims",
      "faculty research support",
      "student research projects",
      "research publications aims",
      "innovation and research cell",
      "research development programs",
    ],
  },

  // Entrepreneurship Excellence Centre Page
  {
    id: 46,
    title: "Entrepreneurship Excellence Centre",
    url: "/entrepreneurship-excellence-centre",
    type: "Page",
    keywords: [
      "entrepreneurship excellence centre",
      "entrepreneurship cell",
      "entrepreneur",
      "aims entrepreneurship centre",
      "aims entrepreneurship excellence centre",
      "student entrepreneurship aims",
      "startup incubation aims",
      "innovation and entrepreneurship",
      "business development support",
      "startup mentorship aims",
      "enterprise creation aims",
      "entrepreneurial skills centre",
      "aims innovation hub",
      "innovation cell aims",
      "startup support aims",
      "student entrepreneurship programs",
      "business incubation aims",
      "entrepreneurial development centre",
      "enterprise training aims",
      "aims innovation initiatives",
    ],
  },

  // Central Facilities Page
  {
    id: 47,
    title: "Central Facilities",
    url: "/central-facilities",
    type: "Page",
    keywords: [
      "central facilities",
      "facilities",
      "aims campus facilities",
      "infrastructure aims",
      "college amenities aims",
      "campus resources aims",
      "student facilities aims",
      "academic support facilities",
      "library and lab facilities",
      "hostel and dining facilities",
      "aims campus services",
    ],
  },

  // AIMS Journal of Research Page
  {
    id: 48,
    title: "AIMS Journal of Research",
    url: "/aims-journal-of-research",
    type: "Page",
    keywords: [
      "aims journal of research",
      "research journal",
      "research",
      "journal",
      "academic journal aims",
      "research journal publication",
      "peer reviewed journal aims",
      "scholarly articles aims",
      "institutional research journal",
      "academic publications aims",
      "aims research papers",
      "journal submission guidelines",
      "educational research journal",
    ],
  },

  /***************************************************** Focus Centres *****************************************************/

  // Centre for Research Page
  {
    id: 49,
    title: "Centre for Research",
    url: "/centre-for-research",
    type: "Page",
    keywords: [
      "centre for research",
      "center for research",
      "research",
      "research centre",
      "research center",
      "aims centre for research",
      "institutional research aims",
      "academic research centre",
      "research activities aims",
      "faculty and student research",
      "research publications aims",
      "research projects aims",
      "innovation and research initiatives",
      "aims research support",
    ],
  },

  // Centre for Sustainability Page
  {
    id: 50,
    title: "Centre for Sustainability",
    url: "/centre-for-sustainability",
    type: "Page",
    keywords: [
      "centre for sustainability",
      "aims sustainability initiatives",
      "environmental sustainability aims",
      "campus sustainability programs",
      "green practices aims",
      "sustainable development centre",
      "eco initiatives aims",
      "sustainability projects aims",
      "environmental awareness aims",
      "sustainable education initiatives",
    ],
  },

  // Centre for Student Development Page
  {
    id: 51,
    title: "Centre for Student Development",
    url: "/centre-for-student-development",
    type: "Page",
    keywords: [
      "centre for student development",
      "aims student development",
      "student development",
      "student skill development",
      "student support centre aims",
      "personal development programs",
      "career counseling aims",
      "student workshops aims",
      "student growth initiatives",
      "holistic development centre",
      "aims student success programs",
    ],
  },

  // Centre for Community Service Page
  {
    id: 52,
    title: "Centre for Community Service",
    url: "/centre-for-community-service",
    type: "Page",
    keywords: [
      "centre for community service",
      "community service",
      "aims community service",
      "social outreach aims",
      "community engagement programs",
      "service learning aims",
      "social responsibility aims",
      "community development initiatives",
      "volunteer programs aims",
      "csr activities aims",
      "aims outreach activities",
    ],
  },

  // Centre for Consulting Page
  {
    id: 53,
    title: "Centre for Consulting",
    url: "/centre-for-consulting",
    type: "Page",
    keywords: [
      "centre for consulting",
      "consulting",
      "aims consulting services",
      "industry consulting aims",
      "academic consulting centre",
      "business consulting aims",
      "consultancy projects aims",
      "corporate advisory aims",
      "research-based consulting",
      "institutional consultancy",
      "aims expert consulting",
    ],
  },

  // Centre for International Liaison Page
  {
    id: 54,
    title: "Centre for International Liaison",
    url: "/centre-for-international-liaison",
    type: "Page",
    keywords: [
      "centre for international liaison",
      "international",
      "aims international relations",
      "global partnerships aims",
      "international collaborations",
      "student exchange aims",
      "international academic mobility",
      "global liaison office aims",
      "international opportunities aims",
      "aims global engagement",
      "international academic support",
    ],
  },

  // Consultancy Projects Page
  {
    id: 55,
    title: "Consultancy Projects",
    url: "/centre-for-research#ICSSR",
    type: "Section",
    keywords: [
      "consultancy projects",
      "aims consultancy projects",
      "icssr research projects",
      "funded research projects aims",
      "consulting assignments aims",
      "institutional consultancy work",
      "applied research projects",
      "government funded research",
      "industry consultancy aims",
      "aims research grants",
    ],
  },

  /***************************************************** Student Life *****************************************************/

  // Sports Facilities Page
  {
    id: 56,
    title: "Sports Facilities",
    url: "/sports-facilities",
    type: "Page",
    keywords: [
      "sports facilities",
      "sports",
      "aims sports centre",
      "campus sports amenities",
      "indoor and outdoor sports aims",
      "student sports activities",
      "physical education facilities",
      "sports infrastructure aims",
      "fitness and recreation aims",
      "athletic programs aims",
      "college sports grounds",
    ],
  },

  // NCC / NSS Page
  {
    id: 57,
    title: "NCC / NSS",
    url: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/nss/About-NSS.pdf",
    type: "PDF",
    keywords: [
      "nss",
      "ncc",
      "aims nss",
      "aims ncc",
      "national service scheme aims",
      "nss activities aims",
      "student volunteering aims",
      "community service nss",
      "national cadet corps aims",
      "ncc training aims",
      "social outreach nss",
    ],
  },

  // Hostel Details Page
  {
    id: 58,
    title: "Hostel Details",
    url: "/hostel-details",
    type: "Page",
    keywords: [
      "hostel details",
      "hostel",
      "aims hostel",
      "campus accommodation aims",
      "student housing aims",
      "boys and girls hostel aims",
      "hostel facilities aims",
      "residential services aims",
      "hostel rules and information",
      "aims accommodation",
      "hostel amenities and support",
    ],
  },

  // Placement Cell Page
  {
    id: 59,
    title: "Placement Cell",
    url: "/placement",
    type: "Page",
    keywords: [
      "placement cell",
      "placements",
      "aims placement cell",
      "campus placements aims",
      "corporate relations aims",
      "placement training aims",
      "internship support aims",
      "placement statistics aims",
      "career development cell",
      "employer connect aims",
      "placements and recruitment aims",
    ],
  },

  // Health Facilities Page
  {
    id: 60,
    title: "Health Facilities",
    url: "/health-facilities",
    type: "Page",
    keywords: [
      "health facilities",
      "aims health services",
      "campus medical support aims",
      "student healthcare aims",
      "first aid and medical room aims",
      "wellness services aims",
      "health and safety aims",
      "medical facilities on campus",
      "student health support",
      "healthcare resources aims",
    ],
  },

  // Internal Complaint Committee (ICC) Page
  {
    id: 61,
    title: "Internal Complaint Committee (ICC)",
    url: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/icc/ICC-website.pdf",
    type: "PDF",
    keywords: [
      "internal complaint committee",
      "complaint",
      "icc",
      "icc aims",
      "anti harassment committee aims",
      "grievance redressal for harassment",
      "college icc policy",
      "campus safety aims",
      "sexual harassment prevention aims",
      "icc guidelines aims",
      "complaint mechanism aims",
      "women safety committee aims",
    ],
  },

  // Student Grievance Redressal Committee (SGRC) Page
  {
    id: 62,
    title: "Student Grievance Redressal Committee (SGRC)",
    url: "/grievance-redressal",
    type: "Page",
    keywords: [
      "student grievance redressal committee",
      "srgc aims",
      "grievance redressal aims",
      "grievance redressal",
      "student complaints aims",
      "grievance resolution committee",
      "student support aims",
      "complaint submission aims",
      "grievance handling system",
      "aims grievance policy",
      "grievance procedures aims",
    ],
  },

  // Anti-Ragging Cell Page
  {
    id: 63,
    title: "Anti-Ragging Cell",
    url: "/cells-committees-antiragging-sexual-harassment-grievances-equal-opportunity",
    type: "Page",
    keywords: [
      "anti ragging cell",
      "ragging",
      "aims anti ragging",
      "anti ragging policy aims",
      "ragging prevention aims",
      "student safety aims",
      "ucc anti ragging guidelines",
      "anti ragging committee aims",
      "zero tolerance ragging aims",
      "ragging complaint support",
      "anti ragging awareness aims",
    ],
  },

  // Anti-Sexual Harassment Committee Page
  {
    id: 64,
    title: "Anti-Sexual Harassment Committee",
    url: "/cells-committees-antiragging-sexual-harassment-grievances-equal-opportunity",
    type: "Page",
    keywords: [
      "anti sexual harassment committee",
      "sexual harassment",
      "aims anti sexual harassment",
      "posh committee aims",
      "sexual harassment prevention aims",
      "campus safety committee",
      "posh compliance aims",
      "harassment reporting aims",
      "safe campus initiative",
      "women protection aims",
      "aims posh cell",
    ],
  },

  // Equal Opportunity Cell Page
  {
    id: 65,
    title: "Equal Opportunity Cell",
    url: "/cells-committees-antiragging-sexual-harassment-grievances-equal-opportunity",
    type: "Page",
    keywords: [
      "equal opportunity cell",
      "aims equal opportunity",
      "inclusivity cell aims",
      "diversity and inclusion aims",
      "equal rights committee aims",
      "equity support aims",
      "nondiscrimination policy aims",
      "inclusive education aims",
      "student equality support",
      "equal access initiatives aims",
    ],
  },

  // Facilities for Differently-Abled Page
  {
    id: 66,
    title: "Facilities for Differently-Abled",
    url: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/fda/Barrier-Free-Environment.pdf",
    type: "PDF",
    keywords: [
      "facilities for differently abled",
      "differently-abled",
      "aims barrier free environment",
      "disability support aims",
      "accessible campus aims",
      "inclusive facilities aims",
      "support for disabled students",
      "assistive facilities aims",
      "special needs support aims",
      "barrier free education aims",
      "campus accessibility aims",
    ],
  },

  /***************************************************** Information Centre *****************************************************/

  // Circulars and Notices Page
  {
    id: 67,
    title: "Circulars and Notices",
    url: "/circulars-and-notices",
    type: "Page",
    keywords: [
      "circulars and notices",
      "circulars",
      "notices",
      "aims circulars",
      "campus notices aims",
      "official announcements aims",
      "academic circulars aims",
      "college notifications aims",
      "administrative notices aims",
      "student notice board aims",
      "important updates aims",
      "institutional circulars aims",
    ],
  },

  // Announcements Page
  {
    id: 68,
    title: "Announcements",
    url: "/announcements",
    type: "Page",
    keywords: [
      "announcements",
      "aims announcements",
      "official updates aims",
      "campus announcements",
      "college announcements aims",
      "institutional updates",
      "academic announcements aims",
      "student updates aims",
      "latest news aims",
      "important announcements aims",
    ],
  },

  // Newsletter Page
  {
    id: 69,
    title: "Newsletter",
    url: "/aims-newsletters",
    type: "Page",
    keywords: [
      "newsletter",
      "aims newsletter",
      "campus newsletter aims",
      "institutional publications",
      "monthly newsletter aims",
      "academic newsletter aims",
      "college updates aims",
      "newsletters and bulletins",
      "aims campus stories",
      "institutional communication aims",
    ],
  },

  // News Page
  {
    id: 70,
    title: "News",
    url: "/news",
    type: "Page",
    keywords: [
      "news",
      "aims news",
      "campus news aims",
      "institutional news updates",
      "education news aims",
      "achievements aims",
      "media coverage aims",
      "latest happenings aims",
      "college news archive",
      "academic news aims",
    ],
  },

  // Events Page
  {
    id: 71,
    title: "Events",
    url: "/events",
    type: "Page",
    keywords: [
      "events",
      "aims events",
      "campus events aims",
      "institutional events",
      "academic events aims",
      "workshops and seminars aims",
      "student events aims",
      "cultural events aims",
      "college event calendar",
      "aims event highlights",
    ],
  },

  // Blogs Page
  {
    id: 72,
    title: "Blogs",
    url: "/blogs",
    type: "Page",
    keywords: [
      "blogs",
      "aims blogs",
      "campus blog aims",
      "student blogs aims",
      "academic articles aims",
      "institutional blog posts",
      "insights and stories aims",
      "education blogs aims",
      "college articles aims",
      "thought leadership aims",
    ],
  },

  // Careers Page
  {
    id: 73,
    title: "Careers",
    url: "/careers",
    type: "Page",
    keywords: [
      "careers",
      "aims careers",
      "job openings aims",
      "careers at aims institutes",
      "institutional recruitment aims",
      "faculty positions aims",
      "non teaching jobs aims",
      "employment opportunities aims",
      "careers in higher education",
      "aims recruitment portal",
    ],
  },

  // Right To Information Page
  {
    id: 74,
    title: "Right to Information (RTI)",
    url: "/right-to-information",
    type: "Page",
    keywords: [
      "right to information",
      "aims rti",
      "rti",
      "rti disclosure aims",
      "statutory information aims",
      "rti manual aims",
      "rti compliance aims",
      "public information officer aims",
      "rti application process aims",
      "mandatory disclosures aims",
      "transparency and governance aims",
      "rti documents aims",
      "higher education rti compliance",
    ],
  },
]

// Initialize MiniSearch instance
let miniSearchInstance = null

const getMiniSearchInstance = () => {
  if (!miniSearchInstance) {
    miniSearchInstance = new MiniSearch({
      fields: ["title", "keywords"], // Fields to index
      storeFields: ["id", "title", "url", "type"], // Fields to return in results
      idField: "id", // Field to use as unique identifier
    })

    // Prepare search data for MiniSearch
    // MiniSearch needs a flat structure, so we'll flatten keywords into a searchable text field
    const searchableData = searchResults.map((item) => ({
      id: item.id,
      title: item.title,
      url: item.url,
      type: item.type,
      keywords: item.keywords ? item.keywords.join(" ") : "", // Join keywords into searchable text
    }))

    miniSearchInstance.addAll(searchableData)
  }
  return miniSearchInstance
}

// Search function using MiniSearch for fuzzy search
export const searchPrograms = (query) => {
  if (!query || !query.trim()) {
    return []
  }

  const trimmedQuery = query.trim().toLowerCase()

  // First, try exact matches in title (case-insensitive)
  const exactTitleMatches = searchResults.filter((item) =>
    item.title.toLowerCase().includes(trimmedQuery)
  )

  // Second, try exact matches in keywords
  const exactKeywordMatches = searchResults.filter(
    (item) =>
      !exactTitleMatches.includes(item) &&
      item.keywords &&
      item.keywords.some((keyword) =>
        keyword.toLowerCase().includes(trimmedQuery)
      )
  )

  // Combine exact matches (title first, then keywords)
  const exactMatches = [...exactTitleMatches, ...exactKeywordMatches]
  const exactIds = new Set(exactMatches.map((item) => item.id))

  // If we have exact matches, use them and optionally add fuzzy matches
  if (exactMatches.length > 0) {
    // Only add fuzzy matches if we have less than 5 exact matches
    if (exactMatches.length < 5) {
      const miniSearch = getMiniSearchInstance()
      const fuzzyResults = miniSearch.search(trimmedQuery, {
        fuzzy: 0.2, // Fuzzy matching threshold (0.0 = exact, 1.0 = very fuzzy)
        prefix: true, // Match prefixes
        boost: { title: 2 }, // Boost title matches (weight: 2x)
      })

      // Get fuzzy items that aren't already in exact matches
      // Map MiniSearch results back to original searchResults items
      const fuzzyItems = fuzzyResults
        .map((result) => searchResults.find((item) => item.id === result.id))
        .filter((item) => item && !exactIds.has(item.id))
        .slice(0, 5 - exactMatches.length) // Fill up to 5 total results

      return [...exactMatches, ...fuzzyItems]
    }

    // If we have 5+ exact matches, return only those (limit to 10)
    return exactMatches.slice(0, 10)
  }

  // If no exact matches, use MiniSearch fuzzy search (limit to top 5)
  const miniSearch = getMiniSearchInstance()
  const results = miniSearch.search(trimmedQuery, {
    fuzzy: 0.2, // Fuzzy matching threshold (0.0 = exact, 1.0 = very fuzzy)
    prefix: true, // Match prefixes
    boost: { title: 2 }, // Boost title matches (weight: 2x)
  })

  // Map MiniSearch results back to original searchResults items and return top 5
  return results
    .map((result) => searchResults.find((item) => item.id === result.id))
    .filter((item) => item !== undefined)
    .slice(0, 5)
}
