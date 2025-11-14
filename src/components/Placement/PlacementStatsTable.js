import React from "react";

const placementStats = [
  {
    year: "2025",
    averageSalary: "6.2 LPA",
    medianSalary: "5.00 LPA",
    highestSalary: "16.5 LPA",
    batchPlaced: "72%",
  },
  {
    year: "2024",
    averageSalary: "6.0 LPA",
    medianSalary: "4.00 LPA",
    highestSalary: "12.0 LPA",
    batchPlaced: "86%",
  },
];

const PlacementStatsTable = () => {
  return (
    <section className="px-6 lg:px-0 py-10 text-[#000]">
      <div className="container mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#8A1D64] mb-6">
          Placement
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full border border-[#C2C2C2] text-left text-lg">
            <thead className="bg-[#F7F7F7] text-[#000] text-center">
              <tr>
                {[
                  "Year",
                  "Average Salary",
                  "Median Salary",
                  "Highest Salary",
                  "Batch Placed",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="border border-[#C2C2C2] px-6 py-4 monser-600"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-center">
              {placementStats.map(
                (
                  {
                    year,
                    averageSalary,
                    medianSalary,
                    highestSalary,
                    batchPlaced,
                  },
                  idx
                ) => (
                  <tr key={year} className="bg-white">
                    <td className="border border-[#C2C2C2] px-6 py-4 font-semibold">
                      {year}
                    </td>
                    <td className="border border-[#C2C2C2] px-6 py-4">
                      {averageSalary}
                    </td>
                    <td className="border border-[#C2C2C2] px-6 py-4">
                      {medianSalary}
                    </td>
                    <td className="border border-[#C2C2C2] px-6 py-4">
                      {highestSalary}
                    </td>
                    <td className="border border-[#C2C2C2] px-6 py-4">
                      {batchPlaced}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PlacementStatsTable;
