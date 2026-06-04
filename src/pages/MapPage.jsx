import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { NepalMap } from "../components/NepalMap";

const MapPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div>
      <SearchBar setSelectedLocation={setSelectedLocation} />
      <NepalMap selectedLocation={selectedLocation} />
    </div>
  );
};

export default MapPage;