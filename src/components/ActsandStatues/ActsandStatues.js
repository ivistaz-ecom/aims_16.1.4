import Link from "next/link"
import React from "react"

const STATUTES_AND_POLICIES = [
  {
    title: "Infrastructure and Maintenance Policy",
    href: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/acts-and-statutes-moa/Infrastructure%20policy.pdf",
  },
  {
    title: "Anti-Ragging Policy",
    href: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/acts-and-statutes-moa/Antiragging%20policy.pdf",
  },
  {
    title: "Policy for Prevention of Sexual Harassment",
    href: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/acts-and-statutes-moa/Sexual%20harrassment.pdf",
  },
  {
    title: "Code of Conduct – Faculty and Staff",
    href: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/acts-and-statutes-moa/Code%20of%20Conduct%20faculty%20and%20staff.pdf",
  },
  {
    title: "Policy for Sponsorship of Faculty for Development Activities",
    href: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/acts-and-statutes-moa/Faculty%20development%20activities.pdf",
  },
  {
    title: "Students Grievance Redressal Policy",
    href: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/acts-and-statutes-moa/Student%20grievances%20and%20redressal.pdf",
  },
  {
    title: "Policy for Promotion of Equity",
    href: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/acts-and-statutes-moa/Policy%20of%20Promotion%20equity.pdf",
  },
  {
    title: "Code of Conduct – Students",
    href: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/acts-and-statutes-moa/Code%20of%20Conduct-Students.pdf",
  },
  {
    title: "Code of Ethics",
    href: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/acts-and-statutes-moa/Code%20of%20Ethics.pdf",
  },
  {
    title: "Environment & Sustainability Policy",
    href: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/acts-and-statutes-moa/Environment-and-Sustainability-Policy.pdf",
  },
  { title: "IT Policy", href: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/acts-and-statutes-moa/IT%20Policy.pdf" },
  { title: "HR Policy", href: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/acts-and-statutes-moa/HR%20Policy_merged.pdf" },
  // { title: "ER Policy", href: null },
  {
    title: "Admission Policy",
    href: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/acts-and-statutes-moa/Admission%20policy.pdf",
  },
  {
    title: "Research Policy",
    href: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/acts-and-statutes-moa/Research-Policy.pdf",
  },
  {
    title: "Library Policies and Procedures",
    href: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/acts-and-statutes-moa/Library%20Policy%20and%20Procedures.pdf",
  },
  {
    title: "Student Exit Policy",
    href: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/acts-and-statutes-moa/Student-Exit-Policy.pdf",
  },
  {
    title: "Placement Policy",
    href: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/acts-and-statutes-moa/placement-policy.pdf",
  },
  {
    title: "E-Governance Policy",
    href: "https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/acts-and-statutes-moa/e-goverance-policy.pdf",
  },
  {
    title: "IQAC",
    href: "/iqac-internal-quality-assurance-cell",
  }
]

const ActsandStatues = () => {
  return (
    <>
      <div>
        <div className="px-4 lg:px-8 bg-[#E1F9F4]">
          <div className="container mx-auto flex flex-col items-center justify-center px-4 lg:px-0">
            <div className="text-center lg:w-[80%] py-10">
              <h1 className="text-4xl font-bold text-[#0C2165]">
                Acts and Statutes
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8">
        <div className="container mx-auto flex flex-col py-10 space-y-4">
          <div>
            <h4 className="text-2xl text-bold">AIMS Statutes & Policies</h4>
            <ul className="grid gap-3 list-disc pl-5 md:grid-cols-1 md:gap-y-4 md:gap-x-8">
              {STATUTES_AND_POLICIES.map(({ title, href }) => (
                <li key={title} className="text-[18px] text-[#A22877]">
                  {href ? (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:text-[#FF7F02]"
                    >
                      {title}
                    </Link>
                  ) : (
                    <span>{title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ActsandStatues
