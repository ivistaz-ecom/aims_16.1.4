import React from "react"
import Button from "@/shared/Button"

const StudentSupport = () => {
  return (
    <div className="lg:px-8 px-4">
      <div className="container mx-auto py-10">
        <hr className="border-pink-200 mb-4" />

        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold text-[#0d2352] leading-tight mb-4 pt-5">
          Student Support That Helps <br /> You Take AIM
        </h3>

        {/* Paragraphs */}
        <p className="text-gray-700 mb-4">
          At AIMS, students are never alone in their research journey. The AIMS
          Centre for Research ensures that learners at the undergraduate and
          postgraduate level have access to the mentorship, tools, and
          institutional support needed to pursue research with clarity.
        </p>
        <p className="text-gray-700 mb-8">
          From training in tools and guidance to prepare research projects in
          colleges, students benefit from workshops and access to faculty and
          industry experts. This student-first approach is what makes AIMS one
          of the leading colleges with research guidance to endorse the research
          proposals in Bangalore.
        </p>

        {/* Important Links */}
        <h4
          className="text-xl text-[#0d2352] mb-4"
          style={{ fontWeight: "600" }}
        >
          Important Links
        </h4>
        <div className="flex flex-wrap gap-4 mb-8">
          <Button
            variant="placement"
            href="/aims-journal-of-research"
            showReadMore={false}
          >
            AIMS Journal of Research
          </Button>
          <Button
            variant="placement"
            href="/articles-publications"
            showReadMore={false}
          >
            AIMS Faculty Articles & Publications
          </Button>
          <Button
            variant="placement"
            href="/ACR - Policy (1).pdf"
            showReadMore={false}
            target="_blank"
          >
            Research policy
          </Button>
          {/* <Button showReadMore={false}>Research Advisory & Review Committees</Button> */}
        </div>

        {/* Divider */}
        <hr className="border-pink-200 mb-5" />

        {/* Contact */}
        <p className="text-gray-700 mb-2 pt-4">
          If you are interested in research, partnership opportunities, or
          mentorship, we are happy to support you.
        </p>
        <p>
          Contact us at:{" "}
          <a
            href="mailto:research@theaims.ac.in"
            className="text-[#531675]"
            style={{ fontWeight: "600" }}
          >
            research@theaims.ac.in
          </a>
        </p>
      </div>
    </div>
  )
}

export default StudentSupport
