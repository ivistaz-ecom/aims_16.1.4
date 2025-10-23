"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "../../shared/Button"

const Programs = () => {
  // Program data structure
  const undergraduatePrograms = [
    {
      id: "bba-general",
      title: "BBA (General)",
      description:
        "A comprehensive program designed to develop strong fundamentals across business domains - finance, marketing, HR, and entrepreneurship, while encouraging leadership and strategic thinking from day one.",
      image: "/school-of-business/bba-general.webp", // You'll need to add this image
      link: "/business-school/bachelor-business-administration",
    },
    {
      id: "bba-aviation",
      title: "BBA (Aviation Management)",
      description:
        "Designed for students with a sharp eye for aviation and airport management, this specialisation blends business education with operational insights into one of the fastest-growing sectors in India.",
      image: "/school-of-business/bba-aviation.webp", // You'll need to add this image
      link: "/business-school/bachelor-business-administration-aviation-management",
    },
  ]

  const postgraduateProgram = {
    id: "mba",
    title: "MBA",
    description:
      'An <b>IACBE accredited</b>, <br class="md:hidden block" /> industry-attuned program that strengthens analytical and leadership skills while immersing students in real-world business challenges. Among the <b>Top 1% <br class="md:hidden block" /> B-Schools in India</b>, the MBA at AIMS is recognised for its placement record and applied learning.',
    image: "/school-of-business/mba.webp", // You'll need to add this image
    link: "/business-school/master-business-administration",
    highlights: ["IACBE accredited", "Top 1% B-Schools in India"],
  }

  const doctoralProgram = {
    id: "doctoral",
    title: "Doctoral Program",
    subtitle: "PhD in Management",
    description:
      "The PhD program is built for experienced professionals and scholars ready to explore strategic research in business disciplines. With rigorous guidance and global exposure, AIMS helps you shape insights that influence practice, policy, and progress.",
    image: "/school-of-business/doctoral-program.webp", // You'll need to add this image
    link: "/phd-doctoral-programs",
  }

  return (
    <div className="py-10 relative overflow-hidden">
      {/* Background SVG */}
      <div className="absolute top-[50%] left-0 md:block hidden">
        <Image
          src="/school-circle.svg"
          alt="School Circle Background"
          width={250}
          height={100}
          className=" rotate-180"
        />
      </div>

      {/* Doctoral Program Section */}
      <section>
        <h3 className="text-center text-[#0C2165]">{doctoralProgram.title}</h3>

        <div className="bg-[#531574] overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-8 items-center py-4">
              <div className="flex justify-center lg:col-span-1 min-h-[40vh]">
                <div className="relative">
                  {/* Circular background */}
                  <div className="w-full h-full rounded-full overflow-hidden p-4 flex items-center justify-center">
                    <Image
                      src={doctoralProgram.image}
                      alt={doctoralProgram.subtitle}
                      width={320}
                      height={320}
                      className="object-cover"
                    />
                  </div>
                  {/* Decorative circles */}
                  {/* <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-purple-300/50 rounded-full"></div>
                                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-purple-300/30 rounded-full"></div> */}
                </div>
              </div>
              <div className="text-white lg:col-span-2">
                <h3 className="text-white">{doctoralProgram.subtitle}</h3>
                <p className="text-white/90 text-lg lg:text-xl mb-8 leading-relaxed">
                  {doctoralProgram.description}
                </p>
                <Link href={doctoralProgram.link}>
                  <Button
                    variant="placement"
                    className="text-[12px] lg:text-[16px] text-white"
                  >
                    Explore Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 lg:px-8">
        <div className="container mx-auto relative z-10">
          {/* Postgraduate Program Section */}
          <section className="mt-10">
            <h3 className="text-center text-[#0C2165]">Postgraduate Program</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 gap-0 items-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="lg:order-1 order-2 md:p-8 p-4">
                <h4 className="text-2xl lg:text-[24px] font-bold text-[#0C2165] monser-600 text-left">
                  {postgraduateProgram.title}
                </h4>
                <p
                  className="text-gray-700 text-left mb-6 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: postgraduateProgram.description,
                  }}
                />
                <Link href={postgraduateProgram.link}>
                  <Button variant="placement" className="text-left">
                    Explore Now
                  </Button>
                </Link>
              </div>

              <div className="lg:order-2 order-1 relative h-auto">
                <Image
                  src={postgraduateProgram.image}
                  alt={postgraduateProgram.title}
                  height={400}
                  width={800}
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Undergraduate Programs Section */}
          <section className="mt-10">
            <h3 className="text-center text-[#0C2165]">
              Undergraduate Programs
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {undergraduatePrograms.map((program) => (
                <div
                  key={program.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-auto">
                    <Image
                      src={program.image}
                      alt={program.title}
                      height={400}
                      width={800}
                      className="object-contain"
                    />
                  </div>
                  <div className="md:p-8 p-4">
                    <h4 className="text-2xl lg:text-[24px] font-bold text-[#0C2165] monser-600 mb-4 text-left">
                      {program.title}
                    </h4>
                    <p className="text-gray-700 text-left mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <Link href={program.link}>
                      <Button
                        variant="placement"
                        className="text-[12px] lg:text-[16px]"
                      >
                        Explore Now
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Programs
