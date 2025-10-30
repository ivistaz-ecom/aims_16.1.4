"use client";
import React from "react";
import Image from "next/image";
import Button from "@/shared/Button";
import Link from "next/link";

export default function CampusLifeSection() {
  return (
    <section className="relative bg-white lg:border-b-2 lg:pt-20">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 lg:px-8 px-4">
          <h1 className="text-[#0C2165] text-4xl font-bold leading-tight pt-7 lg:pt-0">
            Your Practice Ground <br /> for Big Shots
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            At AIMS, campus life is where you develop focus, practical skills,
            and community. From industry labs and student clubs to fests and
            peer learning, you’ll find your rhythm, and your strengths.
          </p>
          <div className="flex justify-left">
            <Button variant="placement" showReadMore={false} href="/campus-facilities">
              <span className="text-xl">A Look Into Campus Life</span>
            </Button>
          </div>
        </div>

        {/* Right Image with Curved Shape */}
        <div className="relative w-full lg:w-1/2 mt-10 lg:mt-0">
          <div className="overflow-hidden">
            <Image
              src="/home/your-prac.webp" // replace with your image path
              alt="Campus Students"
              width={1200}
              height={1000}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
