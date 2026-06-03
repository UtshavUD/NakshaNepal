import { useState } from "react";
import { locations } from "../data/locations";

export function SearchBar({ setSelectedLocation }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const result = locations[searchTerm.toLowerCase()];

    if (result) {
      setSelectedLocation(result);
    } else {
      alert("Location not found");
    }
  };

  return (
    <div className="w-full bg-white rounded-4xl shadow-lg border border-slate-100 p-5 flex flex-col md:flex-row items-center gap-4">
      <div className="flex-1 w-full">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search mountains, rivers, districts, lakes..."
          className="w-full px-6 py-4 rounded-2xl border border-slate-300 focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-400 transition-all duration-300"
        />
      </div>

      <button
        onClick={handleSearch}
        className="w-full md:w-auto px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
      >
        Search Location
      </button>
    </div>
  );
}