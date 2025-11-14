import React from "react";

const sectors = [
  {
    title: "Consumer Durables Companies",
    companies: [
      "Bosch",
      "LG Electronics",
      "Hitachi Home",
      "Modernize Chip",
      "Canon India",
      "Nisiki",
      "ALLDIGI",
      "Nexus DMC",
    ],
  },
  {
    title: "Banks/Financial Services Companies",
    companies: [
      "Federal Bank",
      "ICICI Bank",
      "KPMG",
      "Citi Union Bank",
      "HDFC Bank",
      "Karnataka Bank",
      "ANZ Bank",
      "Axis Bank",
      "IDB",
      "AK Capitals",
    ],
  },
  {
    title: "Diversified Conglomerates",
    companies: [
      "Tata Group",
      "Reliance Industries",
      "Aditya Birla",
      "ITC Ltd",
      "Godrej Group",
      "General Electric",
    ],
  },
  {
    title: "FMCG",
    companies: [
      "HUL, ITC Ltd",
      "Shadowfax",
      "Brickslane",
      "Infinity",
      "Karbon Card",
      "Plum",
      "UNIQLO",
    ],
  },
  {
    title: "Internet/Digital Companies",
    companies: [
      "Tata Consultancy Services",
      "Zomato",
      "Swiggy",
      "Tech Mahindra",
      "Brickslane",
      "Blinkit",
      "Bharti Airtel",
    ],
  },
  {
    title: "IT & IT Services Companies",
    companies: [
      "Capgemini",
      "Infinitalent Consulting",
      "Autodesk",
      "TECQNIO GLOBAL",
      "Rinex",
      "INSTANT IT Technology",
      "Airtel",
      "IBM",
    ],
  },
];

const RecruitersBySectors = () => {
  return (
    <section className="bg-[#E1F9F4] rounded-3xl px-6 lg:px-16 py-10 text-[#0C2165]">
      <div className="container mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#0C2165] mb-6">
          Recruiters by Sectors
        </h1>

        <div className="space-y-8">
          {sectors.map(({ title, companies }) => (
            <div key={title}>
              <h2 className="text-2xl monser-600 text-[#8A1D64]">{title}</h2>
              <ul className="list-disc list-inside text-lg text-[#000] mt-3 space-y-1">
                {companies.map((company) => (
                  <li key={company}>{company}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruitersBySectors;
