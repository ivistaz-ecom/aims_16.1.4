"use client";
import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";
// CSS for slick will be loaded lazily inside the component

// Generic Carousel Component
const GalleryCarousel = ({ title, description, category }) => {
    useEffect(() => {
        import("slick-carousel/slick/slick.css");
        import("slick-carousel/slick/slick-theme.css");
    }, []);
    const sliderRef = useRef(null);
    const [slides, setSlides] = useState([]);
    const [slidesToShow, setSlidesToShow] = useState(4);

    // Modal state
    const [selectedSlide, setSelectedSlide] = useState(null);

    // Handle ESC key to close modal
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && selectedSlide) {
                setSelectedSlide(null);
            }
        };

        if (selectedSlide) {
            document.addEventListener('keydown', handleKeyDown);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedSlide]);

    // Fetch & filter data
    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const res = await fetch(
                    "https://docs-aims.ivista.biz/wp-json/wp/v2/gallery?per_page=100"
                );
                const data = await res.json();

                // Format & filter by category
                const formatted = data
                    .map((item) => ({
                        title: item.acf?.image_caption || null,
                        category: item.acf?.select_gallery_type || "Uncategorized",
                        src: item.acf?.image?.url || null,
                        description: item.content?.rendered || null,
                    }))
                    .filter((item) => item.category === category);

                setSlides(formatted);
            } catch (err) {
                console.error("Error fetching gallery:", err);
            }
        };

        fetchGallery();
    }, [category]);

    // Responsive slide count
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) setSlidesToShow(1);
            else if (window.innerWidth <= 768) setSlidesToShow(2);
            else if (window.innerWidth <= 1024) setSlidesToShow(3);
            else setSlidesToShow(4);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10 relative">
            {/* Header with Arrows */}
            <div className="flex flex-col md:flex-row mb-4 sm:mb-6 items-start md:items-end">
                <div className="md:w-[80%] pr-2 sm:pr-4">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#8A1D64] leading-tight">{title}</h1>
                    <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base leading-relaxed">{description}</p>
                </div>

                {/* Arrows */}
                <div className="md:w-[20%] flex gap-2 sm:gap-3 mt-3 sm:mt-4 md:mt-0 justify-start md:justify-end">
                    <button
                        onClick={() => sliderRef.current.slickPrev()}
                        className="flex w-8 h-8 sm:w-10 sm:h-10 border border-gray-400 rounded-full items-center justify-center hover:bg-gray-100 transition touch-manipulation"
                        aria-label="Previous slide"
                    >
                        <GoArrowLeft className="text-sm sm:text-base" />
                    </button>
                    <button
                        onClick={() => sliderRef.current.slickNext()}
                        className="flex w-8 h-8 sm:w-10 sm:h-10 border border-gray-400 rounded-full items-center justify-center hover:bg-gray-100 transition touch-manipulation"
                        aria-label="Next slide"
                    >
                        <GoArrowRight className="text-sm sm:text-base" />
                    </button>
                </div>
            </div>

            {/* Carousel */}
            <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="px-2 cursor-pointer"
                        onClick={() => setSelectedSlide(slide)} // open modal
                    >
                        <div className="rounded-lg overflow-hidden shadow-lg relative w-full h-60">
                            {slide.src ? (
                                <Image
                                    src={slide.src}
                                    alt={slide.title || ""}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                />
                            ) : (
                                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                                    <span className="text-gray-500 text-sm">No Image</span>
                                </div>
                            )}
                        </div>
                        <div className="mt-2 sm:mt-3 text-center px-1">
                            <p className="font-medium text-sm sm:text-base line-clamp-2">{slide.title}</p>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Modal */}
            {selectedSlide && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-2 sm:p-4 md:p-6 overflow-y-auto"
                    onClick={() => setSelectedSlide(null)} // clicking on overlay closes modal
                >
                    <div
                        className="rounded-lg w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden relative bg-white flex flex-col"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedSlide(null)}
                            className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 bg-white/90 hover:bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-700 hover:text-black text-lg sm:text-xl font-bold shadow-lg transition-all duration-200 touch-manipulation"
                            aria-label="Close modal"
                        >
                            ✕
                        </button>

                        {/* Image */}
                        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 flex-shrink-0">
                            {selectedSlide.src ? (
                                <Image
                                    src={selectedSlide.src}
                                    alt={selectedSlide.title || ""}
                                    fill
                                    className="object-contain rounded-t-lg"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 60vw"
                                />
                            ) : (
                                <div className="bg-gray-200 w-full h-full flex items-center justify-center rounded-t-lg">
                                    <span className="text-gray-500 text-sm sm:text-base">No Image</span>
                                </div>
                            )}
                        </div>

                        {/* Content under image */}
                        <div className="px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 overflow-y-auto flex-1 min-h-0">
                            {selectedSlide.title && (
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2 text-center">
                                    {selectedSlide.title}
                                </h3>
                            )}
                            {selectedSlide.description ? (
                                <div
                                    className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed text-center prose prose-sm max-w-none"
                                    dangerouslySetInnerHTML={{ __html: selectedSlide.description }}
                                />
                            ) : (
                                <div className="text-xs sm:text-sm text-gray-400 text-center italic">
                                    No description available
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Page Component
const GalleryPage = () => {
    return (
        <>
            <GalleryCarousel
                title="AIMS Infrastructures"
                description="With world-class academic infrastructure, cutting-edge labs, a resource-rich library, an open-air amphitheater, a state-of-the-art auditorium, and vibrant student residences, our campus is designed to inspire learning, creativity, and community."
                category="Infrastructures"
            />
        </>
    );
};

export default GalleryPage;
