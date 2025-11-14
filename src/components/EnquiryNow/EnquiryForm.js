"use client"
import React, { useState } from "react"
import Select from "react-select"
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go"

const GOOGLE_SHEETS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxbhsBMXJPLq4plqcQPe1FKVz6i_W8dkgVBDz36aJ9o7ITSFpFmN0uoFKY7ShTKVbPj/exec"

const enquiryOptions = [
  {
    value: "Academics - Principal / Registrar / Programme Director",
    label: "Academics - Principal / Registrar / Programme Director",
  },
  { value: "Admission", label: "Admission" },
  { value: "Alumni", label: "Alumni" },
  { value: "Events", label: "Events" },
  {
    value: "Placements / Corporate Relations",
    label: "Placements / Corporate Relations",
  },
  { value: "Others", label: "Others" },
]

const courseOptions = [
  { value: "Ph.D in Management", label: "Ph.D in Management" },
  {
    value: "MBA Master of Business Administration (General)",
    label: "MBA Master of Business Administration (General)",
  },
  {
    value: "BBA Bachelor of Business Administration",
    label: "BBA Bachelor of Business Administration",
  },
  { value: "BBA Aviation", label: "BBA Aviation" },
  { value: "Master of Commerce MCOM", label: "Master of Commerce MCOM" },
  { value: "Bachelor of Commerce BCOM", label: "Bachelor of Commerce BCOM" },
  {
    value: "BHM Bachelor of Hotel Management",
    label: "BHM Bachelor of Hotel Management",
  },
  {
    value:
      "Certificate in Vocational Studies in QSR (Quick Service Restaurant)",
    label:
      "Certificate in Vocational Studies in QSR (Quick Service Restaurant)",
  },
  {
    value: "Culinary Professional Diploma (VET by EHL)",
    label: "Culinary Professional Diploma (VET by EHL)",
  },
  {
    value: "Food & Beverage Service Professional Diploma (VET by EHL)",
    label: "Food & Beverage Service Professional Diploma (VET by EHL)",
  },
  {
    value: "Rooms Professional Diploma (VET by EHL)",
    label: "Rooms Professional Diploma (VET by EHL)",
  },
  {
    value: "Master of Computer Application MCA",
    label: "Master of Computer Application MCA",
  },
  {
    value: "Bachelor of Computer Application BCA",
    label: "Bachelor of Computer Application BCA",
  },
  {
    value: "AI/ML | Data Science | Full-Stack Development BCA+",
    label: "AI/ML | Data Science | Full-Stack Development BCA+",
  },
  { value: "PCMB", label: "PCMB" },
  { value: "PCMC", label: "PCMC" },
  { value: "CEBA", label: "CEBA" },
]

const getSelectStyles = (hasError) => ({
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#e1f4f1",
    borderColor: hasError
      ? "#f87171"
      : state.isFocused
      ? "#A22977"
      : "transparent",
    borderWidth: "2px",
    borderRadius: "0.375rem",
    boxShadow: "none",
    minHeight: "48px",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#6b7280",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#1b2950",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#A22977"
      : state.isFocused
      ? "#f3e8ff"
      : "white",
    color: state.isSelected ? "#ffffff" : "#1b2950",
    cursor: "pointer",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 30,
  }),
})

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    email: "",
    contact: "",
    enquiry: "",
    course: "",
    hearAboutUs: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: "",
  })

  const sendToGoogleSheets = (payload) => {
    fetch(GOOGLE_SHEETS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
      body: JSON.stringify(payload),
    }).catch(() => {
      // Silent fail
    })
  }

  // 🧠 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    const nextValue =
      name === "contact" ? value.replace(/\D/g, "").slice(0, 10) : value

    setFormData({ ...formData, [name]: nextValue })
    setErrors({ ...errors, [name]: "" })
  }

  const handleSelectChange = (field) => (option) => {
    setFormData((prev) => ({ ...prev, [field]: option ? option.value : "" }))
    setErrors((prev) => ({ ...prev, [field]: "" }))
  }

  // ✅ Validate required fields
  const validateForm = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (formData.contact.trim().length !== 10)
      newErrors.contact = "Contact number must be 10 digits"
    if (!formData.enquiry.trim())
      newErrors.enquiry = "Please select an enquiry type"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    return newErrors
  }

  // 🚀 Handle submit
  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const payload = {
      firstName: formData.fullName,
      lastName: formData.lastName,
      email: formData.email,
      contact: formData.contact,
      enquiry: formData.enquiry,
      course: formData.course,
      hearAboutUs: formData.hearAboutUs,
      message: formData.message,
      sheetName: "Enquire Now",
    }

    sendToGoogleSheets(payload)

    const form = new FormData()
    form.append("your-full-name", formData.fullName)
    form.append("your-last-name", formData.lastName)
    form.append("your-email", formData.email)
    form.append("your-contact", formData.contact)
    form.append("your-enquiry", formData.enquiry)
    form.append("your-course", formData.course)
    form.append("your-hear-about-us", formData.hearAboutUs)
    form.append("your-message", formData.message)
    form.append("_wpcf7", "675")
    form.append("_wpcf7_version", "5.7.7")
    form.append("_wpcf7_locale", "en_US")
    form.append("_wpcf7_unit_tag", "wpcf7-f675-p" + Date.now())
    form.append("_wpcf7_container_post", "0")

    fetch(
      "https://docs.theaims.ac.in/wp-json/contact-form-7/v1/contact-forms/761/feedback",
      {
        method: "POST",
        body: form,
      }
    )
      .then((response) => response.json().catch(() => null))
      .then((result) => {
        console.log("CF7 Response:", result)
      })
      .catch((err) => {
        console.error("CF7 submission error:", err)
      })

    setStatus({
      loading: false,
      success: true,
      message: "✅ Thank you! Your message has been sent successfully.",
    })
    setFormData({
      fullName: "",
      lastName: "",
      email: "",
      contact: "",
      enquiry: "",
      course: "",
      hearAboutUs: "",
      message: "",
    })
    setErrors({})
  }

  return (
    <section className="bg-white text-center md:py-12 py-5">
      <h2 className="text-4xl font-serif text-[#1b2950] mb-10">Enquire Now</h2>

      <div className="bg-[#41136b] text-white px-4 md:px-0 py-10 mx-auto">
        <div className="container mx-auto">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* 👤 Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <label className="font-semibold text-base">
                  Full Name{" "}
                  <span className="text-sm font-normal">(required)</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full mt-2 bg-[#e1f4f1] text-[#1b2950] rounded-md p-3 focus:outline-none ${
                    errors.fullName ? "border border-red-500" : ""
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-300 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="font-semibold text-base">
                  Last Name{" "}
                  <span className="text-sm font-normal">(required)</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full mt-2 bg-[#e1f4f1] text-[#1b2950] rounded-md p-3 focus:outline-none"
                />
              </div>
            </div>

            {/* 📧 Email & Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <label className="font-semibold text-base">
                  Email ID{" "}
                  <span className="text-sm font-normal">(required)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full mt-2 bg-[#e1f4f1] text-[#1b2950] rounded-md p-3 focus:outline-none ${
                    errors.email ? "border border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-300 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="font-semibold text-base">Contact No</label>
                <input
                  type="tel"
                  name="contact"
                  placeholder="Number"
                  value={formData.contact}
                  onChange={handleChange}
                  className={`w-full mt-2 bg-[#e1f4f1] text-[#1b2950] rounded-md p-3 focus:outline-none ${
                    errors.contact ? "border border-red-500" : ""
                  }`}
                />
                {errors.contact && (
                  <p className="text-red-300 text-sm mt-1">{errors.contact}</p>
                )}
              </div>
            </div>

            {/* 🔍 Enquiry & Course */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <label className="font-semibold text-base">
                  Enquiry Type{" "}
                  <span className="text-sm font-normal">(required)</span>
                </label>
                <div className="mt-2">
                  <Select
                    inputId="enquiry-form-enquiry"
                    instanceId="enquiry-form-enquiry"
                    name="enquiry"
                    placeholder="Choose"
                    options={enquiryOptions}
                    value={
                      enquiryOptions.find(
                        (option) => option.value === formData.enquiry
                      ) || null
                    }
                    onChange={handleSelectChange("enquiry")}
                    styles={getSelectStyles(Boolean(errors.enquiry))}
                    classNamePrefix="enquiry-select"
                    isClearable
                  />
                </div>
                {errors.enquiry && (
                  <p className="text-red-300 text-sm mt-1">{errors.enquiry}</p>
                )}
              </div>
              <div>
                <label className="font-semibold text-base">Course</label>
                <div className="mt-2">
                  <Select
                    inputId="enquiry-form-course"
                    instanceId="enquiry-form-course"
                    name="course"
                    placeholder="Choose"
                    options={courseOptions}
                    value={
                      courseOptions.find(
                        (option) => option.value === formData.course
                      ) || null
                    }
                    onChange={handleSelectChange("course")}
                    styles={getSelectStyles(false)}
                    classNamePrefix="enquiry-select"
                    isClearable
                  />
                </div>
              </div>
            </div>

            {/* 📢 Where did you hear about us */}
            <div className="text-left">
              <label className="font-semibold text-base mb-3 block">
                Where did you hear about us?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Ads",
                  "Social media",
                  "Alumni",
                  "Friend/colleague",
                  "Current Students",
                  "Event",
                  "Google",
                  "Others",
                ].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors"
                  >
                    <input
                      type="radio"
                      name="hearAboutUs"
                      value={option}
                      checked={formData.hearAboutUs === option}
                      onChange={handleChange}
                      className="w-4 h-4 accent-[#A22977] cursor-pointer"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 💬 Message */}
            <div className="text-left">
              <label className="font-semibold text-base">
                Message <span className="text-sm font-normal">(required)</span>
              </label>
              <textarea
                rows="3"
                name="message"
                placeholder="Type message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full mt-2 bg-[#e1f4f1] text-[#1b2950] rounded-md p-3 focus:outline-none ${
                  errors.message ? "border border-red-500" : ""
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-300 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* 🌐 Global Status */}
            {status.message && (
              <p
                className={`text-sm font-medium ${
                  status.success ? "text-green-300" : "text-red-300"
                }`}
              >
                {status.message}
              </p>
            )}

            {/* 🚀 Submit Button */}
            <div className="text-left">
              <button
                type="submit"
                disabled={status.loading}
                className={`group relative inline-flex items-center gap-2 w-fit px-6 py-2 text-lg font-medium transition-all duration-300
      bg-[#A22977] text-white border-6 border-[#D8BFD8] rounded-[26.5px]
      hover:bg-[#ff6c01] hover:text-white
      ${status.loading ? "opacity-70 cursor-not-allowed" : ""}
    `}
              >
                {status.loading ? "Submitting..." : "Submit"}
                <div className="relative flex items-center">
                  <GoArrowDownRight className="w-5 h-5 text-current transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:rotate-12 group-hover:scale-75" />
                  <GoArrowUpRight className="w-5 h-5 text-current absolute top-0 left-0 transition-all duration-300 ease-in-out opacity-0 -rotate-12 scale-75 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
