"use client"
import React, { useState } from "react"
import Select from "react-select"
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go"
import { Country, State, City } from "country-state-city"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "IN", // Default to India
    state: "",
    city: "",
  })

  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)

  // Get selected country and state objects for filtering
  const selectedCountry = Country.getAllCountries().find(
    (c) => c.isoCode === formData.country
  )
  const selectedState = State.getStatesOfCountry(formData.country).find(
    (s) => s.isoCode === formData.state
  )

  // Get lists for dropdowns
  const countries = Country.getAllCountries()
  const states = formData.country
    ? State.getStatesOfCountry(formData.country)
    : []
  const cities =
    formData.country && formData.state
      ? City.getCitiesOfState(formData.country, formData.state)
      : []

  // Format options for react-select
  const countryOptions = countries.map((country) => ({
    value: country.isoCode,
    label: country.name,
  }))

  const stateOptions = states.map((state) => ({
    value: state.isoCode,
    label: state.name,
  }))

  const cityOptions = cities.map((city, index) => ({
    value: city.name,
    label: city.name,
  }))

  // Custom styles for react-select matching brand colors
  const customSelectStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#ffffff",
      borderColor: errors[state.selectProps.name]
        ? "#ef4444"
        : state.isFocused
        ? "#A22977"
        : "#e5e7eb",
      boxShadow: state.isFocused ? "0 0 0 1px #A22977" : "none",
      borderRadius: "0.5rem",
      padding: "2px 4px",
      minHeight: "48px",
      fontFamily:
        "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
      fontSize: "16px",
      "&:hover": {
        borderColor: "#A22977",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#A22977"
        : state.isFocused
        ? "#f3f4f6"
        : "#ffffff",
      color: state.isSelected ? "#ffffff" : "#1b2950",
      fontFamily:
        "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
      fontSize: "16px",
      cursor: "pointer",
      "&:active": {
        backgroundColor: "#A22977",
        color: "#ffffff",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "#9ca3af",
      fontFamily:
        "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#1b2950",
      fontFamily:
        "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "0.5rem",
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    }),
    menuList: (base) => ({
      ...base,
      padding: "4px",
    }),
  }

  // 🧠 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target

    // For phone field, only allow numbers
    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, "") // Remove all non-numeric characters
      setFormData({ ...formData, [name]: numericValue })
    } else {
      setFormData({ ...formData, [name]: value })
    }

    setErrors({ ...errors, [name]: "" })
  }

  // 🧠 Handle select change
  const handleSelectChange = (selectedOption, actionMeta) => {
    const { name } = actionMeta

    // If country changes, reset state and city
    if (name === "country") {
      setFormData({
        ...formData,
        country: selectedOption?.value || "",
        state: "",
        city: "",
      })
    }
    // If state changes, reset city
    else if (name === "state") {
      setFormData({
        ...formData,
        state: selectedOption?.value || "",
        city: "",
      })
    }
    // Otherwise, update normally
    else {
      setFormData({
        ...formData,
        [name]: selectedOption?.value || "",
      })
    }

    setErrors({ ...errors, [name]: "" })
  }

  // ✅ Validate required fields
  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits"
    }
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.country) newErrors.country = "Country is required"
    if (!formData.state) newErrors.state = "State is required"
    if (!formData.city) newErrors.city = "City is required"
    return newErrors
  }

  // 💾 Send to WordPress Contact Form 7 as backup (fire-and-forget)
  const saveToWordPress = async (data) => {
    try {
      // ⚙️ Create FormData matching CF7 field names
      const form = new FormData()
      form.append("name", data.name)
      form.append("email", data.email)
      form.append("phone", data.phone)
      form.append("country", data.country)
      form.append("state", data.state)
      form.append("city", data.city)

      // Add required CF7 parameters
      form.append("_wpcf7", "886")
      form.append("_wpcf7_version", "5.7.7")
      form.append("_wpcf7_locale", "en_US")
      form.append("_wpcf7_unit_tag", "wpcf7-f886-p" + Date.now())
      form.append("_wpcf7_container_post", "0")

      // Send to WordPress Contact Form 7 API (silent, no errors shown to user)
      fetch(
        "https://docs.theaims.ac.in/wp-json/contact-form-7/v1/contact-forms/886/feedback",
        {
          method: "POST",
          body: form,
        }
      ).catch(() => {
        // Silently fail - don't log or show anything to user
      })
    } catch (error) {
      // Completely silent - no errors shown to user
    }
  }

  // 🚀 Handle submit
  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // ⚙️ Prepare data for Google Sheets (include sheetName for BHM)
    const googleSheetsData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      country: selectedCountry?.name || formData.country,
      state: selectedState?.name || formData.state,
      city: formData.city,
      sheetName: "BHM Enquiries", // BHM sheet name
    }

    // Prepare data for WordPress backup
    const wordPressData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      country: selectedCountry?.name || formData.country,
      state: selectedState?.name || formData.state,
      city: formData.city,
    }

    // Send to WordPress as backup (fire-and-forget, no await)
    saveToWordPress(wordPressData)

    // Send to Google Sheets (fire-and-forget, no await)
    fetch(
      "https://script.google.com/macros/s/AKfycbxDhi4AcFcPtjdO8ss3TAI0Eda0YIPc6xBbMyIMNYGvTP0ksZrjUlcNfKygjtWchbzA/exec",
      {
        method: "POST",
        mode: "no-cors", // Bypass CORS - cannot use custom headers or read response
        redirect: "follow",
        body: JSON.stringify(googleSheetsData), // Send as JSON string
      }
    ).catch(() => {
      // Silently handle errors
    })

    // Clear all fields immediately
    setFormData({
      name: "",
      phone: "",
      email: "",
      country: "IN", // Reset to India
      state: "", // Clear state immediately
      city: "", // Clear city immediately
    })
    setErrors({})

    // Show success message
    setShowSuccess(true)

    // Hide success message after 10 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 10000)
  }

  // Get selected values for react-select (null if empty)
  const selectedCountryOption = formData.country
    ? countryOptions.find((opt) => opt.value === formData.country)
    : null
  const selectedStateOption = formData.state
    ? stateOptions.find((opt) => opt.value === formData.state)
    : null
  const selectedCityOption = formData.city
    ? cityOptions.find((opt) => opt.value === formData.city)
    : null

  return (
    <section className="bg-white text-center md:py-12 py-5">
      <h2 className="text-4xl font-serif text-[#1b2950] mb-10">Enquire Now</h2>

      <div className="bg-[#41136b] text-white px-4 md:px-0 py-10 mx-auto lg:px-14">
        <div className="container mx-auto">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* 👤 Name */}
            <div className="text-left">
              <label className="font-semibold text-base monser-400">
                Name <span className="text-red-300">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full mt-2 monser-400 bg-white text-[#1b2950] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#A22977] ${
                  errors.name
                    ? "border-2 border-red-500"
                    : "border border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-300 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* 📧 Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <label className="font-semibold text-base monser-400">
                  Email <span className="text-red-300">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full mt-2 monser-400 bg-white text-[#1b2950] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#A22977] ${
                    errors.email
                      ? "border-2 border-red-500"
                      : "border border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-300 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="font-semibold text-base monser-400">
                  Phone <span className="text-red-300">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter 10-digit phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className={`w-full mt-2 monser-400 bg-white text-[#1b2950] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#A22977] ${
                    errors.phone
                      ? "border-2 border-red-500"
                      : "border border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-300 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* 🌍 Country, State, City */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {/* Country */}
              <div>
                <label className="font-semibold text-base monser-400">
                  Country <span className="text-red-300">*</span>
                </label>
                <div className="mt-2">
                  <Select
                    name="country"
                    value={selectedCountryOption}
                    onChange={handleSelectChange}
                    options={countryOptions}
                    placeholder="Search Country..."
                    isSearchable
                    isClearable
                    backspaceRemovesValue
                    styles={customSelectStyles}
                    classNamePrefix="react-select"
                  />
                </div>
                {errors.country && (
                  <p className="text-red-300 text-sm mt-1">{errors.country}</p>
                )}
              </div>

              {/* State */}
              <div>
                <label className="font-semibold text-base monser-400">
                  State <span className="text-red-300">*</span>
                </label>
                <div className="mt-2">
                  <Select
                    key={`state-${formData.state || "empty"}`}
                    name="state"
                    value={selectedStateOption}
                    onChange={handleSelectChange}
                    options={stateOptions}
                    placeholder={
                      formData.country
                        ? "Select State..."
                        : "Select Country first"
                    }
                    isDisabled={!formData.country}
                    isSearchable
                    isClearable
                    backspaceRemovesValue
                    styles={customSelectStyles}
                    classNamePrefix="react-select"
                  />
                </div>
                {errors.state && (
                  <p className="text-red-300 text-sm mt-1">{errors.state}</p>
                )}
              </div>

              {/* City */}
              <div>
                <label className="font-semibold text-base monser-400">
                  City <span className="text-red-300">*</span>
                </label>
                <div className="mt-2">
                  <Select
                    key={`city-${formData.city || "empty"}`}
                    name="city"
                    value={selectedCityOption}
                    onChange={handleSelectChange}
                    options={cityOptions}
                    placeholder={
                      formData.state ? "Select City..." : "Select State first"
                    }
                    isDisabled={!formData.state}
                    isSearchable
                    isClearable
                    backspaceRemovesValue
                    styles={customSelectStyles}
                    classNamePrefix="react-select"
                  />
                </div>
                {errors.city && (
                  <p className="text-red-300 text-sm mt-1">{errors.city}</p>
                )}
              </div>
            </div>

            {/* 🚀 Submit Button */}
            <div className="text-left">
              <button
                type="submit"
                className="group relative inline-flex items-center gap-2 w-fit px-6 py-2 text-lg font-medium transition-all duration-300 bg-[#A22977] text-white border-6 border-[#D8BFD8] rounded-[26.5px] hover:bg-[#ff6c01] hover:text-white"
              >
                Submit
                <div className="relative flex items-center">
                  <GoArrowDownRight className="w-5 h-5 text-current transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:rotate-12 group-hover:scale-75" />
                  <GoArrowUpRight className="w-5 h-5 text-current absolute top-0 left-0 transition-all duration-300 ease-in-out opacity-0 -rotate-12 scale-75 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100" />
                </div>
              </button>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="text-center mt-6">
                <p className="text-lg md:text-xl text-green-600 font-semibold monser-600">
                  ✓ We've received your enquiry. Our team will contact you soon!
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
