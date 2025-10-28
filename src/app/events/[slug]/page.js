"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { API_CONFIG } from "../../../config/config"
import Button from "@/shared/Button"
import Breadcrumbs from "@/components/shared/Breadcrumbs"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const EventDetail = () => {
  const params = useParams()
  const [eventData, setEventData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.slug) {
      fetchEventData(params.slug)
    }
  }, [params.slug])

  const fetchEventData = async (slug) => {
    try {
      setLoading(true)
      let url = `${API_CONFIG.SERVER_URL}posts?slug=${slug}&_embed&production=${API_CONFIG.PRODUCTION_SERVER_ID}&status=publish`

      const response = await fetch(url)
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`)
      const data = await response.json()
      console.log(data)

      if (Array.isArray(data) && data.length > 0) {
        setEventData(data[0])
      }
    } catch (error) {
      console.error("Error fetching event:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6E3299]"></div>
      </div>
    )
  }

  if (!eventData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Event Not Found
          </h1>
          <p className="text-gray-600">
            The event you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Dynamic SEO Metadata */}
      <SeoMetadata
        title={
          eventData.acf?.meta_title ||
          eventData.title?.rendered ||
          "AIMS Events"
        }
        description={
          eventData.acf?.meta_description ||
          eventData.excerpt?.rendered ||
          "Join our upcoming events and activities at AIMS Institutes"
        }
        path={`/events/${params.slug}`}
        metaImage={
          eventData.acf?.banner_image ||
          eventData.acf?.thumbnail_image ||
          "/images/aims-logo.png"
        }
        // schemaType="Event"
        additionalSchema={{
          name: eventData.title?.rendered,
          startDate: eventData.acf?.event_date,
          endDate: eventData.acf?.event_end_date,
          eventStatus: "EventScheduled",
          eventAttendanceMode: "OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: "AIMS Institutes",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bangalore",
              addressCountry: "IN",
            },
          },
          organizer: {
            "@type": "Organization",
            name: "AIMS Institutes",
            url: "https://aimsinstitutes.edu.in",
          },
        }}
      />
      <style>
        {`
                    h1 {
                       font-size: 40px !important;
                       font-weight: 600 !important;
                       color: #0C2165 !important;
                       margin-bottom: 1rem !important;
                       text-align: center !important;
                       line-height: 1.2 !important;
                    }
                    // p  {
                    //     margin-bottom: 1rem !important;
                    //     font-size: 18px !important;
                    // }
                `}
      </style>
      <Breadcrumbs />
      <div
        className="min-h-screen pt-10  flex flex-col justify-center items-center"
        // style={{
        //     background: 'linear-gradient(180deg, white 25%, #E1F9F4 20%)'
        // }}
      >
        <div
          className="w-full flex flex-col justify-center items-center"
          style={{
            background: "linear-gradient(180deg, white 50%, #E1F9F4 20%)",
          }}
        >
          <div className="relative h-56 lg:h-[50vh] md:min-w-[40%] md:max-w-[50%] w-[80%] rounded-xl">
            <Image
              src={
                eventData.acf.banner_image ||
                eventData.acf.thumbnail_image ||
                "/default-event-banner.jpg"
              }
              alt={eventData.title?.rendered || "Event Banner"}
              fill
              className="object-contain rounded-xl"
              priority
            />
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center bg-[#E1F9F4] px-4 lg:px-8">
          <div className="container mx-auto flex flex-col justify-center items-center">
            {/* Hero Section */}
            {/* <div className="relative h-96 lg:h-[50vh] w-[50%] ">
                        <Image
                            src={eventData.acf.banner_image || eventData.acf.thumbnail_image || '/default-event-banner.jpg'}
                            alt={eventData.title?.rendered || "Event Banner"}
                            fill
                            className="object-cover rounded-xl"
                            priority
                        />
                    </div> */}

            <div className="w-full flex flex-col justify-center items-center">
              <h1
                className="font-bold text-[#0C2165] my-4"
                dangerouslySetInnerHTML={{ __html: eventData.title.rendered }}
              />
              {eventData.acf.event_date && (
                <p className="text-xl text-white/90 mb-6">
                  📅{" "}
                  {new Date(eventData.acf.event_date).toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>
              )}
            </div>

            {/* Event Details Box */}
            <div className="py-4 w-full flex flex-col justify-center items-center">
              {/* Main Content */}
              <div className="**:">
                <div
                  className="prose prose-lg max-w-none text-[#0C2165] leading-relaxed text-base p-class"
                  dangerouslySetInnerHTML={{
                    __html: eventData.content.rendered,
                  }}
                />
              </div>

              {/* Back Navigation */}
              <div className="mt-8 flex justify-start items-start w-full">
                <Link
                  href="/events"
                  className="group text-[#A22877] hover:text-[#6E3299] transition-all duration-500 flex items-center gap-3 p-class relative overflow-hidden bg-gradient-to-r from-transparent via-transparent to-transparent hover:from-[#A22877]/10 hover:via-[#6E3299]/10 hover:to-[#A22877]/10 rounded-lg px-4 py-2 hover:shadow-lg hover:shadow-[#A22877]/20"
                >
                  <span className="transform group-hover:-translate-x-2 group-hover:scale-110 transition-all duration-500 ease-out text-2xl">
                    ←
                  </span>
                  <span className="transform group-hover:-translate-x-1 group-hover:scale-105 transition-all duration-500 ease-out font-medium">
                    Back
                  </span>

                  {/* Beautiful gradient underline */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#A22877] via-[#6E3299] to-[#A22877] group-hover:w-full transition-all duration-700 ease-out rounded-full"></div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-[#A22877] rounded-full animate-pulse group-hover:animate-bounce"></div>
                    <div
                      className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#6E3299] rounded-full animate-pulse group-hover:animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-[#A22877] rounded-full animate-pulse group-hover:animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A22877]/0 via-[#6E3299]/0 to-[#A22877]/0 group-hover:from-[#A22877]/5 group-hover:via-[#6E3299]/5 group-hover:to-[#A22877]/5 transition-all duration-500 rounded-lg"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventDetail
