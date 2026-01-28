"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import Image from "next/image";
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";

// Client-only import for React Slick
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const slides = [
  {
    name: "MANISH R",
    batch: "EBAC 2022 - 2024",
    image: "/pre-university-college/manish.webp",
    quote: `"AN INVESTMENT IN KNOWLEDGE PAYS THE BEST INTEREST."`,
    p1: `This quote reflects my opinion of journey at AIMS Institutes. It taught me that acquiring knowledge and education are a valuable and worthwhile investment.`,
    p2: `My college life is filled with academic growth, personal development and memorable experiences. From making new friends to exploring new subjects, college often shapes one's worldview and future path. AIMS Institutes rendered the knowledge which empowers individual to make informal decision about my life, career and relationship. It enabled me to navigate complexities and uncertainties with confidence and clarity. The management and the faculties provided personal development, enhanced critical thinking abilities. The faculties helped to explore new ideas, perspectives and opportunities, and enriched the life in diverse ways. Thus, choosing AIMS was indeed a prominent decision which helped me to follow my passion and persue my education.`,
    wish: `Wishing a prospective career to all future AIMERS!`,
  },
  {
    name: "NANDINI SHARMA",
    batch: "EBAC 2022 - 2024",
    image: "/pre-university-college/nandhini_sharma.webp",
    quote: `"WHAT YOU DO TODAY, CAN IMPROVE ALL YOUR TOMORROW"`,
    p1: `This quote is an extract of my beautiful dream regarding AIMS Institutes.I have not seen any institution like AIMS in terms of coaching, faculties, sports and many more facilities. The best quality of education I have acquired here.Now, I am free to face any type of problems. The faculties & management have supported a lot and provided many opportunities like industrial visits and so on. This exposure has enabled us to know more. AIMS has provided me a lot of opportunities where I could choose the best. We don't grow when things are easy but we grow when we face challenges that is AIMS Institutes.`,
    p2: ``,
    wish: ``,
  },
];

export default function AimersSays() {
  useEffect(() => {
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
  }, []);
  let sliderRef = null;

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    arrows: false, // disable default arrows
    dots: false,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    adaptiveHeight: false,
  };

  return (
    <>
      <style jsx>
        {`
            .slide {
            display: grid !important;
            grid-template-columns: 320px minmax(0, 1fr);
            gap: 48px;
            align-items: center;
            }
        
            :global(.aimersSlider .slick-slide > div) {
            width: 100%;
            }
            :global(.aimersSlider .slick-list) {
            overflow: hidden;
            }
        
            @media (max-width: 920px) {
            .slide {
                grid-template-columns: 1fr;
                gap: 28px;
            }
            .right {
                max-width: none;
            }
            }
           `}
      </style>

      <div className="bg-[#531675] text-white">
        <div className="px-4 lg:px-8">
          <div className="py-20 relative justify-center items-center my-auto container mx-auto">
            <h3 className="">AIMER Says</h3>

            <Slider ref={(c) => (sliderRef = c)} {...settings} className="aimersSlider">
              {slides.map((s, i) => (
                <div key={i} className="slide">
                  {/* LEFT */}
                  <div className="flex flex-col items-center">
                    <div className="mb-4">
                      <Image
                        src={s.image}
                        alt={s.name}
                        width={240}
                        height={240}
                        priority
                      />
                    </div>
                    <p className="" style={{ fontWeight: "600" }}>{s.name}</p>
                    <p className="text-center">{s.batch}</p>
                  </div>

                  {/* RIGHT */}
                  <div className="max-w-[900px]">
                    <p className="text-[18px] mt-[6px] mb-[14px]" style={{ fontWeight: "600" }}>{s.quote}</p>
                    <p className="my-[12px] leading-[1.7]">{s.p1}</p>
                    <p className="my-[12px] leading-[1.7]">{s.p2}</p>
                    <p className="mt-[16px]" style={{ fontWeight: "600" }}>{s.wish}</p>
                  </div>

                </div>
              ))}
            </Slider>

            {/* Arrow controls */}
            <div className="absolute bottom-[20px] right-[20px] flex gap-[10px] max-sm:bottom-auto max-sm:top-[80px]">
              <button
                type="button"
                aria-label="Previous testimonial"
                className="w-10 h-10 text-xl flex items-center justify-center border border-[#a22978] rounded-full bg-white shadow hover:bg-[#a22978] hover:text-white text-black"
                onClick={() => sliderRef.slickPrev()}
              >
                <HiArrowSmallLeft />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                className="w-10 h-10 text-xl flex items-center justify-center border border-[#a22978] rounded-full bg-white shadow hover:bg-[#a22978] hover:text-white text-black"
                onClick={() => sliderRef.slickNext()}
              >
                <HiArrowSmallRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
