
'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const JrActivitiesTimeline = () => {
    const [selectedYear, setSelectedYear] = useState('2025-26')

    const iqacData = {
        '2025-26': [
            "Workshop on Outcome Based Education, CO-PO automation",
            "Orientation Session on The Autonomous Process in Higher Education Institutions",
            "Instituted membership with ICT Academy",
            "Orientation on : Financial Literacy and Mutual funds for Non-teaching staff (26-4-2025)",
            "Navigating the new Self Appraisal Framework",
            "Submission of Autonomous Application in UGC Portal",
            "Submission of AISHE Report 2024-25",
            "Submission of Autonomous Application to Bangalore University",
            "Coordinated with team from Gujarath on our Best Practices in NAAC frame work",
            "Organised Entrepreneurship Development Program in association with Coir Board for SC-ST students",
            "Organised Reginal Seminar on Improving the Cost and Quality Competitiveness of the MSME in the Coir Sector",
            "Academic Audit, Feedback Analysis on Teaching and Learning"
        ],
        '2024-25': [
            "Preparation for EOA – AICTE programs",
            "CBTE Sessions",
            "FDP - New Pedagogical Tools",
            "Preparation for AISHE - MHRD",
            "CBTE Sessions",
            "Presentation of Results/KG and SG",
            "CBTE Sessions",
            "Internal Quality Audits – UG",
            "Internal Quality Audits – Focus Centers",
            "Internal Quality Audits – PG (on completion of course)",
            "BU Annual Report",
            "FDP on Research based Teaching",
            "Session on Study skills and Transferable skills",
            "FDP - Autonomous Status",
            "CBTE Sessions",
            "AIQAC Annual Report 23-24",
            "CBTE Sessions",
            "FDP in association with Library",
            "IQAC Advisory Board Meeting",
            "Preparation of Dashboard for UG & PG ODD",
            "National Conference on Quality",
            "Preparation of Dashboard for UG EVEN",
            "Preparations for NIRF",
            "Preparation of Dashboard for PG EVEN"
        ],
        '2023-24': [
            "Preparation for EOA – AICTE programs",
            "Digital Literacy Program with NASSCOMM",
            "Preparation for AISHE - MHRD",
            "Presentation of Results/KG and SG",
            "Internal Quality Audits – Non-Academic Programs",
            "Internal Quality Audits – UG",
            "Internal Quality Audits – Focus Centers",
            "Internal Quality Audits – PG (on completion of course)",
            "AIQAC Annual Report 22-23",
            "BU Annual Report",
            "Preparation of Dashboard for UG & PG ODD",
            "FDP on Intellectual Property Rights with CIPAM",
            "Preparation of Dashboard for UG EVEN",
            "Preparations for NIRF",
            "CBTE Sessions",
            "CBTE Sessions",
            "FDP - Reflections on Course Files and Outcomes Based Teaching Learning",
            "Preparation of Dashboard for PG EVEN"
        ],
        '2022-23': [
            "Webinar on Sculpting Change in Decision Making with Data and Analytics",
            "Application for UGC 2f & 12B",
            "Establish IIC",
            "BU Annual Report",
            "FDP on NEP 2020 - A Teacher's Role",
            "AIQAC Annual Report 21-22",
            "Workshop on Academic Writing with ACR",
            "FDP on Design Thinking with ACR",
            "FDP on Research",
            "Review Meeting - Observations of NAAC Peer Team",
            "Preparation of Dashboard for UG ODD",
            "Students Feedback 1 – UG Programs",
            "Preparation of Dashboard for PG ODD",
            "FDP on Bloom's Taxonomy",
            "Internal Quality Audits – Focus Centers",
            "Students Feedback 1 – PG Programs",
            "Internal Quality Audits – UG (on completion of course)",
            "Preparation of Dashboard for UG EVEN",
            "Preparation for AISHE - MHRD",
            "Faculty Orientation Program on \"Outcome Based Teaching and Learning\"",
            "Preparations for NIRF",
            "Internal Quality Audits – PG (on completion of course)",
            "Preparation of Dashboard for PG EVEN"
        ],
        2020: [
            "Successful re-accreditation of the B-school Programs on 12th and 13th January 2020 by the Peer team from IACBE, USA. The MBA, M.Com, M.Com (Financial Accounting), BBA, B.Com and PhD –Management Programs successfully accredited by IACBE",
            "Webinar on AI Powered Disambiguation of Complex Text by Dr. Preethu Rose, Research Scientist, TCS on June 10, 2020",
            "Webinar on Future of Work: How To Stay Relevant For Industry And Jobs by Sushmita Choudhary, Head HR-Talent, OD & L&D at Richard Design Services India Pvt Ltd on May 19, 2020",
            "Online Interactive Session with Mr Deepak Srivastav, Founder & Director Media Strategy, AIW Media Pvt Ltd on Recession an Opportunity on June 9, 2020",
            "Webinar on \"Hop on to the Entrepreneurship Wagon Amidst Covid 19\" by Naveen Lakkur, a Serial Entrepreneur, Founder and Chief, Innovation Coach at Institute of Inspiring Innovation on June 20, 2020",
            "Webinar on Digital Transformation Leadership in Asia by Dr. Mudiarasan Kuppusamy, Dean of Faculty of Business and Technology on June 12, 2020",
            "Webinar on Smart Study Techniques and Preventive Measures for Covid 19 by Dr. Govindraj Pandith, Associate Professor and Program Manager of BCA and BSc Programs, AIMS Institutes on June 13, 2020",
            "Webinar on Industry Challenges And Possible Solutions At This Pandemic Situation of Covid-19 by Mr. Govindaraju NS, General Manager- Human Resource for M/s. Kern-Liebers India P on June 20, 2020",
            "Webinar on AI and New Normal in the World by Dr. Sharada Rao, Industry Speaker & Advisor, Board member - Clinformatik & Special Advisor to Industry Start ups on June 26, 2020",
            "Webinar on Entrepreneurship Opportunities Post Covid-19 with regard to Organic Farming by Mr. Yash Padhiyar, Founder of Heer Organics, Assistant Professor at SDAU Gujarat on July 25, 2020",
            "Webinar on New Generation Entrepreneurial Opportunities and Challenges by Mr.Kishor Jagirdar, Strategic Change Management Specialist, Startup Mentor, Angel Investor &Thought Leader on August 21, 2020",
            "Webinar on Supply Chain Evolution and Demystifying Interview by Dr. Debopam Chakrabarti, Guest Faculty in Premier B-Schools on 21st and 23rd December 2020",
            "Webinar on Solid Waste Management and Impediments to Circular Economy by Mr. Ram Ramisetty, Environmental and Sustainability Manager, Dubai Aviation Engineering Projects on December 26, 2020",
            "Seminar on Intellectual Property Rights by Ms. Soumita Mondal, Sr. Patent Agent, January 2020",
            "Workshop on GST by Sri M. G. Kodandaram, IRS(Retd), Assistant Director, Master Trainer of GST for CBEC, GOI, Faculty-NACEN and Advisory Board Member , AIMS Institutes on February 15, 2020",
            "A 15-hour virtual Faculty Development Program on \"Unleash The Educator in You\" by Mr. Ajit Kaikini – Director, Growth & Corporate Training from 21st April to 8th May 2020",
            "Global Immersion Program on Artificial Intelligence and Deep Learning Revolution by Prof. Guy Brown, Head of the Department of Computer Science at the University of Sheffield, UK on January 28, 2020",
            "Sessions on Meditation by Mr. Guruprasad, Heartfulness Meditation Institute, December 2020",
            "Collaboration with COURSERA to facilitate online certification courses for faculty members and students from April to September 2020",
            "Orientation Program on \"Using Google Meet Platform for Teaching & Learning\" on August 8, 2020",
            "Awareness program on Myths & Facts of Corona Virus by Dr. Somnath Chatterjee on March 7, 2020",
            "Session on Nutrition and Wellness by Ms. Smitha Mohan, Program Manager, Department of Hotel Management, AIMS Institutes on February 29, 2020"
        ],
        2019: [
            "Faculty Development Program on \"Education 4.0 - Andragogical Approach to Teaching Learning\" by Dr. T. Siddaiah, Chairperson, CDRC, AIMS Institutes, 21 December 2019",
            "FDP on Blooms Taxonomy by Dr. T. Siddaiah, Chairperson, CDRC, AIMS Institutes, 21 September 2019",
            "Symposium on Draft National Education Policy, as part of its nation building activities, was organized in two phases: Phase 1 on 20th June 2019 and Phase 2 on 13th July 2019",
            "Seminar on Diversity & Inclusion by Ms.Neelam Jain, Founder & CEO, PeriFerry and Ms. Anusha Caleb, Wealth Operations Analyst, ANZ on 22nd July 2019",
            "National Seminar on Platform Economy -Technology Driven Business Model, 17 May 2019",
            "Workshop on AI , ML, Cloud Computing & Robotics, 2nd February 2019",
            "Training Program for non teaching staff on Communication Skills and Telephone Etiquette by Prof. Tinoki Rodrigues on 22nd August 2019",
            "Workshop on How to prepare MCQs for comprehensive exam for IACBE by Dr. Ramesh Aiyer, 13th May 2019",
            "One day workshop on Personality Development for students of AIMS by Smt. Rekha Ramachandran, Sri Parmodh Natrajin and other volunteers and mentors of DISHA Foundation, 16 July 2019",
            "Awareness session on SURAKSHA APP in collaboration with Peenya Police Station, 6 December 2019",
            "Workshop on Fire & Safety in collaboration with Peenya Industrial Association, 16 April 2019",
            "National Seminar on Blockchain Technologyy – A New World of Trust organized in association with the Bangalore Chapter of Government Blockchain Association (GBA), 23 March 2019",
            "Awareness Program by Mr. Robin D'souza, a Cyber Security Expert, on Cyber Security in collaboration with K-TECH - Center of Excellence - Government of Karnataka, 5th November 2019",
            "Orientation program on \"How to use the Connexions Platform for Student Engagement\" by Dr. Jayashree Nair & Tanmoy Ghosh, 22nd August 2019",
            "Orientation Program On \"Outcome Based Teaching and Learning by Dr. T. Siddaiah, Chairperson, CDRC, AIMS Institutes, 6th August 2019",
            "Program on the Integration of Liberal Arts in Education by Ms. Padma Bhat, Chitrakala – Parishat, 20 September 2019",
            "Orientation on IACBE Accreditation Process with IACBE, USA on 9th January 2019",
            "Orientation Program on Process @ AIMS for newly joined staff, 19th June 2018"
        ],
        2018: [
            "Round Table Conference on Circular Economy for Global Sustainability, April 6, 2018",
            "Two day Faculty Development Program on Bloom's Taxonomy by Dr. B. V. Krishnamurthy, CKO at Peregrine Global, USA & Mr. Thotatriraman, founding Chairman of SEAA Trust, 6 & 7 September 2018",
            "FDP on Outcomes of Teaching - Learning process by Dr. T. Siddaiah & Dr. Jayashree Nair, 14 July 2018",
            "Seminar on Drug Abuse and Illicit Trafficking by Ms. Veena and Mr. Saurabh Sharma, Central Industrial Security Force, 15 June, 2018",
            "FDP on GST by Shri. M.G.Kodandaram, Principal faculty, Indirect Taxes and Narcotics, NACIN, Ministry of Finance, Government of India, 18 August 2018",
            "FDP on 3D Printing & Manufacturing in collaboration with Peenya Industrial Association and Think 3D by Mr. Xiaren Chen & Mr. Bohra, 27 August 2018",
            "FDP on ERIE Model in Education in collaboration with CL by Sivakumar Natarajan, Chief Executive Officer, Accendere Knowledge Management Services, 22 August 2018",
            "Two day Adobe Digital Disha Workshop in association with Adobe by Mrs.Jyothi Rao & Mr. Sudeep of IL&FS on 27th July & 4th August 2018",
            "Symposium on Environmental Protection in collaboration with Karnataka State Pollution Control Board by Sri. Kumaraswamy DR, Chief Environmental Officer, Karnataka State Pollution Control Board, 8th March 2018",
            "Orientation Program on the Academic Process at AIMS for newly joined faculties of all departments on 25th June 2018",
            "Awareness session on Best Practices in Cyber Space by Dr. Dhanya Menon, the first woman cyber investigator from India, Avanzo Cyber Security Solutions Pvt Ltd, 30 & 31 October 2018",
            "Orientation for non teaching staff on Hygiene & Wellbeing by Prof. Smitha Mohan, Assistant Professor, Department of Hotel Management on 27th August 2018",
            "Orientation program on How to Frame Critical ILO's by Dr. T. Siddiah, CDRC, AIMS Institutes on 8th June 2018",
            "Program on Cross Cultural Management by Dr. Sandhya Sastry, Director & HOD, International Strategy & Business, University of Northampton, UK on 26th July 2018"
        ],
        2017: [
            "FDP on Google Services for Outcomes Based Teaching Learning and Assessment, 15th December 2017",
            "International conference on Role of E-Commerce & Tourism in Creating Global Brands, December 9, 2017",
            "Round Table Conference on Pathways to Global Sustainability: Strategies and Frameworks, 10 March 2017",
            "Training for non teaching staff on Communication Skills and telephone etiquette by Dr. Chitra Dasgupta, Department of Languages, AIMS on 16th September 2017",
            "Workshop on the Pros and Cons of Cyber Crime by Ms. Pattathil Dhanya Menon, Cyber Crime Investigator, Avanzo Cyber Security Solutions Pvt Ltd, September 2017",
            "5 day FDP on Design Thinking with Tinker Labs by Mr. Ankur Grover & Ms. Samina from Tinker Labs on 20th September 2017",
            "Program on Fire Fighting and First Aid by Mr. Guru Prasad, the Director of Reliable Fire Services , (A Unit of G.K Enterprises) on 14th November 2017",
            "Awareness program on Substance Abuse - Impact on Health and Society in collaboration with National academy of customs, Indirect taxes and Narcotics by Mr. M.G Kodandaram, Assistant Director, NACIN, GOI, Mr.Ajay Dikshit, Additional Director General, NACIN, GOI and Dr. Suresh, Consultant, CGHS, GOI on 1st August 2017",
            "Orientation on revised Faculty Appraisal system by Mr. Priyanandan Reddy, COO, AIMS Institutes and Dr. Jayasree Nair, Director, IQAC on 13th June 2017",
            "FDP on A prologue to UI & UX by Mr. Karthik, Manager – UI, RMZ Corporation on July 29th, 2017 with AIMSENRICH"
        ],
        2016: [
            "International Conference on Emerging Trends in Revenue Management in the Service Industry, 12 February 2016",
            "Two day workshop on The Basic Principles of Cyber Security by Ms Dhanya Menon, Cyber Crime Investigator / Director, Avanzo Cyber Security Solutions Pvt Ltd on 7th & 8th of November 2016",
            "Workshop on case writing for the faculty members of AIMS by Prof. Ramesh Raj Aiyer, Director, ACIL on 23rd August 2016",
            "Symposium on Course Learning Outcomes Knowledge and Skills Gaps by Dr.Siddaiah, CDRC, AIMS, 16 to 27 July 2016",
            "FDP on A prologue to UI & UX by Mr. Karthik, Manager – UI, RMZ Corporation on 26th October 2016 in association with AIMSENRICH",
            "Orientation Program on Strengthening the role and functioning of Equal Opportunity Cell by Dr. Aravind A, Mulimani, Professor and Department Head of Karnataka university, Dharwad, Karnataka, 24th June 2016",
            "Orientation programme for senior faculty members on auditing of Academic and Administrative processes by Prof. Jayashree Nair, 18th November 2016",
            "Orientation on Curriculum Development for Value Added Program by Dr. Siddaiah, CDRC, AIMS Institutes, 15th July 2016",
            "Orientation on Involvement of Students of all the Programs of the institute in Rural Camp for social sensitization by Dr. Karunakar Reddy, ACCS on 16th August 2016",
            "Training program on Microsoft Office skills for all Admin staff"
        ],
        2015: [
            "International RTC on Sustainability development – New perspectives and emerging trends, 14th February, 2015",
            "National Conference Emerging trends and challenges in commerce and management, 16th April 2015",
            "FDP on Course Learning Outcomes & Assessments by Dr. M.M.Bagali, 17th December 2015",
            "FDP on Innovations and Best practices by Prof. S. Srinivasan, 28th November 2015",
            "FDP on Branding the I by Mr. Brian Varghese, 14th Nov 2015",
            "FDP on Design & Delivery of T&D by Mr. Vijai Basavaraj G, SLE Trainings, Bangalore on 30th May 2015",
            "FDP on Industry Orientation and Classroom teaching by Anantharama Krishnan, Prof. Ramesh Raj Aiyer and Dr. T Siddaiah on 31st October 2015",
            "Two day workshop On Quality Assessment & Accreditation by Dr. Mariamma Varghese on 10th and 11th of February",
            "Workshop on Knowledge Management by Dr. Siddaiah, Professor, Management Studies, 13th July 2015",
            "Training for non teaching staff on Communication Skills and Telephone Etiquette by Prof. Prabhas Pandit, Program Manager, MA Department, 1st April 2015",
            "Training on using the Apple systems for content development in collaboration with Styre, May 2015",
            "Orientation Program on DELNET (Developing Library Network) by Mr. Suresh and Mr. Subash H V from DELNET Bangalore on 12th June 2015"
        ],
        2014: [
            "9th National Research Conference conducted jointly with AIMA, SVKM and AMU on the \"Future of Management Education in India\". Dr Bibek Debroy, Niti Ayog, Mr S Mohanty, Secy, MoHRD, Mr D Chenoy, MD NSDC, Dr. M M Pant, Ex Pro VC IGNOU, Prof R T Krishnan, Director, IIMI were the key speakers for the event, 19th March 2014",
            "Workshop on Effective Strategic Leadership for Excellence, Dr. Balaveera Reddy, Ex-VC, VTU and Dr Vasudeva Naidu, Director IACE were the resource persons, 24th -26th April, 2014",
            "Seminar on Collaboration in research activities and raising of funds for research projects, Dr. Sandhya Shastry, Professor of Management, Cambridge, University, U.K. 6th March, 2014.",
            "International conference on Indo Japan Cooperation - Cultural Exchange and The Education System, Mr. Masakai Kitamura, Director-CCD, Shimane University and, Mr. Kishore Jagirdar, MoB – Indo Japan Global partnership were the keynote speakers, 26/02/2014.",
            "AICTE Sponsored National Conference on Research Trends in Computer Applications and Information Management. Dr. Swarnalatha Rao, Fellow CSI Professor, MVJCE, Dr. U. Dinesh Kumar, Prof, IIMB and Mr. Sunil Kumar, CEO, Greenestep Technologies were the keynote speakers, 24th & 25th January 2014.",
            "FDP on Neuro lingusitic Programming.",
            "Workshop on using Business Simulation Games.",
            "Training Program on MS Office – Making Presentations.",
            "Symposium on revising and handling CBCS scheme for BHM Program.",
            "Orientation programs programs by the respective faculty members who attended the syllabus revision workshops organized by the University.",
            "Training program on Usage of AIMS Feedback System (AFS), Dept of IT.",
            "FDP on use of Statistical tools and techniques for teaching and research.",
            "Workshop on Outcomes based Assessment.",
            "FDP on Designing the Model for Evaluation using Comprehensive Exams for Outcomes based Assessment."
        ],
        2013: [
            "National Seminar on Inclusive growth and sustainability in collaboration with Dept of Commerce, BU. Dr. Thimme Gowda, VC – BU, Dr. M. Ramachandra Gowda,, Chairman, Dept. of Commerce , BU, Dr. Kshiti Bhushan Das, Dean, Comm & Mgmt – Utkal Univ, Dr. Ananthan B. R, VC – Rani, Chenamma Univ, Karnataka were the resource persons, 5th to 7th December 2013.",
            "Workshop on Cleaner Production Technology Technology in Association with Peenya Industries Association (PIA), Mr. Venkatesh, President, Peenya Industries Association was the keynote speaker, 10 December 2013.",
            "NHRD Conclave on HR- New Age Work Place. Mr Ramanathan – President, Chapter, Mr H D Charles – Secy, Chapter, Mr B Subramaniam GM, CCD, Mr Manda IBM, Mr H, Sabunwala E&Y, Mr OP Goel GM, HR Bosch were the key speakers in addition to Eminent HR Heads of Various IT Organizations, 3rd December 2013.",
            "NAAC Sponsored National Conference on Integration of Technology in Higher Education -A Strategic Advantage. Prof. Rajasekharan Pillai, ex-director, NAAC, Dr. Mariamma Verghese, Sr. NAAC Consultant, Dr. Balaveera Reddy,Ex-VC, VTU were the guest speakers on the occasion, 13th & 14th June 2013.",
            "National Conference on Role of Literature: Changing Attitudes Towards Gender. Dr. Manu Chakravarthy, Noted Film critic, Dr. R. Indira, Director – Intnl. Centre, Mysore University, Dr. Vaishali Srinivas, Fmr Chairperson, Dept. of English , BU and Dr. Brian Mendonca, Goa were the resource persons, 23th & 24th August 2013.",
            "Hacktricks 2013-National Workshop on Ethical hacking and Network Security, Dr. N. J. Rao, Professor – IISc was the keynote speaker for the event, 23th & 24th August 2013.",
            "Training program in Advanced Excel.",
            "Training program on Social Media Networking and presentation skills.",
            "Train the trainer program on innovative teaching methods.",
            "Apple MAC OS \"Spotlight\" training program.",
            "FDP on Big Data Analytics using SPSS.",
            "Workshop on using OPAC by the Library department."
        ],
        2012: [
            "BigCom Round Table conference 2012. Justice Viswanath Reddy, Hyderabad, Mr. Sujad bin Ali, Delloite, Mr. Pavan Bhattiprolu, Executive President – Big Com were the resource persons, 2nd & 3rd November 2012.",
            "International Conference on driving and sustaining High Quality Education across Asia. Mr. Denis Gash, President, IACBE, US, M. Paul Geong, Chairman, IKST and Mr. Vivek, CEO, Invicus Ltd were the keynote speakers, 26th & 27th July 2012.",
            "FDP on Mac OS Support Essentials -SNOW 101,SNOW 100, iWork.",
            "FDP on Magic of making teaching effective.",
            "Vocational Skill – Network Marketing.",
            "Workshop on creating the institutional repository.",
            "Training on Federated search using Libsys 7.",
            "FDP on usage of Open Education resources like SAP and NPTEL."
        ],
        2011: [
            "Pragmatics: New Horizons of Theory and Practice and the Calling of Planetary Conversations, University, Ms. Sudha Reddy, Activist-Human and Prof. Raymond, Univ. of Sydney were the resource persons, 23rd February, 2011.",
            "Asian Forum for Social Theory on \"Visions of Asia and the Challenges of Creative Social Theorizing\", Dr. Subhash Sharma, Dean-IBA, Mr. Anugraha John, CEO, Global Citizen for Sustainable development were the key speakers, 21st & 22nd February, 2011.",
            "Workshop on Case Study Writing.",
            "Workshop on Enhancing the teaching skills.",
            "Workshop on Business Simulation.",
            "XED Business awareness program, XED.",
            "Workshop on designing the Exit Survey.",
            "Orientation program on Design of outcomes based programs."
        ]
    }

    const years = ['2025-26', '2024-25', '2023-24', '2022-23', 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011]

    return (
        <div className='relative overflow-hidden'>
            {/* Light Green Header Strip */}
            <div className='py-10 border-t-[1px] border-black px-4 lg:px-8'>
                <div className='container mx-auto'>
                    <div className='flex flex-col'>
                        <h3 className='text-2xl lg:text-4xl playfair-300 text-[#0C2165] mb-4'>
                            Activities of IQAC
                        </h3>
                        <h5 className='monser-600 text-black'>
                            MAJOR ACTIVITIES OF THE INTERNAL QUALITY ASSURANCE CELL
                        </h5>
                    </div>
                </div>
            </div>

            {/* Main Content Area - Single Column Timeline */}
            <div className='bg-white py-10'>
                <div className='container mx-auto px-6 lg:px-8'>
                    <div className='absolute top-[40%] right-0 md:block hidden rotate-180'>
                        <Image
                            src="/school-circle.svg"
                            alt="School Circle Background"
                            width={150}
                            height={150}
                            className=" rotate-180"
                        />
                    </div>
                    <div className='max-w-4xl mx-auto'>
                        {/* Timeline Container */}
                        <div className='relative'>
                            {/* Vertical Timeline Line - Light Purple/Pink */}
                            <div className='absolute top-4 bottom-4 w-[1px] bg-black'></div>

                            {/* Year Sections */}
                            {years.map((year, index) => (
                                <div key={year} className='relative mb-8'>
                                    {/* Timeline Node - SVG Image */}
                                    <div className='absolute left-[0.4px] -top-1 transform -translate-x-1/2'>
                                        <Image
                                            src="/patents/patents-timeline.svg"
                                            alt="Timeline Node"
                                            width={50}
                                            height={50}
                                            className="cover"
                                        />
                                    </div>

                                    {/* Year Button */}
                                    <div >
                                        <button
                                            onClick={() => setSelectedYear(year)}
                                            className={`md:ml-15 ml-10 px-6 py-1 rounded-full transition-all duration-300 border-1 flex items-center justify-between ${selectedYear === year
                                                ? 'bg-[#A22877] text-white border-[#A22877]'
                                                : 'bg-white text-[#A22877] border-[#A22877]'
                                                }`}
                                        >
                                            <span className='font-semibold monser-600 pr-2 text-[20px]'>Year {year}</span>

                                            <svg
                                                className={`w-5 h-5 transition-transform duration-300 ${selectedYear === year ? 'rotate-180' : ''
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>

                                        </button>
                                    </div>

                                    {/* Content Box - Light Teal/Mint Green */}
                                    {selectedYear === year && (
                                        <div className='md:ml-20 ml-10 mt-4 bg-[#E1F9F4] p-6 rounded-2xl'>
                                            <ul className='list-none text-start monser-400 flex flex-col gap-3'>
                                                {iqacData[year]?.map((activity, activityIndex) => (
                                                    <li key={activityIndex} className='flex items-start gap-3'>
                                                        <span className='text-black mt-1'>•</span>
                                                        <span className='text-sm lg:text-base text-black'>
                                                            {activity}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JrActivitiesTimeline
