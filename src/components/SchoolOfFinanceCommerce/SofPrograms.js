"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "../../shared/Button"

const SofPrograms = () => {
  // Program data structure
  const undergraduateProgram = {
    id: "bcom",
    title: "B.Com–Bachelor of Commerce",
    description:
      "Our B.Com program sets the stage for future commerce professionals with a robust curriculum and tailored specialisations that combine core subjects with value-added certifications and industry-led projects.",
    image: "/school-of-finance/bcom.webp", // You'll need to add this image
    link: "/finance-commerce-school/bachelor-of-commerce",
  }

  const postgraduateProgram = {
    id: "mba",
    title: "M.Com–Master of Commerce",
    description:
      "A postgraduate program designed for those who wish to dive deeper into the mechanics of commerce and finance. M.Com at AIMS is not just about academic depth, it’s about real-world applicability. ",
    image: "/school-of-finance/mcom.webp", // You'll need to add this image
    link: "/finance-commerce-school/master-of-commerce",
  }

  const doctoralProgram = {
    id: "doctoral",
    title: "Doctoral Program",
    subtitle: "PhD in <br /> Commerce ",
    description:
      "Our doctoral program is designed for scholars ready to contribute original insights to the world of commerce and management. With NAAC ‘A’ grade credentials and expert faculty, AIMS provides the environment, resources, and mentorship to help you pursue purposeful research aligned to your interests and ambitions.",
    image: "/school-of-finance/sof-doctoral-program.webp", // You'll need to add this image
    link: "/phd-doctoral-programs",
  }

  return (
    <div className="pt-10 relative overflow-hidden">
      {/* Background SVG */}
      <div className="absolute top-[55%] left-0 md:block hidden z-0">
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
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h3 className="text-[#0C2165]">{doctoralProgram.title}</h3>
        </div>
        <div className="bg-[#531574] overflow-hidden px-4 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-8 items-center md:p-8 p-4">
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
                <h3
                  className="text-white"
                  dangerouslySetInnerHTML={{ __html: doctoralProgram.subtitle }}
                />
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
        <div className="container mx-auto relative">
          {/* Postgraduate Program Section */}
          <section className="pt-10">
            <h3 className="text-[#0C2165] text-center">Postgraduate Program</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="lg:order-2 order-1 relative h-auto">
                <Image
                  src={postgraduateProgram.image}
                  alt={postgraduateProgram.title}
                  height={400}
                  width={800}
                  className="object-cover"
                />
              </div>
              <div className=" order-2 md:p-8 p-4">
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
            </div>
          </section>

          {/* Undergraduate Programs Section */}
          <section className="py-10">
            <h3 className="text-[#0C2165] text-center">
              Undergraduate Program
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="lg:order-1 order-2 md:p-8 p-4">
                <h4 className="text-2xl lg:text-[24px] font-bold text-[#0C2165] monser-600 text-left">
                  {undergraduateProgram.title}
                </h4>
                <p
                  className="text-gray-700 text-left mb-6 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: undergraduateProgram.description,
                  }}
                />
                <Link href={undergraduateProgram.link}>
                  <Button variant="placement" className="text-left">
                    Explore Now
                  </Button>
                </Link>
              </div>
              <div className="lg:order-2 order-1 relative h-auto">
                <Image
                  src={undergraduateProgram.image}
                  alt={undergraduateProgram.title}
                  height={400}
                  width={800}
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default SofPrograms
