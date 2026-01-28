'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { API_CONFIG } from '@/config/config'

const SchoolOfBusinessFaculty = () => {
    const [facultyData, setFacultyData] = useState([])
    const [loading, setLoading] = useState(true)
    const [imagesLoaded, setImagesLoaded] = useState(false)

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.8,
            rotateX: -10
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20,
                mass: 1
            }
        },
        hover: {
            y: -12,
            scale: 1.03,
            rotateY: 2,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    }

    const headingVariants = {
        hidden: {
            opacity: 0,
            y: -40,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6
            }
        }
    }

    const underlineVariants = {
        hidden: {
            scaleX: 0,
            opacity: 0
        },
        visible: {
            scaleX: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.5
            }
        }
    }

    const imageVariants = {
        hidden: {
            scale: 1.1,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.08,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    }

    useEffect(() => {
        fetchFacultyData()
    }, [])

    // Function to preload images
    const preloadImages = (imageUrls) => {
        const promises = imageUrls.map((url) => {
            if (!url) return Promise.resolve()
            return new Promise((resolve, reject) => {
                const img = new window.Image()
                img.onload = resolve
                img.onerror = resolve // Continue even if image fails
                img.src = url
            })
        })
        return Promise.all(promises)
    }

    const fetchFacultyData = async () => {
        try {
            setLoading(true)
            setImagesLoaded(false)

            // Fetch faculty members with category 18 (School of Business)
            const response = await fetch(
                `${API_CONFIG.SERVER_URL}faculty-member?categories=18&per_page=100&_embed&acf&production=${API_CONFIG.PRODUCTION_SERVER_ID}`
            )

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()

            if (Array.isArray(data)) {
                // Map faculty data and use profile_image from ACF
                const facultyWithImages = data.map((faculty) => {
                    let imageUrl = null

                    console.log('Faculty ACF data:', faculty.acf)
                    console.log('Profile image:', faculty.acf?.profile_image)

                    // Check for ACF profile_image first
                    if (faculty.acf?.profile_image?.url) {
                        imageUrl = faculty.acf.profile_image.url
                    } else if (faculty.acf?.profile_image?.sizes?.large?.url) {
                        imageUrl = faculty.acf.profile_image.sizes.large.url
                    } else if (faculty.acf?.profile_image?.sizes?.full?.url) {
                        imageUrl = faculty.acf.profile_image.sizes.full.url
                    } else if (faculty.featured_media) {
                        // Fallback to featured media
                        imageUrl = `${API_CONFIG.SERVER_URL}media/${faculty.featured_media}?production=${API_CONFIG.PRODUCTION_SERVER_ID}`
                    }

                    return {
                        ...faculty,
                        imageUrl
                    }
                })

                setFacultyData(facultyWithImages)

                // Preload all images
                const imageUrls = facultyWithImages.map(m => m.imageUrl).filter(Boolean)
                await preloadImages(imageUrls)
                setImagesLoaded(true)
            }
        } catch (error) {
            console.error('Error fetching faculty data:', error)
        } finally {
            setLoading(false)
        }
    }

    if (loading || !imagesLoaded) {
        return (
            <div
                className="flex items-center justify-center"
                style={{ minHeight: '100vh', backgroundColor: '#B3DBD3' }}
            >
                <div className="text-center container mx-auto px-4">
                    <motion.h2
                        className="text-2xl md:text-4xl font-bold text-[#0C2165] mb-4 monser-600"
                        variants={headingVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        SCHOOL OF BUSINESS
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl text-[#0C2165] mb-6 monser-400"
                        variants={headingVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Academic Year: 2024 - 2025
                    </motion.p>
                    <div className="flex justify-center mb-6">
                        <motion.div
                            className="w-16 h-1 bg-[#6E3299]"
                            variants={underlineVariants}
                            initial="hidden"
                            animate="visible"
                            style={{ transformOrigin: 'center' }}
                        />
                    </div>
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0C2165] mx-auto mb-2"></div>
                    <p className="text-gray-600">Loading faculty...</p>
                </div>
            </div>
        )
    }

    if (facultyData.length === 0) {
        return null
    }

    return (
        <motion.section
            className="py-10 px-4 lg:px-8"
            style={{ backgroundColor: '#B3DBD3' }}
            initial="hidden"
            animate="visible"
        >
            <div className="text-center container mx-auto">
                {/* Heading */}
                <motion.div
                    className="mb-12"
                    variants={headingVariants}
                >
                    <motion.h2
                        className="text-2xl md:text-4xl font-bold text-[#0C2165] mb-4 monser-600"
                        variants={headingVariants}
                    >
                        SCHOOL OF BUSINESS
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl text-[#0C2165] mb-4 monser-400"
                        variants={headingVariants}
                    >
                        Academic Year: 2024 - 2025
                    </motion.p>
                    <div className="flex justify-center mb-4">
                        <motion.div
                            className="w-16 h-1 bg-[#6E3299]"
                            variants={underlineVariants}
                            style={{ transformOrigin: 'center' }}
                        />
                    </div>
                </motion.div>

                {/* Faculty Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                >
                    {facultyData.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className="bg-white rounded-3xl shadow-lg overflow-hidden w-full cursor-pointer"
                            style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                            variants={cardVariants}
                            whileHover="hover"
                            transition={{ delay: index * 0.05 }}
                        >
                            {/* Image */}
                            <motion.div
                                className="w-full aspect-square relative overflow-hidden"
                                variants={imageVariants}
                            >
                                {member.imageUrl ? (
                                    <Image
                                        src={member.imageUrl}
                                        alt={member.title.rendered}
                                        fill
                                        className="object-cover rounded-t-3xl"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        priority={index === 0}
                                        fetchPriority={index === 0 ? "high" : "auto"}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                        <span className="text-white text-[20px] font-bold">
                                            {member.title.rendered}
                                        </span>
                                    </div>
                                )}
                            </motion.div>

                            {/* Content */}
                            <div className="py-6 px-2">
                                {/* Name */}
                                <h5 className="monser-600 text-[18px] md:text-[20px] text-[#0C2165] text-center mb-2">
                                    {member.title.rendered}
                                </h5>

                                {/* Academic Degrees */}
                                {member.acf?.academic_degrees && (
                                    <h6 className="monser-400 text-[14px] text-[#6E3299] text-center mb-2">
                                        {member.acf.academic_degrees}
                                    </h6>
                                )}

                                {/* Designation */}
                                {member.acf?.designation && (
                                    <h6 className="monser-400 text-[16px] text-gray-600 text-center mt-2">
                                        {member.acf.designation}
                                    </h6>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default SchoolOfBusinessFaculty
