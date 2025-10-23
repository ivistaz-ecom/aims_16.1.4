"use client"
import React, { useState } from "react"
import Image from "next/image"

const CfsStudentEvents = () => {
  const [selectedYear, setSelectedYear] = useState(2022)
  const [expandedEvent, setExpandedEvent] = useState(0) // Default to first event (index 0)

  const eventsData = {
    2022: [
      {
        title:
          "International Summit on Sustainable Development - Global Challenges, November 2022",
        objective:
          "The main objective of the summit was to have deliberations on 3 sustainable development goals (SDG):",
        sdgs: [
          "Quality Education - Equitable and lifelong learning opportunities",
          "Life on Land - Protect, Promote, and Restore Terrestrial Eco System",
          "Decent work and economic growth",
        ],
        outcomes:
          "The outcomes of the summit will be a better understanding, appreciation and make recommendations towards achievement of the UN SDGs and make the world a better place to live.",
        conclusion:
          "The Summit concluded by the launch of the Global Economic Forum brochure of Bali summit to be held on Jan 26th, 2023 by all the delegates of SUNFO and AIMS management.",
      },
      {
        title:
          "International Seminar on Global Ecosystem for a Sustainable Earth: Celebrating the Global Un-plastic Day, September 2022",
        objective:
          "Today, the biggest crisis that hunts our planet is the rampant use of plastic. Its prolonged and unscientific use leads to the release of various toxic chemicals into the air causing public health hazards. In order to highlight the aftereffects of plastic pollution and to eliminate the uncontrolled use of plastic, Global Un-plastic Day is celebrated every year.",
        outcomes:
          "As part of the event, AIMS Centre for Sustainability organised a wide variety of programs, awareness campaigns and a seminar pointing out the drawbacks of plastic and its destructive effect on nature, in addition to the keynote address by Mr. Erik Solheim, 6th Executive Director of UNEP, New York and State Guest of the Govt. of India and Govt. of Karnataka who highlighted various initiatives of the Indian Government and how we can create a sustainable ecosystem for a better tomorrow.",
        // conclusion: "Participants committed to implementing sustainable practices in their daily lives and academic institutions."
      },
    ],
    2019: [
      {
        title: "Campaign on Engine Stop and No Horn, August 2019",
        objective: `An awareness campaign was conducted to "stop the engine" at stop light and “no horn” campaign at Jalahalli cross, Bangalore.`,
        // outcomes: "Students gained hands-on experience with sustainable technologies and practices.",
        // conclusion: "Workshop participants developed action plans for their communities."
      },
      {
        title:
          "Seminar on Water Conservation and Rainwater Harvesting Awareness, August 2019",
        objective: `A water conservation and rain water harvesting awareness seminar was conducted at Government School, SRS stop, Peenya, Bangalore. More than 700 students participated.`,
        // outcomes: "Students gained hands-on experience with sustainable technologies and practices.",
        // conclusion: "Workshop participants developed action plans for their communities."
      },
      {
        title: "Tree Plantation Drive, July 2019",
        objective: `A tree plantation drive by students of AIMS in collaboration with Rotary club was conducted on 26th July at Beggars colony on Magadi road, Bangalore.`,
        // outcomes: "Students gained hands-on experience with sustainable technologies and practices.",
        // conclusion: "Workshop participants developed action plans for their communities."
      },
      {
        title: "Seminar on Sustainable Living, July 2019",
        objective: `A seminar was conducted on Sustainable living on 26th July to new batch of MBA students. The resource person was Ms. Smitha Mohan of BHM department.`,
        // outcomes: "Students gained hands-on experience with sustainable technologies and practices.",
        // conclusion: "Workshop participants developed action plans for their communities."
      },
      {
        title: "World Environment Day, June 2019",
        objective: `World Enviornment Day was observed on 7th June 2016. Students from several departemts particpated in the activities. A rally was taken out in Peenya industrial area to spread the awareness about keeping environment clean.`,
        // outcomes: "Students gained hands-on experience with sustainable technologies and practices.",
        // conclusion: "Workshop participants developed action plans for their communities."
      },
      {
        title: "Earth Day and Earth Hour, April 2019",
        objective: `Earth day and earth hour was observed by ACS in colloboartion with ACCS and Social welfare department. A rally was oragnsied to create awreness about keeping earth sustainable.Students carried placards with theme realted with sustainability such as green power,vehicular pollution, tree cutting, water savings, solid waste etc.`,
        // outcomes: "Students gained hands-on experience with sustainable technologies and practices.",
        // conclusion: "Workshop participants developed action plans for their communities."
      },
      {
        title: "Seminar on E-waste Management, March 2019",
        objective: `A seminar was conducted on E waste management for UG students . The resource person was Ms. Dakshyaani a well known solid waste management expert. The program was sponsored under the initiative of Digital India of government of India.`,
        outcomes:
          "The event was sponsored by Godrej, Panasonic and Haier India.",
        // conclusion: "Workshop participants developed action plans for their communities."
      },
      {
        title: "Research Paper Publication, March 2019",
        objective: `A research paper authored by Dr. Brahm Sharma, (ACS - Director) ,Mr. Ankit Paul of IV sem MBA and Ms.Roopashree g, VI semester MCA on the topic "Rag pickers: a viable solution to waste management with specific reference to Bengaluru" was published in "international journal of research and analytical reviews" an International Peer Reviewed, Open Access Journal IJRAR | E-ISSN 2348-1269, P- ISSN 2349-5138 Impact factor: 5.75 and UGC and ISSN Approved.`,
        // outcomes: "The event was sponsored by Godrej, Panasonic and Haier India.",
        // conclusion: "Workshop participants developed action plans for their communities."
      },
      {
        title: "Volunteer Partner in CSR Conference, February 2019",
        objective: `Students and Professors from AIMS participated in Karnataka CSR Conference 2109 organised by Rotary at KFCCI building on KG road. AIMS was volunteer partner for the conference and the AIMS logo appeared on all publicity material of the CSR Conference.`,
        // outcomes: "The event was sponsored by Godrej, Panasonic and Haier India.",
        // conclusion: "Workshop participants developed action plans for their communities."
      },
    ],
    2018: [
      {
        title: "Project on Sustainability by Students, December 2018",
        objective: `MCA III semester students did two projects on green power and solid waste managment during the month.`,
        // outcomes: "Implementation of waste segregation, energy conservation, and green building practices.",
        // conclusion: "Campus became a model for sustainable institutional practices."
      },
      {
        title: "Session to Sensitize Students on Sustainability, November 2018",
        objective: `A Session was conducted for students of MFA & MBA to sensitize students about sustainability by Dr. Brahm Sharma, Director - ACS.`,
        // outcomes: "Implementation of waste segregation, energy conservation, and green building practices.",
        // conclusion: "Campus became a model for sustainable institutional practices."
      },
      {
        title: "Woman Entrepreneurship Conclave, September 2018",
        objective: `30 girls students participated from various programs of AIMS Institutes. 4 research project on sustainability were submitted for the competition by students of AIMS.`,
        // outcomes: "Implementation of waste segregation, energy conservation, and green building practices.",
        // conclusion: "Campus became a model for sustainable institutional practices."
      },
      {
        title: "International Conference Participation, September 2018",
        objective: `Dr. Sharma participated in international conference at CBSMS on collective ands sustainable actions for transparency and ethics in higher education.`,
        // outcomes: "Implementation of waste segregation, energy conservation, and green building practices.",
        // conclusion: "Campus became a model for sustainable institutional practices."
      },
      {
        title: "Industry Awareness Campaign, August 2018",
        objective: `ACS and MBA department conducted awareness campaign on sustainability in Peenya Industrial Area, Bangalore.`,
        // outcomes: "Implementation of waste segregation, energy conservation, and green building practices.",
        // conclusion: "Campus became a model for sustainable institutional practices."
      },
      {
        title: `Campaign on "Let us be the Change", August 2018`,
        objective: `BCA and ACS did a campaign with NGO "Let us be the change" to beautify area in Laggare by painting the a wall.`,
        // outcomes: "Implementation of waste segregation, energy conservation, and green building practices.",
        // conclusion: "Campus became a model for sustainable institutional practices."
      },
      {
        title: `Awareness Program for the Students, August 2018`,
        objective: `AIMS Institutes students were given topics on sustainability and they were asked to make posters to highlight one cause.`,
        // outcomes: "Implementation of waste segregation, energy conservation, and green building practices.",
        // conclusion: "Campus became a model for sustainable institutional practices."
      },
      {
        title: `World Environment Day, August 2018`,
        objective: `A rally was conducted by ACS and MBA in Peenya area to highlight the need for following sustainable practices.`,
        // outcomes: "Implementation of waste segregation, energy conservation, and green building practices.",
        // conclusion: "Campus became a model for sustainable institutional practices."
      },
      {
        title: `AIMS Institutes Participated in CSR Conclave, June 2018`,
        objective: `50 students from MBA department participated in CSR conclave organised by FKCCI.`,
        // outcomes: "Implementation of waste segregation, energy conservation, and green building practices.",
        // conclusion: "Campus became a model for sustainable institutional practices."
      },
      {
        title: `Yunus Social Day Participation, June 2018`,
        objective: `30 students and 5 faculty members participated in Yunus Social day 2018 conference at Infosys campus.`,
        // outcomes: "Implementation of waste segregation, energy conservation, and green building practices.",
        // conclusion: "Campus became a model for sustainable institutional practices."
      },
      {
        title: `International Round Table Conference, April 2018`,
        objective: `ACS and MBA organised an International round table conference on the topic "Circular Economy for Global Sustainability from Aspiration to Implementation".`,
        // outcomes: "Implementation of waste segregation, energy conservation, and green building practices.",
        // conclusion: "Campus became a model for sustainable institutional practices."
      },
      {
        title: `Earth Day Celebration, April 2018`,
        objective: `Earth Day was observed in the on 28th April, 2018 and the chief guest for the event was Dr. Sadiq Mohammed , President, Green Hatters delivered a lecture.`,
        // outcomes: "Implementation of waste segregation, energy conservation, and green building practices.",
        // conclusion: "Campus became a model for sustainable institutional practices."
      },
    ],
    2017: [
      {
        title: `International Conference, December 2017`,
        objective: `MBA and ACS organised an international conference on “Role of E-Commerce and Tourism in Creating Global Brands.”`,
        // outcomes: "Enhanced community awareness and participation in environmental initiatives.",
        // conclusion: "Established long-term partnerships with local organizations."
      },
      {
        title: `Participated in "Rally for Rivers" Campaign, December 2017`,
        objective: `20 students participated in rally for rivers campaign.`,
        // outcomes: "Enhanced community awareness and participation in environmental initiatives.",
        // conclusion: "Established long-term partnerships with local organizations."
      },
    ],
    2016: [
      {
        title: "Lecture on Climate Realty, August 2016",
        objective:
          "A lecture was delivered on climate realty by Mr.Ramkumar, CEO of “Our Native Village”, Bangalore.",
        // outcomes: "Publication of research papers and establishment of research networks.",
        // conclusion: "Strengthened academic focus on sustainability research."
      },
    ],
    2015: [
      {
        title: "Joint Sanitation Campaign, July 2015",
        objective:
          "Joint Sanitation campaign and building of toilets with students from USA on 15, 21 and 25th July 2015 in collaboration with an NGO - Global citizens for sustainable development.",
        // outcomes: "Regular awareness campaigns and community engagement activities.",
        // conclusion: "Established a sustainable framework for student leadership in environmental causes."
      },
      {
        title: `Lecture on “Sustainability and Mahatma Gandhi", August 2015`,
        objective: `Lecture on “Sustainability and Mahatma Gandhi” by Mr. Don McAvanche better known as American Gandhi on August 4, 2015.`,
        // outcomes: "Regular awareness campaigns and community engagement activities.",
        // conclusion: "Established a sustainable framework for student leadership in environmental causes."
      },
      {
        title: `Lecture Series on "How to convert bio mass to biogas and on green energy", May 2015`,
        objective: `Lecture Series by Mr. Girish Chatanya, Managing Director, Venson Green and Venson Electric on how to convert bio mass to bio gas and on green energy.`,
        // outcomes: "Regular awareness campaigns and community engagement activities.",
        // conclusion: "Established a sustainable framework for student leadership in environmental causes."
      },
    ],
  }

  const years = [2022, 2019, 2018, 2017, 2016, 2015]

  const toggleEvent = (eventIndex) => {
    setExpandedEvent(expandedEvent === eventIndex ? null : eventIndex)
  }

  const handleYearChange = (year) => {
    setSelectedYear(year)
    setExpandedEvent(0) // Set first event as expanded by default when year changes
  }

  return (
    <div className="justify-start items-start mb-10 flex flex-col relative overflow-hidden mx-15">
      <div className="px-4 lg:px-8">
        <div className="">
          <div className="flex flex-col bg-transparent relative z-10">
            {/* Header Section */}
            <div className="text-left mb-12">
              <h3 className="text-[32px] lg:text-[56px] playfair-300 text-[#0C2165] mb-4">
                Student Engagement <br className="md:block hidden" />
                and Events
              </h3>
              <p className="text-lg lg:text-[20px] monser-400 text-gray-700 max-w-4xl">
                Through continuous sustainability awareness activities for
                students, ACS ensures that students not only learn, but
                participate. Key milestones include:
              </p>
            </div>

            {/* Timeline Layout */}
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8">
              {/* Year Navigation */}
              <div className="flex flex-row flex-wrap justify-start lg:flex-col lg:flex-nowrap gap-2 lg:gap-4 flex-shrink-0 lg:col-span-2 w-full mb-6 lg:mb-0">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => handleYearChange(year)}
                    className={`text-center px-3 py-2 rounded-full transition-all duration-300 text-sm whitespace-nowrap flex-shrink-0
                                          ${
                                            selectedYear === year
                                              ? "bg-[#A22877] text-white shadow-lg"
                                              : "border-2 border-[#A22877] text-[#A22877] hover:bg-[#A22877] hover:text-white"
                                          }`}
                  >
                    <span className="font-semibold">{year}</span>
                  </button>
                ))}
              </div>

              {/* Event Details */}
              <div className="flex-1 md:border-l-2 border-t-2 md:border-t-0 border-black md:pl-8 pl-0 min-h-[400px] lg:col-span-10 w-full">
                {eventsData[selectedYear]?.map((event, index) => (
                  <div key={index} className="">
                    <button
                      onClick={() => toggleEvent(index)}
                      className="w-full flex items-center justify-between text-left hover:bg-gray-50 rounded-lg transition-colors duration-200 p-2"
                    >
                      <h5 className="lg:text-2xl monser-600 text-[#0C2165] flex-1 leading-tight text-left">
                        {event.title}
                      </h5>
                      <Image
                        src="/nirf/arrow.svg"
                        alt="Arrow"
                        width={20}
                        height={20}
                        className={`w-4 h-4 md:w-5 md:h-5 flex-shrink-0 transition-transform duration-200 ml-4 ${
                          expandedEvent === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedEvent === index && (
                      <div className=" space-y-4 bg-gray-100 p-4 rounded-lg mb-2">
                        <p className="monser-400">{event.objective}</p>

                        {event.sdgs && (
                          <div>
                            <ul className="monser-400 space-y-2">
                              {event.sdgs.map((sdg, sdgIndex) => (
                                <li
                                  key={sdgIndex}
                                  className="flex items-start gap-3"
                                >
                                  <span className="text-[#A22877]">•</span>
                                  <span>{sdg}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {event.outcomes && (
                          <p className="monser-400">{event.outcomes}</p>
                        )}

                        {event.conclusion && (
                          <p className="monser-400">{event.conclusion}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Concluding Statement */}
          <div className="mt-2 pt-4">
            <p className="text-lg lg:text-[20px] monser-400 text-gray-700 max-w-4xl">
              These initiatives allow students to experience the arc from
              classroom awareness to field action, strengthening their
              confidence as future leaders of sustainable change.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CfsStudentEvents
