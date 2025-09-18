"use client";
import React, { useState } from "react";

const theme = {
  search: "w-full p-2 mb-4 rounded bg-gray-800 border border-gray-600 text-sm md:text-base",
  th: "border border-gray-600 px-2 md:px-4 py-2 bg-gray-800 text-left text-neon-green text-xs md:text-sm",
  td: "border border-gray-600 px-2 md:px-4 py-2 text-xs md:text-sm break-words",
};

interface CsvRow {
  [key: string]: string;
}

const teamsData: CsvRow[] = [
  {"Team Name": "Ravenclaw", "Leader Name": "Uday", "PS_ID": "PSA06"},
  {"Team Name": "Code Blooded", "Leader Name": "Balram Dinesh Panigrahi", "PS_ID": "PSA07"},
  {"Team Name": "Quantum Quorum", "Leader Name": "Pushkar Manoj Mhatre", "PS_ID": "PSF07"},
  {"Team Name": "Overclocked", "Leader Name": "Divyam Amit Singh", "PS_ID": "PSF07"},
  {"Team Name": "EcoCred", "Leader Name": "Vivek Ambavi Gothi", "PS_ID": "PSF07"},
  {"Team Name": "Neural Nexus", "Leader Name": "YASH SALUNKE", "PS_ID": "PSA06"},
  {"Team Name": "09-Nov", "Leader Name": "Naman Jain", "PS_ID": "PSA03"},
  {"Team Name": "The logic legends", "Leader Name": "Sana Shaikh", "PS_ID": "PSF07"},
  {"Team Name": "Heinekens", "Leader Name": "Mohd Shaikh", "PS_ID": "PSF04"},
  {"Team Name": "comet", "Leader Name": "Adarsh Singh", "PS_ID": "PSF04"},
  {"Team Name": "tripod", "Leader Name": "Sairaj Nagargoje", "PS_ID": "PSF07"},
  {"Team Name": "jedi knight", "Leader Name": "khushi Chaudhary", "PS_ID": "PSF07"},
  {"Team Name": "Pinoneer Devlopers", "Leader Name": "Mohhmamad Quasim", "PS_ID": "PSA07"},
  {"Team Name": "Team zero", "Leader Name": "Vaibhav Bura", "PS_ID": "PSA06"},
  {"Team Name": "Dotenv", "Leader Name": "Nishant Singh", "PS_ID": "PSA07"},
  {"Team Name": "Devfusion", "Leader Name": "Hitika Shirangi", "PS_ID": "PSA06"},
  {"Team Name": "Neurawecrafters", "Leader Name": "Sujal Pagare", "PS_ID": "PSA06"},
  {"Team Name": "Binary Brigade", "Leader Name": "Samyak Raka", "PS_ID": "PSA01"},
  {"Team Name": "codecrafters", "Leader Name": "Asma Sayed", "PS_ID": "PSA06"},
  {"Team Name": "Team Virelity", "Leader Name": "Deon Menezes", "PS_ID": "PSA01"},
  {"Team Name": "Tech Titans", "Leader Name": "Aditya Naresh Agare", "PS_ID": "PSF04"},
  {"Team Name": "404_not_found", "Leader Name": "Shariya Ansari", "PS_ID": "PSF01"},
  {"Team Name": "Binary Brain Cells", "Leader Name": "Devesh Kichak-", "PS_ID": "PSA07"},
  {"Team Name": "Team BrieflyAI", "Leader Name": "Satyam Yadav", "PS_ID": "PSA07"},
  {"Team Name": "AntiMatter", "Leader Name": "Sachin Yadav", "PS_ID": "PSA07"},
  {"Team Name": "IdeaStar", "Leader Name": "krish Mali", "PS_ID": "PSF06"},
  {"Team Name": "TerrorByte", "Leader Name": "Madhur Shinde", "PS_ID": "PSF03"},
  {"Team Name": "GoatedHumans", "Leader Name": "Arjun Pimpale", "PS_ID": "PSA06"},
  {"Team Name": "Team_MasterMinds", "Leader Name": "Omkar Pramod Bandikatte", "PS_ID": "PSF03"},
  {"Team Name": "T-rex", "Leader Name": "Aadish Sanghvi", "PS_ID": "PSA01"},
  {"Team Name": "WealthWise", "Leader Name": "Roshan Ajith", "PS_ID": "PSF04"},
  {"Team Name": "Team Not Found", "Leader Name": "Shubham Gala", "PS_ID": "PSF02"},
  {"Team Name": "(Null PointerZ)", "Leader Name": "Atharva Manjrekar", "PS_ID": "PSF06"},
  {"Team Name": "Chutney Coders", "Leader Name": "Shouryaa Jain", "PS_ID": "PSF07"},
  {"Team Name": "codexa", "Leader Name": "Nikita Maurya", "PS_ID": "PSF02"},
  {"Team Name": "Neural Society", "Leader Name": "Maria Kevin", "PS_ID": "PSA07"},
  {"Team Name": "ltce squad", "Leader Name": "Sunayana Yadav", "PS_ID": "PSA06"},
  {"Team Name": "Array_Yaar", "Leader Name": "Yavishtt Bhansali", "PS_ID": "PSF04"},
  {"Team Name": "Espresso Depresso.", "Leader Name": "Shreya Kushwaha", "PS_ID": "PSA07"},
  {"Team Name": "Hactivate", "Leader Name": "Ishika Anam", "PS_ID": "PSA07"},
  {"Team Name": "FinTechies", "Leader Name": "Fiza Peerkhan", "PS_ID": "PSF07"},
  {"Team Name": "Team Kittens", "Leader Name": "Utakarsh Mani Tripathi", "PS_ID": "PSA05"},
  {"Team Name": "Smart Synergy", "Leader Name": "Vedant Kolte", "PS_ID": "PSF04"},
  {"Team Name": "Catalyst", "Leader Name": "Shivani Sabat", "PS_ID": "PSA07"},
  {"Team Name": "SynapStorm", "Leader Name": "Virti Panchamia", "PS_ID": "PSA07"},
  {"Team Name": "Cookie Bytes", "Leader Name": "Tanaya Chaudhari", "PS_ID": "PSA07"},
  {"Team Name": "The Anomoly", "Leader Name": "Aaditya Jaiswar", "PS_ID": "PSF04"},
  {"Team Name": "Binary Builders", "Leader Name": "Shivam Gupta", "PS_ID": "PSA07"},
  {"Team Name": "Data Seekers", "Leader Name": "Daksh Sood", "PS_ID": "PSA07"},
  {"Team Name": "Nova-Minds", "Leader Name": "Soham Sharma", "PS_ID": "PSF07"}
];

const Results: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  if (teamsData.length === 0) {
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

  const headers = Object.keys(teamsData[0]);
  const filteredData = teamsData.filter((row) =>
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
