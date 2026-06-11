import { useState } from "react";
import { locations } from "../data/locations";

export function SearchBar({ setSelectedLocation }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // flatten all locations
  const getAllLocations = () => {
    const all = [];

    Object.values(locations).forEach((group) => {
      Object.entries(group).forEach(([key, item]) => {
        all.push({
          key,
          ...item,
        });
      });
    });

    return all;
  };

  // handle typing
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const all = getAllLocations();

    const filtered = all.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered.slice(0, 6)); // limit results
  };

  // select suggestion
  const handleSelect = (item) => {
    setSearchTerm(item.name);
    setSuggestions([]);
    setSelectedLocation(item);
  };

  return (
    <div className="relative w-full z-9999">
      <div className="w-full bg-white rounded-4xl shadow-lg border border-slate-100 p-5 flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search mountains, rivers, cities..."
          className="flex-1 w-full px-6 py-4 rounded-2xl border border-slate-300 focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-400"
        />

        <button
          onClick={() => {
            if (suggestions.length > 0) {
              handleSelect(suggestions[0]);
            }
          }}
          className="px-8 py-4 rounded-2xl bg-red-600 text-white font-semibold hover:bg-red-700 transition"
        >
          Search
        </button>
      </div>

      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <div className="absolute z-99999 w-full bg-white mt-2 rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          {suggestions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(item)}
              className="px-5 py-3 hover:bg-red-50 cursor-pointer flex justify-between"
            >
              <span className="font-medium">{item.name}</span>
              <span className="text-xs text-slate-400">{item.type}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}