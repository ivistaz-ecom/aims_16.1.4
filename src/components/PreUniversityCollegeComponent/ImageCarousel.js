"use client";
import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const images = [
  "/pre-university-college/apply_now.webp",
  "/pre-university-college/pu_distinction.webp",
  "/pre-university-college/aims.webp",
  "/pre-university-college/tennikoit.webp",
];

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // autoplay
  useEffect(() => {
    if (!emblaApi) return;
    let interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    const stop = () => clearInterval(interval);
    emblaApi.on("pointerDown", stop); // stop on drag
    emblaApi.on("destroy", stop);

    return () => clearInterval(interval);
  }, [emblaApi]);

  // track selected index for thumbs
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="bg-[#E6FAF7] flex justify-center items-center py-20">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* LEFT: main carousel */}
        <div
          className="relative w-[90vw] max-w-lg lg:max-w-3xl h-[250px] sm:h-[400px] md:h-[500px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg"
          onMouseEnter={() => emblaApi && emblaApi.stop()}
          onMouseLeave={() => emblaApi && emblaApi.play()}
          ref={emblaRef}
        >
          <div className="flex h-full">
            {images.map((img, index) => (
              <div
                className="relative flex-[0_0_100%] w-full h-full"
                key={index}
              >
                <Image
                  src={img}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-contain"
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: thumbnails + arrows */}
        <div className="flex flex-col items-center gap-6">
          {/* thumbnails vertical */}
          <div className="flex lg:flex-col gap-3">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                  selectedIndex === index
                    ? "border-[#a22978] scale-105 shadow-lg"
                    : "border-gray-300 hover:border-[#a22978] hover:scale-105"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumb ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => emblaApi && emblaApi.scrollPrev()}
              type="button"
              aria-label="Previous slide"
              className="w-10 h-10 flex items-center justify-center border-2 border-[#a22978] rounded-full bg-white shadow-md hover:bg-[#a22978] hover:text-white transition-all duration-300"
            >
              <HiArrowSmallLeft size={20} />
            </button>
            <button
              onClick={() => emblaApi && emblaApi.scrollNext()}
              type="button"
              aria-label="Next slide"
              className="w-10 h-10 flex items-center justify-center border-2 border-[#a22978] rounded-full bg-white shadow-md hover:bg-[#a22978] hover:text-white transition-all duration-300"
            >
              <HiArrowSmallRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
