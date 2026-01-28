import React from "react"
import Button from "@/shared/Button"

const RightToInformation = () => {
  return (
    <>
      <div className="px-4 lg:px-8 bg-[#E1F9F4]">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 lg:px-0">
          <div className="text-center lg:w-[80%] py-14">
            <h5 className="text-5xl font-bold text-[#0C2165] lg:text-6xl playfair-300">
              RIGHT TO INFORMATION ACT (RTI)
            </h5>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-8 py-10 max-w-6xl">
        <div className="space-y-4 mx-10">
          <p className="monser-400">
            The Right to Information Act (RTI) is an Act of the Parliament of
            India "to provide for setting out the practical regime of right to
            information for citizens" and replaces the erstwhile Freedom of
            information Act, 2002. The Act applies to all States and Union
            Territories of India except Jammu & Kashmir.
          </p>
          <p className="monser-400">
            As a private unaided institution, RTI does not apply directly.
            Please route your RTI request through the affiliating university or
            regulatory authority:
          </p>
          <p className="monser-400">
            <a
              href="https://bangaloreuniversity.karnataka.gov.in/332/right-to-information-act-%28rti%29/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A22877] hover:underline break-all"
            >
              https://bangaloreuniversity.karnataka.gov.in/332/right-to-information-act-%28rti%29/en
            </a>
          </p>
          <p className="monser-400">
            For any further queries and details kindly contact: Central Public
            Information Officer
          </p>
          <p className="monser-400">
            <a
              href="mailto:cpio@theaims.ac.in"
              className="text-[#A22877] hover:underline"
            >
              cpio@theaims.ac.in
            </a>
          </p>
        </div>
      </div>

      <div className="pb-10 max-w-6xl px-4 mx-10">
        <Button
          variant="placement"
          className="w-fit cursor-pointer"
          href="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/aims-pdfs/RTI/RTI-appln-form.pdf"
          target="_blank"
        >
          Download RTI Application form here:
        </Button>
      </div>
    </>
  )
}

export default RightToInformation
