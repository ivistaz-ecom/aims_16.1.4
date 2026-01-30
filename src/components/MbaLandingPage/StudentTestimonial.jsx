"use client"
import React from "react"
import Image from "next/image"

const StudentTestimonial = () => {
  const testimonial = {
    name: "Rishika Srivastav",
    batch: "MBA (2024 Batch)",
    image: "/mba-landing/Rishika_Srivastav.webp",
    quotes: [
      "I am from an MBA background with a specialisation in HR, and I am currently working as an HR intern.",
      "AIMS Institutes prepared us for interviews through multiple formats such as AI-based interviews, mock interviews, and structured pre-placement training, which helped me understand how to apply what I learned in class to real interview situations.",
      "If I had to describe my journey at AIMS, it would be Enrichment. The one advice I would like to give my juniors is to trust the process and grab every opportunity that comes your way, AIMS Institutes keeps providing them."
    ]
  }

  return (
    <section className="py-12 mb-10 px-4" style={{ backgroundColor: "#531675" }}>
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl playfair-600 mb-5">
          Student Testimonial
        </h2>

        {/* Testimonial Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Side - Student Image and Info */}
          <div className="flex flex-col items-center lg:items-start">
            {/* Image Container with dashed border */}
            <div className=" rounded-lg p-4 mb-4">
              {/* Circular Image with purple background */}
              <div className="relative w-[200px] h-[280px] md:w-[240px] md:h-[320px] flex items-center justify-center pb-10">
               
                <div className="relative z-10 w-full h-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-contain object-bottom"
                    sizes="(max-width: 758px) 200px, 240px"
                  />
                </div>
              </div>
            </div>

            {/* Student Name and Batch */}
            <div className="text-center lg:text-center w-full">
              <h3 className="text-white monser-700 text-xl md:text-2xl mb-1 !text-[24px]">
                {testimonial.name}
              </h3>
              <p className="text-white/80 monser-400 text-sm md:text-base">
                {testimonial.batch}
              </p>
            </div>
          </div>

          {/* Right Side - Testimonial Text */}
          <div className="flex-1  rounded-lg p-6 md:p-8">
            <div className="space-y-4">
              {testimonial.quotes.map((quote, index) => (
                <p 
                  key={index} 
                  className={`text-white monser-400 text-sm md:text-base leading-relaxed ${
                    index === 0 ? 'text-lg md:text-xl monser-500' : ''
                  }`}
                >
                  {index === 0 ? `"${quote}` : quote}
                  {index === testimonial.quotes.length - 1 ? '"' : ''}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentTestimonial

