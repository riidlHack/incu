import React, { useEffect, useState } from "react";

const theme = {
  search: "w-full p-2 mb-4 rounded bg-gray-800 border border-gray-600 text-sm md:text-base",
  th: "border border-gray-600 px-2 md:px-4 py-2 bg-gray-800 text-left text-neon-green text-xs md:text-sm",
  td: "border border-gray-600 px-2 md:px-4 py-2 text-xs md:text-sm break-words",
};

interface CsvRow {
  [key: string]: string;
}

const Results: React.FC = () => {
  const [data, setData] = useState<CsvRow[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5000/api/results")
      .then((res) => res.json())
      .then((json: CsvRow[]) => setData(json))
      .catch((err) => console.error("Error fetching CSV:", err));
  }, []);

  if (data.length === 0) {
    return (
      <div className="min-h-screen p-4 sm:p-6 md:p-8 text-white bg-gray-900 flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neon-green text-center mb-6">
          Results
        </h1>
        <p className="text-center text-gray-400 text-sm sm:text-base">
          No data available
        </p>
      </div>
    );
  }

  const headers = Object.keys(data[0]);
  const filteredData = data.filter((row) =>
    Object.values(row).some((val) =>
      val?.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 text-white bg-gray-900">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neon-green text-center mb-6">
        Results
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search results..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={theme.search}
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-600 w-full min-w-[600px] md:min-w-full">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header} className={theme.th}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, i) => (
              <tr key={i} className="hover:bg-gray-800 transition-colors">
                {headers.map((header) => (
                  <td key={header} className={theme.td}>
                    {row[header]?.startsWith("http") ? (
                      <a
                        href={row[header]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline break-all"
                      >
                        {row[header]}
                      </a>
                    ) : (
                      row[header]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;